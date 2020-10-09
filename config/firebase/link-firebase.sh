#!/bin/bash

dirpath='./firebase-demo'

# Make the local usecloudfs available for other use
yarn link
# Add usecloudfs to the demo app
pushd $dirpath
yarn link usecloudfs
popd

# Make the demo app's react package available for use
pushd $dirpath/node_modules/react
yarn link
popd
# Add react to usecloudfs
yarn link react

# Make the demo app's react-dom package available for use
pushd $dirpath/node_modules/react-dom
yarn link
popd
# Add react-dom to usecloudfs
yarn link react-dom

# Make the demo app's firebase package available for use
pushd $dirpath/node_modules/firebase
yarn link
popd
# Add firebase to usecloudfs
yarn link firebase

# Make the demo app's reactfire package available for use
pushd $dirpath/node_modules/reactfire
yarn link
popd
# Add reactfire to usecloudfs
yarn link reactfire

