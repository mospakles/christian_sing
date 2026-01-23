"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Book,
  Heart,
  Calendar,
  ArrowRight,
  Sparkles,
  Music,
  Award,
} from "lucide-react";

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Floating Musical Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Music
              key={i}
              className="absolute text-white opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${Math.random() * 30 + 20}px`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-6 animate-pulse">
              <Sparkles className="h-5 w-5 text-sky-300 mr-2" />
              <span className="text-sky-100 text-sm font-semibold">
                Spreading the Gospel Through Music
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              All Things Are Possible to
              <span className="block bg-gradient-to-r from-sky-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                Him Who Believes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Propagating the Word through excellence in church and choral music
              using education, performance, composition and advocacy.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/get-involved"
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-sky-500/50"
              >
                <span className="relative z-10 flex items-center">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <a
                href="/about"
                className="px-8 py-4 bg-opacity-10 backdrop-blur-md text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Cards */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400 to-purple-500 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-3xl font-bold text-purple-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A hymnbook in every Christian&apos;s hands
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-sky-500 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="text-3xl font-bold text-sky-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To propagate the Word through excellence in church/choral
                  music using education, performance, composition and advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Overview with Hover Effects */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
              Our Ministries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving communities across Nigeria through music, worship, and
              education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Prison Ministry",
                description:
                  "Bringing joy and worship to those in prison through hymns and spiritual fellowship.",
                gradient: "from-purple-500 to-sky-500",
              },
              {
                icon: Book,
                title: "School Ministry",
                description:
                  "Music education, leadership training, and ABRSM exam preparation for students.",
                gradient: "from-sky-500 to-purple-500",
              },
              {
                icon: Heart,
                title: "Health/Social Ministry",
                description:
                  "Worship and fellowship with children, families, and elderly in care centers.",
                gradient: "from-purple-600 to-pink-500",
              },
            ].map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-sky-50 to-purple-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ministry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-block p-4 bg-gradient-to-br ${ministry.gradient} rounded-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-purple-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-sky-700 group-hover:bg-clip-text transition-all duration-300">
                      {ministry.title}
                    </h3>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {ministry.description}
                    </p>

                    <a
                      href="/ministries"
                      className="inline-flex items-center text-purple-700 font-semibold group-hover:text-sky-700 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section with Beautiful Design */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 shadow-2xl">
            <Music className="h-16 w-16 text-sky-300 mx-auto mb-6 animate-pulse" />
            <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
              &quot;Holy words long preserved for our walk in this world; they
              resound with God&apos;s own heart; O let the ancient words
              impart.&quot;
            </blockquote>
            <footer className="text-sky-200 font-semibold">
              — Lynn DeShazo
            </footer>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                date: "January 26",
                title: "Thanksgiving Service",
                subtitle: "4th Sunday in January",
              },
              {
                date: "May 3",
                title: "Power of His Resurrection",
                subtitle: "3rd Sunday after Easter",
              },
              {
                date: "September 27",
                title: "Our Service to God & Nation",
                subtitle: "Sunday before October 1",
              },
              {
                date: "November 29",
                title: "The Advent of Our Lord",
                subtitle: "1st Sunday in Advent",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500 hover:border-sky-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-sky-100 to-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6 text-purple-700" />
                  </div>
                  <span className="ml-3 text-sm font-semibold text-gray-600">
                    {event.date}
                  </span>
                </div>
                <h3 className="font-bold text-purple-900 mb-2 text-lg group-hover:text-sky-700 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Active Ministries", icon: Heart },
              { value: "11", label: "ABRSM Graduates (2019)", icon: Award },
              { value: "100+", label: "Lives Touched", icon: Users },
              { value: "∞", label: "Hymns Shared", icon: Music },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Us in Spreading the Gospel Through Song
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Support our mission to bring hymnbooks to churches, prisons,
            hospitals, and schools across Nigeria.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50"
          >
            Donate Now
          </a>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
