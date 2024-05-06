import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarWidth = 250;

export const sideBarItens = [
    { 
      List: [
        { Icon: PersonPinIcon, Text: "Clientes" },
        { Icon: SupportAgentIcon, Text: "Atendentes" }
      ]
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