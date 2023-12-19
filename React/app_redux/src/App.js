import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';


import Loginput from './Loginpage';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// import { Navigate } from 'react-router-dom';
import Welcomepg from './Welcome';
import Homepg from './homepg';
import User from './user';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Welcomepg />
    },
    {
      path : '/login',
      element : <Loginput />
    },
    {
      path : '/homepage',
      element : <Homepg />
    },
    {
      path : '/userspage',
      element : <User />
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

                {/* <Welcomepg /> */}

                {/* <Loginput /> */}

              </header>
          </div>
      </Provider>

  );
}

export default App;
