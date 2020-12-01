import React, { Fragment } from 'react';
import axios from 'axios';
import { serverUrl } from '../config';
import Delegate from './delegate';

export default class AdmittedAttendees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searching: false,
            searchOption: "firstname",
            searchText: "",
        }
    }

    componentDidMount = ()=>{
        this.props.getAdmittedAttendees()
    }

    makeDelegate = (e, id)=>{
        axios.post(`${serverUrl}/makedelegate/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.props.getAdmittedAttendees()
                console.log("Guest is now a Delegate")
            }
        })
    }

    makeGuest = (e, id)=>{
        axios.post(`${serverUrl}/makevip/${id}`)
        .then( res =>{
            console.log(res)
            if(res.statusText === "OK"){
                this.props.getAdmittedAttendees()
                console.log("Delegate is now a Guest")
            }
        })
    }

    admit = (e, id)=>{
        axios.post(`${serverUrl}/admit/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.props.getAdmittedAttendees()
                console.log("Attendee has now been Admitted")
            }
        })
    }

    exclude = (e, id)=>{
        axios.post(`${serverUrl}/exclude/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.props.getAdmittedAttendees()
                console.log("Attendee has now been Excluded")
            }
        })
    }

    delete = (e, id)=>{
        axios.delete(`${serverUrl}/delete/${id}`)
        .then( res =>{
            if(res.statusText === "OK"){
                this.getAdmittedAttendees()
                console.log("Attendee has now been Deleted")
            }
        })
    }





    render(){
        return(
            <div className="container">
                <div className="row mb-4">
                    <header className="col col-lg-6 offset-lg-3">
                        <h4>Admitted Attendees</h4>
                    </header>
                </div>
                {
                    this.props.admittedAttendees[0] ? 
                        <div className="card-deck">
                            <Delegate
                                delegates={this.props.admittedAttendees}
                                makeDelegate={this.makeDelegate}
                                makeGuest={this.makeGuest}
                                admit={this.admit}
                                exclude={this.exclude} 
                                deleteDelegate={this.delete}/>
                        </div> :
                        <div> No Attendee has been admitted </div>
                }
                
            </div>
        )
    }
}