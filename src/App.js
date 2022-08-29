import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="wrapper">
      <Nav/>
      <Routes>
        <Route index element={"Home"}/>
        <Route path={"list"} element={"List"}/>
        <Route path={"admin"} element={"Admin"}/>
      </Routes>
    </div>
  );
}

export default App;
