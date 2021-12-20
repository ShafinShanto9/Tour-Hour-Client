import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Addservice from './Components/AddService/Addservice';
import AllTour from './Components/AllTour/AllTour';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManagePackage from './Components/ManagePackage/ManagePackage';
import MyPackages from './Components/MyPackages/MyPackages';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PvateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Switch>
      <Route exact path ='/'>
          <Home></Home>
      </Route>

      <Route exact path ='/home'>
          <Home></Home>
      </Route>

      <Route exact path ="/allTour">
        <AllTour></AllTour>
      </Route>

      <Route exact path ='/addservice'>
          <Addservice></Addservice>
      </Route>

      <PrivateRoute exact path ='/service/:serviceId'>
          <Booking></Booking>
      </PrivateRoute>

      <Route exact path = '/managepackages'>
            <ManagePackage></ManagePackage>
      </Route>

      <Route exact path = '/mypackages'>
            <MyPackages></MyPackages>
      </Route>

      <Route path ='/login'>
          <Login></Login>
        </Route>

        <Route path ='/contact'>
          <Contact></Contact>
        </Route>

    <Route path = "*">    
        <NotFound></NotFound>
    </Route>
    </Switch>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
