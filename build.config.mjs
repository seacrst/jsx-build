import esbuild from "esbuild";

esbuild.build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  loader: { '.js': 'jsx' },
  outfile: 'build/main.js',
  platform: "node",
  format: "cjs",
});