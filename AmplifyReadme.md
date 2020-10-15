# GraphQL

- First rule defines creator, they are able to read, edit, and delete
- Second rule defines all users in `editors` field
    - they have permission to view and update
- Third rule defines a group in the `readers` field that is allowed to view

# Files edited when uploading schema

schema.json
aws-export.js
mutations.js
queries.js
subscriptions.js

# Test Queries

- run command amplify mock api

# Requires Debugging
- yarn test

aws-amplify-react

noUnusedLocals": false in tsconfig