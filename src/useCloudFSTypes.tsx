export type fsUserID_T = string
export type fsPath_T = string

export interface fsOps_T {
	createFolder: (folderName: fsPath_T) => Promise<void>
	renameFolder: (oldName: fsPath_T, newName: fsPath_T) => Promise<void>
	deleteFolder: (folderName: fsPath_T) => Promise<void>
	uploadFile: (folderName: fsPath_T, file: File) => Promise<void>
	renameFile: (oldName: fsPath_T, newName: fsPath_T) => Promise<void>
	deleteFile: (fileName: fsPath_T) => Promise<void>
	getDownloadURL: (fileName: fsPath_T) => Promise<string>
	setAutoDelete: (folderName: fsPath_T) => Promise<void>
}

export interface fsFile_T {
	metadata: {
		parentFolder: fsFolder_T
		path: fsPath_T
		name: string
		createdOn: string
		mimeType: string
		size: number
	},
	downloadLink: () => Promise<string> | string
	rename: () => Promise<void>
	delete: () => Promise<void>
}

export interface fsFolder_T {
	metadata: {
		parentFolder: fsFolder_T | null
		path: fsPath_T
		name: string
		createdOn: Date
		owner: fsUserID_T
		autoDelete: Date | null
	},
	permissions: {
		read: fsUserID_T[]
		write: fsUserID_T[]
	},
	files: { [key: string]: fsFile_T }
	folders: { [key: string]: fsFolder_T }

	createSubFolder: () => Promise<void>
	renameFolder: () => Promise<void>
	deleteFolder: () => Promise<void>
	downloadLink: () => Promise<string>
	setAutoDelete: () => Promise<void>
}

export type useCloudFSController_T<FSUser_T> = () => ({
	signedIn: true
	user: FSUser_T
	fsOps: fsOps_T
} | {
	signedIn: false
})
