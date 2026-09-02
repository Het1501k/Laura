import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const magneticRef = useRef(null);

  const items = [
    { label: "BRIDAL", path: "/bridal" },
    { label: "EVENING", path: "/evening" },
    { label: "CUSTOM", path: "/custom" },
    { label: "RENT & BUY", path: "/rent-buy" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  /* =====================================================
     GSAP FOOTER REVEAL
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MAGNETIC BUTTON
  ===================================================== */

  useEffect(() => {
    const button = magneticRef.current;

    if (!button) return;

    const handleMove = (e) => {
      const rect = button.getBoundingClientRect();

      const x =
        e.clientX -
        (rect.left + rect.width / 2);

      const y =
        e.clientY -
        (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.35)",
      });
    };

    button.addEventListener(
      "mousemove",
      handleMove
    );

    button.addEventListener(
      "mouseleave",
      handleLeave
    );

    return () => {
      button.removeEventListener(
        "mousemove",
        handleMove
      );

      button.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="
        relative
        overflow-hidden
        bg-[#171614]
        text-[#f4f0e8]
      "
    >
      {/* =================================================
          TOP LINE
      ================================================= */}

      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="h-px w-full bg-white/15" />
      </div>

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          py-20
          md:px-10
          md:py-28
        "
      >
        {/* =================================================
            TOP CONTENT
        ================================================= */}

        <div
          className="
            grid
            gap-16
            md:grid-cols-[1.4fr_1fr]
            md:gap-20
          "
        >
          {/* BRAND */}

          <div className="footer-reveal">
            <p
              className="
                mb-6
                text-[8px]
                tracking-[0.35em]
                uppercase
                opacity-40
              "
            >
              Couture / Dubai
            </p>

            <Link
              to="/"
              className="
                group
                block
                overflow-hidden
              "
            >
              <motion.h2
                whileHover={{
                  x: 12,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="
                  font-serif
                  text-[20vw]
                  font-light
                  leading-[0.72]
                  tracking-[-0.07em]
                  md:text-[13vw]
                "
              >
                LAURA
              </motion.h2>
            </Link>

            <p
              className="
                mt-8
                max-w-md
                text-[10px]
                leading-6
                tracking-[0.08em]
                uppercase
                opacity-45
              "
            >
              Bespoke couture created for
              unforgettable moments.
              Designed in Dubai.
          </p>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="footer-reveal">
            <p
              className="
                mb-7
                text-[8px]
                tracking-[0.35em]
                uppercase
                opacity-40
              "
            >
              Explore
            </p>

            <nav>
              <ul>
                {items.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.05,
                    }}
                  >
                    <Link
                      to={item.path}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        py-4
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          tracking-[0.25em]
                          uppercase
                          opacity-65
                          transition-all
                          duration-500
                          group-hover:pl-3
                          group-hover:opacity-100
                        "
                      >
                        {item.label}
                      </span>

                      <span
                        className="
                          text-xs
                          opacity-20
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* =================================================
            APPOINTMENT CTA
        ================================================= */}

        <div
          className="
            footer-reveal
            mt-24
            border-y
            border-white/10
            py-12
            md:mt-32
            md:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-3
                  text-[8px]
                  tracking-[0.35em]
                  uppercase
                  opacity-40
                "
              >
                Private Couture
              </p>

              <h3
                className="
                  font-serif
                  text-3xl
                  font-light
                  tracking-[-0.02em]
                  md:text-5xl
                "
              >
                Your dress.
                <br />
                Your moment.
              </h3>
            </div>

            <Link
              ref={magneticRef}
              to="/contact#appointment"
              className="
                group
                relative
                flex
                h-32
                w-32
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/30
                md:h-40
                md:w-40
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  scale-0
                  rounded-full
                  bg-[#f4f0e8]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(.76,0,.24,1)]
                  group-hover:scale-100
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  gap-1
                  text-center
                  text-[8px]
                  tracking-[0.2em]
                  uppercase
                  transition-colors
                  duration-500
                  group-hover:text-[#171614]
                "
              >
                <span>
                  Book
                </span>

                <span>
                  Appointment
                </span>

                <span
                  className="
                    mt-2
                    text-base
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* =================================================
            LOCATION + SOCIAL
        ================================================= */}

        <div
          className="
            footer-reveal
            grid
            gap-10
            py-12
            md:grid-cols-3
            md:gap-5
          "
        >
          {/* LOCATION */}

          <div>
            <p
              className="
                mb-4
                text-[7px]
                tracking-[0.3em]
                uppercase
                opacity-35
              "
            >
              Visit
            </p>

            <p
              className="
                text-[9px]
                leading-6
                tracking-[0.12em]
                uppercase
                opacity-70
              "
            >
              Palm Strip Mall
              <br />
              Dubai, UAE
            </p>
          </div>

          {/* INSTAGRAM */}

          <div>
            <p
              className="
                mb-4
                text-[7px]
                tracking-[0.3em]
                uppercase
                opacity-35
              "
            >
              Follow
            </p>

            <a
              href="#"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[9px]
                tracking-[0.2em]
                uppercase
                opacity-70
                transition-opacity
                duration-500
                hover:opacity-100
              "
            >
              Instagram

              <span
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* CONTACT */}

          <div>
            <p
              className="
                mb-4
                text-[7px]
                tracking-[0.3em]
                uppercase
                opacity-35
              "
            >
              Enquiries
            </p>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[9px]
                tracking-[0.2em]
                uppercase
                opacity-70
                transition-opacity
                duration-500
                hover:opacity-100
              "
            >
              Contact Studio

              <span
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================
          MASSIVE BOTTOM BRAND
      ================================================= */}

      <div
        className="
          pointer-events-none
          overflow-hidden
          border-t
          border-white/10
        "
      >
        <div
          className="
            whitespace-nowrap
            text-center
            font-serif
            text-[24vw]
            font-light
            leading-[0.7]
            tracking-[-0.08em]
            text-[#f4f0e8]
            opacity-[0.035]
            select-none
          "
        >
         LAURA
        </div>
      </div>

      {/* =================================================
          COPYRIGHT
      ================================================= */}

      <div
        className="
          flex
          flex-col
          gap-3
          border-t
          border-white/10
          px-6
          py-6
          text-[7px]
          tracking-[0.2em]
          uppercase
          opacity-35
          md:flex-row
          md:items-center
          md:justify-between
          md:px-10
        "
      >
        <span>
          © 2026 Laura Haute Couture
        </span>

        <span>
          Unofficial Design Concept
        </span>

        <span>
          Dubai / UAE
        </span>
      </div>
    </footer>
  );
};

export default Footer;