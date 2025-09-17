"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // State cho login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng nhập với:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* Background logo */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/wallpaper.png" // đổi thành logo bạn muốn làm background
          alt="Background Logo"
          fill
          className="object-contain object-center"
        />
      </div>

      {/* Logo góc trên */}
      <div className="absolute top-4 left-4">
        <Image
          src="/corner.png" // logo nhỏ khác
          alt="Corner Logo"
          width={60}
          height={60}
        />
      </div>

      {/* Nội dung chính */}
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        XMT Solutions
      </h1>

      {/* Cart mẫu */}
      <div className="mb-10 rounded-xl border bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Dân Trịnh :D</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>DânTrịnh </span>
            <span>100.000.000đ</span>
          </li>
          <li className="flex justify-between">
            <span>DânTrịnh </span>
            <span>200.000.000đ</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between font-bold">
          <span>Tổng</span>
          <span>300.000.000đ</span>
        </div>
      </div>

      {/* Form Login */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Đăng Nhập
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </main>
  );
}
