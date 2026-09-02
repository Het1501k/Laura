import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-[100]
        w-14 h-14
        rounded-full
        bg-on-surface
        text-surface
        border border-outline-variant
        flex items-center justify-center
        shadow-lg
        transition-all duration-500
        hover:scale-110
        hover:-translate-y-1
        active:scale-95
        ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }
      `}
    >
      <span className="material-symbols-outlined text-[20px]">
        arrow_upward
      </span>
    </button>
  );
};

export default BackToTop;