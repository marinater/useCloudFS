import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from 'reactfire';
import { useCloudFS, useFirebaseController } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';
import { TreeView } from './TreeView';

function App() {
	const cloudFS = useCloudFS('bucket2', useFirebaseController)
	const auth = useAuth()
	const inputRef = useRef<HTMLInputElement>(null)
	const [signedIn, setSignedIn] = useState(false)

	useEffect(() => {
		if (!auth.currentUser)
			auth.signInWithEmailAndPassword("test-email@gmail.com", "test-password")

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
			// cloudFS.fsOps.renameFolder('bucket1','bucket1').catch(err => console.info(err))
			// cloudFS.fsOps.deleteFolder('bucket2').catch( err => console.info(err) )
		//    // cloudFS.fsOps.setAutoDelete('bucket1', new Date()).catch( err => console.info(err) )
			// cloudFS.fsOps.uploadFile('bucket1', new File([], 'test-upload2.txt')).catch(err => console.info(err) )
			// cloudFS.fsOps.renameFile('bucket1/Team Deliverable (1).pdf','bucket1/TeamDeliverable1.pdf').catch(err => console.info(err) )
			// cloudFS.fsOps.getDownloadURL('bucket1/TeamDeliverable1.pdf').catch(err => console.info(err)).then(url => console.log(url))
			// cloudFS.fsOps.deleteFile('bucket1/Team Deliverable1.pdf').catch(err => console.info(err) )
		}
	}, [cloudFS.signedIn])

	if (cloudFS.signedIn)
		console.log(cloudFS.fileTree)

	const uploadFile = () => {
		if (!cloudFS.signedIn || !inputRef.current?.files)
			return

		const file = inputRef.current?.files?.item(0)
		if (!file)
			return

		cloudFS.fsOps.uploadFile('bucket2/subBucket2', file).catch(err => console.info(err))
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input ref={inputRef} type='file' onChange={uploadFile} />
				<div style={{ width: '100%' }}>
				{
					cloudFS.signedIn && <TreeView indent={1} data={cloudFS.fileTree} />
				}
				</div>
				<FirebaseTester cloudFS={cloudFS}/>
			</header>
		</div>
  );
}

export default App;
