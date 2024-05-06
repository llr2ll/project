import { styled } from '@mui/material/styles';

export const DrawerHeader = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
}))
  