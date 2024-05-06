import { appRoutes, sideBarItens, sidebarWidth } from './enviroment';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DrawerHeader } from './components/library/header';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar } from './components/library/navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Main } from './components/library/main';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import * as React from 'react';

export function App() {
  const drawerStyle = { '& .MuiDrawer-paper': { width: sidebarWidth, boxSizing: 'border-box' }, width: sidebarWidth, flexShrink: 0 }
  const [ open, setOpen ] = React.useState(false)
  
  function toggleDrawer(){ setOpen(prev => !prev) }

  return <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        <Typography variant="h6" noWrap component="div">Home</Typography>

        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
    
    <Drawer sx={drawerStyle} variant="persistent" open={open}>
      <DrawerHeader>Cosmos Pro</DrawerHeader>

      <Divider />
      
      {sideBarItens.map((item, index) => <>
        <List style={item.Style}>
          {item.List.map(listItem =>
            <ListItem key={listItem.Text} disablePadding>
              <ListItemButton>
                <ListItemIcon><listItem.Icon /></ListItemIcon>
                <ListItemText primary={listItem.Text} />
              </ListItemButton>
            </ListItem>
          )}
        </List>

        {index !== sideBarItens.length - 2 && <Divider />}
      </>)}
    </Drawer>
    
    <Main open={open}>
      <DrawerHeader />
      
      <Routes>
        {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Main>
  </Box>
}