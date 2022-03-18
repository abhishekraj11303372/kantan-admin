import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Charts from "../../components/charts/Charts"
import TableList from "../../components/tablelist/TableList.jsx"

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className="itemImg" src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <div className="details">
                <h1 className="itemTitle">Marsh Mallow</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>  
                  <span className="itemValue">abc@marwshmallow.com</span>  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>  
                  <span className="itemValue">1234567890</span>  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>  
                  <span className="itemValue">Tokyo tower, beside CCD, H-15</span>  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>  
                  <span className="itemValue">Japan</span>  
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={150} title="User spending (last 7 months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="lastTransactions">Last Transactions</h1>
          <TableList />
        </div>
      </div>
    </div>
  )
}

export default Single