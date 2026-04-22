import { useRef, useEffect, useState } from 'react';

const HIDDEN_CLASSES = {
  up:    'opacity-0 translate-y-10',
  down:  'opacity-0 -translate-y-10',
  left:  'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
};

/**
 * Wraps children in a div that slides + fades in when it enters the viewport.
 * Fires once — does not repeat on scroll up/down.
 *
 * Props:
 *   delay     – ms stagger offset (default 0)
 *   direction – 'up' | 'down' | 'left' | 'right' (default 'up')
 *   className – forwarded to the wrapper div
 *   threshold – IntersectionObserver threshold (default 0.12)
 */
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
          setVisible(true);
          observer.disconnect(); // fire once only
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : HIDDEN_CLASSES[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
