import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<div>Hello, Home</div>}></Route>
        <Route
          path='conversations'
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        ></Route>
        <Route path=':id' element={<div>Conversation ID Page</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
