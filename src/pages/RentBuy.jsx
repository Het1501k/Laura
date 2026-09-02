import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RentBuy = () => {
  const pageRef = useRef(null);
  const heroImageRef = useRef(null);

  const collections = [
    {
      name: "L'AURA GOWN",
      type: "RENT / BUY",
      number: "01",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_hP0WwSSwnjxZLN6Cr-SrskC770oJWdiJXGCAMwTk8UpXAVca_djxAItI4Fer-C5b5ADSUCeGMLCKdzleqqVJjP2Bquj3oLRPqyUriG7nJJct0i3pwxnjINTyBDeITk37xNT2BOPH1Zm-us1EcGtEkZYXsHqDJ3sU9w2WMWt2WxrUGv_VYhNYXNNS43BjOAFLC_CaN-CXS4Snl4XPTcw6P_uJ90jAHakzjadiAw1a3nrgKOolrnqO",
    },
    {
      name: "NOIR SILHOUETTE",
      type: "RENT",
      number: "02",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO57369GvrE8aD77ST8DTmVq3zjEYANDkOHHWMV4oNi2KhSsfEhKSvBqCuA4NfTSdFkQ_E7Ncodvj_lf_B7Uv9CiHDTxp25G23SlWSCexBrEr5ZRXaWSNUd-Q8SmoDAQai0tmFnSHUVTAvA8POa1LFX-Lj1nbZonXICOIEq9XAfEsHwjnmATgNKcLZb1c8mUn-A71u9Is5GRfc1DM4Is4qMG04v406KY0wH6NaWk7Mhm42RsUHj9KY",
    },
    {
      name: "STRUCTURAL BLAZER",
      type: "BUY",
      number: "03",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2GefvCQh3MCfUwTfSYgTIbSzcH74mltGH20dEj-m_eZETncmg1MQ1up7R6HmrZ5_7Jhgxctv3sdsP4mUNNhuH3EJbLFsZjq0shZRGpY8-gyAMa6RNwtxRuSx2afalodWmWUeSzbECEOKb5x8GBMx37k1Sp5WOTmY6SGH7Umiabrz9sFotdSvdSXQu0VwScLYr-73rFoK4aCNVhy9d0MuqkpOWTFlpq-Rrkg1KGKNUMUoZTnAgTDRk",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO TEXT */

      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.from(".hero-meta", {
        y: 25,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.7,
      });

      /* HERO IMAGE PARALLAX */

      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* SERVICE CARDS */

      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1.1,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });
      });

      /* COLLECTION */

      gsap.from(".collection-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".collection-grid",
          start: "top 80%",
        },
      });

      /* LINE ANIMATION */

      gsap.utils.toArray(".animated-line").forEach((line) => {
        gsap.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left",
          },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden bg-[#f1ede5] text-[#181715]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#181715] text-[#f3eee6]">
        {/* Image */}

        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgiNlMf38SsbXVIgXiWyaGAAGSsjkG1oRW5lJ3LIpxuawiT5qfsdnPHUTzTnZNBtbTMMJgR1zLrSshqWZwHD2kTHambGTfi5wyKYZ0lnFWHkcjD7zhRytXZEBhTqgpq2x6P2dIomRDYfp7GjNo3uQABtqHu0QrzUbCuhT8dRUsIyyHyYMCX2Xpfg52qkdtCSe47nZbiRWaTKpndpD6LoJQNSNpSeTv8vVw7nu0GEytqxJYEubJRhWF"
            alt="Laura Haute Couture collection"
            className="
              absolute
              -top-[10%]
              h-[120%]
              w-full
              object-cover
              opacity-40
              grayscale-[20%]
            "
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-transparent to-black/20" />
        </div>

        {/* Hero top metadata */}

        <div className="absolute left-6 right-6 top-32 z-10 flex justify-between md:left-10 md:right-10">
          <span className="hero-meta text-[8px] uppercase tracking-[0.35em] opacity-50">
            The Archive
          </span>

          <span className="hero-meta text-[8px] uppercase tracking-[0.35em] opacity-50">
            Dubai / 2026
          </span>
        </div>

        {/* Main title */}

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-7xl">
            <p className="hero-meta mb-8 text-center text-[8px] uppercase tracking-[0.45em] opacity-50">
              Couture Collection
            </p>

            <h1
              className="
                text-center
                font-serif
                text-[16vw]
                font-light
                leading-[0.72]
                tracking-[-0.07em]
                md:text-[10vw]
              "
            >
              <span className="hero-word inline-block">Rent.</span>{" "}
              <span className="hero-word inline-block italic">
                Buy.
              </span>
              <br />
              <span className="hero-word inline-block">
                Remember.
              </span>
            </h1>

            <p className="hero-meta mx-auto mt-12 max-w-md text-center text-[9px] leading-6 tracking-[0.1em] uppercase opacity-55">
              Curated access to signature Laura Haute Couture
              pieces. Choose the freedom of a single occasion
              or the permanence of ownership.
            </p>
          </div>
        </div>

        {/* Scroll */}

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[7px] uppercase tracking-[0.3em] opacity-40">
              Explore
            </span>

            <span className="text-sm opacity-50">↓</span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 flex items-center gap-5">
            <span className="text-[8px] tracking-[0.3em] opacity-40">
              01
            </span>

            <div className="animated-line h-px w-20 bg-[#181715]/20" />

            <span className="text-[8px] uppercase tracking-[0.3em] opacity-40">
              Two Ways To Wear
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* RENT */}

            <motion.div
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="service-card group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd6ca]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgiNlMf38SsbXVIgXiWyaGAAGSsjkG1oRW5lJ3LIpxuawiT5qfsdnPHUTzTnZNBtbTMMJgR1zLrSshqWZwHD2kTHambGTfi5wyKYZ0lnFWHkcjD7zhRytXZEBhTqgpq2x6P2dIomRDYfp7GjNo3uQABtqHu0QrzUbCuhT8dRUsIyyHyYMCX2Xpfg52qkdtCSe47nZbiRWaTKpndpD6LoJQNSNpSeTv8vVw7nu0GEytqxJYEubJRhWF"
                  alt="Rent couture"
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.76,0,.24,1)]
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

                <div className="absolute left-6 top-6">
                  <span className="border border-white/30 bg-black/10 px-4 py-2 text-[7px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    Occasion
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eee6] text-[#181715] opacity-0 transition-all duration-700 group-hover:opacity-100">
                  ↗
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between border-b border-[#181715]/15 pb-5">
                <div>
                  <p className="mb-2 text-[7px] uppercase tracking-[0.3em] opacity-40">
                    The Experience
                  </p>

                  <h2 className="font-serif text-4xl font-light tracking-[-0.04em]">
                    Rent
                  </h2>

                  <p className="mt-3 max-w-sm text-[9px] leading-5 tracking-[0.04em] opacity-55">
                    Access the archive for a single
                    unforgettable occasion.
                  </p>
                </div>

                <span className="text-[8px] tracking-[0.2em] opacity-30">
                  01
                </span>
              </div>
            </motion.div>

            {/* BUY */}

            <motion.div
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="service-card group md:mt-32"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#25231f]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsWvPQCqtQLIvvZo-l1lRCDWRNkTrYmTqBINhsz52WgYVdsQQwGOdJv6w8BI5Xh1AEaprCyiyxSKjieNtz_aJwjeILIDTEyBpuuomgCURZL0H3uCuxKyBGjyCaT25FikylHMe82US8W0adGnJeUNb0mtDEgimqkTEn_8d07rW1rmSGt8wdLVrtQhcG8yfnEUlq97t6lGCJgj8ER4yQubD1F__jO5JjKV3wAw8k01XD3Vz1GJ4jhPwc"
                  alt="Buy couture"
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.76,0,.24,1)]
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

                <div className="absolute left-6 top-6">
                  <span className="border border-white/30 bg-black/10 px-4 py-2 text-[7px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    Ownership
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eee6] text-[#181715] opacity-0 transition-all duration-700 group-hover:opacity-100">
                  ↗
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between border-b border-[#181715]/15 pb-5">
                <div>
                  <p className="mb-2 text-[7px] uppercase tracking-[0.3em] opacity-40">
                    The Investment
                  </p>

                  <h2 className="font-serif text-4xl font-light tracking-[-0.04em]">
                    Buy
                  </h2>

                  <p className="mt-3 max-w-sm text-[9px] leading-5 tracking-[0.04em] opacity-55">
                    Acquire an exceptional piece and
                    make it permanently yours.
                  </p>
                </div>

                <span className="text-[8px] tracking-[0.2em] opacity-30">
                  02
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK STATEMENT
      ===================================================== */}

      <section className="bg-[#181715] px-6 py-32 text-[#f3eee6] md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 flex items-center gap-5">
            <span className="text-[8px] tracking-[0.3em] opacity-30">
              02
            </span>

            <div className="animated-line h-px w-20 bg-white/20" />

            <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">
              The Philosophy
            </span>
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-6xl
              font-serif
              text-[12vw]
              font-light
              leading-[0.82]
              tracking-[-0.06em]
              md:text-[8vw]
            "
          >
            Not just a dress.
            <br />
            <span className="italic opacity-70">
              A moment.
            </span>
          </motion.h2>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Curated",
                text: "Every piece is selected for its silhouette, craftsmanship and ability to become unforgettable.",
              },
              {
                number: "02",
                title: "Considered",
                text: "From first fitting to final styling, every detail is approached with intention.",
              },
              {
                number: "03",
                title: "Personal",
                text: "Your occasion deserves something that feels entirely yours.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: Number(item.number) * 0.1,
                }}
                className="border-t border-white/15 pt-6"
              >
                <div className="flex justify-between">
                  <span className="text-[8px] opacity-30">
                    {item.number}
                  </span>

                  <span className="font-serif text-2xl font-light">
                    {item.title}
                  </span>
                </div>

                <p className="mt-8 max-w-xs text-[9px] leading-6 tracking-[0.04em] opacity-45">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section className="bg-[#e8e1d6] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="mb-6 flex items-center gap-5">
                <span className="text-[8px] tracking-[0.3em] opacity-40">
                  03
                </span>

                <div className="animated-line h-px w-16 bg-[#181715]/20" />
              </div>

              <h2 className="font-serif text-5xl font-light tracking-[-0.05em] md:text-7xl">
                The Archive
              </h2>
            </div>

            <Link
              to="/"
              className="
                hidden
                border-b
                border-[#181715]/30
                pb-2
                text-[7px]
                uppercase
                tracking-[0.3em]
                transition-opacity
                hover:opacity-50
                md:block
              "
            >
              View Collection ↗
            </Link>
          </div>

          <div className="collection-grid grid grid-cols-1 gap-12 md:grid-cols-3">
            {collections.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -10 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="collection-item group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#d5cec2]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-[cubic-bezier(.76,0,.24,1)]
                      group-hover:scale-105
                    "
                  />

                  {/* Dark hover */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-colors
                      duration-700
                      group-hover:bg-black/25
                    "
                  />

                  {/* Number */}

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      text-[8px]
                      tracking-[0.25em]
                      text-white
                      opacity-60
                    "
                  >
                    {item.number}
                  </span>

                  {/* Enquire */}

                  <div
                    className="
                      absolute
                      inset-x-5
                      bottom-5
                      flex
                      translate-y-5
                      items-center
                      justify-between
                      border
                      border-white/30
                      bg-white/10
                      px-5
                      py-4
                      opacity-0
                      backdrop-blur-md
                      transition-all
                      duration-700
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-[7px] uppercase tracking-[0.25em] text-white">
                      Enquire
                    </span>

                    <span className="text-white">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light tracking-[-0.03em]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[7px] uppercase tracking-[0.25em] opacity-45">
                      {item.type}
                    </p>
                  </div>

                  <span className="mt-2 text-[7px] uppercase tracking-[0.2em] opacity-30">
                    Couture
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/"
            className="
              mt-16
              block
              border
              border-[#181715]/20
              px-6
              py-5
              text-center
              text-[8px]
              uppercase
              tracking-[0.3em]
              transition-all
              duration-500
              hover:bg-[#181715]
              hover:text-[#f3eee6]
              md:hidden
            "
          >
            View Full Collection ↗
          </Link>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f1ede5] px-6 py-32 md:px-10 md:py-48">
        <div className="absolute -right-20 top-10 font-serif text-[30vw] leading-none text-[#181715]/[0.025]">
          L
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-8 text-[8px] uppercase tracking-[0.4em] opacity-40">
            Private Consultation
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="
              font-serif
              text-[13vw]
              font-light
              leading-[0.8]
              tracking-[-0.07em]
              md:text-[8vw]
            "
          >
            Find the piece
            <br />
            <span className="italic">
              that finds you.
            </span>
          </motion.h2>

          <p className="mx-auto mt-10 max-w-md text-[9px] leading-6 tracking-[0.06em] opacity-50">
            Visit our Dubai atelier and discover
            the collection in person.
          </p>

          <Link
            to="/contact#appointment"
            className="
              group
              relative
              mx-auto
              mt-12
              flex
              w-fit
              items-center
              gap-12
              overflow-hidden
              border
              border-[#181715]
              bg-[#181715]
              px-8
              py-5
              text-[#f3eee6]
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-[#e0d7ca]
                transition-transform
                duration-700
                ease-[cubic-bezier(.76,0,.24,1)]
                group-hover:translate-x-0
              "
            />

            <span className="relative z-10 text-[8px] uppercase tracking-[0.3em] transition-colors duration-500 group-hover:text-[#181715]">
              Book An Appointment
            </span>

            <span className="relative z-10 text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#181715]">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RentBuy;