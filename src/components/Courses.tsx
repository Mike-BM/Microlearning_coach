import React from 'react';
import { Code, Globe, Briefcase, TrendingUp, Users, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: 'Digital Skills',
      description: 'Web development, digital marketing, data analysis, and more',
      lessons: 45,
      duration: '6 weeks',
      level: 'Beginner to Advanced',
      rating: 4.8,
      students: '12.5k',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Business English',
      description: 'Professional communication, presentations, and workplace English',
      lessons: 38,
      duration: '5 weeks',
      level: 'Intermediate',
      rating: 4.9,
      students: '8.2k',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Vocational Training',
      description: 'Practical skills for trades, healthcare, hospitality, and more',
      lessons: 52,
      duration: '8 weeks',
      level: 'All Levels',
      rating: 4.7,
      students: '15.3k',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated courses designed by industry experts 
            and delivered in digestible daily lessons.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${course.color} text-white mb-4`}>
                  <course.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Lessons:</span>
                    <span className="font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students
                  </div>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want a custom learning path?</p>
          <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
            Contact Our Learning Experts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;