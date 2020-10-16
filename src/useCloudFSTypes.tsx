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
	setAutoDelete: (folderName: fsPath_T, date: Date) => Promise<void>
}

interface fsFileMethods_T {
	getDownloadURL: () => Promise<string> | string
	rename: (newName: string) => Promise<void>
	delete: () => Promise<void>
}

export interface fsFileData_T {
	metadata: {
		parentFolder: string
		path: fsPath_T
		name: string
		createdOn: string
		mimeType: string
		size: number
	}
}

export type fsFile_T = fsFileData_T & fsFileMethods_T

interface fsFolderMethods_T {
    createSubFolder: (name: string) => Promise<void>
	renameFolder: (newName: string) => Promise<void>
    deleteFolder: () => Promise<void>
    uploadFile: (file: File) => Promise<void>
	downloadLink: () => Promise<string>
	setAutoDelete: (date: Date) => Promise<void>
}


export interface fsFolderData_T {
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
	files: { [key: string]: fsFileData_T | undefined }
	folders: { [key: string]: fsFolderData_T | undefined }
}

export type fsFolder_T = fsFolderData_T & fsFolderMethods_T

export type useCloudFSController_T<FSUser_T, SignInOptions_T> = (rootDir: string) => ({
    signedIn: true,
    signInOptions: SignInOptions_T,
	user: FSUser_T
	fsOps: fsOps_T
	fileTree: fsFolderData_T | null
} | {
    signedIn: false,
    signInOptions: SignInOptions_T
})
