import React, { Fragment } from 'react';
import axios from 'axios';
import { serverUrl } from '../config';

const Delegate = (props)=>{
    if(props.delegates[0]){
        return props.delegates.map( delegate =>{
            return (
                <Fragment key={delegate._id}>
                    <div className="card mb-3" style={{minWidth: "22rem", maxWidth: "22rem"}}>
                        <div className="card-body">
                            <div className="clearfix">
                                <span className="mr-2 d-inline-block float-left"><strong> Full Name: </strong>{delegate.firstname + " " + delegate.lastname }</span> 
                                <div className="dropdown float-right border d-inline-block" >
                                    <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right py-0" aria-labelledby="dropdownMenuButton">
                                        <button className="dropdown-item bg-danger text-white rounded" href="#" onClick={(event)=>{props.deleteDelegate(event, delegate._id)}}>Delete</button>
                                    </div> 
                                </div>
                            </div>

                            
                            <label className="d-block mt-3 mb-1"><strong>Email:</strong>  {delegate.email}</label>
                            <label className="d-block mt-3 mb-1"><strong>Phone Number:</strong>  {delegate.phoneNumber}</label>
                            <label className="d-block mt-3 mb-1"><strong>Company Name:</strong> {delegate.companyName}</label>
                        </div>
                        <div className="card-footer clearfix" 
                            style={delegate.vip ? {backgroundColor:"#CCA748"}: {backgroundColor:"green"}}>

                            

                            {/* {   delegate.vip ? 
                                <button className="btn btn-sm btn-danger float-left" onClick={(event)=>{props.makeDelegate(event, delegate._id)}}>Make Delegate</button> :
                                <button className="btn btn-sm btn-success float-left" onClick={(event)=>{props.makeGuest(event, delegate._id)}}>Make Guest</button>
                            } */}
                            
                            {   delegate.admitted ? 
                                <button className="btn btn-sm btn-danger float-right" onClick={(event)=>{props.exclude(event, delegate._id)}}>Exclude</button> :
                                <button className="btn btn-sm btn-success float-right" onClick={(event)=>{props.admit(event, delegate._id)}}>Admit</button>
                            }
                        </div>
                    </div>
                </Fragment>
            )
        })
    }else if(props.justMounted === false) {
        return <div className="text-center h4 d-block mx-auto"> Not Found in the list </div>
    }else return ""
}

export default Delegate;