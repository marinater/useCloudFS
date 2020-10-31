import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    "apiKey": "AIzaSyCAZgOuymD-HBtQt8mtNKgdXicoDYcqM4w",
    "authDomain": "use-storage.firebaseapp.com",
    "databaseURL": "https://use-storage.firebaseio.com",
    "projectId": "use-storage",
    "storageBucket": "use-storage.appspot.com",
    "messagingSenderId": "573419518646",
    "appId": "1:573419518646:web:c0e79cb76a2617a2b20417"
}

ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Suspense fallback={''}>
                <App />
            </Suspense>
        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
