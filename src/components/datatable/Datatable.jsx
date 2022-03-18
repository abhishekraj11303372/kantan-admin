import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import {userColumns,rows} from '../../datatable.js'

function Datatable() {
  return (
    <div className='datatable'>
        <DataGrid
          rows={rows}
          columns={userColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
  </div>
  )
}

export default Datatable