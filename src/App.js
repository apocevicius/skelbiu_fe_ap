import './App.css';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className='App'>
      <Toaster />
      <Switch>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/myaccount'>
          <MyAccount />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
