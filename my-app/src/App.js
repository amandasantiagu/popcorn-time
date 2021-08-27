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

// const LoginMain = Loadable({
//   loader: () => import('./pages/LoginMain'),
//   loading: Loading
// });

// const Navbar = Loadable({
//   loader: () => import('./components/Navbar'),
//   loading: Loading
// });

// const Home = Loadable({
//   loader: () => import('./pages/Home'),
//   loading: Loading
// });

const MovieInfo = Loadable({
  loader: () => import('./pages/MovieInfo'),
  loading: Loading
});

// const Register = Loadable({
//   loader: () => import('./pages/Register'),
//   loading: Loading
// });


// const Profile = Loadable({
//   loader: () => import('./pages/Profile'),
//   loading: Loading
// });

const Favorites = Loadable({
  loader: () => import('./pages/Favorites'),
  loading: Loading,
  delay: 60
});

const NotFound = Loadable({
  loader: () => import('./pages/404'),
  loading: Loading
});

function App() {
  return (
    <div className="Movies-app">
      <Router>
        {/* <Navbar /> */}
        <div className="page-content">
          <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/register" component={Register} />
              <Route path="/details/:id" component={MovieInfo} />
              <Route path="/favorite-movies" component={Favorites} />
              <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
