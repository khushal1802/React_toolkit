import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
export const adminNav = [
    {
      name: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      name: "User",
      path: "/user",
      icon: <PersonIcon />,
      exact: false,
    },
    {
        name: "Account",
        path: "/account",
        icon: <BadgeIcon />,
        exact: false,
      },
]