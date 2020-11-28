import React from 'react';
import { serverUrl } from '../config';
import axios from 'axios';

export default class AddDelegate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sending: false,
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            serviceDescription: "",
            companyAddress: "",
            vip: false,
            admitted: false
        }
    }

    onSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        let { firstname, lastname, email, phoneNumber, companyName, serviceDescription, companyAddress, vip, admitted } = this.state;
        let delegate = {firstname, lastname, email, phoneNumber, companyName, serviceDescription, companyAddress, vip, admitted}
        axios.post(`${serverUrl}/add`, delegate)
            .then(res => {
                if(res.statusText === "OK"){
                    document.getElementById("closeAddDelegateModal").click()
                }else{
                    
                }
            }) 
    }
    onChange = (e)=>{
        if(e.target.id === "vip"){
            this.setState({ vip: !this.state.vip})
        }else{
            this.setState({ [e.target.id]: e.target.value })
        }
    }


    render(){
        return(

            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register Attendee</h5>
                            <button id="closeRegisterModal" type="button" className="close" data-dismiss="modal"
                             aria-label="Close" id="closeAddDelegateModal">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstname">Firstname</label>
                                    <input type="text" className="form-control form-control-sm" id="firstname" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Lastname</label>
                                    <input type="text" className="form-control form-control-sm" id="lastname" onChange={this.onChange} />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="email" onChange={this.onChange} />
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text" className="form-control form-control-sm" id="phoneNumber" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" className="form-control form-control-sm" id="companyName" onChange={this.onChange} />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="serviceDescription">Service Description</label>
                                    <input type="text" className="form-control form-control-sm" id="serviceDescription" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyAddress">Company Address</label>
                                    <input type="text" className="form-control form-control-sm" id="companyAddress" onChange={this.onChange} />
                                </div> */}
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={this.state.vip} onChange={this.onChange} id="vip" />
                                        <label className="form-check-label" htmlFor="vip">
                                            Guest
                                        </label>
                                    </div>
                                </div>
                            </form> 
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}