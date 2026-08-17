import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./our-story.css";

export const metadata = {
  title: "About WoodLand | Doors Redefined",
};

export default function OurStoryPage() {
  return (
    <>
      <Loader />

      <Nav active="about" />

      <section className="page-hero story-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=1800"
            alt="WoodLand doors"
          />
        </div>

        <div className="container story-hero-content">
          <span className="eyebrow">
            About WoodLand
          </span>

          <h1 className="serif">
            A door is the first
            <br />
            impression of a space.
          </h1>

          <p className="kicker">
            Timeless design, reliable quality, and lasting durability
            engineered for modern living.
          </p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">

          <div className="story-layout">

            {/* TEXT */}

            <div
              className="story-copy"
              data-reveal
            >
              <span className="eyebrow">
                Our Belief
              </span>

              <h2 className="serif story-title">
                Doors that don&apos;t just connect spaces they define them.
              </h2>

              <p>
                At WoodLand, we believe a door is more than just an entrance.
                It&apos;s the first impression of a space. That&apos;s why we
                create doors that combine timeless design, reliable quality,
                and lasting durability.
              </p>

              <p>
                Every WoodLand door is thoughtfully crafted to complement
                modern living, offering the perfect balance of style,
                strength, and functionality. From contemporary interiors to
                elegant commercial spaces, our designs are made to enhance
                every environment with confidence and sophistication.
              </p>

              <p>
                With a commitment to quality craftsmanship and attention to
                detail, WoodLand is dedicated to creating doors that
                don&apos;t just connect spaces they define them.
              </p>
            </div>

            {/* IMAGE */}

            <div
              className="story-img img-reveal"
              data-reveal
            >
              <img
                src="/5.jpeg"
                alt="WoodLand door"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="split">

        {/* IMAGE */}

        <div className="split-img img-reveal">
          <img
            src="/6.jpeg"
            alt="Door panel material"
          />
        </div>

        {/* CONTENT */}

        <div
          className="split-text"
          data-reveal
        >
          <span className="eyebrow">
            Engineered, Not Grown
          </span>

          <h2 className="serif split-title">
            Built to outlast the elements.
          </h2>

          <p>
            Instead of relying on solid timber which swells, cracks, and
            needs repainting every WoodLand door is built from engineered
            PET, PPH, or CCP panels, sealed against moisture from the core
            out.
          </p>

          <p>
            The result is a door that looks refined on day one and still
            closes true after years of Pakistan&apos;s heat, humidity, and
            monsoon seasons.
          </p>

          {/* MATERIALS */}

          <div className="mat-row">

            <div className="mat-box">
              <h4>PET</h4>

              <p>
                Sealed core for wet areas bathrooms, kitchens, utility
                doors.
              </p>
            </div>

            <div className="mat-box">
              <h4>PPH</h4>

              <p>
                Rigid, lightweight panels that resist warping and swelling.
              </p>
            </div>

            <div className="mat-box">
              <h4>CCP</h4>

              <p>
                Our premium finish line, closest in depth and texture to
                natural wood.
              </p>
            </div>

          </div>
        </div>

      </section>

      <section className="section values-section">
        <div className="container">

          <div
            className="values-heading"
            data-reveal
          >
            <span className="eyebrow">
              What We Hold To
            </span>

            <h2 className="serif">
              Three working principles
            </h2>
          </div>

          <div className="values">

            {/* DURABILITY */}

            <div
              className="value-card"
              data-reveal
              data-tilt
            >
              <div className="idx">
                Durability
              </div>

              <h3 className="serif">
                Zero maintenance, by design
              </h3>

              <p>
                No polish, no paint, no annual touch-ups. Every WoodLand door
                is finished to stay finished water resistant, scratch
                resistant, termite proof, from the day it&apos;s fitted.
              </p>
            </div>

            {/* CONSISTENCY */}

            <div
              className="value-card"
              data-reveal
              data-tilt
            >
              <div className="idx">
                Consistency
              </div>

              <h3 className="serif">
                The same door, every time
              </h3>

              <p>
                Engineered panels don&apos;t have the natural variance of
                timber what you approve in the showroom is exactly what
                arrives on-site, every single time.
              </p>
            </div>

            {/* COMPLETION */}

            <div
              className="value-card"
              data-reveal
              data-tilt
            >
              <div className="idx">
                Completion
              </div>

              <h3 className="serif">
                Beyond the door itself
              </h3>

              <p>
                From the panel to the lock, we supply and fit the hardware
                that finishes the job mortise sets, smart locks, handles,
                and hinges, matched and installed.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}