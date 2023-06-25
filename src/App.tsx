import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/homePage/HomePage';
import SignUpPage from './pages/signUp/SignUpPage';
import ProfilePage from './pages/profile/ProfilePage';
import VIewSingleNote from './pages/ViewSingleNote/VIewSingleNote';
import MainLanding from './pages/landing/MainLanding';
import UpdateNoteForm from './pages/updateNote/UpdateNoteForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='landing' element={<MainLanding />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='SignUp' element={<SignUpPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path=':id' element={<VIewSingleNote />} />
        <Route path='updateNotes/:id' element={<UpdateNoteForm />} />
      </Routes>
    </div>
  );
}

export default App;
