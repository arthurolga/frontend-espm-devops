import { useState } from 'react';
import { Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack } from '@mui/joy';
import { CreateUserDTO } from '../../types';

interface AddUserModalProps {
	handleAddUser: (user: CreateUserDTO) => void;
	isOpen: boolean;
	onClose: any;
}

function AddUserModal({ handleAddUser, isOpen, onClose }: AddUserModalProps) {


	const [newUserData, setNewUserData] = useState({
		name: '',
		email: '',
	});



	return (
		<>

			<Modal open={isOpen} onClose={() => onClose()} title="Add User">
				<ModalDialog>
					<DialogTitle>Create new user</DialogTitle>
					<DialogContent>Fill in the information of the new user</DialogContent>
					<form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						handleAddUser(newUserData);
					}}>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									type="text"
									required
									value={newUserData.name}
									onChange={(event: any) => setNewUserData({ ...newUserData, name: event.target.value })}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									type="text"
									required
									value={newUserData.email}
									onChange={(event: any) => setNewUserData({ ...newUserData, email: event.target.value })}
								/>
							</FormControl>
							<Button type="submit">Submit</Button>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</>
	);
}

export default AddUserModal;