import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. May not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="result-amoutnt">
                $15.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="result-amoutnt">
                $10.1k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="result-amoutnt">
                $19.5k
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Featured