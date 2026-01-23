"use client";

import React, { useEffect, useState } from "react";
import {
  Target,
  GraduationCap,
  Music2,
  Feather,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const MissionPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      icon: GraduationCap,
      title: "Education",
      color: "from-purple-600 to-sky-600",
      description:
        "We provide comprehensive music theory and practice training to develop God-given talents. Our educational programs include:",
      points: [
        "ABRSM exam preparation and certification",
        "Leadership and grooming classes for young people",
        "Vocal technique and choral training",
        "Saturday music classes (4-6pm)",
      ],
    },
    {
      icon: Music2,
      title: "Performance",
      color: "from-sky-600 to-purple-600",
      description:
        "Our choir leads worship services and performs at various venues, bringing the beauty of sacred music to diverse audiences:",
      points: [
        "Regular worship services at partnering churches",
        "Prison ministry performances and worship leading",
        "School presentations and educational concerts",
        "Healthcare facility ministry and care center visits",
      ],
    },
    {
      icon: Feather,
      title: "Composition",
      color: "from-purple-700 to-pink-600",
      description:
        "We encourage the creation of new sacred music while preserving and reviving ancient hymns:",
      points: [
        "Preserving ancient hymns that carry timeless truths",
        "Encouraging new compositions inspired by Scripture",
        "Adapting traditional hymns for contemporary worship",
        "Supporting local composers and arrangers",
      ],
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      color: "from-sky-700 to-purple-700",
      description:
        "We promote the importance of quality church music in worship and evangelism:",
      points: [
        "Distributing hymnbooks to churches, prisons, hospitals, and schools",
        "Partnering with churches to enhance worship quality",
        "Raising awareness about the spiritual power of hymns",
        "Encouraging daily devotion through hymnals",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
              <Target className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">
                Our Purpose
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-sky-100">
              Guided by faith, empowered by music
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative bg-gradient-to-br from-purple-600 to-sky-600 p-1 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-sky-200 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="h-10 w-10 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To propagate the Word through excellence in church/choral
                  music using education, performance, composition and advocacy.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-sky-600 to-purple-600 p-1 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-200 to-purple-200 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Music2 className="h-10 w-10 text-sky-700 animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-sky-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A hymnbook in every Christian&apos;s hands
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Fulfill Our Mission */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
              How We Fulfill Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`bg-gradient-to-r ${pillar.color} text-white p-6 relative overflow-hidden`}
                  >
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex items-center">
                      <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold ml-4">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {pillar.description}
                    </p>
                    <div className="space-y-3">
                      {pillar.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-start group/item hover:bg-gradient-to-r hover:from-sky-50 hover:to-purple-50 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <Sparkles className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 pt-1">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Christ for the World */}
        <div className="bg-gradient-to-br from-sky-50 to-purple-50 p-8 md:p-12 rounded-3xl border-l-4 border-purple-600 mb-16 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl">
              <Music2 className="h-8 w-8 text-purple-700 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent ml-4">
              Christ for the World We Sing
            </h3>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Music is at the heart of evangelism. Through our various ministries,
            we bring the message of hope and salvation to those in prisons,
            schools, hospitals, and care centers.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe that the ancient words of hymns, preserved through
            generations, carry God&apos;s own heart and can transform lives today.
            These holy words provide strength, hope, and guidance as we navigate
            our walk in this world.
          </p>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <Sparkles className="h-16 w-16 text-sky-300 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Help us put a hymnbook in every Christian&apos;s hands and spread
              the gospel through music
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/get-involved"
                className="group px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center"
              >
                Support Our Mission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/membership"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
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

export default MissionPage;
