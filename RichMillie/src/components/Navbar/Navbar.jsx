import './Navbar.css';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	//! check if screen is mobile
	const isMobile = useMediaQuery('(max-width:600px)');

	const open = Boolean(anchorEl);
	const handleMenuClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const toggleDrawer = (open) => () => {
		setIsDrawerOpen(open);
	};
	return (
		<div className='navbar-structure'>
			<div className='navbar-buttons'>
				<h1>LOGO</h1>
				{isMobile ? (
					<div>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={toggleDrawer(true)}
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							anchor='left'
							open={isDrawerOpen}
							onClose={toggleDrawer(false)}
						>
							<div
								role='presentation'
								onClick={toggleDrawer(false)}
								onKeyDown={toggleDrawer(false)}
								style={{ width: 250 }}
							>
								<IconButton onClick={toggleDrawer(false)}>
									<CloseIcon />
								</IconButton>
								<MenuItem onClick={handleMenuClose}>Home</MenuItem>
								<MenuItem onClick={handleMenuClose}>Portfolio</MenuItem>
								<MenuItem onClick={handleMenuClose}>Contact</MenuItem>
								<MenuItem onClick={handleMenuClose}>About</MenuItem>
							</div>
						</Drawer>
					</div>
				) : (
					<div>
						<Button
							className='nav-menu-btn'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleMenuClick}
						>
							Menu
						</Button>

						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleMenuClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							<MenuItem onClick={handleMenuClose}>Home</MenuItem>
							<MenuItem onClick={handleMenuClose}>Portfolio</MenuItem>
							<MenuItem onClick={handleMenuClose}>Contact</MenuItem>
							<MenuItem onClick={handleMenuClose}>About</MenuItem>
						</Menu>
					</div>
				)}
			</div>
		</div>
	);
};
