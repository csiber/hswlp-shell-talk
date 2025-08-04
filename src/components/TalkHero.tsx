"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";

export function TalkHero() {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="relative flex flex-col items-center justify-center text-center py-40 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_200%]"
    >
      <h1 className="text-5xl font-bold text-white mb-4">Start talking. Instantly.</h1>
      <p className="text-lg text-white/80 mb-8">HSWLP&apos;s own video call platform is coming soon.</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="lg" disabled>
            Start a call
          </Button>
        </TooltipTrigger>
        <TooltipContent>Under development</TooltipContent>
      </Tooltip>
    </motion.div>
  );
}
