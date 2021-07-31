import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route component={Register} path={'/register'} />
        <Route component={Login} path={'/login'} />


          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
