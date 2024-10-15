import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import MainPageComponent from './components/MainPageComponent';
import ListCropsComponent from './components/ListCropsComponent';
import ListEquipmentComponent from './components/ListEquipmentComponent';
import ListInsecticideComponent from './components/ListInsecticideComponent';
import AddCropComponent from './components/AddCropComponent';
import AddEquipmentComponent from './components/AddEquipmentComponent';
import AddInsecticideComponent from './components/AddInsecticideComponent';
import FMHomePageComponent from './components/FMHomePageComponent';
import UserContext from './components/UserContext';

 class App extends Component {

  setUser = user => {
    this.setState({ user });
  };

  state = {
    user: "",
    setUser: this.setUser
  };

  render(){
    return (
      
      <div>
        <UserContext.Provider value = {this.state}>
        
          <Router>
                <HeaderComponent />
                  <div className="container">
                    
                      <Switch> 
                          <Route path = "/" exact component={FMHomePageComponent}></Route>
                          <Route path = "/login" exact component={LoginComponent}></Route>
                          <Route path = "/MainPage" exact component={MainPageComponent}></Route>
                          <Route path = "/addcrop/:id" component = {AddCropComponent}></Route>
                           <Route path = "/listcrops" component = {ListCropsComponent}></Route>
                            <Route path = "/listequipments" component = {ListEquipmentComponent}></Route>
                            <Route path = "/addequipment/:id" component = {AddEquipmentComponent}></Route>
                            <Route path = "/addinsecticide/:id" component = {AddInsecticideComponent}></Route>
                            <Route path = "/listinsecticides" component = {ListInsecticideComponent}></Route>*/
                            
                      </Switch>
                      
                  </div>
                
          </Router>
          </UserContext.Provider>
          
      </div>
      )
  }
}

export default App