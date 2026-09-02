import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  /* =====================================================
     PAGE ANIMATIONS
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top 80%",
          },
        }
      );

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MAGNETIC BUTTON
  ===================================================== */

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const move = (e) => {
      const rect = button.getBoundingClientRect();

      const x =
        e.clientX -
        (rect.left + rect.width / 2);

      const y =
        e.clientY -
        (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.35)",
      });
    };

    button.addEventListener("mousemove", move);
    button.addEventListener("mouseleave", leave);

    return () => {
      button.removeEventListener("mousemove", move);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        min-h-screen
        overflow-hidden
        bg-[#f3efe7]
        text-[#191816]
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[85vh]
          items-center
          justify-center
          overflow-hidden
          bg-[#171614]
          px-6
          text-[#f4f0e8]
          md:px-10
        "
      >
        {/* Background */}

        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTUVgbieDs_RdcsxO2T7pHw54-KlnFyWnW7iTFch7rWtTAP632HtWpg0EmKWf238G-9KscElyJ1BsehHG3bSq1SaInrA-ODrwlJJQXXaiUsxQIhOElOZW9NwFiCKO-f8PVVmiYbBbVmmf_EnwG-OfEN4MyZqyvgvQmvY3JFjpbJLv31zM8uaBgp7RdZhGE4PXzP06hw8E1FUydHBityqY9P5MeVlLcTP1zTtoDyC4GBct1XeAdPMGl"
            alt="Laura Haute Couture atelier"
            className="
              h-full
              w-full
              object-cover
              opacity-35
            "
          />

          <div className="absolute inset-0 bg-black/45" />

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

        {/* Top label */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            absolute
            left-6
            top-32
            md:left-10
          "
        >
          <span
            className="
              text-[8px]
              tracking-[0.4em]
              uppercase
              opacity-50
            "
          >
            Private Appointments
          </span>
        </motion.div>

        {/* Main title */}

        <div className="relative z-10 max-w-6xl text-center">

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                font-serif
                text-[14vw]
                font-light
                leading-[0.8]
                tracking-[-0.06em]
                md:text-[9vw]
              "
            >
              Begin your
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                font-serif
                text-[14vw]
                font-light
                italic
                leading-[0.8]
                tracking-[-0.06em]
                md:text-[9vw]
              "
            >
              couture journey.
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
              max-w-lg
              text-[10px]
              leading-6
              tracking-[0.12em]
              uppercase
              opacity-55
            "
          >
            Tell us about your vision,
            your occasion, and the
            piece you've imagined.
          </motion.p>
        </div>

        {/* Scroll */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
          "
        >
          <motion.span
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="
              block
              text-xs
              opacity-50
            "
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          px-6
          py-28
          md:px-10
          md:py-40
        "
      >
        <div className="mx-auto max-w-[1400px]">

          {/* Section header */}

          <div className="contact-reveal mb-20 flex items-center gap-5">
            <span className="text-[8px] tracking-[0.3em] opacity-40">
              01
            </span>

            <div className="h-px w-16 bg-[#191816]/20" />

            <span className="text-[8px] tracking-[0.3em] uppercase opacity-40">
              The Atelier
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-20
              lg:grid-cols-12
              lg:gap-12
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              className="
                lg:col-span-5
                lg:col-start-1
              "
            >

              {/* Image */}

              <div
                className="
                  contact-reveal
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  bg-[#ddd6ca]
                "
              >
                <img
                  ref={imageRef}
                  src="/img18.jpeg"
                  alt="Laura Haute Couture atelier"
                  className="
                    absolute
                    -top-[10%]
                    h-[120%]
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-black/5" />

                {/* Image label */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    border
                    border-white/30
                    bg-black/10
                    px-4
                    py-3
                    backdrop-blur-md
                    text-[7px]
                    tracking-[0.25em]
                    text-white
                    uppercase
                  "
                >
                  Palm Strip Mall / Dubai
                </div>
              </div>

              {/* Atelier details */}

              <div
                className="
                  contact-reveal
                  mt-10
                  border-t
                  border-[#191816]/15
                  pt-8
                "
              >
                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <p
                      className="
                        mb-4
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-40
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        font-serif
                        text-xl
                        font-light
                      "
                    >
                      Palm Strip Mall
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        leading-5
                        tracking-[0.08em]
                        uppercase
                        opacity-55
                      "
                    >
                      Jumeirah 1
                      <br />
                      Dubai, UAE
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        mb-4
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-40
                      "
                    >
                      Connect
                    </p>

                    <div className="flex flex-col gap-3">
                      <a
                        href="#"
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-[8px]
                          tracking-[0.2em]
                          uppercase
                        "
                      >
                        Instagram
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          ↗
                        </span>
                      </a>

                      <a
                        href="#"
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-[8px]
                          tracking-[0.2em]
                          uppercase
                        "
                      >
                        WhatsApp
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE / FORM
            ================================================= */}

            <div
              id="appointment"
              ref={formRef}
              className="
                lg:col-span-6
                lg:col-start-7
              "
            >
              <div className="contact-reveal">

                <p
                  className="
                    mb-5
                    text-[8px]
                    tracking-[0.35em]
                    uppercase
                    opacity-40
                  "
                >
                  Private Consultation
                </p>

                <h2
                  className="
                    font-serif
                    text-5xl
                    font-light
                    leading-[0.95]
                    tracking-[-0.04em]
                    md:text-7xl
                  "
                >
                  Let's create
                  <br />
                  <span className="italic">
                    something
                  </span>
                  <br />
                  unforgettable.
                </h2>

                <p
                  className="
                    mt-8
                    max-w-md
                    text-[10px]
                    leading-6
                    tracking-[0.04em]
                    opacity-55
                  "
                >
                  Complete the form below and
                  our concierge will be in touch
                  within 24 hours.
                </p>
              </div>

              {/* FORM */}

              <form
                className="
                  contact-reveal
                  mt-16
                  flex
                  flex-col
                  gap-10
                "
              >

                {/* NAME + PHONE */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-8
                    md:grid-cols-2
                  "
                >

                  <div className="group">
                    <label
                      htmlFor="name"
                      className="
                        mb-3
                        block
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-45
                      "
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        border-b
                        border-[#191816]/20
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        transition-colors
                        duration-500
                        placeholder:opacity-30
                        focus:border-[#191816]
                      "
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="
                        mb-3
                        block
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-45
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+971"
                      className="
                        w-full
                        border-b
                        border-[#191816]/20
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        transition-colors
                        duration-500
                        placeholder:opacity-30
                        focus:border-[#191816]
                      "
                    />
                  </div>

                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-3
                      block
                      text-[7px]
                      tracking-[0.3em]
                      uppercase
                      opacity-45
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="
                      w-full
                      border-b
                      border-[#191816]/20
                      bg-transparent
                      py-3
                      text-sm
                      outline-none
                      transition-colors
                      duration-500
                      placeholder:opacity-30
                      focus:border-[#191816]
                    "
                  />
                </div>

                {/* APPOINTMENT TYPE */}

                <div>
                  <label
                    className="
                      mb-5
                      block
                      text-[7px]
                      tracking-[0.3em]
                      uppercase
                      opacity-45
                    "
                  >
                    I am interested in
                  </label>

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-3
                      md:grid-cols-3
                    "
                  >
                    {[
                      "Bridal",
                      "Evening",
                      "Custom",
                      "Rent & Buy",
                      "General",
                    ].map((type) => (
                      <label
                        key={type}
                        className="cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="appointment"
                          value={type}
                          className="peer sr-only"
                        />

                        <div
                          className="
                            border
                            border-[#191816]/15
                            px-4
                            py-4
                            text-center
                            text-[7px]
                            tracking-[0.18em]
                            uppercase
                            opacity-60
                            transition-all
                            duration-500
                            hover:border-[#191816]/40
                            hover:opacity-100
                            peer-checked:border-[#191816]
                            peer-checked:bg-[#191816]
                            peer-checked:text-[#f4f0e8]
                            peer-checked:opacity-100
                          "
                        >
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* DATE + TIME */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-8
                    md:grid-cols-2
                  "
                >

                  <div>
                    <label
                      htmlFor="date"
                      className="
                        mb-3
                        block
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-45
                      "
                    >
                      Preferred Date
                    </label>

                    <input
                      id="date"
                      type="date"
                      className="
                        w-full
                        border-b
                        border-[#191816]/20
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        focus:border-[#191816]
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="
                        mb-3
                        block
                        text-[7px]
                        tracking-[0.3em]
                        uppercase
                        opacity-45
                      "
                    >
                      Preferred Time
                    </label>

                    <select
                      id="time"
                      defaultValue=""
                      className="
                        w-full
                        border-b
                        border-[#191816]/20
                        bg-transparent
                        py-3
                        text-sm
                        outline-none
                        focus:border-[#191816]
                      "
                    >
                      <option value="" disabled>
                        Select a time
                      </option>

                      <option value="morning">
                        Morning / 10AM–1PM
                      </option>

                      <option value="afternoon">
                        Afternoon / 2PM–5PM
                      </option>

                      <option value="evening">
                        Evening / 5PM–8PM
                      </option>
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-3
                      block
                      text-[7px]
                      tracking-[0.3em]
                      uppercase
                      opacity-45
                    "
                  >
                    Tell Us About Your Vision
                  </label>

                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your occasion, style preferences, event date..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-[#191816]/20
                      bg-transparent
                      py-3
                      text-sm
                      outline-none
                      placeholder:opacity-30
                      focus:border-[#191816]
                    "
                  />
                </div>

                {/* SUBMIT */}

                <div className="pt-4">

                  <motion.button
                    ref={buttonRef}
                    whileTap={{
                      scale: 0.97,
                    }}
                    type="submit"
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      overflow-hidden
                      border
                      border-[#191816]
                      bg-[#191816]
                      px-6
                      py-5
                      text-[#f4f0e8]
                    "
                  >

                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-[#e7dfd3]
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
                        text-[8px]
                        tracking-[0.3em]
                        uppercase
                        transition-colors
                        duration-500
                        group-hover:text-[#191816]
                      "
                    >
                      Request Appointment
                    </span>

                    <span
                      className="
                        relative
                        z-10
                        text-lg
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        group-hover:text-[#191816]
                      "
                    >
                      →
                    </span>

                  </motion.button>

                  <p
                    className="
                      mt-5
                      text-[8px]
                      leading-5
                      tracking-[0.05em]
                      opacity-35
                    "
                  >
                    By submitting this form,
                    you are requesting a private
                    consultation. Our concierge
                    will contact you within 24 hours.
                  </p>

                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section
        className="
          overflow-hidden
          bg-[#171614]
          px-6
          py-32
          text-center
          text-[#f4f0e8]
          md:px-10
          md:py-48
        "
      >
        <p
          className="
            mb-8
            text-[8px]
            tracking-[0.4em]
            uppercase
            opacity-35
          "
        >
          Laura Haute Couture / Dubai
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            font-serif
            text-[13vw]
            font-light
            leading-[0.8]
            tracking-[-0.07em]
            md:text-[9vw]
          "
        >
          We look forward
          <br />
          <span className="italic">
            to meeting you.
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 h-px w-16 bg-white/20" />

        <p
          className="
            mx-auto
            mt-10
            max-w-md
            text-[9px]
            leading-6
            tracking-[0.12em]
            uppercase
            opacity-40
          "
        >
          Private consultations available
          by appointment at our Dubai atelier.
        </p>
      </section>

    </main>
  );
};

export default Contact;