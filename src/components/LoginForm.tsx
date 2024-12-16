import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { useAuth } from '../hooks/useAuth';

export default function LoginForm() {
  const { login, error } = useAuth();
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
  };

  return (
    <Card className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {isLogin ? 'Welcome Back!' : 'Create Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          icon={<Mail className="h-5 w-5" />}
          placeholder="Enter your email"
          required
          error={error}
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          icon={<Lock className="h-5 w-5" />}
          placeholder="Enter your password"
          required
        />

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-purple-600 hover:text-purple-500 font-medium"
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </Card>
  );
}