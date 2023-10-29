import { useEffect, useState } from 'react'
import './App.css'
import { Button, Card, DialogContent, DialogTitle, FormControl, FormLabel, Modal, Input, ModalDialog, Sheet, Stack, Table } from '@mui/joy'

import Header from './components/Header'
import { CreateUserDTO, User } from './types'
import { createUser, getUsers } from './api/users'
import UserTable from './components/UserTable'
import AddUserModal from './components/AddUserModal'




function App() {

	const [addUserModalOpen, setAddUserModalOpen] = useState(false)

	const fetchUserData = async () => {
		const data = await getUsers()
		setUserData(data)

	}


	const addUser = async (user: CreateUserDTO) => {
		const response = await createUser(user)

		await fetchUserData()
		setAddUserModalOpen(false)
	}


	const [userData, setUserData] = useState<User[]>([])


	useEffect(() => {
		fetchUserData()
	}, [])


	const [newUserData, setNewUserData] = useState({
		name: '',
		email: ''
	})

	return (
		<>
			<Header />
			<div className='page'>
				<div className='pageHeader'>
					<h2>Users</h2>
					<Button style={{
						marginBottom: '1rem'
					}} onClick={() => setAddUserModalOpen(true)}>+ Add User</Button>
				</div>
				<Card>
					<UserTable userData={userData} />
				</Card>
				<AddUserModal handleAddUser={addUser} isOpen={addUserModalOpen} onClose={() => setAddUserModalOpen(false)} />
				{/* <Modal
					open={addUserModalOpen}
					onClose={() => setAddUserModalOpen(false)}
					title="Add User"
				>
					<ModalDialog>
						<DialogTitle>Create new user</DialogTitle>
						<DialogContent>Fill in the information of the new user</DialogContent>
						<form
							onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
								event.preventDefault();
								addUser(newUserData);
							}}
						>
							<Stack spacing={2}>
								<FormControl>
									<FormLabel>Name</FormLabel>
									<Input type="text" required onChange={(event: any) => setNewUserData({ ...newUserData, name: event.target.value })} />
								</FormControl>
								<FormControl>
									<FormLabel>Email</FormLabel>
									<Input type="text" required onChange={(event: any) => setNewUserData({ ...newUserData, email: event.target.value })} />
								</FormControl>
								<Button type="submit">Submit</Button>
							</Stack>
						</form>
					</ModalDialog> */}




			</div >
		</>
	)
}

export default App
