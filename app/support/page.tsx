"use client";

import React from "react";
import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
  Users,
  Zap,
  Shield,
  CreditCard,
  FileText,
  Video,
  Headphones
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const quickLinks = [
    {
      icon: BookOpen,
      title: "Getting Started",
      desc: "New to EcoCollect? Start here",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Account Help",
      desc: "Manage your profile & settings",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Rewards & Points",
      desc: "Learn about our reward system",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Safety & Privacy",
      desc: "Your data protection guide",
      color: "purple"
    }
  ];

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          q: "What is EcoCollect?",
          a: "EcoCollect is a community-driven platform that empowers citizens to report waste in their neighborhoods. We connect waste reporters with collectors and reward everyone for their contributions to a cleaner environment."
        },
        {
          q: "How do I create an account?",
          a: "Simply download our app or visit our website, click 'Sign Up', and follow the registration process. You'll need to provide your email, create a password, and verify your account."
        },
        {
          q: "Is EcoCollect free to use?",
          a: "Yes! EcoCollect is completely free for citizens to report waste. In fact, we reward you with points and vouchers for your contributions!"
        }
      ]
    },
    {
      category: "Reporting Waste",
      icon: FileText,
      questions: [
        {
          q: "How do I report waste?",
          a: "Open the app, tap the 'Report' button, take a photo of the waste, add location details, and submit. Our team will verify and dispatch a collector within 24-48 hours."
        },
        {
          q: "What types of waste can I report?",
          a: "You can report household waste, recyclables, bulk items, construction debris, and hazardous materials. Each category has specific guidelines in our app."
        },
        {
          q: "How long does it take for waste to be collected?",
          a: "Most waste is collected within 24-48 hours after verification. Urgent cases are prioritized and may be collected sooner."
        }
      ]
    },
    {
      category: "Rewards",
      icon: CreditCard,
      questions: [
        {
          q: "How do I earn points?",
          a: "You earn points by reporting waste, having your reports verified, completing challenges, and referring friends. The more active you are, the more points you earn!"
        },
        {
          q: "What can I do with my points?",
          a: "Points can be redeemed for vouchers from partner stores, donated to environmental causes, or used to unlock premium features in the app."
        },
        {
          q: "Do points expire?",
          a: "Points are valid for 12 months from the date they're earned. You'll receive notifications before your points expire."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      desc: "Chat with our support team",
      action: "Start Chat",
      color: "emerald"
    },
    {
      icon: Mail,
      title: "Email Support",
      desc: "support@ecocollect.vn",
      action: "Send Email",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone Support",
      desc: "+84 123 456 789",
      action: "Call Now",
      color: "purple"
    }
  ];

  const resources = [
    { icon: Video, title: "Video Tutorials", count: "15 videos" },
    { icon: BookOpen, title: "User Guide", count: "Complete guide" },
    { icon: FileText, title: "Documentation", count: "API & SDKs" },
    { icon: Headphones, title: "Webinars", count: "Monthly sessions" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      {/* Hero Section */}
      <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">How Can We Help?</h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Find answers, explore guides, or get in touch with our support team
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white text-gray-900 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-4 gap-6">
          {quickLinks.map((link, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group border border-gray-100"
            >
              <div
                className={`w-14 h-14 bg-linear-to-br from-${link.color}-400 to-${link.color}-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{link.desc}</p>
              <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Choose your preferred way to reach us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br from-${option.color}-400 to-${option.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">{option.desc}</p>
              <button
                className={`bg-linear-to-r from-${option.color}-500 to-${option.color}-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all`}
              >
                {option.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => {
                    const globalIdx = catIdx * 100 + faqIdx;
                    const isExpanded = expandedFaq === globalIdx;

                    return (
                      <div
                        key={faqIdx}
                        className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
                      >
                        <button
                          onClick={() =>
                            setExpandedFaq(isExpanded ? null : globalIdx)
                          }
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-all"
                        >
                          <span className="font-semibold text-gray-900 text-left">
                            {faq.q}
                          </span>
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform shrink-0 ml-4 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-5">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to master EcoCollect
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
            >
              <resource.icon className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-500">{resource.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
          </div>

          <div className="relative">
            <h2 className="text-4xl font-black mb-4">Still Need Help?</h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Our support team is here 24/7 to assist you with any questions or
              issues
            </p>
            <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all hover:scale-105">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
