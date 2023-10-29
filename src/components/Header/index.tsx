import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';


export default function Header() {

	return (
		<Sheet
			variant="solid"
			color="primary"
			invertedColors
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexGrow: 1,
				p: 2,
				borderRadius: { xs: 0, sm: 'sm' },
				margin: 0,
				minWidth: 'min-content',

				background: (theme) =>
					`linear-gradient(to top, ${theme.vars.palette['primary'][600]}, ${theme.vars.palette['primary'][500]})`,

			}}
		>

			<Box sx={{ flexGrow: 1, ml: 2 }}>
				<Button href="/"> Users</Button>
			</Box>


		</Sheet>
	);
}
