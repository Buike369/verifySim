"use client";

import { Bell, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white px-6 pt-10 pb-5 shadow-sm">

      <div className="flex justify-between">

        <Menu className="text-sky-600" />

        <div className="flex items-center gap-4">

          <Bell className="text-slate-600" />

          <img
            src="/avatar.png"
            className="w-10 h-10 rounded-full"
          />

        </div>

      </div>

      <h1 className="text-4xl font-bold mt-6 text-slate-900">
        My eSIM
      </h1>

      <p className="text-slate-500">
        Stay connected everywhere 🌎
      </p>

    </header>
  );
}