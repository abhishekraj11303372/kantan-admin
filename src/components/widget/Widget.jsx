import './widget.scss'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';

function Widget({ type }) {
    let data;

    const amount = 100;
    const diff = 30; 
    
    switch(type) {
        case "user": 
            data={
                title:"USERS",
                isMoney:false,
                link: "See all users",
                icon: <PersonOutlineIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
            break;
            case "order": 
            data={
                title:"ORDERS",
                isMoney:false,
                link: "View all orders",
                icon: <ShoppingCartIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,255,0,0.2)"}}/>,
            };
            break;
            case "earning": 
            data={
                title:"EARNING",
                isMoney:false,
                link: "See all earnings",
                icon: <PaidIcon className='icon' style={{color:"blue",backgroundColor:"rgba(0,0,128,0.2)"}}/>,
            };
            break;
            case "balance": 
            data={
                title:"BALANCE",
                isMoney:false,
                link: "See all balance",
                icon: <AccountBalanceWalletIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>,
            };
            break;
            default:
                break;
    }


  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ExpandLessIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget