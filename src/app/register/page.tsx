"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }
    // Lưu tài khoản vào localStorage (demo)
    const newUser = { name, email, password };
    try {
      localStorage.setItem("demo_user", JSON.stringify(newUser));
      alert("Đăng ký thành công! Hãy đăng nhập.");
      router.push("/");
    } catch {
      alert("Không thể lưu tài khoản trên trình duyệt.");
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="overlay-dark" />
      <div className="z-10 mb-8 w-full max-w-2xl rounded-2xl p-6 panel">
        <h2 className="text-2xl font-bold neon-title text-center">Tham gia cộng đồng</h2>
        <p className="mt-2 text-sm text-white/80 text-center">Đăng ký tài khoản để nhận cập nhật mới nhất.</p>
      </div>

      <div className="z-10 w-full max-w-sm rounded-2xl p-6 glass">
        <h2 className="mb-6 text-center text-2xl font-bold neon-title">Đăng Ký</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80">Họ và tên</label>
            <input
              id="name"
              type="text"
              placeholder="Nhập họ tên..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-white/80">Mật khẩu</label>
            <input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              required
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block text-sm font-medium text-white/80">Xác nhận mật khẩu</label>
            <input
              id="confirm"
              type="password"
              placeholder="Nhập lại mật khẩu..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 text-black font-medium transition btn-neon"
          >
            Tạo tài khoản
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/70">
          Đã có tài khoản? <Link href="/" className="underline decoration-cyan-400/60 hover:text-white">Đăng nhập</Link>
        </p>
      </div>
    </main>
  );
}


