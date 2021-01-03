import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';

function App() {
  return (
    <Router>
      <Route path='/login/' component={Login}></Route>
      <Route path='' exact component={Home}></Route>
    </Router>
  );
}

export default App;
