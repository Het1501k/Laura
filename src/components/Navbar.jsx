import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "BRIDAL", path: "/" },
    { label: "EVENING", path: "/" },
    { label: "CUSTOM", path: "/" },
    { label: "RENT & BUY", path: "/rent-buy" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-nav-item",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: "power4.out",
        }
      );
    });

    return () => ctx.revert();
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MOBILE NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[100]
          transition-all
          duration-700
          ${
            scrolled
              ? "bg-[#f1ede5]/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              : "bg-[#f1ede5]/75 backdrop-blur-md"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            h-[82px]
            w-full
            items-center
            justify-between
            px-5
            transition-all
            duration-700
            md:h-[92px]
            md:px-10
            ${
              scrolled
                ? "md:h-[76px]"
                : ""
            }
          `}
        >
          {/* =================================================
              LEFT — MOBILE MENU / DESKTOP BRAND
          ================================================= */}

          <div className="flex items-center">
            {/* Mobile menu */}

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="
                group
                flex
                h-10
                w-10
                flex-col
                justify-center
                gap-[5px]
                md:hidden
              "
            >
              <span className="h-px w-5 bg-[#181715] transition-all duration-500 group-hover:w-7" />
              <span className="h-px w-7 bg-[#181715] transition-all duration-500 group-hover:w-5" />
            </button>

            {/* Desktop tiny label */}

            <div className="hidden items-center gap-4 md:flex">
              <span className="h-px w-8 bg-[#181715]/30" />

              <span className="text-[7px] uppercase tracking-[0.35em] text-[#181715]/45">
                Dubai
              </span>
            </div>
          </div>

          {/* =================================================
              CENTER LOGO
          ================================================= */}

          <Link
            to="/"
            className="
              group
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-center
            "
          >
            <span
              className="
                block
                font-serif
                text-[18px]
                font-medium
                leading-none
                tracking-[0.06em]
                text-[#181715]
                transition-all
                duration-700
                group-hover:tracking-[0.12em]
                md:text-[22px]
              "
            >
              LAURA
            </span>

            <span
              className="
                mt-[5px]
                block
                text-[6px]
                font-medium
                uppercase
                tracking-[0.45em]
                text-[#181715]/60
                transition-opacity
                duration-500
                group-hover:text-[#181715]
              "
            >
              Haute Couture
            </span>
          </Link>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-5 md:gap-8">
            {/* Desktop nav */}

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item, index) => (
                <NavLink
                  key={`${item.label}-${index}`}
                  to={item.path}
                  className="group relative py-3"
                >
                  {({ isActive: routerActive }) => {
                    const active =
                      routerActive && item.path !== "/";

                    return (
                      <>
                        <span
                          className={`
                            text-[7px]
                            uppercase
                            tracking-[0.24em]
                            transition-all
                            duration-500
                            ${
                              active
                                ? "text-[#181715]"
                                : "text-[#181715]/50 group-hover:text-[#181715]"
                            }
                          `}
                        >
                          {item.label}
                        </span>

                        {/* Animated underline */}

                        <span
                          className={`
                            absolute
                            bottom-0
                            left-0
                            h-px
                            bg-[#181715]
                            transition-all
                            duration-500
                            ${
                              active
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }
                          `}
                        />
                      </>
                    );
                  }}
                </NavLink>
              ))}
            </div>

            {/* Appointment */}

            <Link
              to="/contact#appointment"
              className="
                group
                relative
                hidden
                overflow-hidden
                border
                border-[#181715]
                bg-[#181715]
                px-5
                py-3
                transition-all
                duration-500
                md:block
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

              <span
                className="
                  relative
                  z-10
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-[#f3eee6]
                  transition-colors
                  duration-500
                  group-hover:text-[#181715]
                "
              >
                Book Appointment
              </span>
            </Link>

            {/* Mobile appointment */}

            <Link
              to="/contact#appointment"
              aria-label="Book appointment"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-[#181715]/20
                md:hidden
              "
            >
              <span className="text-sm">↗</span>
            </Link>
          </div>
        </div>

        {/* Small bottom line */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: "power4.out",
          }}
          className="h-px origin-left bg-[#181715]/10"
        />
      </motion.nav>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              flex-col
              bg-[#181715]
              text-[#f3eee6]
            "
          >
            {/* Menu header */}

            <div className="flex h-[82px] items-center justify-between border-b border-white/10 px-5">
              <span className="text-[7px] uppercase tracking-[0.35em] opacity-40">
                Laura Haute Couture
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                "
              >
                <span className="relative block h-5 w-5">
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      rotate-45
                      bg-[#f3eee6]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      -rotate-45
                      bg-[#f3eee6]
                    "
                  />
                </span>
              </button>
            </div>

            {/* Navigation */}

            <div className="flex flex-1 flex-col justify-center px-8">
              <div className="mb-10 flex items-center gap-4">
                <span className="text-[7px] tracking-[0.35em] opacity-30">
                  MENU
                </span>

                <span className="h-px w-12 bg-white/15" />
              </div>

              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <NavLink
                    key={`${item.label}-mobile`}
                    to={item.path}
                    className="mobile-nav-item group border-b border-white/10 py-5"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          font-serif
                          text-[11vw]
                          font-light
                          leading-none
                          tracking-[-0.04em]
                          transition-all
                          duration-500
                          group-hover:translate-x-3
                          group-hover:italic
                        "
                      >
                        {item.label}
                      </span>

                      <span className="text-sm opacity-20 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Menu footer */}

            <div className="flex items-end justify-between border-t border-white/10 px-8 py-7">
              <div>
                <p className="mb-2 text-[7px] uppercase tracking-[0.3em] opacity-30">
                  Atelier
                </p>

                <p className="font-serif text-lg font-light">
                  Palm Strip Mall
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] opacity-40">
                  Dubai · UAE
                </p>
              </div>

              <Link
                to="/contact#appointment"
                className="
                  border
                  border-white/30
                  px-5
                  py-3
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  transition-all
                  duration-500
                  hover:bg-[#f3eee6]
                  hover:text-[#181715]
                "
              >
                Book
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;