import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './component/header.js';

function App() {
  return (
    <div>
      <Router>
        <Route component={Header} />
      </Router>
    </div>
  );
}

export default App;
