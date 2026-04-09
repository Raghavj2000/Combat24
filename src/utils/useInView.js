import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, visible] — visible flips true once the element
 * enters the viewport and stays true (one-shot reveal).
 */
const useInView = (threshold = 0.15) => {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

export default useInView;
