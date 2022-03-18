import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Left</h1>
            <div className="item">
              <img className="itemImg" src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              details
            </div>
          </div>
          <div className="right">
            <h1 className="title">Right</h1>
          </div>
        </div>
        <div className="bottom">
          bottom
        </div>
      </div>
    </div>
  )
}

export default Single