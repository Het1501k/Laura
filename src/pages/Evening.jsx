import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Evening = () => {
  const registerRef = useScrollReveal();
  const heroRef = useRef(null);

  useEffect(() => {
    registerRef(heroRef.current);
  }, [registerRef]);

  return (
    <main className="w-full">
      <section
        ref={heroRef}
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop py-section-gap reveal-on-scroll"
      >
        <p className="font-label-caps text-label-caps tracking-[0.3em] text-secondary mb-6">
          LAURA HAUTE COUTURE
        </p>

        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase tracking-widest">
          Evening
        </h1>

        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mt-8">
          Sculptural eveningwear designed for unforgettable entrances,
          intimate celebrations, and moments that deserve to linger.
        </p>
      </section>
    </main>
  );
};

export default Evening;