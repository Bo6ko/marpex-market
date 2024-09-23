import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import Error from './pages/error/Error';
// Header
import Header from './components/elements/header/Header';
import Footer from './components/elements/footer/Footer';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/common/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';

function App() {
  return (
    
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense fallback="Loading ...">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </Router>
    
  );
}

export default App;
