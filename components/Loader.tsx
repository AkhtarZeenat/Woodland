export default function Loader() {
  return (
    <>
      <div id="loader">
        <div className="serif">WoodLand</div>
        <div className="bar">
          <span></span>
        </div>
      </div>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <script
        // Fail-safe: if the GSAP CDN scripts don't load, force everything visible.
        dangerouslySetInnerHTML={{
          __html: `
  setTimeout(function(){
      if (typeof gsap === 'undefined' || !document.body.classList.contains('gsap-ready')) {
          document.documentElement.classList.add('force-visible');
      }
  }, 3500);
`,
        }}
      />
    </>
  );
}
