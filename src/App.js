import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { useContext } from 'react';
import { SidebarContext } from './Utilities/Context/SidebarContext';
function App() {
  const {showSidebar} = useContext(SidebarContext)
  return (
    <div className="App" style={showSidebar ? {backdropFilter:"brightness(40%)"} : {backdropFilter : "brightness(100%)"}} >
     <Home />
    </div>
  );
}

export default App;
