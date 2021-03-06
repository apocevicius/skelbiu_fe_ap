import './App.css';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthContextProvider } from './store/AuthContext';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <AuthContextProvider>
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
      </AuthContextProvider>
    </div>
  );
}

export default App;
