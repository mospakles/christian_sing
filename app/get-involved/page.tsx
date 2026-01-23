"use client";

import React, { useState, useEffect } from "react";
import {
  Heart,
  DollarSign,
  Users,
  BookOpen,
  Handshake,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const GetInvolvedPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const presetAmounts = ["5000", "10000", "25000", "50000", "100000"];

  const handleDonation = () => {
    const amount = customAmount || donationAmount;
    console.log("Processing donation:", {
      amount,
      donorName,
      donorEmail,
      donorPhone,
      message,
    });
    alert(
      `Thank you for your donation of ₦${amount}! You will be redirected to payment gateway.`,
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
              <Heart className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">
                Make an Impact
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get Involved
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Join us in spreading the love of Christ through music and ministry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: "Donate",
              description:
                "Support our mission financially to help us reach more communities with the gospel through music.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Users,
              title: "Volunteer",
              description:
                "Join our choir or ministry teams to serve in prisons, schools, and care facilities.",
              gradient: "from-sky-500 to-purple-500",
            },
            {
              icon: BookOpen,
              title: "Share Hymnbooks",
              description:
                "Help distribute hymnbooks as gifts to churches, hospitals, and individuals.",
              gradient: "from-purple-600 to-sky-600",
            },
          ].map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${way.gradient}`}></div>
                <div className="p-8 text-center">
                  <div
                    className={`inline-block p-5 bg-gradient-to-br ${way.gradient} rounded-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-sky-700 group-hover:bg-clip-text transition-all duration-300">
                    {way.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {way.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-sky-600 p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 flex items-center">
              <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white ml-4">
                Support Our Mission
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              If you have been blessed by our worship together, please consider
              a donation to ChristianSing Foundation. No amount is small. Your
              token of love encourages and helps us to spread the love of
              Christ. Whatever you give goes towards our mission of promoting
              excellence in choral/church music through education, performance,
              composition and advocacy.
            </p>

            <div className="space-y-6">
              {/* Preset Amounts */}
              <div>
                <label className="block text-lg font-bold text-purple-900 mb-4">
                  Select Amount (NGN)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-4 px-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        donationAmount === amount && !customAmount
                          ? "bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-xl"
                          : "bg-gradient-to-br from-sky-50 to-purple-50 text-gray-700 hover:shadow-lg"
                      }`}
                    >
                      ₦{parseInt(amount).toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label
                  htmlFor="customAmount"
                  className="block text-lg font-bold text-purple-900 mb-2"
                >
                  Or Enter Custom Amount (NGN)
                </label>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount("");
                  }}
                  placeholder="Enter amount"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 text-lg"
                />
              </div>

              {/* Donor Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="donorName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="donorName"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="donorEmail"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="donorEmail"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="donorPhone"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="donorPhone"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                  placeholder="Leave us a message..."
                />
              </div>

              <button
                onClick={handleDonation}
                disabled={
                  !donorName ||
                  !donorEmail ||
                  !donorPhone ||
                  (!donationAmount && !customAmount)
                }
                className="w-full bg-gradient-to-r from-purple-600 to-sky-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
              >
                <span className="flex items-center justify-center">
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <p className="text-sm text-gray-600 text-center">
                🔒 You will be redirected to a secure payment page
              </p>
            </div>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-8 text-center">
            Other Ways to Help
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-sky-100 rounded-xl">
                  <Handshake className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 ml-3">
                  Partner with Us
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your church or organization would like to host our programs
                or collaborate on ministry initiatives, we'd love to hear from
                you.
              </p>
              <a
                href="/contact"
                className="text-purple-700 font-bold hover:text-sky-700 inline-flex items-center group"
              >
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-sky-100 to-purple-100 rounded-xl">
                  <BookOpen className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="text-xl font-bold text-sky-900 ml-3">
                  Sponsor Hymnbooks
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sponsor hymnbooks for distribution to prisons, schools,
                hospitals, or hospices. Give the gift of worship to those who
                need it most.
              </p>
              <a
                href="/contact"
                className="text-sky-700 font-bold hover:text-purple-700 inline-flex items-center group"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-sky-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          </div>

          <div className="relative z-10">
            <CheckCircle className="h-20 w-20 text-sky-300 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Support Makes a Difference
            </h3>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Every contribution, whether financial or through service, helps us
              bring the transformative power of sacred music to communities
              across Nigeria. Together, we can put a hymnbook in every
              Christian's hands and spread the gospel through song.
            </p>
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

export default GetInvolvedPage;
