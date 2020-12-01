import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from 'reactfire';
import { useCloudFS, useFirebaseController } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';
import { TreeView } from './TreeView';
import FirebaseTester from  './Firebase-tester';

function App() {
	const cloudFS = useCloudFS('bucket2', useFirebaseController)
	const auth = useAuth()
	const inputRef = useRef<HTMLInputElement>(null)
	const [signedIn, setSignedIn] = useState(false)

	useEffect(() => {
		if (!auth.currentUser){
			console.log("login")
			auth.signInWithEmailAndPassword("test-email@gmail.com", "test-password")
		}

		auth.onAuthStateChanged(user => {
			setSignedIn(!!user)
		});

		if (cloudFS.signedIn) {
			cloudFS.fsOps.createFolder('bucket2').catch(err => console.info(err))
			    .then(
			        () => {
			            cloudFS.fsOps.createFolder('bucket2/subBucket1').catch(err => console.info(err))
			            cloudFS.fsOps.createFolder('bucket2/subBucket2').catch(err => console.info(err))
			        }
			    )

		}
	}, [])



	const uploadFile = (path: string) => {
		if (!cloudFS.signedIn || !inputRef.current?.files)
			return

		const file = inputRef.current?.files?.item(0)
		if (!file)
			return

		cloudFS.fsOps.uploadFile(path, file).catch(err => console.info(err))
	}

	return (
		<div className="App">
			<header className="App-header">
				<h2 style={{fontSize:"64px"}}><span style={{color:"#4dd0e1"}}>use</span><span style={{color:"#ffab40"}}>Cloud</span><span>FS</span></h2>
				<div style={{ width: '100%',marginBottom:"200px" }}>
				{
					cloudFS.signedIn && <div id="treeView"><TreeView indent={1} data={cloudFS.fileTree} display={true} /></div>
				}
				</div>
				<FirebaseTester cloudFS={cloudFS} auth={auth} />
			</header>
		</div>
  );
}

export default App;
