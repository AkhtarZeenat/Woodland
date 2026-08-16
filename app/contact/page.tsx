import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import "./contact.css";

export const metadata = {
  title: "Contact | WoodLand",
};

export default function ContactPage() {
  return (
    <>
      <Loader />

      <Nav active="contact" />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800"
            alt="WoodLand showroom"
          />
        </div>
        <div className="container">
          <span className="eyebrow">Let&apos;s Talk</span>
          <h1 className="serif">Get a Quote.</h1>
          <p className="kicker">
            Tell us the opening size, material preference, and whether you
            need locks fitted too — we&apos;ll follow up within one business
            day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="contact-layout">
            <div data-reveal>
              <div className="info-block">
                <h5>Showroom</h5>
                <p>
                  Plot 14, Industrial Triangle,
                  <br />
                  Rawalpindi, Punjab, Pakistan
                </p>
              </div>
              <div className="info-block">
                <h5>Reach Us</h5>
                <a href="mailto:sales@woodland.pk">sales@woodland.pk</a>
                <a href="tel:+925112345678">+92 51 123 45678</a>
              </div>
              <div className="info-block">
                <h5>Hours</h5>
                <p>
                  Monday – Saturday, 10am – 7pm
                  <br />
                  Site visits available on request
                </p>
              </div>
              <div className="info-block">
                <h5>Follow</h5>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="showroom-strip">
        <img
          src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1800"
          alt="Showroom interior"
        />
        <div className="showroom-caption" data-reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Visit
          </span>
          <h2 className="serif" style={{ fontSize: "44px" }}>
            See the finish in person.
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
}
