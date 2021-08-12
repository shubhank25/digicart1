import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import Digicart from './components/digicart';

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/digicart" component={Digicart} />
          <Route component={Register} path={'/register'} />
          <Route component={Login} path={'/login'} />
          <Route component={Header} path={'/header'} />
          
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Redirect to="/digicart" path="/" />
        </Switch>



        <Footer />
      </Router>
    </div>
  );
}

export default App;
