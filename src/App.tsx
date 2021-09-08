import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

// import Home-2 from './views/home-2'
import About from './views/About'
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'
// import Admin from './views/Admin'
import Product from './views/Product'
import Orders from './views/Orders'
import Table from './views/Table'
// import Options from './views/Options'
import Home from './views/Home'
// import AddProduct from './views/AddProduct'
import AddPromotion from './views/AddPromotion'
import Promotions from './views/Promotions'
import Promotion from './views/Promotion'
import Employees from './views/Employees'
import Employee from './views/Employee'
import AddEmployee from './views/AddEmployee'
import Comissions from './views/Comissions'
import Analytics from './views/Analytics'
import Products from './views/Products'
import Billing from './views/Billing'
import InviteSignUp from './views/InviteSignUp'
import InviteAppLink from './views/InviteAppLink'
import AppHome from './views/AppHome'
import AppRank from './views/AppRank'
import AppPromo from './views/AppPromo'
import AppSales from './views/AppSales'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        {/* <Route path="/product">
          <Product />
        </Route> */}
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        {/* <Route path="/addProduct">
          <AddProduct />
        </Route> */}
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/AddPromotion">
          <AddPromotion />
        </Route>
        <Route path="/Promotions">
          <Promotions />
        </Route>
        <Route path="/Promotion">
          <Promotion />
        </Route>
        <Route path="/Employees">
          <Employees />
        </Route>
        <Route path="/Employee">
          <Employee />
        </Route>
        <Route path="/AddEmployee">
          <AddEmployee />
        </Route>
        <Route path="/Comissions">
          <Comissions />
        </Route>
        <Route path="/Analytics">
          <Analytics />
        </Route>
        <Route path="/Billing">
          <Billing />
        </Route>
        <Route path="/InviteSignUp">
          <InviteSignUp />
        </Route>
        <Route path="/InviteAppLink ">
          <InviteAppLink />
        </Route>
        {/* <Route path="/options">
          <Options />
        </Route> */}
        {/* <Route path="/admin">
          <Admin />
        </Route> */}
        <Route exact path="/AppHome">
          <AppHome />
        </Route>
        <Route exact path="/AppPromo">
          <AppPromo />
        </Route>
        <Route exact path="/AppSales">
          <AppSales />
        </Route>
        <Route exact path="/AppRank">
          <AppRank />
        </Route>
      </Switch>
      {/* <Nav /> */}
    </Router>
  );
};

export default App;
