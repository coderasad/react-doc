import React                                            from "react";
import './App.scss';
import MenuComponent                                    from "./component/Menu";
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import ButtonComponent                                  from "./component/ButtonComponent";
import TableComponent                                   from "./component/TableComponent";
import StyleComponent                                   from "./component/StyleComponent";
import ToogleComponent                                  from "./component/Toogle";
import FormValidation                                   from "./component/FormValidation";
import FormComponent                                    from "./component/FormComponent";
import UseEffectComponent                               from "./component/UseEffectComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <MenuComponent/>
                <Routes>
                    <Route exact path='/button' element={<ButtonComponent/>}/>
                    <Route exact path='/table' element={<TableComponent/>}/>
                    <Route exact path='/style' element={<StyleComponent/>}/>
                    <Route exact path='/toggle' element={<ToogleComponent/>}/>
                    <Route exact path='/form' element={<FormComponent/>}/>
                    <Route exact path='/formValidation' element={<FormValidation/>}/>
                    <Route exact path='/useEffect' element={<UseEffectComponent/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
