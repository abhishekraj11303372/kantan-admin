import "./new.scss"
import {React , useState} from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined';

function New({inputs,title}) {
  const [file,setFile] = useState("");
  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="lastTransactions">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg" alt="uploaded Image"/>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlined  className="icon"/></label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              
              {/* <div className="formInput">
                <label>User Name:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Full Name:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Email:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Phone Number:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Password:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Adress:</label>
                <input type="text" placeholder=" Raj "/>
              </div>
              <div className="formInput">
                <label>Country:</label>
                <input type="text" placeholder=" Raj "/>
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default New