'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateValue = () => {
    // Extract number from value (e.g., "85%" -> 85, "500+" -> 500)
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numMatch[0]);
    const suffix = value.replace(/\d+/, '');
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setDisplayValue(targetNum + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, duration / steps);
  };

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-semibold text-accent mb-3">
      {displayValue}
    </div>
  );
};
