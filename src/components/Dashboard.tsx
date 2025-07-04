import React, { useState } from 'react';
import { 
  Home, BookOpen, Trophy, User, Settings, LogOut, 
  MessageCircle, TrendingUp, Calendar, Award,
  CheckCircle2, Clock, Target, BarChart3
} from 'lucide-react';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'lessons', label: 'My Lessons', icon: BookOpen },
    { id: 'certificates', label: 'Certificates', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const todaysLessons = [
    {
      course: 'Digital Marketing',
      lesson: 'Email Marketing Fundamentals',
      duration: '5 min',
      completed: false
    },
    {
      course: 'Business English',
      lesson: 'Professional Email Writing',
      duration: '4 min',
      completed: true
    }
  ];

  const achievements = [
    { title: '7-Day Streak', icon: '🔥', date: 'Today' },
    { title: 'First Certificate', icon: '🏆', date: 'Yesterday' },
    { title: 'Speed Learner', icon: '⚡', date: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LearnBot</span>
          </div>
        </div>
        
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-green-100 text-green-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
          
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-8"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">Ready to continue your learning journey?</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {user.subscription} Plan
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Streak</p>
                      <p className="text-2xl font-bold text-gray-900">{user.streak} days</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Lessons Completed</p>
                      <p className="text-2xl font-bold text-gray-900">{user.totalLessons}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Certificates</p>
                      <p className="text-2xl font-bold text-gray-900">{user.certificates}</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">This Week</p>
                      <p className="text-2xl font-bold text-gray-900">7/7</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Today's Lessons */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Lessons</h2>
                <div className="space-y-4">
                  {todaysLessons.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          lesson.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {lesson.completed ? 
                            <CheckCircle2 className="h-6 w-6 text-green-600" /> :
                            <Clock className="h-6 w-6 text-gray-600" />
                          }
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{lesson.lesson}</h3>
                          <p className="text-sm text-gray-600">{lesson.course} • {lesson.duration}</p>
                        </div>
                      </div>
                      {!lesson.completed && (
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Start Lesson
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lessons' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">My Learning Paths</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {user.courses.map((course: string, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{course}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Continue Learning
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">My Certificates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Marketing Basics</h3>
                  <p className="text-sm text-gray-600 mb-4">Completed Dec 15, 2024</p>
                  <button className="text-green-600 font-medium hover:text-green-700">
                    Download PDF
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Business Communication</h3>
                  <p className="text-sm text-gray-600 mb-4">Completed Dec 10, 2024</p>
                  <button className="text-green-600 font-medium hover:text-green-700">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;