'use client';

import React, { useEffect, useState } from 'react';
import { Users, Book, Heart, Music, Mail, Phone, Award, Sparkles, Calendar, MapPin } from 'lucide-react';

const MinistriesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[Users, Book, Heart, Music].map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-white opacity-10 animate-float"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.7}s`,
                fontSize: '40px'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">Serving Communities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Ministries
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Our ministries continue to grow as we strive to obey the great commission
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-12">
          {/* Prison Ministry */}
          <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative bg-gradient-to-r from-purple-600 to-sky-600 text-white p-8 overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center">
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl md:text-4xl font-bold">The Prison Ministry</h2>
                  <p className="text-sky-100 mt-1">Bringing hope through hymns</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We visited the Lord&apos;s people in prison. Oh! What joy to hear them sing loftily from the SSS hymn books. In 2019, we partnered with All Saints Anglican Church, Yaba, Cathedral Church of Christ, Marina, Lagos and Our Saviours Church, Tafawa Balewa Square, Lagos. We are grateful to God for the opportunity to bring joy to His people.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-sky-50 p-6 rounded-2xl border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    What We Do
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Distribute hymnbooks to prison facilities",
                      "Lead worship services with inmates",
                      "Provide spiritual encouragement through music",
                      "Partner with local churches for outreach"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-sky-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    2019 Partnerships
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "All Saints Anglican Church, Yaba",
                      "Cathedral Church of Christ, Marina",
                      "Our Saviours Church, Tafawa Balewa Square"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs">•</span>
                        </div>
                        <span className="text-gray-700 pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* School Ministry */}
          <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative bg-gradient-to-r from-sky-600 to-purple-600 text-white p-8 overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center">
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Book className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl md:text-4xl font-bold">School Ministry</h2>
                  <p className="text-sky-100 mt-1">Nurturing young talents</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We sing and distribute hymns in one school each quarter. We offer music and leadership/grooming classes on Saturdays 4-6pm. 11 of our students passed the ABRSM exams in 2019. We are presenting six students for the ABRSM exams in March 2020.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-sky-50 to-purple-50 p-6 rounded-2xl border-l-4 border-sky-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-sky-900 mb-4 text-lg flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    Programs Offered
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Music theory and practice classes",
                      "ABRSM exam preparation",
                      "Leadership and grooming classes",
                      "Saturday classes: 4-6pm",
                      "Quarterly school visits with hymn distribution"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-sky-500 to-purple-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-l-4 border-yellow-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-yellow-900 mb-4 text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Achievements
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="font-semibold text-gray-900 mb-1">2019 Results</p>
                      <p className="text-gray-700">11 students successfully passed ABRSM exams</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="font-semibold text-gray-900 mb-1">2020 Candidates</p>
                      <p className="text-gray-700">6 students preparing for March 2020 exams</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-500 to-purple-600 text-white p-4 rounded-2xl text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <Calendar className="h-6 w-6 inline-block mr-2" />
                <span className="font-semibold">Class Schedule: Saturdays, 4:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Health/Social Ministry */}
          <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative bg-gradient-to-r from-purple-700 to-pink-600 text-white p-8 overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center">
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="h-10 w-10 animate-pulse" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Health/Social Ministry</h2>
                  <p className="text-purple-100 mt-1">Caring through music and fellowship</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We worship with the children, their families, and the care givers at the Cerebral Palsy Centre on the last Sunday of every month. We also fellowship with the old people at the Old Peoples Home in Yaba, Lagos. We are working with other homes to bring them succour.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Ministry Activities
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Monthly worship at Cerebral Palsy Centre",
                      "Fellowship at Old Peoples Home, Yaba",
                      "Music therapy and spiritual support",
                      "Expanding partnerships with care facilities",
                      "Bringing comfort through hymns and psalms"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border-l-4 border-indigo-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-indigo-900 mb-4 text-lg flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Regular Schedule
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="font-semibold text-gray-900">Cerebral Palsy Centre</p>
                      <p className="text-sm text-gray-600">Last Sunday of every month</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="font-semibold text-gray-900">Old Peoples Home, Yaba</p>
                      <p className="text-sm text-gray-600">Regular fellowship visits</p>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl">
                      <p className="text-sm italic text-gray-700">We are actively expanding to partner with more care facilities across Lagos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Choir */}
          <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative bg-gradient-to-r from-sky-700 to-purple-700 text-white p-8 overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center">
                <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Music className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl md:text-4xl font-bold">The Choir</h2>
                  <p className="text-sky-100 mt-1">Developing talents to serve</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We develop the various talents that the Lord has imbued in us. Our Choristers learn the theory and practice of good singing. Our choristers learn to give as they lead the other ministries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-purple-50 p-6 rounded-2xl border-l-4 border-sky-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-sky-900 mb-4 text-lg flex items-center">
                    <Music className="h-5 w-5 mr-2" />
                    Training Focus
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Vocal technique and musicianship",
                      "Music theory fundamentals",
                      "Worship leading skills",
                      "Performance practice and stage presence",
                      "Sacred music repertoire"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <span className="text-sky-600 mr-3 text-xl group-hover/item:scale-125 transition-transform duration-300">♪</span>
                        <span className="text-gray-700 pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-sky-50 p-6 rounded-2xl border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Service Opportunities
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Leading prison ministry worship",
                      "Performing at school events",
                      "Ministering at care facilities",
                      "Church service participation",
                      "Community outreach programs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <span className="text-purple-600 mr-3 text-xl group-hover/item:scale-125 transition-transform duration-300">♪</span>
                        <span className="text-gray-700 pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-sky-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          </div>

          <div className="relative z-10 text-center">
            <Sparkles className="h-16 w-16 text-sky-300 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner With Us
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              If your church or parish desires to host any of our programmes, or wishes to collaborate with us in any of our ministries, please get in touch with us.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <a href="mailto:info@christiansingfoundation.org" className="flex items-center text-white hover:text-sky-300 transition-colors duration-300 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@christiansingfoundation.org</span>
              </a>
              <div className="flex items-center text-white bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                <div className="flex gap-2">
                  <a href="tel:+2348035390860" className="hover:text-sky-300 transition-colors duration-300">08035390860</a>
                  <span>|</span>
                  <a href="tel:+2348032006518" className="hover:text-sky-300 transition-colors duration-300">08032006518</a>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Contact Us Today
            </a>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default MinistriesPage;