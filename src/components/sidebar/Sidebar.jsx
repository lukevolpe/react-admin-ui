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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>FoxAdminUI</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PeopleIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/hotels' style={{ textDecoration: 'none' }}>
            <li>
              <InventoryIcon className='icon' />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to='/rooms' style={{ textDecoration: 'none' }}>
            <li>
              <InventoryIcon className='icon' />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LogoutIcon className='icon' />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colourOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colourOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
