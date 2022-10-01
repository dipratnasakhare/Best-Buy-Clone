import Home from './Component/Home/Home/Home'
import { Routes, Route  } from "react-router-dom"
import Login from "./Component/Login/Login"
import './App.css';
import Error from "./Component/Error"
function App() {
  return (
    <div className="App">
      
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>}/>
                <Route path="*" element={<Error/>}      />
            </Routes>
            
    </div>
  );
}

export default App;
