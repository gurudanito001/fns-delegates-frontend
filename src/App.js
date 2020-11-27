import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { serverUrl } from './config';
import AddDelegate from './components/addDelegate';
import Navbar from './components/navbar';
import AdmittedAttendees from './components/admittedAttendees';
import AllDelegates from './components/allDelegates';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ready: false,
      searchResults: [],
      admittedAttendees: [],
      vipAttendees: []
    }
  }

  componentDidMount = ()=>{
    axios.post("http://localhost:8080/wakeup")
      .then(res => {
        if(res.statusText === "OK"){
          this.setState({ ready: true })
        } 
      })
    this.getAdmittedAttendees()
  }

  getAdmittedAttendees = ()=>{
    axios.get(`${serverUrl}/admitted`)
      .then(res => {
        if(res.statusText === "OK"){
          this.setState({ admittedAttendees: res.data })
        }
      })
  }

  storeSearchResults = (results)=>{
    this.setState({ searchResults: results })
  }


  render(){
    return(
      this.state.ready ? 
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <AllDelegates 
              searchResults={this.state.searchResults}
              storeSearchResults={this.storeSearchResults}/>
            </Route>
            <Route path="/admitted" exact>
              <AdmittedAttendees 
              admittedAttendees={this.state.admittedAttendees}
              getAdmittedAttendees={this.getAdmittedAttendees}/>
            </Route>
          </Switch>


          <AddDelegate />
        </Router>
      </div> :
      <div className="text-center border border-primary d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <span className="h4 ml-3 mt-2">Getting things ready</span>
      </div>
    )
  }
}