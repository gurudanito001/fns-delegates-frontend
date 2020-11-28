import React from 'react';
import axios from 'axios';
import { serverUrl } from '../config';
import Delegate from './delegate';

export default class Guests extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searching: false,
            searchOption: "firstname",
            searchText: "",
        }
    }

    componentDidMount = ()=>{
        this.props.getGuests()
    }

    makeDelegate = (e, id)=>{
        axios.post(`${serverUrl}/makedelegate/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.props.getGuests()
                console.log("Guest is now a Delegate")
            }
        })
    }

    makeGuest = (e, id)=>{
        axios.post(`${serverUrl}/makevip/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.props.getGuests()
                console.log("Delegate is now a Guest")
            }
        })
    }

    admit = (e, id)=>{
        axios.post(`${serverUrl}/admit/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.props.getGuests()
                console.log("Attendee has now been Admitted")
            }
        })
    }

    exclude = (e, id)=>{
        axios.post(`${serverUrl}/exclude/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.props.getGuests()
                console.log("Attendee has now been Excluded")
            }
        })
    }

    delete = (e, id)=>{
        axios.delete(`${serverUrl}/delete/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.props.getGuests()
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
                            <h4>All Guests</h4>
                        </header>
                    </div>
                </div>

                <div className="card-deck">
                    <Delegate 
                    delegates={this.props.guests} 
                    makeDelegate={this.makeDelegate}
                    makeGuest={this.makeGuest}
                    exclude={this.exclude}
                    admit={this.admit}
                    deleteDelegate={this.delete}/>
                </div>
            </div>
        )
    }
}