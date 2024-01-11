import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/newUser/New.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { userInputs, productInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext.jsx';
import { AuthContext } from './context/AuthContext.jsx';
import { hotelColumns, roomColumns, userColumns } from './datatablesource.jsx';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  return (
    // Classname decides whether the app uses light or dark mode
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {/* Login page */}
            <Route path='login' element={<Login />} />
            {/* Home page - protected route*/}
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='users'>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} title='Users' />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':userId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title='Add New User' />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='hotels'>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} title='Hotels' />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':hotelId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title='Add New Hotel' />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='rooms'>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} title='Rooms' />
                  </ProtectedRoute>
                }
              />
              <Route
                path=':roomId'
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path='new'
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title='Add New Room' />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
