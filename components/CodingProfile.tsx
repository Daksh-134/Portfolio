"use client";

import React from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section id="coding" className="w-full py-20">
      <h1 className="heading">
        Coding <span className="text-purple">Profiles</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <ProfileCard
          title="LeetCode"
          icon={<AceternityIcon order="LC" />}
          description="Check out my problem-solving skills and algorithmic prowess on LeetCode."
          url="https://leetcode.com/u/DakshBaweja/"
          bgColor="bg-blue-950"
        />
        <ProfileCard
          title="CodeChef"
          icon={<AceternityIcon order="CC" />}
          description="Explore my competitive programming journey and achievements on CodeChef."
          url="https://www.codechef.com/users/dakshbaweja"
          bgColor="bg-red-950"
        />
        <ProfileCard
          title="Codeforces"
          icon={<AceternityIcon order="CF" />}
          description="Dive into my problem-solving strategies and contest performances on Codeforces."
          url="https://codeforces.com/profile/daksh321"
          bgColor="bg-green-950"
        />
      </div>
    </section>
  );
};

export default Approach;

const ProfileCard = ({
  title,
  icon,
  description,
  url,
  bgColor,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  url: string;
  bgColor: string;
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[30rem] rounded-3xl ${bgColor}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="rounded-3xl overflow-hidden"
        colors={[[255, 255, 255]]}
      />

      <div className="relative z-20 px-10 text-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
        <p className="text-sm text-white mb-6">{description}</p>
        <motion.div
          className="inline-block bg-white text-black font-bold py-2 px-4 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Profile
        </motion.div>
      </div>
    </motion.a>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
