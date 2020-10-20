Hello! We are proud to introduce useCloudFS, a React.js hook that will allow developers to add any cloud platform to their app in one line. Our team intends to publish a final version of the useCloudFS hook to NPM by the end of the semester. We have established our goals to fit this timeline.

## Problem Statement

There are various cloud platforms available to web developers and they all offer the same core set of functionality.

Some example features that cloud platforms offer:

- Storage
- Database
- Authentication
- Hosting

Unfortunately, each platform has its own set of APIs, which causes developers to unnecessarily tie themselves to their cloud provider.

## What will useCloudFS do?

The immediate advantage of using useCloudFS is that it will offer platform-agnostic features for accessing cloud storage. We also decreased the time and effort it takes for users to modify their front end code when switching cloud platforms.

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

## Sub Projects

| Sub Project    | Details                                                      |
| -------------- | ------------------------------------------------------------ |
| Security Rules | Work related to writing security configurations for each cloud platform |
| Features       | Work related to the client-side React code                   |
| Examples       | Work related to showcasing our hook in use                   |
| Publishing     | Work related to packaging our project for NPM                |

## Milestones

| Date  | Milestone              | Details                                                      |
| ----- | ---------------------- | ------------------------------------------------------------ |
| 09/22 | Project Proposal       | Finalize members, goals, and timeline                        |
| 09/22 | Repository Structuring | Create first push that contains all the boilerplate folder structure, testing framework, and configure GitHub CI/CD testing<br />Also create starter Issues, Milestones, Labels, and organize Issues into Projects |
| 10/09 | Storage Rules          | Write configurations for Firebase and Amplify that enforce folder level read/write access control<br />Configurations should be efficient, yet portable so they can easily be added to projects |
| 10/09 | Controller Interfaces  | Implement the same basic operations for the Firebase and Amplify controllers. These controllers provide a uniform interface the useCloudFS hook can use to talk to a generic cloud platform |
| 10/23 | Security Rule Testing  | Create automated tests to ensure our security configurations correctly enforce the expected read / write access behavior |
| 10/23 | useCloudFS Hook        | Implement the useCloudFS hook by using operations provided by a generic controller interface |
| 11/17 | Demos                  | Create a demo site showcasing our work as well as make a plug and play file explorer component that can be used as an out of the box Storage UI component |
| 12/01 | Publishing             | Package the project as an NPM module, automate NPM releases, automate demo hosting, and write thorough documentation and usage guides |



## Team Management

We will be using GitHub extensively for our project management

| Github Feature | Purpose                                                      |
| -------------- | ------------------------------------------------------------ |
| Actions        | Automate testing and enforce code conventions on all pushes  |
| Issues         | Issues represent atomic units of work that need to be done. They are atomic in the sense that they will be hard for multiple people to work on the same issue at the same time and in the sense that an issue as a whole offers a discrete increase in functionality whereas a partially completed issue does not offer much at all |
| Labels         | All issues are labeled to give a sense of what technologies the issue deals with. This will help members find Issues based on what they are familiar with or what they want to learn |
| Milestones     | While atomic, there is fact a relative order some issues should be completed in. Milestones helps us track which Issues are interdependent, as well as give an overall deadline for these Issue groups |
| Projects       | Projects gives us a similar view as Milestones, but in a more detailed grid view where we can see the precise status (completed, reviewed, etc.) of each issue |

## Contributors

* Daniel F.
* Molly L.
* Omar C.
* **Samarth P.**
