import { CreateUserDTO } from "../../types";
import { api } from "../api";



export const getUsers = async () => {
	const response = await api.get('users')
	return response.data
}

export const createUser = async (user: CreateUserDTO) => {
	const response = await api.post('users?name=' + user.name + '&email=' + user.email)
	return response.data
}