import { ArrowRight, Leaf, Lock, Mail, Recycle } from "lucide-react";
import React from "react";
interface LoginProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const LoginForm: React.FC<LoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left side - Branding */}
        <div className="bg-linear-to-br from-emerald-500 via-green-500 to-teal-600 p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10">
              <Recycle className="w-64 h-64 transform rotate-12" />
            </div>
            <div className="absolute bottom-10 left-10">
              <Leaf className="w-48 h-48 transform -rotate-12" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <Recycle className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold">EcoCollect</h1>
            </div>

            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Together We Make Earth Cleaner
            </h2>
            <p className="text-emerald-50 text-lg mb-8">
              Join our community of eco-warriors making a difference through
              crowdsourced waste collection and recycling.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Track Your Impact</p>
                  <p className="text-sm text-emerald-50">
                    Monitor waste collected & recycled
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Earn Rewards</p>
                  <p className="text-sm text-emerald-50">
                    Get points for every contribution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-emerald-50 text-sm">
            © 2026 EcoCollect. Making recycling rewarding.
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h3>
            <p className="text-gray-600">
              Sign in to continue your eco-journey
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign In
              <ArrowRight
                className={`w-5 h-5 transition-transform ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Sign up for free
              </a>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <p className="text-2xl font-bold text-emerald-600">2.5M+</p>
                <p className="text-xs text-gray-600">Kg Recycled</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">50K+</p>
                <p className="text-xs text-gray-600">Active Users</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">120+</p>
                <p className="text-xs text-gray-600">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
