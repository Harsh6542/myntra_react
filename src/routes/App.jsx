import Header from "../components/Header"
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Postlistprovider from "../store/Post-list-store";
import "./App.css"

function App() {

  const [selectTab, setselectTab] = useState("Home");
  return (
    <>
      <Postlistprovider >
        <div className="app-container">
          <Sidebar selectTab={selectTab} setselectTab={setselectTab}></Sidebar>
          <div className="content">
            <Header></Header>
           <Outlet></Outlet>

            <Footer></Footer>
          </div>

        </div>
      </Postlistprovider>
    </>
  );
}

export default App;