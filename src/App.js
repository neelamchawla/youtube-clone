import React from 'react';
import './css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './component/Header';
import Sidebar from './component/Sidebar';
import RecommendedVideos from './component/RecommendedVideos';
import SearchPage from './component/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
       <Header />

        <Switch>
          <Route exact path='/'>
            <div className="app_page">
            <Sidebar />
            <RecommendedVideos />
            </div>
          </Route>
          
          <Route path='/search/:searchTerm'>
            <div className="app_page">
            <Sidebar />
            <SearchPage />
            </div>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
