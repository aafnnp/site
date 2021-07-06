import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  /*
   * Constructor() {
   * Super();
   * This.setFavicon=this.setFavicon.bind(this)
   * This.emojiFavicon=this.emojiFavicon.bind(this)
   * }
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  /*
   *
   * SetFavicon(url){
   * Const favicon = Document.querySelector('link[rel="icon"]');
   * If (favicon) {
   * // Update the new link
   * Favicon.href = url;
   * } else {
   * // Create new `link`
   * Const link = Document.createElement('link');
   * Link.rel = 'icon';
   * Link.href = url;
   * // Append to the `head` element
   * Document.head.appendChild(link);
   * }
   * }
   *
   * EmojiFavicon(emoji){
   * Const canvas = Document.createElement('canvas');
   * Canvas.height = 64;
   * Canvas.width = 64;
   * // Get the canvas context
   * Const context = canvas.getContext('2d');
   * Context.font = '64px serif';
   * Context.fillText(emoji, 0, 64);
   * // Get the custom URL
   * Const url = canvas.toDataURL();
   * // Update the favicon
   * This.setFavicon(url);
   * }
   */

  render() {
    this.emojiFavicon("🎉");

    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />

          <NextScript />

          <script
            data-cf-beacon='{"token": "f47ddfde9a164f9fabe6d0143a7f26be"}'
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
