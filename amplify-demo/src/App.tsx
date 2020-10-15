import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { useCloudFS } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
    // const x = useCloudFS

    // console.log(x)


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>
                <AmplifySignOut />
                My App
            </div>
        </div>
    );
}

export default withAuthenticator(App);
