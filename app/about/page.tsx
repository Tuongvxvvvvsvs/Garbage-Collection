"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Leaf,
  Recycle,
  Zap,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users", color: "emerald" },
    { icon: Recycle, value: "2M+", label: "Reports Collected", color: "blue" },
    { icon: Leaf, value: "15K", label: "Tons Recycled", color: "green" },
    { icon: Award, value: "100+", label: "Partner Companies", color: "purple" }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      desc:
        "We're committed to creating a sustainable future through innovative waste management solutions.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Community First",
      desc:
        "Building strong communities by empowering citizens to take action on environmental issues.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Innovation",
      desc:
        "Leveraging cutting-edge technology to make waste collection efficient and rewarding.",
      color: "yellow"
    },
    {
      icon: Heart,
      title: "Transparency",
      desc:
        "Open and honest about our processes, impact, and the journey toward a cleaner planet.",
      color: "red"
    }
  ];

  const team = [
    { name: "Nguyễn Văn A", role: "CEO & Founder", avatar: "NVA" },
    { name: "Trần Thị B", role: "Head of Operations", avatar: "TTB" },
    { name: "Lê Văn C", role: "Tech Lead", avatar: "LVC" },
    { name: "Phạm Thị D", role: "Community Manager", avatar: "PTD" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">About EcoCollect</span>
          </div>
          <h1 className="text-6xl font-black mb-6">
            Making Earth Cleaner,
            <br />
            One Report at a Time
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to transform waste management through community
            engagement and smart technology. Join us in building a sustainable
            future.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) =>
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div
                className={`w-14 h-14 bg-linear-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-2xl flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl font-black text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                {stat.label}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To revolutionize waste management by empowering communities to
              report, track, and reduce waste through innovative technology and
              gamification. We believe every citizen can be a changemaker in
              creating a cleaner, greener planet.
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              A world where waste is eliminated through collective action and
              smart technology. We envision cities where citizens are actively
              engaged in environmental stewardship, and waste management is
              seamless, efficient, and rewarding for all.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-linear-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at EcoCollect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) =>
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br from-${value.color}-400 to-${value.color}-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            How We Make a Difference
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to create massive impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl font-black text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Report Waste
            </h3>
            <p className="text-gray-600">
              Citizens spot and report waste in their communities through our
              easy-to-use app.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl font-black text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">We Collect</h3>
            <p className="text-gray-600">
              Our network of collectors responds quickly to pick up and properly
              dispose of reported waste.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl font-black text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Earn Rewards
            </h3>
            <p className="text-gray-600">
              Everyone gets rewarded with points, badges, and real vouchers for
              their contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-linear-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate people working toward a cleaner future
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) =>
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 text-center hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-24 h-24 bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black shadow-lg">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32" />
          </div>

          <div className="relative">
            <h2 className="text-4xl font-black mb-4">Join the Movement</h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Be part of the solution. Start reporting waste in your community
              today and make a real difference.
            </p>
            <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
