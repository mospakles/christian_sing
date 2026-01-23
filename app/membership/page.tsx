"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Check,
  Star,
  Crown,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const MembershipPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [church, setChurch] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const membershipTiers = [
    {
      id: "supporter",
      name: "Supporter",
      price: "5,000",
      icon: Star,
      gradient: "from-sky-500 to-purple-500",
      benefits: [
        "Monthly newsletter updates",
        "Invitation to public events",
        "Access to hymnbook catalog",
        "Prayer support",
        "Annual report",
      ],
    },
    {
      id: "partner",
      name: "Partner",
      price: "15,000",
      icon: Award,
      gradient: "from-purple-600 to-sky-600",
      benefits: [
        "All Supporter benefits",
        "Complimentary hymnbook",
        "Priority event registration",
        "Quarterly ministry updates",
        "Recognition in annual publication",
        "Tax receipt for donations",
      ],
    },
    {
      id: "patron",
      name: "Patron",
      price: "50,000",
      icon: Crown,
      gradient: "from-purple-700 to-pink-600",
      benefits: [
        "All Partner benefits",
        "VIP seating at events",
        "Personal ministry update calls",
        "Invitation to exclusive gatherings",
        "Sponsor recognition",
        "Input on ministry direction",
        "Free ABRSM exam for one student",
      ],
    },
  ];

  const interestOptions = [
    "Prison Ministry",
    "School Ministry",
    "Health/Social Ministry",
    "Join The Choir",
    "Volunteer Teaching",
    "Event Planning",
    "Prayer Team",
    "Hymnbook Distribution",
  ];

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const handleSubmit = () => {
    console.log("Membership application:", {
      tier: selectedTier,
      fullName,
      email,
      phone,
      address,
      church,
      interests,
    });
    alert(
      "Thank you for your membership application! We will contact you shortly.",
    );
  };

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
              <Users className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">
                Join Our Community
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Become a Member
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Join our community and support our mission to spread the gospel
              through sacred music
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Membership Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
              Membership Tiers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => {
              const Icon = tier.icon;
              const isSelected = selectedTier === tier.id;

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`group relative cursor-pointer transform transition-all duration-500 ${
                    isSelected ? "scale-105" : "hover:scale-105"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`bg-gradient-to-br ${tier.gradient} p-1 rounded-3xl shadow-2xl ${
                      isSelected ? "ring-4 ring-purple-400 ring-offset-4" : ""
                    }`}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${tier.gradient} text-white p-8 relative overflow-hidden`}
                      >
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                              <Icon className="h-10 w-10" />
                            </div>
                            {isSelected && (
                              <div className="bg-white text-purple-900 p-2 rounded-full animate-bounce">
                                <Check className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                          <h3 className="text-3xl font-bold mb-2">
                            {tier.name}
                          </h3>
                          <div className="text-4xl font-bold mb-1">
                            ₦{tier.price}
                          </div>
                          <p className="text-sm opacity-90">per year</p>
                        </div>
                      </div>

                      <div className="p-6">
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start group/item"
                            >
                              <div
                                className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${tier.gradient} rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300`}
                              >
                                <Check className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-700 pt-0.5">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Membership Application */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-sky-600 p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 flex items-center">
              <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white ml-4">
                Membership Application
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            {/* Selected Tier Display */}
            {selectedTier && (
              <div
                className={`bg-gradient-to-r ${membershipTiers.find((t) => t.id === selectedTier)?.gradient} p-1 rounded-2xl`}
              >
                <div className="bg-white p-6 rounded-2xl">
                  <p className="text-lg font-bold text-purple-900 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2" />
                    Selected Tier:{" "}
                    {membershipTiers.find((t) => t.id === selectedTier)?.name}
                  </p>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-6">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="church"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Church/Parish
                  </label>
                  <input
                    type="text"
                    id="church"
                    value={church}
                    onChange={(e) => setChurch(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                    placeholder="Your church name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Address *
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                  placeholder="Your full address"
                />
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-4">
                Areas of Interest
              </h3>
              <p className="text-gray-600 mb-6">
                Select the ministries you&apos;d like to be involved with (optional)
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {interestOptions.map((interest) => (
                  <label
                    key={interest}
                    className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      interests.includes(interest)
                        ? "border-purple-500 bg-gradient-to-br from-sky-50 to-purple-50 shadow-lg"
                        : "border-gray-200 hover:border-purple-300 hover:shadow-md"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-4 focus:ring-purple-200"
                    />
                    <span
                      className={`ml-3 font-medium ${interests.includes(interest) ? "text-purple-900" : "text-gray-700"}`}
                    >
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t-2 border-gray-100">
              <button
                onClick={handleSubmit}
                disabled={
                  !selectedTier || !fullName || !email || !phone || !address
                }
                className="w-full bg-gradient-to-r from-purple-600 to-sky-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
              >
                <span className="flex items-center justify-center">
                  Submit Application
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                📧 After submission, you will receive payment instructions via
                email
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="mt-16 relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-sky-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Become a Member?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Heart,
                  title: "Make an Impact",
                  desc: "Your membership directly supports our ministries",
                },
                {
                  icon: Users,
                  title: "Join Community",
                  desc: "Connect with like-minded believers",
                },
                {
                  icon: Award,
                  title: "Exclusive Benefits",
                  desc: "Enjoy member-only perks and privileges",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-block p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sky-200">{item.desc}</p>
                  </div>
                );
              })}
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

export default MembershipPage;
