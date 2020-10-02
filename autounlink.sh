#!/bin/bash

# read -p 'Path to demo app: ' dirpath
dirpath='./demo'

pushd $dirpath
yarn unlink usecloudfs
popd

yarn unlink react
yarn unlink react-dom
yarn unlink

if [ -d $dirpath/node_modules/firebase ]; then
    pushd $dirpath/node_modules/firebase
    yarn unlink
    popd
fi
if [ -d $dirpath/node_modules/reactfire ]; then
    pushd $dirpath/node_modules/reactfire
    yarn unlink
    popd
fi