# useCloudFS

React hook for plug&play use of any cloud platform

## What will useCloudFS do?

The immediate advantage of using useCloudFS is that it offers platform-agnostic features for accessing cloud storage. We also decreased the time and effort it takes for users to modify their front end code when switching cloud platforms.

The main goal of our project is to offer unique storage features that existing storage APIs do not offer.

The useCloudFS features include:

1. Dynamic, Arbitrary Depth, Folder Nesting
    - Existing storage platforms do not support empty folders and serve lesser folders for nesting
    - We used a bundled database to store folder structure in a flattened format
2. Folder and File Querying
    - Folder structure is saved to the database and we offer powerful folder/file search queries
3. Folder Level Read/Write Access Control
    - Storage APIs implements read/write permissions with potential improvements in creating an intuitive read/write-protected file system
4. File Tree View with Realtime Updates
    - Creating a file tree view requires many read operations, which are more expensive with storage pricing than with database pricing
        - Since we use a database to support folder structure, we can generate these file trees at a cheaper cost in the long run
    - Storage platforms do not offer **any** way to get updates when files are added or removed, so repeating the file tree operation on an interval would normally be the only way to implement this
        - We can potentially offer the functionality for users to subscribe to changes occurring in the cloud database
