import React,{Component} from 'react';
import logo from "assets/images/logo.png";
import { FaAngleLeft  } from "react-icons/fa";
import { Navbar,OverlayTrigger,Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const SideNavigation = ({expanded,routes,toggle})=>{
    return(
        <div className={`sidenav ${(expanded)?'sidenav-expanded':''}`}>
            <div className="shrink-wrapper">
                <div className="bars" onClick={()=>toggle()}> <FaAngleLeft size={30} /> </div>
            </div>
            <div className="divider"></div>
            <div className="list-group">
            {
                routes.map((route,index)=>{
                    return(
                        <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip id={`tooltip-right`} style={(expanded)?{display: 'none'}:{}}>
                            {route.name}
                            </Tooltip>
                        }
                        >
                            <NavLink to={route.path} className="list-groupItem" style={(!expanded)?{textAlign: 'center'}:{}} activeClassName="activeClass">
                                <span className={`list-icon ${(!expanded)?'list-icon-expanded':''}`}>{route.icon}</span>
                                <span className={`list-group-text ${(!expanded)?'list-group-text-expanded':''}`}>{route.name}</span>
                            </NavLink>
                        </OverlayTrigger>
                        )
                })
            }
            </div>
        </div>
    )
}

export default SideNavigation;