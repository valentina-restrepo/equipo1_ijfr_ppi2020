import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Comenzar from "./components/pages/Comenzar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dondeteencuentras from "./components/pages/Dondeteencuentras";
import Instrucciones from "./components/pages/Instrucciones";
import ContactUs from "./components/pages/ContactUs";
import Bloques from "./components/pages/Bloques";
import Bloquesmasbuscados from "./components/pages/Bloquesmasbuscados";
import Card from "./components/Card";
import routes from "./components/routes";
import Card2 from "./components/Card2";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Comenzar} />
        <Route path="/Dondeteencuentras" component={Dondeteencuentras} />
        <Route path="/Instrucciones" component={Instrucciones} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/Bloques" component={Bloques} />
        <Route path="/Bloquesmasbuscados" component={Bloquesmasbuscados} />
        <Route path="/Card" component={Card} />
        <Route path="/routes" component={routes} />
        <Route path="/Card2" component={Card2} />
      </Switch>
    </Router>
  );
}

export default App;
