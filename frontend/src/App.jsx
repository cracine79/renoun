
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';
import FormWrapper from './components/HomeElements/FormWrapper';
import Whoops from './components/Whoops/Whoops';
import WhoopsTwo from './components/Whoops/WhoopsTwo';
import Home from './components/HomeElements/Home';
import Footer from './components/Footer/footer';
import { fetchAllInstruments } from './store/instrument';
import Instrument from './components/Instrument/Instrument';

function Hello  (){
  return(
    <>
    Hello from hello
    </>
  )
}
function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [instrumentsIsLoaded, setInstrumentsIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  useEffect(()=>{
    dispatch(fetchAllInstruments()).then (()=>{
      setInstrumentsIsLoaded(true)
    })
  }, [dispatch])

  // if (!isLoaded || !instrumentsIsLoaded) {
  //   return <div>Loading...</div>;
  // }
 
  return (
    <div id='app-wrapper'>
     
      <Navigation />
     
      {isLoaded && instrumentsIsLoaded && <Outlet />}
       <FormWrapper />
        <div id='footerWrap'>
          <Footer />
        </div>
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
        path: '/instrument',
        element: <Instrument />
      },
      {
        path: '/whoops',
        element: <Whoops />
      },
      {
        path: '/instruments/:id',
        element: <Instrument />
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





