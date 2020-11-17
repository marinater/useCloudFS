import React, { useState } from 'react';
import { useCloudFSTypes } from 'usecloudfs';

interface TreeViewProps_T {
	indent: number,
    data: useCloudFSTypes.fsFolder_T | null,
    display: boolean
}

interface FileOptionsBarProps_T {
    file: useCloudFSTypes.fsFile_T
}

interface FolderOptionsBarProps_T {
    folder: useCloudFSTypes.fsFolder_T
}

const FolderOptionsBar = ({ folder }: FolderOptionsBarProps_T) => {
    return (
        <div style={{
            width: 200,
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            padding: '0px 10px'
        }}>
            <div className='hoverable' onClick={ folder.delete }> delete </div>
            <div className='hoverable' onClick={ () => folder.getDownloadURL().then(x => console.log(x)) }> download </div>
            <div className='hoverable' onClick={ () => folder.rename(Math.random().toFixed(3).replace('.', '')) }> rename </div>
        </div>
    )
}

const FileOptionsBar = ({ file }: FileOptionsBarProps_T) => {
    return (
        <div style={{
            width: 200,
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            padding: '0px 10px'
        }}>
            <div className='hoverable' onClick={ file.delete }> delete </div>
            <div className='hoverable' onClick={ () => file.getDownloadURL().then(x => console.log(x)) }> download </div>
            <div className='hoverable' onClick={ () => file.rename(Math.random().toFixed(3).replace('.', '')) }> rename </div>
        </div>
    )
}

export const TreeView = ({ indent, data,display }: TreeViewProps_T) => {
    
    const [displayChildren,toggleDisplayChildren] = useState(true)
    if (!data || !display ) return <div/>



    const hasChildren = () => {
        let result = 0
        for (let key in data.files) {
            result +=1
        }
        for (let key in data.folders) {
            result +=1
        }
        return result > 0
    }
	return (

        
		<div style={{ paddingLeft: `${indent * 25}px`, textAlign: 'left' }}>
            <div>
                    <div key={data.metadata.path} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // paddingLeft: `${indent * 25}px`,
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                    }}>
                        <div>
                            { hasChildren() ?
                                <div>
                                    {   displayChildren  ? 
                                        
                                        <svg onClick= {()=> toggleDisplayChildren(!displayChildren)}width="0.75em" height="0.75em" viewBox="0 0 16 16" className="bi bi-file-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                            <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        :
                                        <svg onClick= {()=> toggleDisplayChildren(!displayChildren)}width="0.75em" height="0.75em" viewBox="0 0 16 16" className="bi bi-file-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                            <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                        </svg>

                                    }
                                    📁 {data.metadata.name} 
                                </div>:
                                <div style={{marginLeft:"0.75em"}} >📁 {data.metadata.name} </div>
                                
                           }  
                        </div>
                        
                        <FolderOptionsBar folder={data}/>
					</div>
            </div>
			{   displayChildren &&
				Object.values(data.files).map(file => (
                    <div key={file!.metadata.path} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: `${(indent + 1) * 25}px`,
                        textAlign: 'left',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                    }}>
                        📎 {file!.metadata.path}
                        <FileOptionsBar file={file!}/>
					</div>
				))
			}
			{
				Object.values(data.folders).filter(x => !!x).map(folder => <TreeView key={folder!.metadata.name} indent={indent + 1} data={folder || null} display={displayChildren} />)
			}
		</div>
	)
}