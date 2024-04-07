export interface Permission {
	id: number
	permissionName: string
	permissionCategory: string
	permissionDescription: string
}

export type PermissionGroup = Record<Permission["permissionCategory"], Array<Permission>>