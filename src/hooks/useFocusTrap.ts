import { useEffect } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];

export function useFocusTrap<T extends HTMLElement>(active: boolean, ref: React.RefObject<T>) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const container = ref.current;
    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE.join(','))
    );
    if (elements.length === 0) return;
    const first = elements[0];
    const last = elements[elements.length - 1];
    const handle = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    container.addEventListener('keydown', handle);
    first.focus();
    return () => container.removeEventListener('keydown', handle);
  }, [active, ref]);
}
