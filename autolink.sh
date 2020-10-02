#!/bin/bash

# read -p 'Path to demo app: ' dirpath
dirpath='./demo'
echo $dirpath
yarn link

pushd $dirpath/node_modules/react
yarn link
popd

pushd $dirpath/node_modules/react-dom
yarn link
popd

if [ -d $dirpath/node_modules/firebase ]; then
    pushd $dirpath/node_modules/firebase
    yarn link
    popd
fi
if [ -d $dirpath/node_modules/reactfire ]; then
    pushd $dirpath/node_modules/reactfire
    yarn link
    popd
fi

yarn link react
yarn link react-dom
if [ -d $dirpath/node_modules/firebase ]; then
    yarn link firebase
fi
if [ -d $dirpath/node_modules/reactfire ]; then
    yarn link reactfire
fi