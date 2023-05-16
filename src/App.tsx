import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/homePage/HomePage';
import SignUpPage from './pages/signUp/SignUpPage';
import ProfilePage from './pages/profile/ProfilePage';
import VIewSingleNote from './pages/ViewSingleNote/VIewSingleNote';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='SignUp' element={<SignUpPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path=':id' element={<VIewSingleNote />} />
        {/* <Route path='modal' element={<ModalComp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
