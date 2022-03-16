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

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Kantan Admin</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <li><DashboardIcon/>
            <span>Dashboard</span>
          </li>
          <li><AccountCircleIcon/><span>Users</span></li>
          <li><ReceiptIcon/><span>Orders</span></li>
          <li><InventoryIcon/><span>Product</span></li>
          <li><DeliveryDiningIcon/><span>Delivery</span></li>
          <li><QueryStatsIcon/><span>Stats</span></li>
          <li><NotificationsIcon/><span>Notifications</span></li>
          <li><HealthAndSafetyIcon/><span>System Health</span></li>
          <li><FactCheckIcon/><span>Logs</span></li>
          <li><SettingsApplicationsIcon/><span>Settings</span></li>
          <li><AccountBoxIcon/><span>Profile</span></li>
          <li><LogoutIcon/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">color options</div>  
    </div>
  )
}

export default Sidebar