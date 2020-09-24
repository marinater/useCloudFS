#!/bin/bash

# read -p 'Path to demo app: ' dirpath
$dirpath = './demo'

yarn link

pushd $dirpath/node_modules/react
yarn link
popd

pushd $dirpath/node_modules/react-dom
yarn link
popd

pushd $dirpath/node_modules/firebase
yarn link
popd

pushd $dirpath/node_modules/reactfire
yarn link
popd

pushd $dirpath
yarn link usecloudfs
popd

yarn link react
yarn link react-dom
yarn link firebase
yarn link reactfire
