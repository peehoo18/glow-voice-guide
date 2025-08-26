import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Heart, Users } from 'lucide-react';

interface AuthFormProps {
  onAuthenticate: (user: { name: string; email: string; skinType: string; ageGroup: string }) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticate }) => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    skinType: 'combination',
    ageGroup: '25-35' 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    onAuthenticate({
      name: 'Welcome back',
      email: loginForm.email,
      skinType: 'combination',
      ageGroup: '25-35'
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthenticate({
      name: signupForm.name,
      email: signupForm.email,
      skinType: signupForm.skinType,
      ageGroup: signupForm.ageGroup
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-card shadow-soft border-0">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SkinCare VoiceBot
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your personalized skincare companion
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Welcome Back
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    placeholder="Your name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="skin-type">Skin Type</Label>
                    <select
                      id="skin-type"
                      value={signupForm.skinType}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, skinType: e.target.value }))}
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="oily">Oily</option>
                      <option value="dry">Dry</option>
                      <option value="combination">Combination</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age-group">Age Group</Label>
                    <select
                      id="age-group"
                      value={signupForm.ageGroup}
                      onChange={(e) => setSignupForm(prev => ({ ...prev, ageGroup: e.target.value }))}
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="16-24">16-24</option>
                      <option value="25-35">25-35</option>
                      <option value="36-45">36-45</option>
                      <option value="46+">46+</option>
                    </select>
                  </div>
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Start Your Journey
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};