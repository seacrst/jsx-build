import React from "react"
import {renderToStaticMarkup} from "react-dom/server";
import {writeFileSync} from "node:fs";

const Jsx = () => (
  <div style={styles}>
    <span>I love esbuild</span>
  </div>
);

const styles = {
  background: "cyan",
  margin: "72px auto",
  borderRadius: "24px",
  boxShadow: "2px 4px 8px 16px pink",
  width: "fit-content",
  padding: "24px",
  color: "#000",
  fontWeight: 700,
  textTransform: "uppercase"
};



const html = renderToStaticMarkup(<Jsx/>);

const index = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ${html}
  </body>
  </html>
`;

writeFileSync("build/index.html", index, "utf-8");



