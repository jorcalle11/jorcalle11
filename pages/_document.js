import Document, { Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <style>
          {`
            html {
              font-size: 20px
            }

            body {
              font-family: 'Encode Sans', sans-serif;
              margin: 0;
            }
          `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
