"use client";

import { Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function BalanceCard() {
  return (
    <motion.div

      whileHover={{ y: -4 }}

      className="rounded-3xl bg-gradient-to-r
      from-sky-500
      to-cyan-400
      p-7 text-white shadow-xl"

    >
      <div className="flex justify-between">

        <div>

          <p className="opacity-80">
            eSIM Balance
          </p>

          <h1 className="text-5xl font-bold mt-3">
            $24.60
          </h1>

          <button className="mt-6 rounded-full bg-white px-5 py-2 text-sky-600 font-semibold">

            Add Balance

          </button>

        </div>

        <Wallet
          size={90}
          className="opacity-80"
        />

      </div>

    </motion.div>
  );
}