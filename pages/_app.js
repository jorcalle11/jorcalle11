import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Encode+Sans"
            rel="stylesheet"
          />
          <title>Jorge Calle</title>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            font-family: 'Encode Sans', sans-serif;
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
