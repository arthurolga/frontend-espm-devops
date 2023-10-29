import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from '@mui/joy';
import { User } from '../../types';

const UserTable = ({ userData }: { userData: User[] }) => {
	return (
		<Table
			borderAxis="bothBetween"
			color="neutral"
			size="md"
			stripe='odd'
			stickyFooter
			stickyHeader
		>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{userData?.length === 0 && (
					<p>No users found</p>
				)}
				{userData.map((user: User) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</Table>

	)
}

export default UserTable
