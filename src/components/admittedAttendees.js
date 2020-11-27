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




    render(){
        return(
            <div className="container px-0">
                <div className="row mb-4">
                    <div className="col col-lg-6 offset-lg-3 px-0">
                        <header>
                            <h4>Search Admitted Delegates</h4>
                        </header>
                        <form className="form-inline my-2 my-lg-0 mx-auto">
                            <select className="form-control p-0" style={{maxWidth: "6rem"}} defaultValue={this.state.searchOption} onChange={this.onChange} id="searchOption">
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
                    <Delegate delegates={this.props.admittedAttendees} />
                </div>
            </div>
        )
    }
}