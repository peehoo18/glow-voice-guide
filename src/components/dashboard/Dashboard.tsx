import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon, MessageCircle, PlayCircle, User, Bell, Sparkles, Droplets, Moon as Sleep } from 'lucide-react';
import heroImage from "@/assets/hero-skincare.jpg";

interface User {
  name: string;
  email: string;
  skinType: string;
  ageGroup: string;
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getSkincareRoutine = (timeOfDay: 'morning' | 'night') => {
    const baseRoutine = {
      morning: [
        'Gentle cleanser',
        'Vitamin C serum',
        'Moisturizer',
        'SPF 30+ sunscreen'
      ],
      night: [
        'Double cleanse',
        'Exfoliant (2-3x/week)',
        'Retinol serum',
        'Night moisturizer'
      ]
    };

    return baseRoutine[timeOfDay];
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-gradient-card shadow-soft border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {getGreeting()}, {user.name}!
                </h1>
                <p className="text-sm text-muted-foreground">
                  {user.skinType} skin • {user.ageGroup} years
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Skincare products" 
            className="w-full h-48 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your Personalized Skincare Journey
          </h2>
          <p className="text-muted-foreground">
            AI-powered routines, voice guidance, and expert tutorials
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="routine" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm border border-border/50">
            <TabsTrigger 
              value="routine" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center space-x-2"
            >
              <Sun className="w-4 h-4" />
              <span className="hidden sm:inline">Daily Routine</span>
            </TabsTrigger>
            <TabsTrigger 
              value="chat" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">AI Q&A Chat</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tutorials" 
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground flex items-center space-x-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Tutorials</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="routine" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Morning Routine */}
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Sun className="w-5 h-5" />
                    <span>Morning Routine</span>
                  </CardTitle>
                  <CardDescription>Start your day with glowing skin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getSkincareRoutine('morning').map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                  <Button variant="hero" className="w-full mt-4">
                    <Bell className="w-4 h-4 mr-2" />
                    Read Aloud
                  </Button>
                </CardContent>
              </Card>

              {/* Night Routine */}
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-secondary">
                    <Moon className="w-5 h-5" />
                    <span>Night Routine</span>
                  </CardTitle>
                  <CardDescription>Repair and rejuvenate overnight</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getSkincareRoutine('night').map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs text-secondary-foreground font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                  <Button variant="secondary" className="w-full mt-4">
                    <Bell className="w-4 h-4 mr-2" />
                    Read Aloud
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracker */}
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle>Daily Progress Tracker</CardTitle>
                <CardDescription>Track your skincare consistency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Droplets className="w-8 h-8 mx-auto text-secondary mb-2" />
                    <p className="text-sm text-muted-foreground">Water Intake</p>
                    <p className="text-2xl font-bold text-foreground">6/8</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Sleep className="w-8 h-8 mx-auto text-accent mb-2" />
                    <p className="text-sm text-muted-foreground">Sleep Hours</p>
                    <p className="text-2xl font-bold text-foreground">7.5h</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Sun className="w-8 h-8 mx-auto text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">SPF Applied</p>
                    <p className="text-2xl font-bold text-foreground">✓</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span>AI Skincare Assistant</span>
                </CardTitle>
                <CardDescription>Ask me anything about skincare!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 min-h-[300px] bg-muted/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hi! I'm your AI skincare assistant. What would you like to know about {user.skinType} skin care?</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Type Message
                  </Button>
                  <Button variant="secondary">
                    <Bell className="w-4 h-4 mr-2" />
                    Voice Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PlayCircle className="w-5 h-5 text-accent" />
                    <span>Morning Skincare Routine</span>
                  </CardTitle>
                  <CardDescription>Step-by-step morning routine guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <Button variant="accent" className="w-full">
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PlayCircle className="w-5 h-5 text-accent" />
                    <span>Understanding Your Skin Type</span>
                  </CardTitle>
                  <CardDescription>Learn about {user.skinType} skin characteristics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <Button variant="accent" className="w-full">
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};