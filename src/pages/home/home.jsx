import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"

function Home() {
  return (
    <div className="home">
      <Sidebar/>  
      <div className="homeContainer">
        <Navbar/>
        home container
      </div>
    </div>
  )
}

export default Home