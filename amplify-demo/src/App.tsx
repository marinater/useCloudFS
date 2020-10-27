
import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useCloudFS, useAmplifyController } from 'usecloudfs';
import './App.css';
//import logo from './logo.svg';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import * as queries from './graphql/queries';
// import * as mutations from './graphql/mutations';
// import * as subscriptions from './graphql/subscriptions';
import { API } from 'aws-amplify';
Amplify.configure(awsconfig);


class App extends Component {

    constructor(props: any) {
        super(props);
        const x = useCloudFS(useAmplifyController);
    }
    // async function signIn() {
    //     try {
    //         const user = await Auth.signIn("test-email", "test-password");
    //     } catch (error) {
    //         console.log('error signing in', error);
    //     }
    // }

    listBuckets = async () => {
        console.log('listing buckets');
        try {
            const buckets = await API.graphql({ query: queries.listBuckets });
            alert(JSON.stringify(buckets))
        } catch (error) {
            console.log('error listing buckets', error);
        }
    };

    getBuckets = async () => {
        console.log('getting buckets');
        try {
            const buckets = await API.graphql({ query: queries.getBucket, variables: { id: '1' } });
            alert(JSON.stringify(buckets))
        } catch (error) {
            console.log('error getting buckets', error);
        }
    };

    render() {
        return (
            <div className="App">
                <AmplifySignOut />
                <p> Click a button </p>
                <button onClick={this.listBuckets}>List Buckets</button>
                <button onClick={this.getBuckets}>Get Bucket</button>
            </div>
        );
    }
}

export default withAuthenticator(App);

// function App() {
//     const x = useCloudFS

//      console.log(x)


//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                     </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                     </a>
//             </header>

//         </div>
//     );
// }


