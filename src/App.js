import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import LogIn from './Pages/LoginPage/LogIn/LogIn';
import Registration from './Pages/LoginPage/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Pages/PrivatePage/AdminSecure/AddProduct/AddProduct';
import MakeAdmin from './Pages/PrivatePage/AdminSecure/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/PrivatePage/AdminSecure/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Pages/PrivatePage/AdminSecure/ManageProduct/ManageProduct';
import AddReview from './Pages/PrivatePage/UserSecure/AddReview/AddReview';
import MyOrders from './Pages/PrivatePage/UserSecure/MyOrders/MyOrders';
import Pay from './Pages/PrivatePage/UserSecure/Pay/Pay';
import Purchase from './PurchasePage/Purchase/Purchase';
import About from './Pages/About/About';
import AdminRoute from './Pages/LoginPage/LogIn/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/Registration">
              <Registration></Registration>
            </Route>

            <AdminRoute path="/AddProduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path="/MakeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/ManageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path="/ManageProduct">
              <ManageProduct></ManageProduct>
            </AdminRoute>

            <PrivateRoute path="/AddReview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute exact path="/Purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/MyOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/Pay">
              <Pay></Pay>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
