// Lets TypeScript resolve plain, global CSS side-effect imports like
// `import './home.css'` or `import './globals.css'`. Next.js's build
// pipeline (webpack/SWC) already handles these at compile time — this
// file only silences the TS language-server / editor error:
// "Cannot find module or type declarations for side-effect import of './x.css'"
declare module "*.css";
