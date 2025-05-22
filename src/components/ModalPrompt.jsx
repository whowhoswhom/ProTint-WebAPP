import React, { useEffect, useRef } from 'react';

export default function ModalPrompt({ show, onClose, delay = 0 }) {
  const [visible, setVisible] = React.useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (show) {
      setVisible(true);
      return;
    }
    if (delay > 0) {
      timerRef.current = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timerRef.current);
    }
    setVisible(false);
  }, [show, delay]);

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 flex flex-col items-center animate-fadeInUp"
        style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.4,0,0.2,1)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Create an account to save your build</h2>
        <p className="text-gray-300 mb-6 text-center">Sign in to save your vehicle, get personalized recommendations, and book services faster.</p>
        <button
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold py-2 rounded-lg shadow hover:bg-blue-100 transition-colors mb-2"
          disabled
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.1 5.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.1 5.5 29.3 4 24 4c-7.1 0-13.1 3.7-16.7 9.3z"/><path fill="#FBBC05" d="M24 44c5.1 0 9.8-1.7 13.4-4.7l-6.2-5.1C29.1 36.1 26.7 37 24 37c-6.1 0-10.7-2.9-13.3-7.1l-7 5.4C7.1 41.3 14.9 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.7 7.5-11.7 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.1 5.5 29.3 4 24 4c-7.1 0-13.1 3.7-16.7 9.3z"/></g></svg>
          Sign in with Google
        </button>
        <span className="text-xs text-gray-500 mt-2">(Coming soon)</span>
      </div>
      {/* Tailwind keyframes for fadeInUp */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 