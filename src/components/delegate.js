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
                            <span className="mr-2 d-block"><strong> Full Name: </strong>{delegate.firstname + " " + delegate.lastname }</span> 
                            <label className="d-block mt-3 mb-1"><strong>Email:</strong>  {delegate.email}</label>
                            <label className="d-block mt-3 mb-1"><strong>Phone Number:</strong>  {delegate.phoneNumber}</label>
                            <label className="d-block mt-3 mb-1"><strong>Company Name:</strong> {delegate.companyName}</label>
                        </div>
                        <div className="card-footer clearfix" 
                            style={delegate.vip ? {backgroundColor:"#CCA748"}: {backgroundColor:"green"}}>
                            {   delegate.vip ? 
                                "":
                                <button className="btn btn-sm btn-danger float-left" onClick={()=>{props.makeGuest(delegate._id)}}>Make Guest</button>
                            }
                            
                            {   delegate.admitted ? 
                                "" :
                                <button className="btn btn-sm btn-success float-right">Admit</button>
                            }
                        </div>
                    </div>
                </Fragment>
            )
    
        })
    }else if(props.justMounted === false) {
        return <div> User not in the list </div>
    }else return ""
}

export default Delegate;

/* export default class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount = ()=>{
        axios.get(`${serverUrl}/review/getValidated`)
            .then(res => {
                if(res.data){
                    this.setState({ reviews: res.data })
                }
            })
    }

    reviews = ()=>{
        return this.state.reviews.map(review =>{
            return (
                <Fragment key={review._id}>
                    <div className="card mb-3" style={{minWidth: "18rem", maxWidth: "18rem"}}>
                        <div className="card-body">
                            <span className="mr-2">Author:</span><span className="card-subtitle mb-2 text-muted">{review.author}</span>
                            <label className="d-block mt-3 mb-1">Review</label> <hr className="mt-0"/>
                            <p className="card-text">{review.reviewText}</p>
                        </div>
                    </div>
                </Fragment>
            )
        })
    }


    render(){
        return(
            <>
            <h4 className="mb-3">Reviews</h4>
            <div className="card-deck">
                {this.reviews()}
            </div>
            </>
        )
    }
} */