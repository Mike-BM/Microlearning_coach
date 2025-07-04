import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [user, setUser] = useState<any>(null);

  const handleLogin = () => {
    // Simulate login
    setUser({ 
      name: 'Sarah Johnson', 
      phone: '+1 234 567 8900',
      subscription: 'Premium',
      courses: ['Digital Marketing', 'Business English'],
      streak: 15,
      totalLessons: 45,
      certificates: 2
    });
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  if (currentView === 'dashboard' && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLogin={handleLogin} />
      <Hero onGetStarted={handleLogin} />
      <Features />
      <HowItWorks />
      <Courses />
      <Pricing onSubscribe={handleLogin} />
      <Footer />
    </div>
  );
}

export default App;