import React, { Component } from 'react';
import logo from './logo.svg';
import ligue from './ligue.jpg';

import './App.css';

class App extends Component {
  render() {
    return (

      <body>
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to le site du losc</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      <div>
      <h1> Le <strong>seul site</strong> qui parle du <em>losc</em> tout le temps</h1>

      </div>

        <body> voici la liste des club de ligue 1 </body>
        <img src={ligue} width="160" height="120" />
              <ul>
              <li>Lyon</li>
              <li>Monaco</li>
              <li>Paris</li>
              <li>Nantes</li>
              <li>Marseille</li>
              <li>Bordeaux</li>
              <li>Rennes</li>
              <li>Nice</li>
              <li>Losc</li>
              <li>Strasbourg</li>
              <li>Toulouse</li>
              <li>St-Etienne</li>
              <li>Caen</li>
              <li>Guingamp</li>
              <li>Montpellier</li>
              <li>Amiens</li>
              <li>Angers</li>
              <li>Reims</li>
              <li>Dijon</li>
              <li>Nimes</li>
</ul>
<body> <strong>Meilleurs Buteurs</strong> du losc <em>Saison 2017-2018</em> </body>
<ol>
<li>Pepe</li>
<li>Araujo</li>
<li>Mothiba</li>
</ol>
      </div>
      </body>


    );
  }
}

export default App;
