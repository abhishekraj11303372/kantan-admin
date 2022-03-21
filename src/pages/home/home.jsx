import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Charts from "../../components/charts/Charts"
import TableList from "../../components/tablelist/TableList.jsx"

function Home() {
  return (
    <div className="home">
      <Sidebar/> 
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts title="User spending (last 7 months)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <TableList />
        </div>
      </div>
    </div>
  )
}

export default Home