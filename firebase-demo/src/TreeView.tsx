import React, { useState,useEffect,useRef  } from 'react';
import { useCloudFSTypes } from 'usecloudfs';

interface TreeViewProps_T {
	indent: number,
    data: useCloudFSTypes.fsFolder_T | null,
    display: boolean
}

interface FileOptionsBarProps_T {
    file: useCloudFSTypes.fsFile_T,
    renameVal:boolean,
    renameSet:(active: boolean) => void

}

interface FileComponentProps_T {
    file: useCloudFSTypes.fsFile_T,
    indent: number

}

interface FolderOptionsBarProps_T {
    folder: useCloudFSTypes.fsFolder_T,
    uploading:boolean,
    toggleUploading: any
}

interface FileUploaderProps_T {

    indent:number,
    folder: useCloudFSTypes.fsFolder_T,
    uploading:boolean,
    toggleUploading: any


}

const FileUploader = ({indent, folder, uploading,toggleUploading}: FileUploaderProps_T) => {


    const [file,changeFile] = useState(new File([], ''));

    const uploader = ()=> {

        if( file !== undefined && file.name != ""){
            folder.uploadFile(file)
            toggleUploading(!uploading)
        }

    }
    return (
        <div style={{ paddingLeft: `${(indent+1) * 25}px`, textAlign: 'left' }}>
            <label htmlFor="newUpload">Upload:</label>
            <input onChange={e=>e.target.files ? changeFile(e.target.files[0]) : null } type="file" id="newUpload" name="newUpload"></input>
            <svg onClick={()=>uploader()} width="0.75em" height="0.75em" viewBox="0 0 16 16" className="bi bi-upload" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
        </div>
    )
}

const FolderOptionsBar = ({ folder,uploading,toggleUploading }: FolderOptionsBarProps_T) => {
    const [download,toggleDownload] = useState(false)
    const [downloadlink,toggleDownloadlink] = useState("")

    const downloader = () => {
        toggleDownload(true);
        folder.getDownloadURL().then(x =>  {
            console.log(x)
            toggleDownloadlink(x)
        })

    }

    return (



        <div style={{
            width: 180,
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            padding: '0px 10px'
        }}>
  
            <svg onClick={()=>toggleUploading(!uploading) } width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
            </svg>
            <svg onClick={ folder.delete } width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-folder-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"/>
                <path fill-rule="evenodd" d="M11.146 10.146a.5.5 0 0 1 .708 0L13 11.293l1.146-1.147a.5.5 0 0 1 .708.708L13.707 12l1.147 1.146a.5.5 0 0 1-.708.708L13 12.707l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 12l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
            </svg>
        
            <svg onClick={ () => downloader() } width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-cloud-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
            </svg>

            <svg onClick={ () => folder.rename(Math.random().toFixed(3).replace('.', '')) } width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        
        </div>
    )
}



const FileOptionsBar = ({ file,renameVal,renameSet}: FileOptionsBarProps_T ) => {
    const [download,toggleDownload] = useState(false)
    const [downloadlink,toggleDownloadlink] = useState("")
    const linkRef = useRef(null);

    const downloader = () => {
        
        file.getDownloadURL().then(x =>  {
            console.log(x)
            toggleDownloadlink(x)
        }).then( ()=> toggleDownload(true) )


    }
    useEffect(() => {

        if(download){
            linkRef.current.click()
            toggleDownload(false);
        }

    })
    //file.rename(Math.random().toFixed(3).replace('.', ''))}
    return (
        <div style={{
            width: 125,
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            padding: '0px 10px'
            
        }}>
            { download &&
                <a ref={linkRef} target="_blank" href={downloadlink} download></a>
            }

            <svg onClick={ file.delete } width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-cloud-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
            </svg>
          
            <svg onClick={ () => downloader() } width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-cloud-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
            </svg>

            <svg onClick={ () => {renameSet(!renameVal)} } width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        
        </div>
    )
}

const FileComponent = ({ file,indent}: FileComponentProps_T ) => {


    const [renaming,toggleRenaming] = useState(false)
    const [newName,toggleName] = useState("")

    const submit = (e:any) => {
        if(e.key === "Enter"){
            file.rename(newName.replace('.', '*')).then( ()=>
                toggleRenaming(!renaming)
            )
        }
    }

    return (

        <div >
        {renaming ?
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: `${(indent + 1) * 25}px`,
                textAlign: 'left',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
            }}
            > 
                <div>
                    📎 <input type="text" id="rename" name="rename" value={newName}
                            onKeyUp={e => submit(e) }
                            onChange={e=> toggleName(e.target.value)}>
                            </input>
                    
                </div> 
                <FileOptionsBar file={file!} renameVal={renaming} renameSet={toggleRenaming}/>
            </div>:
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: `${(indent + 1) * 25}px`,
                textAlign: 'left',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
            }}>
            📎 {file!.metadata.path} <FileOptionsBar file={file!} renameVal={renaming} renameSet={toggleRenaming}/>
             </div>
            

        
        }
            
            
    
            
        </div>

    )



}

export const TreeView = ({ indent, data,display }: TreeViewProps_T) => {
    
    const [displayChildren,toggleDisplayChildren] = useState(true)

    const [uploading,toggleUploading] = useState(false)

    
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
                        whiteSpace: 'nowrap',
                        paddingTop:'10px',
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
                        
                        <FolderOptionsBar folder={data} uploading={uploading} toggleUploading={toggleUploading} />
					</div>
            </div>

            { uploading &&
                <FileUploader indent={indent} folder={data} uploading={uploading} toggleUploading={toggleUploading} />
            
            }
			{   displayChildren &&
				Object.values(data.files).map(file => (
                    <div key={file!.metadata.path} >
                       <FileComponent file={file!} indent={indent} />
					</div>
				))
			}
			{
				Object.values(data.folders).filter(x => !!x).map(folder => <TreeView key={folder!.metadata.name} indent={indent + 1} data={folder || null} display={displayChildren} />)
			}
		</div>
	)
}