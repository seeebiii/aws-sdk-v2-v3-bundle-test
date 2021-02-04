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
npm run build
npm run build:min
npm run build:all
npm run build:all:min

cd ..

msg "Build AWS SDK v3 files..."
cd sdk-v3

npm run clean
npm run build
npm run build:min
npm run build:all
npm run build:all:min

cd ..

msg "Compare the resulting file sizes:"
ls -Alh sdk-v2/build sdk-v3/build
