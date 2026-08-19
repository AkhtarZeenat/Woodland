export default function Footer({
  showShowroomLink = true,
}: {
  /** gallery.html's footer omits the "Showroom" link under Information — preserved as-is. */
  showShowroomLink?: boolean;
}) {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <em>WoodLand</em>
            </div>
            <p
              style={{
                color: "var(--ivory-dim)",
                maxWidth: "300px",
                lineHeight: 1.8,
              }}
            >
              Water-resistant, termite-proof PET, PPH &amp; CCP doors plus
              complete lock solutions for modern Pakistani homes and
              businesses.
            </p>
          </div>
          <div className="footer-col">
            <h5>Catalogue</h5>
            <a href="/collections">PET Doors</a>
            <a href="/collections">PPH Doors</a>
            <a href="/collections">CCP Doors</a>
            <a href="/door-locks">Door Locks</a>
          </div>
          <div className="footer-col">
            <h5>Information</h5>
            <a href="/our-story">About WoodLand</a>
            {/* <a href="/gallery">Gallery</a> */}
            {showShowroomLink && <a href="/contact">Showroom</a>}
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="#">Instagram</a>
            <a href="https://www.facebook.com/people/Woodland-Doors/61592541773902/">Facebook</a>
            <a href="/contact">Email Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 WOODLAND DOORS</span>
          <span>MADE FOR PAKISTAN</span>
        </div>
      </div>
    </footer>
  );
}
