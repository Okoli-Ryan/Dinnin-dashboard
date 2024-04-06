export interface Permission {
	id: number
	permissionName: string
	permissionCategory: string
	permissionDescription: string
}

export type GetPermissionResponse = Record<Permission["permissionCategory"], Permission>