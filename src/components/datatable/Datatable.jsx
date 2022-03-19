import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import {userColumns,rows} from '../../datatable.js'
import {Link} from "react-router-dom"

function Datatable() {

const actionColumn = [{
    field: "action",
    headerName: "Actoin",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
          </Link>
            <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];
  
  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}}  className="link">
        Add New  
        </Link>
      </div>
        <DataGrid
          rows={rows}
          columns={userColumns.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
  </div>
  )
}

export default Datatable