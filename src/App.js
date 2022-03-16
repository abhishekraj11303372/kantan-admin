import Home from "./pages/home/home.jsx"
import Login from "./pages/login/login.jsx"
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route path="login" element={<List/>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
