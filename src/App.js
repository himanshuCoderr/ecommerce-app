import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { useContext } from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { SidebarContext } from './Utilities/Context/SidebarContext';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router  = createBrowserRouter([
  {
    path:"/",
    element : <Home />,
   
  },{
    path : "/login" , 
    element : <Login />
  },{
    path : "/signup", 
    element : <SignUp />
  }
  
])

function App() {
  const {showSidebar} = useContext(SidebarContext)
  return (
    <div className="App" style={showSidebar ? {backdropFilter:"brightness(40%)"} : {backdropFilter : "brightness(100%)"}} >
      <RouterProvider router={router}  />
    </div>
  );
}

export default App;
