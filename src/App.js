import React from "react";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Workarea from "./components/Workarea";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"
function App() {
  return (
    <React.Fragment>
    <Header/>
    <Sidemenu/>
    <Workarea/>
    </React.Fragment>
   
  );
}

export default App;
