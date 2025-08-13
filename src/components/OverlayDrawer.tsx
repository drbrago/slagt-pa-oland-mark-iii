'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}

export default function OverlayDrawer({ isOpen, onClose, label, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative bg-ink text-albescent-white-100 w-[var(--rail-w)] max-w-full h-full p-4 flex flex-col"
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="self-end mb-4 p-2 focus:outline-none focus:ring-2 focus:ring-blood"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
