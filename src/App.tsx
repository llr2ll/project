import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { DrawerHeader } from './components/library/header';
import ListItemButton from '@mui/material/ListItemButton';
import { sideBarItens, sidebarWidth } from './enviroment';
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
      <DrawerHeader>
        <Typography paragraph>Cosmos Pro</Typography>
      </DrawerHeader>

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
      
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
      </Typography>

      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
        posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
    </Main>
  </Box>
}