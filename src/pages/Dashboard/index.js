import React,{Component} from 'react'
import { Header, SideNavigation } from 'components/Dashboard'
import { Ddux } from 'ddux'

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggle=()=>{
        this.setState({expanded: !this.state.expanded});
    }
    render(){
        return(
            <div id="screen__dashboard">
                <Header expanded={this.state.expanded} toggle={this.toggle} />
                <div className="flex-wrapper">
                    <SideNavigation toggle={this.toggle} routes={this.props.routes} expanded={this.state.expanded} />
                    <div className={`body ${(this.state.expanded)?'body-expanded':''}`}>
                       {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export { Dashboard }
