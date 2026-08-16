import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./gallery.css";

export const metadata = {
  title: "Gallery | WoodLand Doors",
};

export default function GalleryPage() {
  return (
    <>
      <Loader />

      <Nav active="gallery" />

      <section className="page-hero" style={{ minHeight: "54vh" }}>
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800"
            alt="Gallery"
          />
        </div>
        <div className="container">
          <span className="eyebrow">Installed Work</span>
          <h1 className="serif">Doors, in place.</h1>
          <p className="kicker">
            A look at WoodLand doors and locks fitted across homes, offices,
            and commercial spaces.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="masonry">
            <div className="m-item tall" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000"
                alt="Residential entrance install"
              />
              <div className="cap">
                <span>Residential</span>
                <h4 className="serif">DHA Rawalpindi</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000"
                alt="Bathroom PET door install"
              />
              <div className="cap">
                <span>Bathroom · PET</span>
                <h4 className="serif">Bahria Town</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000"
                alt="Office door install"
              />
              <div className="cap">
                <span>Commercial</span>
                <h4 className="serif">Blue Area Office</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=1000"
                alt="CCP finish door"
              />
              <div className="cap">
                <span>CCP Finish</span>
                <h4 className="serif">Private Residence</h4>
              </div>
            </div>
            <div className="m-item tall" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=1000"
                alt="Smart lock install"
              />
              <div className="cap">
                <span>Smart Lock Fit</span>
                <h4 className="serif">F-11 Islamabad</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000"
                alt="PPH interior door"
              />
              <div className="cap">
                <span>PPH Interior</span>
                <h4 className="serif">Chaklala Scheme</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1000"
                alt="Kitchen utility door"
              />
              <div className="cap">
                <span>Kitchen Utility</span>
                <h4 className="serif">Askari Housing</h4>
              </div>
            </div>
            <div className="m-item" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
                alt="Hardware detail"
              />
              <div className="cap">
                <span>Hardware Detail</span>
                <h4 className="serif">Private Residence</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-band" data-reveal>
        <div className="container">
          <p>
            &quot;We replaced every internal door with WoodLand&apos;s PPH
            range two years ago — not one has swelled, chipped, or needed
            repainting since.&quot;
          </p>
          <span>— Site Engineer, Bahria Town Project</span>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Have a Project?
          </span>
          <h2 className="serif" style={{ fontSize: "44px", marginBottom: "34px" }}>
            Let&apos;s plan your doors and locks together.
          </h2>
          <a href="/contact" className="btn">
            Start a project
          </a>
        </div>
      </section>

      <Footer showShowroomLink={false} />
    </>
  );
}
