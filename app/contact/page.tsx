"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = () => {
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      {/* Hero Section */}
      <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-black mb-4">Get In Touch</h1>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Have questions? We love to hear from you. Send us a message and we
              will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our team is here to help
              </p>
              <a
                href="mailto:support@ecocollect.vn"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                support@ecocollect.vn
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Mon-Fri from 8am to 5pm
              </p>
              <a
                href="tel:+84123456789"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                +84 123 456 789
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Come say hello at our office
              </p>
              <p className="text-gray-700 font-medium">
                123 Nguyen Hue St, District 1<br />
                Ho Chi Minh City, Vietnam
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-xl flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5 text-sky-600" />
                </button>
                <button className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-xl flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </button>
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a message
                </h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Business Hours
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
