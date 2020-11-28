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
        this.props.clearSearchResults()
    }

    onChange = (e)=>{
        this.setState({ [e.target.id]: e.target.value })
    }

    search = (e)=>{
        e.preventDefault();
        if(this.state.searchText){
            this.setState({ searching: true })
            axios.post(`${serverUrl}/${this.state.searchOption}/${this.state.searchText}`)
            .then( res => {
                this.setState({ searching: false })
                if(res.statusText === "OK"){
                    this.props.storeSearchResults(res.data)
                    this.setState({ justMounted: false })
                }
            })
        }else{
            console.log("Nothing to search")
        }
        
    }

    makeDelegate = (e, id)=>{
        axios.post(`${serverUrl}/makedelegate/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.search(e)
                console.log("Guest is now a Delegate")
            }
        })
    }

    makeGuest = (e, id)=>{
        axios.post(`${serverUrl}/makevip/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.search(e)
                console.log("Delegate is now a Guest")
            }
        })
    }

    admit = (e, id)=>{
        axios.post(`${serverUrl}/admit/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.search(e)
                console.log("Attendee has now been Admitted")
            }
        })
    }

    exclude = (e, id)=>{
        axios.post(`${serverUrl}/exclude/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.search(e)
                console.log("Attendee has now been Excluded")
            }
        })
    }

    delete = (e, id)=>{
        axios.delete(`${serverUrl}/delete/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.search(e)
                console.log("Attendee has now been Deleted")
            }
        })
    }




    render(){
        return(
            <div className="container px-0">
                <div className="row mb-4">
                    <div className="col col-lg-6 offset-lg-3 px-0">
                        <header>
                            <h4>Search All Attendees</h4>
                        </header>
                        <form className="form-inline my-2 my-lg-0 mx-auto">
                            <select className="form-control p-0" style={{maxWidth: "6rem"}} value={this.state.searchOption} onChange={this.onChange} id="searchOption">
                                <option value="firstname">firstname</option>
                                <option value="lastname">lastname</option>
                                <option value="email">email</option>
                            </select>
                            <input className="form-control mr-sm-2" type="search" style={{minWidth: "18rem"}} placeholder="Search" id="searchText" onChange={this.onChange} />
                            <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={this.state.searching} onClick={this.search}>Search</button>
                        </form>
                    </div>
                </div>

                <div className="card-deck">
                    <Delegate 
                    makeDelegate={this.makeDelegate}
                    makeGuest={this.makeGuest}
                    admit={this.admit}
                    exclude={this.exclude}
                    deleteDelegate={this.delete}
                    delegates={this.props.searchResults}
                    justMounted={this.state.justMounted} />
                </div>
            </div>
        )
    }
}