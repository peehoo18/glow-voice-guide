import React, { useState } from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Dashboard } from '@/components/dashboard/Dashboard';

interface User {
  name: string;
  email: string;
  skinType: string;
  ageGroup: string;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleAuthenticate = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <AuthForm onAuthenticate={handleAuthenticate} />;
  }

  return <Dashboard user={user} onLogout={handleLogout} />;
};

export default Index;