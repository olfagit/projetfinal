import './App.css'
import {Routes,Route} from "react-router-dom"
import Navigation from './components/Navigation'
import Login from "./components/Login/Login"
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import CVlist from './components/CVlist/CVlist'
import AlertErrors from './components/AlertErrors'
import ClientRoute from './PrivateRoutes/UserRoutes'
import AddCV from './components/addCV'

function App() {
  return (
    <div className="App">
  <Navigation/>
  <AlertErrors/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Register" element={<Register/>} />
  <Route path="/Profile" element={<ClientRoute><Profile/></ClientRoute>} />
  <Route path="/CV" element={<AddCV/>} />
  <Route path="/CVList" element={<CVlist/>} />
</Routes>

    </div>
  );
}

export default App;
