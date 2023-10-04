// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './component/UserList';
import AlbumsList from './component/AlbumList';
import PhotosList from './component/PhotosList';

export default function App() {
  return (
    <Router>
      <div>
        <h1>List of Users</h1>
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/albums/:userId' element={<AlbumsList />} />
          <Route path='/photos/:albumId' element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
}
