import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Register from '../Register/Register.react';
import LoginPage from '../LoginPage/LoginPage.react';
import ActiveIncident from '../ActiveIncident/ActiveIncident.react';
import ClosedIncident from '../ClosedIncident/ClosedIncident.react';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard.react';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <div >

<nav>
     <Link to="/active">  <Tab label="Active"  /></Link>
     <Link to="/closed">  <Tab label="Closed" /></Link>
     {/* <Navigation></Navigation> */}
     </nav>

            <Switch>
                <Route path="/active" component={ActiveIncident}></Route>
                <Route path="/closed" component={ClosedIncident}></Route>
            </Switch>

        </div>
    );

}

export default Nav;