import { useEffect, useRef } from "react";

/**
 * Applies staggered entrance animations to children with [data-animate] attribute
 * when the section scrolls into view.
 */
export function useIntersectionAnimate(delay = 130, threshold = 0.12) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let i = 0;
            for (const el of entry.target.querySelectorAll<HTMLElement>(
              "[data-animate]",
            )) {
              const index = i;
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0) scale(1)";
              }, index * delay);
              i++;
            }
          }
        }
      },
      { threshold },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return sectionRef;
}
