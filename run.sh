#!/bin/sh

function msg() {
    echo "########################################################"
    echo $1
    echo "########################################################"
    echo ""
}

msg "Build AWS SDK v2 files..."
cd sdk-v2

npm run clean
npm install

npm run build
npm run build:min
npm run build:all
npm run build:all:min

npm run build2
npm run build2:min
npm run build2:all
npm run build2:all:min

npm run build:es6
npm run build:es6:min
npm run build:es6:all
npm run build:es6:all:min

npm run build:webpack
npm run build:webpack:min
npm run build:webpack:all
npm run build:webpack:all:min

npm run build2:webpack
npm run build2:webpack:min
npm run build2:webpack:all
npm run build2:webpack:all:min

npm run build:webpack:es6
npm run build:webpack:es6:min
npm run build:webpack:es6:all
npm run build:webpack:es6:all:min

cd ..

msg "Build AWS SDK v3 files..."
cd sdk-v3

npm run clean
npm install

npm run build
npm run build:min
npm run build:all
npm run build:all:min

npm run build:send
npm run build:send:min
npm run build:send:all
npm run build:send:all:min

npm run build:webpack
npm run build:webpack:min
npm run build:webpack:all
npm run build:webpack:all:min

npm run build:webpack:send
npm run build:webpack:send:min
npm run build:webpack:send:all
npm run build:webpack:send:all:min

cd ..

msg "Compare the resulting file sizes:"
ls -Alh sdk-v2/build/esbuild sdk-v2/build/webpack sdk-v3/build/esbuild sdk-v3/build/webpack
