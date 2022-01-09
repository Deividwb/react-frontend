import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";


function App() {
    return (
        <div>
            <Router >
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<ListEmployeeComponent/>}></Route>

                        <Route path="/employees" element={<ListEmployeeComponent/>}></Route>

                        <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>

                        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>

                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>

    )
}
export default App;


//conexao sem rota
// <div>
//     <HeaderComponent/>
//     <div className="container">
//         <ListEmployeeComponent/>
//     </div>
//     <FooterComponent/>
// </div>


