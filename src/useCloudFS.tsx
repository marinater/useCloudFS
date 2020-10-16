import { useCloudFSController_T } from './useCloudFSTypes'


const useCloudFS = <GenericUser_T, SignInOptions_T>(rootDir: string, useCloudFSController: useCloudFSController_T<GenericUser_T, SignInOptions_T>) => {
	const controller = useCloudFSController(rootDir)

	if (!controller.signedIn) {
		return {
			signedIn: false as const,
			signInOptions: controller.signInOptions
		}
	}

	return { ...controller }
}

export { useCloudFS }
