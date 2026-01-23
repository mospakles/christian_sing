"use client";

import React, { useState, useEffect } from "react";
import { Heart, Quote, MapPin, Calendar, Sparkles, Filter } from "lucide-react";

interface ImpactStory {
  id: number;
  title: string;
  story: string;
  author: string;
  location: string;
  ministry: string;
  date: string;
}

const ImpactStoriesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impactStories: ImpactStory[] = [
    {
      id: 1,
      title: "Music Brought Light to My Dark Cell",
      story:
        "I never thought I would find peace in prison. But when ChristianSing came to our facility and distributed hymnbooks, something changed. Learning the ancient words of faith gave me hope. Singing 'Amazing Grace' with the choir reminded me that God's love reaches even here, even me. Today, I lead worship in our prison chapel, helping other inmates find the same peace I found.",
      author: "Michael A.",
      location: "Lagos Prison",
      ministry: "Prison Ministry",
      date: "2019",
    },
    {
      id: 2,
      title: "From Student to ABRSM Graduate",
      story:
        "I joined ChristianSing's Saturday music classes with no knowledge of music theory. The patient teachers not only taught me to read music but also showed me how to use my voice to glorify God. Passing my ABRSM exam was a dream come true! Now I'm helping teach younger students and leading worship at my church. Music has opened doors I never knew existed.",
      author: "Grace O.",
      location: "Lagos",
      ministry: "School Ministry",
      date: "2019",
    },
    {
      id: 3,
      title: "A Mother's Gratitude",
      story:
        "My son has cerebral palsy, and finding community has always been challenging. When ChristianSing started their monthly worship at the Cerebral Palsy Centre, it transformed our lives. The joy on my son's face when he hears the hymns is indescribable. The care givers sing with us, the children are blessed, and we all feel like one family in Christ. This ministry has given us hope and belonging.",
      author: "Mrs. Adeyemi",
      location: "Lagos",
      ministry: "Health/Social Ministry",
      date: "2019",
    },
    {
      id: 4,
      title: "Finding Purpose in the Golden Years",
      story:
        "At the Old Peoples Home, days can feel long and lonely. But every time ChristianSing visits, the entire atmosphere changes. The hymns remind us of our youth, of family gatherings, of church services we attended decades ago. The young people who come to sing with us show such love and respect. They make us feel valued and remembered. These visits are the highlight of our month.",
      author: "Elder Johnson",
      location: "Yaba, Lagos",
      ministry: "Health/Social Ministry",
      date: "2019",
    },
    {
      id: 5,
      title: "The Power of Ancient Words",
      story:
        "Our church partnered with ChristianSing for their prison ministry outreach. Seeing the transformation in the inmates' faces as they sang was powerful beyond words. The hymns touched hearts in ways our preaching alone couldn't reach. Several inmates gave their lives to Christ that day. This experience reminded our congregation of the evangelistic power of sacred music.",
      author: "Pastor David",
      location: "All Saints Anglican Church, Yaba",
      ministry: "Prison Ministry",
      date: "2019",
    },
    {
      id: 6,
      title: "Music Healed My Broken Spirit",
      story:
        "After losing my husband, I struggled with depression and couldn't find comfort anywhere. A friend gave me a hymnbook from ChristianSing. Reading the words 'Be still my soul' and 'It is well with my soul' brought tears and healing. I started attending their programs and joined the choir. Singing these ancient words of faith with others who understand has restored my joy and given me a new purpose in life.",
      author: "Sister Rebecca",
      location: "Lagos",
      ministry: "The Choir",
      date: "2020",
    },
  ];

  const ministryCategories = [
    { value: "all", label: "All Stories", color: "from-purple-500 to-sky-500" },
    {
      value: "Prison Ministry",
      label: "Prison Ministry",
      color: "from-purple-600 to-pink-600",
    },
    {
      value: "School Ministry",
      label: "School Ministry",
      color: "from-sky-600 to-purple-600",
    },
    {
      value: "Health/Social Ministry",
      label: "Health/Social Ministry",
      color: "from-purple-700 to-pink-600",
    },
    {
      value: "The Choir",
      label: "The Choir",
      color: "from-sky-700 to-purple-700",
    },
  ];

  const filteredStories =
    selectedMinistry === "all"
      ? impactStories
      : impactStories.filter((story) => story.ministry === selectedMinistry);

  const getMinistryGradient = (ministry: string) => {
    const found = ministryCategories.find((cat) => cat.value === ministry);
    return found?.color || "from-purple-500 to-sky-500";
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-sky-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">
                Real Stories, Real Impact
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Impact Stories
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Real lives transformed through the power of sacred music
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Filter Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-12 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-100 to-sky-100 rounded-xl">
              <Filter className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 ml-3">
              Filter by Ministry
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {ministryCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedMinistry(category.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedMinistry === category.value
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                    : "bg-gradient-to-br from-sky-50 to-purple-50 text-gray-700 hover:shadow-lg"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-2 bg-gradient-to-r ${getMinistryGradient(story.ministry)}`}
              ></div>

              <div className="p-8 md:p-10">
                <div className="flex items-start mb-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${getMinistryGradient(story.ministry)} rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-sky-700 group-hover:bg-clip-text transition-all duration-300">
                      {story.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="inline-flex items-center text-gray-600 bg-gradient-to-br from-sky-50 to-purple-50 px-4 py-2 rounded-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        {story.location}
                      </span>
                      <span
                        className={`inline-flex items-center bg-gradient-to-r ${getMinistryGradient(story.ministry)} text-white px-4 py-2 rounded-full font-semibold`}
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        {story.ministry}
                      </span>
                      <span className="inline-flex items-center text-gray-600 bg-gradient-to-br from-sky-50 to-purple-50 px-4 py-2 rounded-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        {story.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-purple-50 p-6 rounded-2xl mb-6">
                  <p className="text-gray-800 leading-relaxed text-lg italic">
                    &quot;{story.story}&quot;
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {story.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-purple-900">
                      — {story.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-sky-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          </div>

          <div className="relative z-10">
            <Sparkles className="h-16 w-16 text-sky-300 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Share Your Story?
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Have you been blessed by ChristianSing&apos;s ministry? We&apos;d love to
              hear from you!
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-sky-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Share Your Story
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-8 text-center">
            Our Impact by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "100+",
                label: "Lives Touched",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                value: "11",
                label: "ABRSM Graduates",
                gradient: "from-sky-500 to-purple-500",
              },
              {
                value: "3",
                label: "Active Ministries",
                gradient: "from-purple-600 to-sky-600",
              },
              {
                value: "∞",
                label: "Hymns Shared",
                gradient: "from-sky-600 to-purple-700",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
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

export default ImpactStoriesPage;
