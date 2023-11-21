import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './About';
import Privacy from './Privacy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Term from './Term';
import Faq from './Faq';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/term" element={<Term/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

reportWebVitals();
