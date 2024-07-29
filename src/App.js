import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Freshbooks from './components/Freshbooks';
import Login from './components/Login';
import Callback from './components/Callback';
import Session from './components/Session';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/callback" component={Callback} />
                    <Route path="/session" component={Session} />
                    <Route path="/" component={Freshbooks} />
                </Switch>
            </Layout>
        </Router>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import Freshbooks from './components/Freshbooks';
// import Login from './components/Login';
// import Callback from './components/Callback';
// import Session from './components/Session';
// import Layout from './components/Layout';

// function App() {
//     return (
//         <Layout>
//             <h1>My React App</h1>
//             <Login />
//             <Callback />
//             <Session />
//             <Freshbooks />
//         </Layout>
//     );
// }

// export default App;

