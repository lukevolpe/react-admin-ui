import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BedIcon from '@mui/icons-material/Bed';
import HotelIcon from '@mui/icons-material/Hotel';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { dmDispatch } = useContext(DarkModeContext);
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ user: null });
    localStorage.removeItem('user');
    navigate('/login');
    alert('You have been logged out');
  };

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
              <HotelIcon className='icon' />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to='/rooms' style={{ textDecoration: 'none' }}>
            <li>
              <BedIcon className='icon' />
              <span>Rooms</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <LogoutIcon className='icon' />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colourOption'
          onClick={() => dmDispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colourOption'
          onClick={() => dmDispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
