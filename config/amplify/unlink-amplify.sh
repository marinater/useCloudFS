#!/bin/bash

# read -p 'Path to demo app: ' dirpath
dirpath='./amplify-demo'

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

yarn unlink aws-amplify
# Make local aws-amplify unavailable for use
pushd $dirpath/node_modules/aws-amplify
yarn unlink
popd

# Remove usecloudfs's use of @aws-amplify/ui-react
yarn unlink @aws-amplify/ui-react
# Make local @aws-amplify/ui-react unavailable for use
pushd $dirpath/node_modules/@aws-amplify/ui-react
yarn unlink
popd
