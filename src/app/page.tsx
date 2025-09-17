"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // State cho login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoMessage, setInfoMessage] = useState("TESTING...");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Nếu đã có thông tin đăng nhập lưu trước đó thì hiển thị luôn
    try {
      const last = localStorage.getItem("demo_last_login");
      if (last) {
        const obj = JSON.parse(last) as { email: string; password: string };
        setInfoMessage(`Đã đăng nhập trước đó: ${obj.email} / ${obj.password}`);
      }
    } catch {}
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lấy user đã đăng ký từ localStorage
    try {
      const raw = localStorage.getItem("demo_user");
      if (!raw) {
        alert("Chưa có tài khoản. Vui lòng đăng ký trước.");
        return;
      }
      const user = JSON.parse(raw) as { email: string; password: string };
      if (user.email === email && user.password === password) {
        setLoggedIn(true);
        setInfoMessage(`Đăng nhập thành công: ${email} / ${password}`);
        localStorage.setItem(
          "demo_last_login",
          JSON.stringify({ email, password })
        );
      } else {
        setLoggedIn(false);
        alert("Email hoặc mật khẩu không đúng");
      }
    } catch {
      alert("Không thể đọc dữ liệu trình duyệt");
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Overlay tint */}
      <div className="overlay-dark" />

      {/* Logo góc trên */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/corner.png" alt="Corner Logo" width={56} height={56} />
      </div>

      {/* Heading */}
      <h1 className="z-10 mb-8 text-4xl font-bold font-cyber uppercase neon-title text-center">
        XMT Solutions
      </h1>

      {/* Info panel */}
      <div className="z-10 mb-8 w-full max-w-3xl rounded-2xl p-6 panel">
        <div className="mb-3 flex items-center justify-between">
          <span className="badge-soft px-3 py-1 rounded-md text-xs uppercase tracking-wider">Loading...</span>
          <span className="text-sm text-white/70">demo</span>
        </div>
        <p className="text-sm text-white/80">
          {infoMessage}
        </p>
      </div>

      {/* Login Card */}
      <div className="z-10 w-full max-w-md rounded-2xl p-6 glass">
        <h2 className="mb-6 text-center text-2xl font-bold neon-title">Đăng Nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-lg px-4 py-2 text-black font-medium transition btn-neon">
            Đăng nhập
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white/70">
          Chưa có tài khoản? <a href="/register" className="underline decoration-cyan-400/60 hover:text-white">Đăng ký</a>
        </p>
      </div>
    </main>
  );
}
