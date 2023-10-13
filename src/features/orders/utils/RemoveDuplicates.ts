export function removeDuplicates<T extends { id: string }>(array: T[]): T[] {
	const uniqueArray: { [id: string]: T } = {};

	for (const obj of array) {
		if (!uniqueArray[obj.id]) {
			uniqueArray[obj.id] = obj;
		}
	}

	return Object.values(uniqueArray);
}
