import { useRef, useEffect, useState, startTransition } from 'react';

const HIDDEN = {
  up:    { opacity: 0, transform: 'translateY(40px)' },
  down:  { opacity: 0, transform: 'translateY(-40px)' },
  left:  { opacity: 0, transform: 'translateX(-40px)' },
  right: { opacity: 0, transform: 'translateX(40px)' },
};

const VISIBLE = { opacity: 1, transform: 'translate(0,0)' };

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => setVisible(true));
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
        ...(visible ? VISIBLE : HIDDEN[direction]),
      }}
      className={className}
    >
      {children}
    </div>
  );
}
