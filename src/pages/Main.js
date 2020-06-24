import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Ddux, DduxHOC } from 'ddux'
import { FaUserAlt, FaUserTie, FaClipboardList } from "react-icons/fa";

import * as Pages from 'pages'
import * as Approver from 'pages/Dashboard/Approver'
import { Loader } from 'components'

import { createBrowserHistory } from 'history'


const history = createBrowserHistory()


const initialState = {
  loading: 0,
  isNavExpanded: false,
  user: { name: 'Robert Brown', type: 'approver' }
}
Ddux.initDdux(initialState)


const accessLevelRoutes = {
  admin: [
  ],
  approver: [
    { name: 'Home', path: '/dashboard', component: Approver.Home },
    { name: 'Recipients', path: '/dashboard/recipients', component: Approver.Recipients, icon: <FaUserAlt /> },
    { name: 'Donors', path: '/dashboard/donors', component: Approver.Donors, icon: <FaUserTie /> },
    { name: 'Bursary', path: '/dashboard/bursary', component: Approver.Bursary, icon: <FaClipboardList /> }
  ],
  donor: [],
  recipient: [],
}


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }
  componentWillUnmount() {
  }

  render() {
    const loader = (Ddux.get('loading')===1)?<Loader />:null
    const user = Ddux.get('user')
    return (
      <Router history={history}>
        <div className="App">
          {loader}
          <Switch>
            <Route exact path="/">
              <Pages.Home />
            </Route>
            <Route path="/contact">
              <Pages.Contact />
            </Route>
            <Route path='/dashboard'>
              <Pages.Dashboard routes={accessLevelRoutes[user.type].slice(1)} >
                <Switch>
                  {
                    (user && user.type) ?
                      accessLevelRoutes[user.type].map((route,index)=>
                        <Route key={index} path={route.path} exact component={route.component} />
                      )
                    : null
                  }
                  <Route path='/dashboard/photo-id-verification' exact component={Pages.PhotoIdVerification} />
                  <Route>
                    <h1>Permission Denied</h1>
                  </Route>
                </Switch>
              </Pages.Dashboard>
            </Route>
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const main = DduxHOC(Main,initialState)

export { main as Main }
