const console = require('Diagnostics');
const Instruction = require('Instruction');
const CameraInfo = require('CameraInfo');
const Scene = require('Scene');
const Time = require('Time');

import CannonHelper from 'spark-ar-physics';

(async () => {
  const fd = await Scene.root.findFirst('Focal Distance');
  const planeTracker = await Scene.root.findFirst('planeTracker0');

  // show switch camera instructions on front camera
  Instruction.bind(CameraInfo.captureDevicePosition.eq(CameraInfo.CameraPosition.FRONT), 'flip_camera');

  const floorPlane = await planeTracker.findFirst('plane0');
  const cube0 = await planeTracker.findFirst('Cube0');
  const sphere0 = await planeTracker.findFirst('Sphere0');
  const cube1 = await planeTracker.findFirst('Cube1');
  const sphere1 = await planeTracker.findFirst('Sphere1');
  const cube2 = await planeTracker.findFirst('Cube2');
  const sphere2 = await planeTracker.findFirst('Sphere2');

  const floor = CannonHelper.makeFloor();

  // create the world objects
  // world objects contain a scenObject and a physicsObject
  const worldObjects = [
    { sceneObject: floorPlane, physicsObject: floor },
    {
      sceneObject: cube0,
      physicsObject: CannonHelper.makeBox({ x: 5, y: 5, z: 5 }, { x: 0, y: 40, z: 0 }, { x: 0.2, y: 0.8, z: 0, w: 0 })
    },
    {
      sceneObject: cube1,
      physicsObject: CannonHelper.makeBox({ x: 5, y: 5, z: 5 }, { x: 10, y: 40, z: 0 }, { x: 0.6, y: 0.2, z: 0, w: 0 })
    },
    {
      sceneObject: cube2,
      physicsObject: CannonHelper.makeBox({ x: 5, y: 5, z: 5 }, { x: 0, y: 30, z: 10 }, { x: 0.1, y: 0.2, z: 0.5, w: 0 })
    },
    {
      sceneObject: sphere0,
      physicsObject: CannonHelper.makeSphere({ x: 5 }, { x: 0, y: 30, z: 0 }, { x: 0.2, y: 0.5, z: 0, w: 0 })
    },
    {
      sceneObject: sphere1,
      physicsObject: CannonHelper.makeSphere({ x: 5 }, { x: 15, y: 60, z: 0 }, { x: 0.2, y: 0.5, z: 0, w: 0 })
    },
    {
      sceneObject: sphere2,
      physicsObject: CannonHelper.makeSphere({ x: 5 }, { x: 0, y: 50, z: 10 }, { x: 0.2, y: 0.5, z: 0, w: 0 })
    }
  ];

  // init the cannon world with the worldObjects
  const cannon = new CannonHelper(worldObjects);

  const loopTimeMs = 30;
  let lastTime;
  Time.setInterval(
    function interval(elapsedTime) {
      if (lastTime !== undefined) {
        // get the time since the last update
        let deltaTime = (elapsedTime - lastTime) / 1000;

        // update the internal cannon world
        cannon.update(deltaTime);
      }

      lastTime = elapsedTime;
    },
    loopTimeMs,
  );
})().catch((e) => console.error(e));
