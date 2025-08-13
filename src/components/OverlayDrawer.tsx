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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useFocusTrap(isOpen, dialogRef);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50" role="presentation">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative h-full w-[var(--rail-w)] max-w-full bg-ink text-albescent-white-100 p-4 pt-[env(safe-area-inset-top)]"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close menu"
          className="mb-4 p-2"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
