// import logo from './logo.svg';
import './App.css';

import Register from './Pages/Register';
import Login from './Pages/Login';

import { RouterProvider, 
         createBrowserRouter} from "react-router-dom"

import Homepg from './Pages/Homepg';
import Users from './Pages/Users';

import { Provider } from 'react-redux';
import store from './store';
import UserDetail from './Pages/UserDetails';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Homepg />
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/users',
      element : <Users />
    },
    {
      path : '/users/:userid',
      element : <UserDetail />
    }
  ])

  return (

    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          <RouterProvider router={router}></RouterProvider>

          {/* <Register /> */}
          {/* <Login /> */}

        </header>
      </div>

    </Provider>
    
  );
}

export default App;
