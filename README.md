# spark-ar-physics

Credit to [ashley fletcher](https://github.com/ashleymarkfletcher/spark-ar-physics) for the bones that needed a few updates.

This repository is a Spark AR example project. Use it as a reference for using
Cannon in Spark AR or as a starting point for a new AR project with physics.

## Get started

### Install node

I used v14.8.0 when working on this, but I'm guessing this will work with
anything v10+.

Instructions [here](https://nodejs.org/en/download/)

### Clone this repository

```
git clone https://github.com/micburks/spark-ar-physics.git
cd spark-ar-physics
```

Note: If you don't have `git` installed, you may need to run something like

```
sudo xcode-select --install
```

### Install dependencies

Install node dependencies via npm (node package manager)

```
npm install
```

### Open project in Spark


File -> Open -> (Find `spark-ar-physics/physicsTest/physicsTest.arproj`)

### Make changes

Edit `src/index.js` with your editor of choice

### Run build to update the script

The build script uses webpack to bundle your code and output the 
`physicsTest/scripts/script.js` file. Spark will reload this file
automatically when changed.

```
npm run build
```

Alternatively, run the following command to watch the `src/index.js` file,
rebuilding whenever there are changes:

```
npm run build -- --watch
```

## Find other spark resources

[awesome-spark-ar](https://github.com/Spark-AR-Community/awesome-spark-ar)
