
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';
import FormWrapper from './components/HomeElements/FormWrapper';
import Whoops from './components/Whoops/Whoops';
import WhoopsTwo from './components/Whoops/WhoopsTwo';
import Home from './components/HomeElements/Home';


function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <div id='app-wrapper'>
     
      <Navigation />
     
      {isLoaded && <Outlet />}
      <FormWrapper />
    </ div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/whoops',
        element: <Whoops />
      },
      {
        path: '/whoopsTwo',
        element: <WhoopsTwo />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;





