import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>FoxAdminUI</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PeopleIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL LINKS</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <LocalHospitalIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <TextSnippetIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colourOption'></div>
        <div className='colourOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;