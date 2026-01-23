"use client";

import React, { useEffect, useState } from "react";
import { Music, Heart, BookOpen, Users, Sparkles, Award } from "lucide-react";

const AboutPage: React.FC = () => {
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-sky-300 mr-2" />
              <span className="text-sky-100 text-sm font-semibold">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About ChristianSing Foundation
            </h1>
            <p className="text-xl text-sky-100">
              Reviving the use of holy ancient words preserved as hymns
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            ChristianSing is registered as a not-for-profit organisation. We are
            affiliated with the Royal School of Church Music, England. We obey
            the last commission &quot;go ye&quot;. We revive the use of the holy
            ancient words preserved as hymns.
          </p>

          {/* Animated Quote Box */}
          <div className="relative bg-gradient-to-br from-sky-50 to-purple-50 p-8 rounded-2xl mb-8 border-l-4 border-purple-600 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400 to-purple-500 rounded-full -mr-16 -mt-16 opacity-10 group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10 space-y-4 italic text-gray-800">
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Holy words long preserved for our walk in this world; they
                resound with God&apos;s own heart; O let the ancient words
                impart.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Holy words of our faith handed down to this age, came to us
                through sacrifice, O heed the faithful words of Christ.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Words of life, words of hope, give us strength, help us cope, in
                this world, where e&apos;er we roam; Ancient words will guide us
                home.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                Ancient words ever true, changing me and changing you; We have
                come with open hearts, Oh, let the ancient words impart.
              </p>
              <p className="text-right text-sm font-semibold text-purple-900 not-italic mt-4">
                — Lynn DeShazo
              </p>
            </div>
          </div>
        </div>

        {/* Value of Church Music */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 overflow-hidden group">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Music className="h-8 w-8 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent ml-4">
              The Value of Good Church Music
            </h2>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The value of good church music cannot be over emphasised; it
            transforms the worship and life of all who worship Him with hymns
            and psalms.
          </p>

          <div className="space-y-4">
            {[
              "Good church music draws people into the heart of worship",
              "Good music sustains, challenges and inspires our worship",
              "Music is at the heart of evangelism",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start group/item hover:bg-gradient-to-r hover:from-sky-50 hover:to-purple-50 p-4 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 pt-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 overflow-hidden group">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8 text-sky-700 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-purple-900 bg-clip-text text-transparent ml-4">
              Our Commitment
            </h2>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We propagate and spread the gospel of Christ through singing.
          </p>

          <div className="bg-gradient-to-br from-sky-50 to-purple-50 p-6 rounded-2xl mb-6 border-l-4 border-sky-600">
            <p className="text-gray-800 italic leading-relaxed">
              We will sing, we will pray. We will witness everyday; That the
              millions of the whole wide world, May know our Saviour&apos;s
              love.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            To this end we sing, and we distribute hymnbooks in churches,
            prisons, hospitals, hospices and schools, wherever the Word can be
            preached. We bring succour to His flock, through hymns and psalms.
            We admonish our souls with good inspired music.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-sky-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-sky-300 mr-3" />
              <h2 className="text-3xl font-bold text-white">Join Us Today</h2>
            </div>

            <p className="text-sky-00 mb-6">We invite you to:</p>

            <div className="space-y-3 mb-8">
              {[
                "Join us and support our mission",
                "Own your own hymnbooks and use them",
                "Sing if you know the tunes, read the words if you don't",
                "Give hymnbooks as gifts",
                "Pray for His kingdom on earth",
                "Join our prison, school and health ministries",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start group/item bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl hover:bg-opacity-20 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-400 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-purple-900 font-bold text-sm">✓</span>
                  </div>
                  <span className=" pt-0.5">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/membership"
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Become a Member
            </a>
          </div>
        </div>

        {/* Affiliation */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 overflow-hidden group">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent ml-4">
              Our Affiliation
            </h2>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We are proud to be affiliated with the Royal School of Church Music,
            England, one of the world&apos;s leading organizations dedicated to
            the promotion of church music excellence.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This affiliation ensures that our programs meet international
            standards while maintaining our unique focus on serving Nigerian
            communities through music and worship.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Support our mission today and help us spread the love of Christ
            through music
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-full font-bold hover:from-purple-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-900 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
