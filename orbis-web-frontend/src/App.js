import React, { Component } from 'react';

import './App.css';
import SignContainer from './component/Sign-container';
import TeamMembers from './component/Team-members';
import MainSection from './component/main-section';
import Nav from './component/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainSection />
        <SignContainer />
        
        <section className="team-members">
          <TeamMembers />
        </section>
      </div>
    );
  }
}

export default App;
