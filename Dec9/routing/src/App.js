import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import {ProtectedRoute} from './routes/ProtectedRoute.jsx';
import './App.css';
import Data from './DB/data.json'
import { IndexPage } from './Components/IndexPage.jsx';
import { ContactPage } from './Components/ContactPage.jsx';
import LoginPage from './Components/LoginPage.jsx';
import { ProfilePage } from './Components/ProfilePage.jsx';

class App extends Component {
  state = {
    showLogin: true
  }
  render() {
    return (
      <Router>
        <div className="App">
            <ul className="menu">
              <li className="menu--item"> <Link to='/'>Home</Link> </li>
              <li className="menu--item"> <Link to='/contact'>Contact</Link> </li>
              {
                this.state.showLogin && (
                  <li className="menu--item">
                    <Link to='/login'>Login</Link>
                  </li>
                  )
              }
              {
                !this.state.showLogin && (
                  <li className="menu--item"> 
                    <Link to='/profile'>Profile</Link>
                  </li>
                )
              }
            </ul>

            <Route path="/" exact 
                   render = { () => ( <IndexPage title={Data.index.title} desc={Data.index.desc}/> ) }/>
            <Route path="/contact"  
                   render = { () => ( <ContactPage title={Data.contact.title} desc={Data.contact.desc}/> ) }/>
            <Route path="/login"
                   render = { () => ( <LoginPage showLogin={ (change) => {this.setState({showLogin:change}) }}/> ) }
                    />
            <ProtectedRoute path="/profile" component={ProfilePage} />
            {!this.state.showLogin && (<Redirect to={`/profile`}/>)}
        </div>
      </Router>
    );
  }
}

export default App;
