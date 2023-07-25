import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/homePage/HomePage';
import SignUpPage from './pages/signUp/SignUpPage';
import ProfilePage from './pages/profile/ProfilePage';
import MainLanding from './pages/landing/MainLanding';
import { UserProvider } from './providers/UserProvider';
import { Modal } from '@mui/material';
import { ModalProvider } from './providers/globalModalProvider'
import { SnackbarProvider } from './providers/globalSnackBarProvider';


function App() {
  return (
    <div className="App">

      <UserProvider>
        <ModalProvider>
          <SnackbarProvider>
            <Routes>
              <Route path='login' element={<LoginPage />} />
              <Route path='signup' element={<SignUpPage />} />
              <Route path='landing' element={<MainLanding />} />
              <Route path='/' element={<HomePage />} />
              <Route path='profile' element={<ProfilePage />} />
            </Routes>
          </SnackbarProvider>
        </ModalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
