import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import NavBar from "./components/Navbar/Navbar.jsx"
import Home from "./containers/Home/Home.jsx"

import GameDetail from "./containers/GameDetail/GameDetail.jsx";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from './containers/Page404/Page404.jsx';


function App() {

  return (
    <div className="App">
      <React.Fragment>
        
        <Route exact path="/" component={LandingPage} />

        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />
        <Route path="/videogames" component={NavBar} />
        {/* <Route path="/videogames" component={NavBar} /> */}
        <Route exact path="/videogames/:id" render={({ match }) => {
          const id = match.params.id;
          if (!isNaN(id)) {
            return <GameDetail id={id} />;
          } else {
            return <Page404 />;
          }
        }} />
        {/* <Route exact path="/videogames/:id" render={({ match }) => < GameDetail id={match.params.id} />}/> */}
        {/* redirige al Page404 siempre que el id de /videogames/:id no sea un número u otra sircunstancia adecuada*/}
        {/* <Route path="/*" component={Page404} /> */}

      </React.Fragment>
    </div>
  );
}

export default App;