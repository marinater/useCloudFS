#!/bin/bash

dirpath='./amplify-demo'

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
pushd $dirpath/node_modules/aws-amplify
yarn link
popd
# Add firebase to usecloudfs
yarn link aws-amplify

# Make the demo app's reactfire package available for use
pushd $dirpath/node_modules/@aws-amplify/ui-react
yarn link
popd
# Add reactfire to usecloudfs
yarn link @aws-amplify/ui-react
