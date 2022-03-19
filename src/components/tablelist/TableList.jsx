import './tablelist.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Photo from '../../profile.jpg'

function createData(trackingid, product, customer, amount, payment, date, status) {
  return { trackingid, product, customer, amount, payment, date, status };
}

function TableList() {

    const rows = [
        createData(123124, "Asus", "Raj", 24, "cash on delivery","2/2/2022","approved"),
        createData(152437, "Compaq", "Zenitsu", 4.3,"cash on delivery","2/2/2022","pending"),
        createData(378463, "MI", "Kaneki", 24, "cash on delivery","2/2/2022","approved"),
        createData(128743, "Lenovo", "Vinod", 67,"cash on delivery", "2/2/2022","pending"),
        createData(467831, "HCL", "Abhishek", 49, "cash on delivery","2/2/2022","pending"),
      ];

  return (
    <div className='table'>
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='tableCell'>
                {row.trackingid}
              </TableCell>
              <TableCell align="right">
                <span className="cellWrapper">
                  <img src={Photo} className="image" alt='product_img'/>
                  {row.product}
                </span>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.payment}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </div>
  )
}

export default TableList