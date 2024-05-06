import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { withNavigationWatcher } from './contexts/navigation';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { Attendant } from './pages';

export const sidebarWidth = 250;

export const sideBarItens = [
  { 
    List: [
      { Icon: PersonPinIcon, Text: "Clientes", path: '/client' },
      { Icon: SupportAgentIcon, Text: "Atendentes", path: '/attendant' }
    ],
  },
  { 
    List: [
      { Icon: SettingsIcon, Text: "Configurações" },
      { Icon: PeopleOutlineIcon, Text: "Contas" }
    ]
  },
  { 
    List: [{ Icon: ExitToAppIcon, Text: "Sair" }],
    Style: { marginTop: 'auto' }
  }
]
const routes = [
  { path: '/attendant', element: Attendant },
  { path: '/client', element: Attendant }
]

export const appRoutes = routes.map(route => { return { ...route, element: withNavigationWatcher(route.element, route.path) } })