import Head from 'next/head'
import { Component } from 'react';
import Avatar from '../components/Avatar.js'
import Card from '../components/Card.js'

export default class extends Component {
  static getInitialProps(_ctx) {
    const data = [
      {
        "link": "https://www.linkedin.com/in/luanpontolio/",
        "title": "LinkedIn",
        "description": "My professional profile"
      },
      {
        "link": "https://github.com/luanpontolio",
        "title": "Github",
        "description": "My personal projects"
      },
      {
        "link": "mailto:luan.pontolio@gmail.com",
        "title": "Gmail",
        "description": "Contact me here"
      },
      {
        "link": "https://www.instagram.com/luan_spontolio/",
        "title": "Instagram",
        "description": "Follow me"
      }
    ];

    return { data: data };
  }

  render () {
    return (
      <div className="container">
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Avatar />
          <h2>Hi :) !! I'm Luan</h2>
          <div className="grid">
            { this.props.data.map(info => <Card { ...info } />) }
          </div>
        </main>

        <footer>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            Luan
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
