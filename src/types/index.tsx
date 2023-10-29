
export interface User {
	id: number,
	name: string,
	email: string
}

export interface CreateUserDTO {
	name: string,
	email: string
}