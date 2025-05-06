"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function TypingAnimation({
  children,
  className,
  duration = 150,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  loop = true,
  pauseBetweenLoops = 1000,
  ...props
}) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    let isCancelled = false;

    const typeLoop = () => {
      if (isCancelled) return;

      if (i <= children.length) {
        setDisplayedText(children.slice(0, i));
        i++;
        setTimeout(typeLoop, duration);
      } else if (loop) {
        setTimeout(() => {
          i = 0;
          setDisplayedText("");
          setTimeout(typeLoop, duration);
        }, pauseBetweenLoops);
      }
    };

    typeLoop();

    return () => {
      isCancelled = true;
    };
  }, [children, duration, started, loop, pauseBetweenLoops]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em] relative",
        className
      )}
      {...props}
    >
      <span className="opacity-0">{children}</span>

      <span className="absolute left-0 top-0">{displayedText}</span>
    </MotionComponent>
  );
}
