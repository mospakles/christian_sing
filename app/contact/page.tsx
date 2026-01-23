"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const inquiryTypes = [
    "General Inquiry",
    "Partnership Opportunity",
    "Volunteer Application",
    "Donation Question",
    "Event Hosting",
    "Membership Information",
    "Media/Press",
    "Other",
  ];

  const handleSubmit = () => {
    console.log("Contact form submission:", {
      fullName,
      email,
      phone,
      subject,
      message,
      inquiryType,
    });
    alert("Thank you for contacting us! We will respond within 24-48 hours.");
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setInquiryType("");
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
              <MessageCircle className="h-5 w-5 text-sky-300 mr-2 animate-pulse" />
              <span className="text-sky-100 text-sm font-semibold">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2">
              <div className="flex items-start">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-sky-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="h-6 w-6 text-purple-700" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-purple-900 mb-2 text-lg">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@christiansingfoundation.org"
                    className="text-gray-700 hover:text-purple-700 transition-colors break-all"
                  >
                    info@christiansingfoundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2">
              <div className="flex items-start">
                <div className="p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Phone className="h-6 w-6 text-sky-700" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-sky-900 mb-2 text-lg">
                    Call Us
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+2348035390860"
                      className="block text-gray-700 hover:text-sky-700 transition-colors"
                    >
                      +234 803 539 0860
                    </a>
                    <a
                      href="tel:+2348032006518"
                      className="block text-gray-700 hover:text-sky-700 transition-colors"
                    >
                      +234 803 200 6518
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2">
              <div className="flex items-start">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-purple-700" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-purple-900 mb-2 text-lg">
                    Visit Us
                  </h3>
                  <p className="text-gray-700">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2">
              <div className="flex items-start">
                <div className="p-4 bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Clock className="h-6 w-6 text-sky-700" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-sky-900 mb-2 text-lg">
                    Office Hours
                  </h3>
                  <div className="text-gray-700 space-y-1 text-sm">
                    <p>Saturday Classes: 4:00 PM - 6:00 PM</p>
                    <p>Email Response: Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="relative bg-gradient-to-br from-purple-600 to-sky-600 rounded-3xl shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-white mb-4 text-lg">Follow Us</h3>
                <div className="flex space-x-3">
                  {[
                    {
                      Icon: Facebook,
                      href: "https://facebook.com",
                      color: "hover:bg-sky-600",
                    },
                    {
                      Icon: Twitter,
                      href: "https://twitter.com",
                      color: "hover:bg-sky-500",
                    },
                    {
                      Icon: Instagram,
                      href: "https://instagram.com",
                      color: "hover:bg-purple-600",
                    },
                    {
                      Icon: Youtube,
                      href: "https://youtube.com",
                      color: "hover:bg-red-600",
                    },
                  ].map(({ Icon, href, color }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 transform hover:scale-110 hover:-rotate-6`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-sky-600 p-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10 flex items-center">
                  <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white ml-4">
                    Send Us a Message
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                  >
                    <option value="">Select an option</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
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
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-sky-200 focus:border-sky-500 transition-all duration-300"
                      placeholder="Brief subject"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={
                    !fullName || !email || !subject || !message || !inquiryType
                  }
                  className="w-full bg-gradient-to-r from-purple-600 to-sky-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-sky-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  ⏱️ We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-sky-700 bg-clip-text text-transparent mb-8 text-center">
            Looking for Something Specific?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Donate",
                desc: "Support our mission",
                href: "/get-involved",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Membership",
                desc: "Join our community",
                href: "/membership",
                gradient: "from-sky-500 to-purple-500",
              },
              {
                title: "Ministries",
                desc: "Learn about our work",
                href: "/ministries",
                gradient: "from-purple-600 to-sky-600",
              },
              {
                title: "Blog",
                desc: "Read our stories",
                href: "/blog",
                gradient: "from-sky-600 to-purple-700",
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${link.gradient} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-purple-900 mb-2 text-lg">
                  {link.title}
                </h4>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </a>
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
