import './App.css';
import TopNav from './topNav';
import Home from './home';
const App = () => {
  return (
    <div className='center'>
      <TopNav />
      <img src={require("./data/wepik-export-20240202232234rVWK.jpeg")} height="350px" width='100%' alt="" />
      <Home />
    </div>
  );
}

export default App;