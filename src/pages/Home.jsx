import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: "/img1.jpeg",

  bridal: "/img8.jpeg",

  detail: "/img6.jpeg",

  evening1: "/img4.jpeg",

  evening2: "/img5.jpeg",

  detail: "/img6.jpg",

  hero2: "/img7.jpeg",
};



const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Home = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const statementRef = useRef(null);
  const bridalImageRef = useRef(null);
  const cinematicRef = useRef(null);
  const horizontalRef = useRef(null);
  const horizontalTrackRef = useRef(null);
  const customRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      /* ---------------------------------
         HERO
      --------------------------------- */

      gsap.to(heroImageRef.current, {
        scale: 1.12,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-word", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ---------------------------------
         GLOBAL REVEALS
      --------------------------------- */

      gsap.utils.toArray(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".image-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            clipPath: "inset(12% 8% 12% 8%)",
            scale: 1.08,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      /* ---------------------------------
         BRIDAL PARALLAX
      --------------------------------- */

      gsap.to(bridalImageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: bridalImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ---------------------------------
         CINEMATIC IMAGE
      --------------------------------- */

      gsap.to(cinematicRef.current, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: cinematicRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ---------------------------------
         HORIZONTAL EVENING GALLERY
      --------------------------------- */

      if (horizontalRef.current && horizontalTrackRef.current) {
        const getDistance = () =>
          horizontalTrackRef.current.scrollWidth -
          horizontalRef.current.clientWidth;

        gsap.to(horizontalTrackRef.current, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => `+=${getDistance() * 1.4}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      /* ---------------------------------
         CUSTOM TYPOGRAPHY
      --------------------------------- */

      gsap.fromTo(
        ".custom-letter",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: customRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="bg-[#f5f2ec] text-[#171614] overflow-hidden"
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] overflow-hidden bg-[#171614] text-white"
      >
        <div className="absolute inset-0">
          <img
            ref={heroImageRef}
            src={images.hero}
            alt="Laura Haute Couture bridal gown"
            className="h-full w-full object-cover object-top scale-105"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        </div>

       

        {/* Hero content */}
        <div className="relative z-10 flex h-full items-end px-6 pb-10 md:px-10 md:pb-14">
          <div className="w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-white/70" />
              <span className="text-[10px] tracking-[0.3em] uppercase">
                Bridal & Evening Couture
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="hero-word max-w-[1100px] overflow-hidden font-serif text-[15vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[12vw]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="block"
                >
                  COUTURE,
                </motion.span>
              </span>

              <span className="ml-[8vw] block overflow-hidden italic">
                <motion.span
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        delay: 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="block"
                >
                  made personal.
                </motion.span>
              </span>
            </motion.h1>

            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="max-w-md text-sm leading-7 text-white/80 md:text-base"
              >
                Bridal and evening couture created for women who want their
                most unforgettable moments to feel entirely their own.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/bridal"
                  className="group border border-white bg-white px-7 py-4 text-[10px] tracking-[0.22em] text-[#171614] uppercase transition-all duration-500 hover:bg-transparent hover:text-white"
                >
                  Explore Bridal
                </Link>

                <Link
                  to="/contact"
                  className="border border-white/60 px-7 py-4 text-[10px] tracking-[0.22em] uppercase transition-all duration-500 hover:bg-white hover:text-[#171614]"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-3 md:right-10 md:flex">
          <span className="text-[9px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Scroll to discover
          </span>
          <span className="h-16 w-px bg-white/50" />
        </div>
      </section>

      {/* =========================================================
          STATEMENT
      ========================================================= */}

      <section
        ref={statementRef}
        className="relative bg-[#f5f2ec] px-6 py-32 md:px-10 md:py-52"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.3em] text-[#8a8176] uppercase">
              01 / The House
            </span>
            <span className="h-px w-16 bg-[#c9c1b5]" />
          </div>

          <h2 className="gsap-reveal max-w-[1250px] font-serif text-[13vw] font-light leading-[0.82] tracking-[-0.06em] md:text-[10vw]">
            WHERE EVERY
            <br />
            <span className="ml-[8vw] italic">silhouette</span>
            <br />
            TELLS A STORY.
          </h2>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4 md:col-start-7">
              <p className="gsap-reveal text-sm leading-7 text-[#625d56] md:text-base">
                Laura Haute Couture brings together refined silhouettes,
                intricate detail and an intimate approach to personal style.
                Every creation begins with the woman wearing it.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-11">
              <div className="text-[10px] tracking-[0.25em] text-[#8a8176] uppercase">
                Dubai
              </div>
              <div className="mt-2 text-xs text-[#625d56]">
                Palm Strip Mall
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DARK HOUSE SECTION
      ========================================================= */}

      <section className="relative bg-[#171614] px-6 py-28 text-[#f5f2ec] md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="mb-8 text-[10px] tracking-[0.3em] text-[#aaa39a] uppercase">
                02 / The Laura House
              </div>

              <h2 className="gsap-reveal font-serif text-[15vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[10vw]">
                A COUTURE
                <br />
                <span className="ml-[7vw] italic">house</span>
                <br />
                FOR THE
                <br />
                UNFORGETTABLE.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="image-reveal overflow-hidden">
                <img
                  src={images.evening1}
                  alt="Laura Haute Couture detail"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>

              <div className="mt-6 flex justify-between border-t border-white/20 pt-4 text-[9px] tracking-[0.25em] uppercase text-white/50">
                <span>Craft</span>
                <span>Detail</span>
                <span>Expression</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRIDAL
      ========================================================= */}

      <section className="relative bg-[#e9e3d9] px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 flex items-start justify-between">
            <div>
              <div className="mb-5 text-[10px] tracking-[0.3em] text-[#81776c] uppercase">
                03 / Bridal
              </div>

              <h2 className="font-serif text-[18vw] font-light leading-[0.72] tracking-[-0.07em] md:text-[12vw]">
                BRIDAL
                <br />
                <span className="ml-[10vw] italic">couture.</span>
              </h2>
            </div>

            <div className="hidden text-right md:block">
              <span className="text-[9px] tracking-[0.25em] text-[#81776c] uppercase">
                LAURA / 03
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="image-reveal overflow-hidden">
                <img
                  ref={bridalImageRef}
                  src={images.bridal}
                  alt="Laura Haute Couture bridal gown"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="mb-10 text-[64px] font-light leading-none text-[#9c9286] md:text-[90px]">
                03
              </div>

              <p className="gsap-reveal text-sm leading-7 text-[#625d56] md:text-base">
                For the bride who wants more than a dress — she wants a
                silhouette that feels unmistakably hers.
              </p>

              <p className="gsap-reveal mt-6 text-sm leading-7 text-[#625d56] md:text-base">
                Discover bridal looks shaped around timeless elegance,
                intricate detail and the individuality of every woman.
              </p>

              <Link
                to="/bridal"
                className="mt-10 inline-flex items-center gap-5 border-b border-[#171614] pb-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 hover:gap-8"
              >
                Explore Bridal
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CINEMATIC IMAGE
      ========================================================= */}

      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#171614]">
        <img
          ref={cinematicRef}
          src={images.hero2}
          alt="Laura Haute Couture editorial"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
          <div>
            <div className="mb-8 text-[10px] tracking-[0.35em] uppercase">
              The Bridal Edit / Dubai
            </div>

            <h2 className="gsap-reveal font-serif text-[13vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[10vw]">
              THE DRESS
              <br />
              <span className="italic">you'll remember.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENING HORIZONTAL
      ========================================================= */}

      <section
        ref={horizontalRef}
        className="relative overflow-hidden bg-[#171614] text-[#f5f2ec]"
      >
        <div className="flex h-screen min-h-[700px] w-max items-center">
          <div className="flex h-full w-[100vw] shrink-0 flex-col justify-center px-6 md:w-[70vw] md:px-10">
            <div className="mb-8 text-[10px] tracking-[0.3em] text-[#a8a097] uppercase">
              04 / Evening
            </div>

            <h2 className="font-serif text-[18vw] font-light leading-[0.72] tracking-[-0.07em] md:text-[12vw]">
              EVENING
              <br />
              <span className="ml-[10vw] italic">edit.</span>
            </h2>

            <p className="mt-10 max-w-sm text-sm leading-7 text-white/55">
              Statement silhouettes, refined details and effortless movement
              for the moments that deserve their own entrance.
            </p>
          </div>

          <div
            ref={horizontalTrackRef}
            className="flex h-full items-center gap-8 px-4 md:gap-12 md:px-10"
          >
            <div className="w-[72vw] shrink-0 md:w-[34vw]">
              <div className="group overflow-hidden">
                <img
                  src={images.evening1}
                  alt="Evening couture"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex justify-between text-[9px] tracking-[0.25em] uppercase text-white/45">
                <span>Look 01</span>
                <span>Evening</span>
              </div>
            </div>

            <div className="w-[72vw] shrink-0 pt-32 md:w-[34vw]">
              <div className="group overflow-hidden">
                <img
                  src={images.evening2}
                  alt="Evening couture silhouette"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex justify-between text-[9px] tracking-[0.25em] uppercase text-white/45">
                <span>Look 02</span>
                <span>Evening</span>
              </div>
            </div>

            <div className="w-[72vw] shrink-0 md:w-[34vw]">
              <div className="group overflow-hidden">
                <img
                  src={images.bridal}
                  alt="Couture evening inspiration"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex justify-between text-[9px] tracking-[0.25em] uppercase text-white/45">
                <span>Look 03</span>
                <span>Couture</span>
              </div>
            </div>

            <div className="flex w-[75vw] shrink-0 items-center justify-center md:w-[45vw]">
              <Link
                to="/evening"
                className="group flex h-48 w-48 items-center justify-center rounded-full border border-white/30 text-center text-[10px] tracking-[0.22em] uppercase transition-all duration-700 hover:bg-white hover:text-[#171614] md:h-64 md:w-64"
              >
                Explore
                <br />
                Evening
                <br />
                Couture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOM COUTURE
      ========================================================= */}

      <section
        ref={customRef}
        className="relative bg-[#f5f2ec] px-6 py-32 md:px-10 md:py-52"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 text-[10px] tracking-[0.3em] text-[#8a8176] uppercase">
            05 / Custom Couture
          </div>

          <div className="overflow-hidden">
            <h2 className="font-serif text-[18vw] font-light leading-[0.7] tracking-[-0.07em] md:text-[13vw]">
              <span className="custom-letter inline-block">M</span>
              <span className="custom-letter inline-block">A</span>
              <span className="custom-letter inline-block">D</span>
              <span className="custom-letter inline-block">E</span>
              <br />
              <span className="custom-letter ml-[9vw] inline-block italic">
                around
              </span>
              <br />
              <span className="custom-letter ml-[18vw] inline-block">
                you.
              </span>
            </h2>
          </div>

          <div className="mt-28 grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4 md:col-start-2">
              <p className="gsap-reveal text-sm leading-7 text-[#625d56] md:text-base">
                Your vision is the beginning. Together, the silhouette,
                details and finishing touches are shaped around you.
              </p>

              <Link
                to="/custom"
                className="mt-10 inline-flex items-center gap-5 border-b border-[#171614] pb-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 hover:gap-8"
              >
                Start Your Journey
                <span>→</span>
              </Link>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  ["01", "Consult"],
                  ["02", "Design"],
                  ["03", "Fit"],
                  ["04", "Create"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="gsap-reveal border-t border-[#c9c1b5] pt-5"
                  >
                    <div className="mb-7 text-[10px] tracking-[0.2em] text-[#9b9185]">
                      {number}
                    </div>

                    <h3 className="font-serif text-4xl font-light italic md:text-5xl">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RENT & BUY
      ========================================================= */}

      <section className="relative bg-[#e8e1d6] px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 text-[10px] tracking-[0.3em] text-[#81776c] uppercase">
            06 / Rent & Buy
          </div>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="font-serif text-[15vw] font-light leading-[0.74] tracking-[-0.07em] md:text-[11vw]">
                RENT IT.
                <br />
                OWN IT.
                <br />
                <span className="ml-[8vw] italic">make it yours.</span>
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="gsap-reveal text-sm leading-7 text-[#625d56]">
                Selected couture pieces may be available for rental or
                purchase. Discover a look for your next unforgettable
                occasion.
              </p>

              <Link
                to="/rent-buy"
                className="mt-10 inline-flex items-center gap-5 border-b border-[#171614] pb-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 hover:gap-8"
              >
                Discover Rent & Buy
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ATELIER
      ========================================================= */}

      <section className="bg-[#f5f2ec] px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-6 text-[10px] tracking-[0.3em] text-[#8a8176] uppercase">
                07 / The Atelier
              </div>

              <h2 className="font-serif text-[16vw] font-light leading-[0.72] tracking-[-0.07em] md:text-[11vw]">
                FROM THE
                <br />
                <span className="ml-[8vw] italic">Laura atelier.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="mb-2 inline-flex items-center gap-5 border-b border-[#171614] pb-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 hover:gap-8"
            >
              Visit / Enquire
              <span>→</span>
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            <div className="gsap-reveal col-span-2 md:col-span-5">
              <div className="group overflow-hidden">
                <img
                  src={images.hero}
                  alt="Laura Haute Couture atelier"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="gsap-reveal col-span-1 mt-16 md:col-span-3 md:col-start-7 md:mt-32">
              <div className="group overflow-hidden">
                <img
                  src={images.evening1}
                  alt="Laura Haute Couture gown"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="gsap-reveal col-span-1 md:col-span-3 md:col-start-10">
              <div className="group overflow-hidden">
                <img
                  src={images.evening2}
                  alt="Laura Haute Couture evening gown"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#171614] px-6 py-32 text-[#f5f2ec] md:px-10">
        <div className="absolute left-[8%] top-[15%] h-40 w-40 rounded-full border border-white/10 md:h-64 md:w-64" />

        <div className="absolute bottom-[12%] right-[10%] h-24 w-24 rounded-full border border-white/10 md:h-40 md:w-40" />

        <div className="relative z-10 mx-auto max-w-[1300px] text-center">
          <div className="gsap-reveal mb-10 text-[10px] tracking-[0.35em] text-white/45 uppercase">
            Begin your couture journey
          </div>

          <h2 className="gsap-reveal font-serif text-[17vw] font-light leading-[0.72] tracking-[-0.07em] md:text-[12vw]">
            YOUR MOMENT
            <br />
            DESERVES
            <br />
            <span className="italic">couture.</span>
          </h2>

          <Link
            to="/contact"
            className="group mt-14 inline-flex items-center gap-6 border border-white/50 px-8 py-5 text-[10px] tracking-[0.25em] uppercase transition-all duration-700 hover:bg-[#f5f2ec] hover:text-[#171614]"
          >
            Request A Private Appointment
            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          SMALL CONCEPT FOOTER NOTE
      ========================================================= */}

      <div className="bg-[#171614] px-6 pb-8 text-center text-[8px] tracking-[0.2em] text-white/25 uppercase md:px-10">
        Concept / Unofficial Design Exploration
      </div>
    </main>
  );
};

export default Home;