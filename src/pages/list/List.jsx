import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from '../../components/datatable/Datatable.jsx'

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="dataGrid">
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default List
