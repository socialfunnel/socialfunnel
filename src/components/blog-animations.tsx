"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const transitionVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
};

interface BlogAnimatedGroupProps {
  children: ReactNode;
  className?: string;
}

export function BlogAnimatedGroup({
  children,
  className,
}: BlogAnimatedGroupProps) {
  return (
    <motion.div
      variants={transitionVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface BlogMotionItemProps {
  children: ReactNode;
  className?: string;
}

export function BlogMotionItem({ children, className }: BlogMotionItemProps) {
  return (
    <motion.div variants={transitionVariants.item} className={className}>
      {children}
    </motion.div>
  );
}
