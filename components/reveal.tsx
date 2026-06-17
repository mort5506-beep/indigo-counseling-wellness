"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Element to render, e.g. "div" | "section" | "li". Defaults to "div". */
  as?: ElementType;
};

/**
 * Reveal — scroll-in reveal per BUILD_SPEC §4:
 * opacity 0→1, translateY 24→0, ease [0.22,1,0.36,1], 0.7s,
 * whileInView once with -80px margin. Under prefers-reduced-motion the
 * content appears instantly (opacity only, no transform).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.001 : 0.7, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /** seconds between each child. Defaults to 0.07 (70ms per §4). */
  stagger?: number;
  delay?: number;
  as?: ElementType;
};

/**
 * RevealStagger — wrap a group; direct children wrapped in <RevealItem>
 * animate in sequence (70ms default stagger per §4).
 */
export function RevealStagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as = "div",
}: RevealStaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: ElementType;
};

/** RevealItem — a single staggered child inside <RevealStagger>. */
export function RevealItem({ children, className, y = 24, as = "div" }: RevealItemProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.001 : 0.7, ease: EASE },
    },
  };

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
