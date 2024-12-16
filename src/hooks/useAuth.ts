import { useState, useCallback } from 'react';
import { validateEmail, validatePassword } from '../utils/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setError(null);
    
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return false;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return false;
    }

    // Simulate API call
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setError('Authentication failed');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    error,
    login,
    logout
  };
};