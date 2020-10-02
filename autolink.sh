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

yarn link react
yarn link react-dom

