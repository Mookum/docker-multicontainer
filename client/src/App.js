import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={'/'}>Home</Link>
          <Link to={'/otherpage'}>Other page</Link>
        </header>
      </div>
      <div>
        <Route exact path={'/'} component={{Fib}}>
        <Route exact path={'/otherpage'} component={{OtherPage}}>
      </div>
    </Router>
  );
}

export default App;
