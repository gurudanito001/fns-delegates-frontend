import React from 'react';
import Delegate from './delegate';
import axios from 'axios';
import { serverUrl } from '../config';

export default class AllDelegates extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            justMounted: false,
            searching: false,
            searchOption: "firstname",
            searchText: "",
        }
    }

    componentDidMount = ()=>{
        this.setState({ justMounted: true })
    }

    onChange = (e)=>{
        this.setState({ [e.target.id]: e.target.value })
    }

    search = (e)=>{
        e.preventDefault();
        this.setState({ searching: true })
        axios.post(`${serverUrl}/${this.state.searchOption}/${this.state.searchText}`)
        .then( res => {
            this.setState({ searching: false })
            if(res.statusText === "OK"){
                this.props.storeSearchResults(res.data)
                this.setState({ justMounted: false })
            }
        })
    }

    makeGuest = (id)=>{
        axios.post(`${serverUrl}/makevip/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.search()
                console.log("Delegate is now a guest")
            }
        })
    }

    admit = (id)=>{
        axios.post(`${serverUrl}/admit/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.search()
                console.log("Attendee has now been admitted")
            }
        })
    }




    render(){
        return(
            <div className="container px-0">
                <div className="row mb-4">
                    <div className="col col-lg-6 offset-lg-3 px-0">
                        <header>
                            <h4>Search All Delegates</h4>
                        </header>
                        <form className="form-inline my-2 my-lg-0 mx-auto">
                            <select className="form-control p-0" style={{maxWidth: "6rem"}} value={this.state.searchOption} onChange={this.onChange} id="searchOption">
                                <option value="firstname">firstname</option>
                                <option value="lastname">lastname</option>
                                <option value="email">email</option>
                                <option value="companyname">company name</option>
                            </select>
                            <input className="form-control mr-sm-2" type="search" style={{minWidth: "18rem"}} placeholder="Search" id="searchText" onChange={this.onChange} />
                            <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={this.state.searching} onClick={this.search}>Search</button>
                        </form>
                    </div>
                </div>

                <div className="card-deck">
                    <Delegate 
                    makeGuest={this.makeGuest}
                    delegates={this.props.searchResults}
                    justMounted={this.state.justMounted} />
                </div>
            </div>
        )
    }
}