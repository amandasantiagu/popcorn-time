import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loadable from 'react-loadable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Dashboard from './pages/Dashboard';


const MovieInfo = Loadable({
  loader: () => import('./pages/MovieInfo'),
  loading: Loading
});


const NotFound = Loadable({
  loader: () => import('./pages/404'),
  loading: Loading
});

function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/movies" component={Movies} />
              <Route path="/register" component={Register} />
              <Route path="/details/:id" component={MovieInfo} />
              <Route path="/favorites" component={Favorites} />
              <Route path="*" component={NotFound} />
          </Switch>
      </Router>
      <ToastContainer />
</>
  );
}

export default App;
