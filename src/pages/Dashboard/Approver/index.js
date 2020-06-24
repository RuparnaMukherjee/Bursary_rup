import React,{Component} from 'react'
import { Redirect } from 'react-router-dom';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
        /*
        *   Redirect to 1st navigation if verified else send to verification page 
        */
    render(){
        return(
            <Redirect
                to='/dashboard/photo-id-verification'
            />
        )
    }

}

export { Home }
export { Bursary } from "./Bursary"
export { Donors } from "./Donors"
export { Recipients } from "./Recipients"