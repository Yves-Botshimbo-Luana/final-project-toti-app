import './App.css';
import { BrowserRouter as Router, swtich, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
    return (
        <div className="App">
            <Router>
              <Header />
              <swtich>
                <Route path="/" exact component= {ProductListing} />
                <Route path="/product/:oroductId" exact component= {ProductListing} />
                <Route>404 Not found!</Route>
              </swtich>
            </Router>    
        </div>
    );
}
export default App;
