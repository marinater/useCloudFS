import React from 'react';
import { useCloudFSTypes } from 'usecloudfs';

interface TreeViewProps_T {
	indent: number,
	data: useCloudFSTypes.fsFolder_T | null
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

export const TreeView = ({ indent, data }: TreeViewProps_T) => {
	if (!data) return <div/>

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
                        <div> 📁 {data.metadata.name} </div>
                        <FolderOptionsBar folder={data}/>
					</div>
            </div>
			{
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
				Object.values(data.folders).filter(x => !!x).map(folder => <TreeView key={folder!.metadata.name} indent={indent + 1} data={folder || null} />)
			}
		</div>
	)
}