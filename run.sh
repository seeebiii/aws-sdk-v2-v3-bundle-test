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

npm run build:es6
npm run build:es6:min
npm run build:es6:all
npm run build:es6:all:min

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

cd ..

msg "Compare the resulting file sizes:"
ls -Alh sdk-v2/build sdk-v3/build
