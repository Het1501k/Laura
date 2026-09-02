import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const registerRef = useScrollReveal();

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const narrativeRef = useRef(null);
  const approachRef = useRef(null);

  useEffect(() => {
    const refs = [
      heroRef,
      narrativeRef,
      approachRef,
    ];

    refs.forEach((ref) => {
      if (ref.current) {
        registerRef(ref.current);
      }
    });
  }, [registerRef]);

  /* =====================================================
     HERO PARALLAX
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current) return;

      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#f3efe7] text-[#191816]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#171614]
          text-[#f4f0e8]
        "
      >
        {/* Background image */}

        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxSwoYQT2EMapmSAep57-lEtVO-bet2fd7ieAkWMGkYhLGC3pAdceWfMdHFQiCKBfFIpvVWmVY4sn853RPz7uuSZ_Zuour5sSwQgDBpchYYm-y9g8f57sofmMPDY_C25jesKIhcv3gmOwBxOMm0pY16amEGAA3H5WgEUzSx-9jw6SgMTa2XMsj7imC3r500gtREUh4QMC9IMjnyz_3afqw5YNXdG8m_vEPdhpkwfJBFM5lc_Axx0yr"
            alt="Laura Haute Couture"
            className="
              h-[115%]
              w-full
              object-cover
              opacity-45
            "
          />

          <div className="absolute inset-0 bg-black/35" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#171614]
              via-transparent
              to-black/20
            "
          />
        </div>

        {/* Small editorial label */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            absolute
            left-6
            top-32
            md:left-10
            md:top-36
          "
        >
          <p
            className="
              text-[8px]
              tracking-[0.4em]
              uppercase
              opacity-60
            "
          >
            The House
          </p>
        </motion.div>

        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
            px-6
            text-center
            md:px-10
          "
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                font-serif
                text-[15vw]
                font-light
                leading-[0.8]
                tracking-[-0.06em]
                md:text-[10vw]
              "
            >
              The House
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.38,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                font-serif
                text-[15vw]
                font-light
                italic
                leading-[0.8]
                tracking-[-0.06em]
                md:text-[10vw]
              "
            >
              of Laura.
            </motion.h1>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="
              mx-auto
              mt-10
              max-w-xl
              text-[10px]
              leading-6
              tracking-[0.12em]
              uppercase
              opacity-65
              md:text-[11px]
            "
          >
            Modern couture.
            <br />
            Meticulous craftsmanship.
            <br />
            Unmistakably yours.
          </motion.p>
        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
          "
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className="
                text-[7px]
                tracking-[0.35em]
                uppercase
                opacity-40
              "
            >
              Discover
            </span>

            <motion.span
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="text-xs opacity-60"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        ref={narrativeRef}
        className="
          relative
          overflow-hidden
          px-6
          py-28
          md:px-10
          md:py-40
        "
      >
        <div className="mx-auto max-w-[1400px]">

          {/* Section number */}

          <div className="mb-20 flex items-center gap-5">
            <span className="text-[8px] tracking-[0.3em] opacity-40">
              01
            </span>

            <div className="h-px w-16 bg-[#191816]/20" />

            <span className="text-[8px] tracking-[0.3em] uppercase opacity-40">
              The Beginning
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-16
              md:grid-cols-12
              md:items-center
              md:gap-10
            "
          >

            {/* Text */}

            <div
              className="
                md:col-span-5
                md:col-start-2
              "
            >
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="
                  font-serif
                  text-5xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.04em]
                  md:text-7xl
                "
              >
                The art of
                <br />
                <span className="italic">
                  restraint.
                </span>
              </motion.h2>

              <div className="mt-10 space-y-6">
                <p
                  className="
                    text-[11px]
                    leading-7
                    tracking-[0.04em]
                    opacity-65
                  "
                >
                  At Laura Haute Couture, we believe
                  true elegance does not need to
                  announce itself.
                </p>

                <p
                  className="
                    text-[11px]
                    leading-7
                    tracking-[0.04em]
                    opacity-65
                  "
                >
                  Every silhouette is considered.
                  Every seam has purpose. Every
                  fabric is selected for the way it
                  moves, catches light, and becomes
                  part of the woman wearing it.
                </p>
              </div>
            </div>

            {/* Image */}

            <div
              className="
                relative
                md:col-span-5
                md:col-start-8
              "
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  bg-[#e6e0d5]
                "
              >
                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoYLkfXMRbYiz_kKo41OLhjg_W9zHrh345nG5BQBwvQ3H163b67KF5f3HcTCMJgpH7Z8FIdYnBu1LRsTq0wwQK_D0w6YWO9U4cY1YcB1vkiXAMZaPbKmnYe35L8f9dXC0rM9awUEtEGvCJl3Zv60iFgspMaaIgCaGpneel-cQdU4SanI6ZAQ0Y0Iu_3HKSNuiBD64AZXGSEv_QojC1q_Dvd7TFAy6bqyjVLA_qbSa5cN0RKb80EtRo"
                  alt="Couture craftsmanship"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Floating number */}

              <div
                className="
                  absolute
                  -bottom-8
                  -left-5
                  font-serif
                  text-[90px]
                  font-light
                  leading-none
                  opacity-10
                  md:-left-12
                  md:text-[140px]
                "
              >
                L
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#171614]
          px-6
          py-32
          text-[#f4f0e8]
          md:px-10
          md:py-48
        "
      >
        <div className="mx-auto max-w-6xl text-center">

          <p
            className="
              mb-10
              text-[8px]
              tracking-[0.4em]
              uppercase
              opacity-40
            "
          >
            Our Philosophy
          </p>

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
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              font-serif
              text-[11vw]
              font-light
              leading-[0.85]
              tracking-[-0.06em]
              md:text-[8vw]
            "
          >
            Less noise.
            <br />
            <span className="italic">
              More presence.
            </span>
          </motion.h2>

          <div className="mx-auto mt-12 h-px w-20 bg-white/20" />

          <p
            className="
              mx-auto
              mt-10
              max-w-lg
              text-[10px]
              leading-6
              tracking-[0.1em]
              uppercase
              opacity-50
            "
          >
            A quiet approach to luxury,
            where craftsmanship becomes
            the statement.
          </p>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section
        ref={approachRef}
        className="
          bg-[#e8e2d7]
          px-6
          py-28
          md:px-10
          md:py-40
        "
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-20 flex items-center gap-5">
            <span className="text-[8px] tracking-[0.3em] opacity-40">
              02
            </span>

            <div className="h-px w-16 bg-[#191816]/20" />

            <span className="text-[8px] tracking-[0.3em] uppercase opacity-40">
              The Laura Approach
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-16
              md:grid-cols-3
              md:gap-8
            "
          >
            {[
              {
                number: "I",
                title: "Craft",
                desc: "Meticulous construction rooted in heritage techniques. Pattern making, draping and hand-finishing come together to create garments of exceptional precision.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CrBdB9ogffr80jLlHg3dwnXhaAGkRGC6CjHsoxvTql283z9QvlOFTVFLoOcM-1FStuMMhw19cciJOKDOSHcWA_4K6M436rZGzuWFFTynUp2hgiVA8kSEXOlrhjlVgIdaNRvPYX2bShr7adflON5Bb87zoohyh09zrFoyNOpQUqwtXIw14tuvU4np5Vo8l5TCTSBmA6VkZdAq7geyHR6LPZ8daja-ow40y-r9kJBR11EfxSgSscR_",
              },
              {
                number: "II",
                title: "Individuality",
                desc: "Your story translated into fabric. Every custom piece is developed collaboratively to become an authentic extension of your personality.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCFpZoKcqz-BkxJO7Jnrfz3bPb-qHTSHqMpvYcgs7f4rpOqjRZtOhw3oRB0h0X5lLaRz5xw43oSC9L5J0IdSpUmUlicUn4kTCoIHuqWO0hjISCD6Qx7oXkflf13QalM-tMog-ouVuScu14KaNAEC9mk-dyOCGCvoLYsOlxaynscxJR-TVCp7NJgBNWDalqhsAflocwTMsErNMUgcNW6fQT6zhWsRweIrV7GQg_VOgqxizOlEbaUSTT",
              },
              {
                number: "III",
                title: "Experience",
                desc: "An intimate sanctuary for selection and fitting, where the process of creating your garment is as memorable as the moment you finally wear it.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9VFrxRUZUuC9z2GJY9zZ3AoQuJYtsgf8Zb6ThjiSrcw-zTRK6WgxnqvbAr4freSWw_CY8PTfWyUqUHlyhsdoNOGDr7AiMpvJq6IoU4-ZUZscVxo3IxQefzvIb3_sIhnd3NWk9aMe_ccpZ1QmshyTsxX9Wsd4UDhYY1IX7vzklmXe_D7eXGsQfxzhRsSUchii2T_WuVe6R-q05AAI-WrT9TVxSEuu7sTjZQdcJwheygTzS-GvzCfy",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group"
              >
                {/* Image */}

                <div
                  className="
                    relative
                    aspect-[3/4]
                    overflow-hidden
                    bg-[#ddd6ca]
                  "
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      bg-black/10
                      backdrop-blur-sm
                      text-[8px]
                      text-white
                    "
                  >
                    {item.number}
                  </div>
                </div>

                {/* Text */}

                <div className="pt-7">
                  <div className="mb-4 flex items-center justify-between">
                    <h3
                      className="
                        font-serif
                        text-2xl
                        font-light
                      "
                    >
                      {item.title}
                    </h3>

                    <span
                      className="
                        text-xs
                        opacity-30
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        group-hover:opacity-100
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <p
                    className="
                      max-w-sm
                      text-[10px]
                      leading-6
                      tracking-[0.04em]
                      opacity-55
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f3efe7]
          px-6
          py-32
          md:px-10
          md:py-48
        "
      >
        <div className="mx-auto max-w-5xl text-center">

          <p
            className="
              mb-8
              text-[8px]
              tracking-[0.4em]
              uppercase
              opacity-40
            "
          >
            Laura Haute Couture
          </p>

          <h2
            className="
              font-serif
              text-[12vw]
              font-light
              leading-[0.82]
              tracking-[-0.07em]
              md:text-[8vw]
            "
          >
            Made for
            <br />
            <span className="italic">
              your moment.
            </span>
          </h2>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="
              mx-auto
              mt-14
              flex
              h-28
              w-28
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-[#191816]/30
              md:h-36
              md:w-36
            "
          >
            <span className="text-[8px] tracking-[0.25em] uppercase">
              Discover
              <br />
              the House
              <br />
              →
            </span>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default About;