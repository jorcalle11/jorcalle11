import Head from 'next/head';

import { device } from '../constants';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=optional"
          rel="stylesheet"
        />
        <title>Jorge Calle</title>
        <style jsx global>{`
          html {
            font-size: 20px;
          }

          body {
            font-family: 'Quicksand', sans-serif;
            margin: 0;
          }
        `}</style>
      </Head>
      <Layout>
        <section>
          <h1>Hey 👋, I'm Jorge Calle</h1>
          <p>
            I'm a full stack <strong>Javascript Developer</strong> from Sahagún
            (Co), Colombia and currently working at{' '}
            <a target="_blank" href="https://condorlabs.io">
              Condor labs
            </a>
            . I've been writing code for 4 years and I hope to keep doing for a
            long time.
          </p>
        </section>
        <style jsx>{`
          section {
            height: calc(100vh - 96px);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          h1 {
            font-size: 1.7rem;
            text-align: center;
          }

          h1::after {
            content: ' 🙂';
          }

          p {
            line-height: 1.6;
            padding: 0 20px;
            text-align: center;
          }

          @media (min-width: ${device.medium}) {
            h1 {
              font-size: 2.7rem;
            }

            p {
              max-width: 800px;
              padding: 0;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
