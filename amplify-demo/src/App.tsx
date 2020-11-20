
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import './App.css';
import Amplify from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//import { useCloudFS, useAmplifyController } from 'usecloudfs';

//import logo from './logo.svg';
import awsmobile from './aws-exports';
// import awsExports from "./aws-exports";
// import awsconfig from './aws-exports';
//import * as queries from './graphql/queries';
//import * as mutations from './graphql/mutations';
// import * as subscriptions from './graphql/subscriptions';
//import { API } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

import { createBrowserHistory as createHistory } from 'history'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import UploadFile from './components/UploadFile';


Amplify.configure(awsmobile);
// Amplify.configure(awsExports);

Amplify.addPluggable(new AmazonAIPredictionsProvider());

const history = createHistory();


class App extends Component {


    // constructor(props: any) {
    //     super(props);
    //     const x = useCloudFS(useAmplifyController);
    // }
    // async function signIn() {
    //     try {
    //         const user = await Auth.signIn("test-email", "test-password");
    //     } catch (error) {
    //         console.log('error signing in', error);
    //     }
    // }

    // listBuckets = async () => {
    //     console.log('listing buckets');
    //     try {
    //         const buckets = await API.graphql({ query: queries.listBuckets });
    //         alert(JSON.stringify(buckets))
    //     } catch (error) {
    //         console.log('error listing buckets', error);
    //     }
    // };

    // getBuckets = async () => {
    //     console.log('getting buckets');
    //     try {
    //         const buckets = await API.graphql({ query: queries.getBucket, variables: { id: '1' } });
    //         alert(JSON.stringify(buckets))
    //     } catch (error) {
    //         console.log('error getting buckets', error);
    //     }
    // };

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Navbar bg="primary" expand="lg" variant="dark" >
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/uploadFile">Upload File</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/uploadFile" exact component={UploadFile} />

                </Router>



                <p> Click a button </p>
                {/* <button onClick={this.listBuckets}>List Buckets</button>
                <button onClick={this.getBuckets}>Get Bucket</button> */}
                <AmplifySignOut />
            </div>

        );
    }
}

export default withAuthenticator(App);


