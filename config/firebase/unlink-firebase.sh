#!/bin/bash

# read -p 'Path to demo app: ' dirpath
dirpath='./firebase-demo'

# Remove usecloudfs from demo app
pushd $dirpath
yarn unlink usecloudfs
popd
# Make the local usecloudfs package unavailable for use
yarn unlink

# Remove usecloudfs's use of react
yarn unlink react
# Make local react unavailable for use
pushd $dirpath/node_modules/react
yarn unlink
popd

# Remove usecloudfs's use of react-dom
yarn unlink react-dom
# Make local react-dom unavailable for use
pushd $dirpath/node_modules/react-dom
yarn unlink
popd

yarn unlink firebase
# Make local firebase unavailable for use
pushd $dirpath/node_modules/firebase
yarn unlink
popd

# Remove usecloudfs's use of reactfire
yarn unlink reactfire
# Make local reactfire unavailable for use
pushd $dirpath/node_modules/reactfire
yarn unlink
popd
