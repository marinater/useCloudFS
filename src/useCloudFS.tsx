import { useCloudFSController_T } from './useCloudFSTypes'


// eslint-disable-next-line @typescript-eslint/ban-types
const useCloudFS = <GenericUser_T extends {}>(useCloudFSController: useCloudFSController_T<GenericUser_T>) => {
	const controller = useCloudFSController()

	if (!controller.signedIn) {
		return { signedIn: false as const }
	}

	return { ...controller }
}

export { useCloudFS }