import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Kantan Admin</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
            <li><AccountCircleIcon className="icon"/><span>Users</span></li>
          </Link>
          <li><ReceiptIcon className="icon"/><span>Orders</span></li>
          <Link to="/products" style={{textDecoration:"none"}}>
            <li><InventoryIcon className="icon"/><span>Product</span></li>
          </Link>
          <li><DeliveryDiningIcon className="icon"/><span>Delivery</span></li>
          <p className="title">USEFUL LINKS</p>
          <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
          <li><NotificationsIcon className="icon"/><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
          <li><FactCheckIcon className="icon"/><span>Logs</span></li>
          <li><SettingsApplicationsIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
          <li><LogoutIcon className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-options"></div>  
        <div className="color-options"></div>  
        <div className="color-options"></div>  
      </div>  
    </div>
  )
}

export default Sidebar