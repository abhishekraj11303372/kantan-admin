import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx"

function Home() {
  return (
    <div className="home">
      <Sidebar/>  
      <div className="homeContainer">Container</div>
    </div>
  )
}

export default Home