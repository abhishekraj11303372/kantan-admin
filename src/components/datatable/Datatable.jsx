import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import {userColumns,rows} from '../../datatable.js'

function Datatable() {

const actionColumn = [{
    field: "action",
    headerName: "Actoin",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];
  
  return (
    <div className='datatable'>
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