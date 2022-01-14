import React from 'react';
import './App.css';
import AllPost from './components/AllPosts';
import Article from './components/Article';
import Event from './components/Event';
import Education from './components/Education';
import NoMatch from './components/NoMatch';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <div className="mother-cont">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPost />} />
          <Route path="article" element={<Article />} />
          <Route path="event" element={<Event />} />
          <Route path="education" element={<Education />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
