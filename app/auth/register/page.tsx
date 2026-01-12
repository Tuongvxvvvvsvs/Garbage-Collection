"use client";
import { CheckCircle2, Leaf, Recycle } from "lucide-react";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const Register: React.FC = () => {
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", {
      fullName,
      email,
      password,
      phone,
      confirmPassword
    });
  };

  const benefits = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Earn Green Points",
      description: "Get rewarded for every kg of waste you help collect"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Track Impact",
      description: "See your real-time environmental contribution"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Join Community",
      description: "Connect with 50,000+ eco-conscious members"
    }
  ];

  return (
    <div className="bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main card */}
      <div className="relative w-full grid md:grid-cols-5 bg-white overflow-hidden">
        {/* Left side - Branding (2 columns) */}
        <div className="md:col-span-2 bg-linear-to-br from-emerald-500 via-green-500 to-teal-600 p-10 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-5">
              <Recycle className="w-48 h-48 transform rotate-12" />
            </div>
            <div className="absolute bottom-10 left-5">
              <Leaf className="w-40 h-40 transform -rotate-12" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <Recycle className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold">EcoCollect</h1>
            </div>

            <h2 className="text-3xl font-bold mb-3 leading-tight">
              Start Your Green Journey Today
            </h2>
            <p className="text-emerald-50 mb-8">
              Join thousands making a real environmental impact through our
              crowdsourced recycling platform.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 transform transition-transform hover:scale-105"
                >
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{benefit.title}</p>
                    <p className="text-sm text-emerald-50">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-emerald-50">
                  Community Impact
                </span>
                <span className="text-lg font-bold">2.5M+ Kg</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
            </div>
            <p className="text-emerald-50 text-xs">
              © 2026 EcoCollect. Making recycling rewarding.
            </p>
          </div>
        </div>

        {/* Right side - Register form (3 columns) */}
        <div className="md:col-span-3 p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Create Your Account
            </h3>
            <p className="text-gray-600">
              Join our community and start making a difference
            </p>
          </div>

          <RegisterForm
            onSubmit={handleSubmit}
            fullName={fullName}
            setFullName={setFullName}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-4">
              Trusted by organizations worldwide
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold">
                UN
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold">
                EPA
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold">
                WWF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
