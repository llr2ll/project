import { sidebarWidth } from '../../enviroment';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

export const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop !== 'open' })
<{ open?: boolean }>(
    ({ theme, open }) => (
        {
            transition: theme.transitions.create(
                ['margin', 'width'], 
                {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }
            ),
            ...(
                open && {
                    transition: theme.transitions.create(
                        ['margin', 'width'], 
                        {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.enteringScreen,
                        }
                    ),
                    width: `calc(100% - ${sidebarWidth}px)`,
                    marginLeft: `${sidebarWidth}px`
            })
        }
    )
);