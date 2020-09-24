#!/bin/bash

# read -p 'Path to demo app: ' dirpath
$dirpath = './demo'

pushd $dirpath
yarn unlink usecloudfs
popd

yarn unlink react
yarn unlink react-dom
yarn unlink firebase
yarn unlink reactfire
yarn unlink

pushd $dirpath/node_modules/react
yarn unlink
popd

pushd $dirpath/node_modules/react-dom
yarn unlink
popd

pushd $dirpath/node_modules/firebase
yarn unlink
popd

pushd $dirpath/node_modules/reactfire
yarn unlink
popd
