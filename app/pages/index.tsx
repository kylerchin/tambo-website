import { Head, Link } from "blitz"

const Home = () => (
  <div className="container">
    <Head>
      <title>Tambourine - Discord Bot</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://oath2.shake.yk3music.com:50451/tambourine-stream.js"></script>
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      <script defer src='/snackbar.js'></script>
    </Head>

    <main>
      <div className="logo">
        <img src="/logotambo.png" alt="Tambourine" />
      </div>
      <p>A logger and invite burner bot.</p>
      <p>
        Run <code>shake help</code> to get started.
      </p>
      <p>*Disclaimer: Doesn't actually cut down trees. Please be nice to our planet!</p>

      <div className="buttons">
        <a
          className="button-outline"
          href="https://discord.com/api/oauth2/authorize?client_id=711405398506078260&permissions=8&redirect_uri=https%3A%2F%2Foath2.shake.yk3music.com%3A50451%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=bot%20identify"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bot Invite
        </a>
      </div>

      <div class="mdc-snackbar bruh-snackbar-success">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label"
         role="status"
         aria-live="polite">
      Bot sucessfully added!
    </div>
    <div class="mdc-snackbar__actions">
      <button type="button" class="mdc-button mdc-snackbar__action" onClick='snackbar.close()'>
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">close</span>
      </button>
    </div>
  </div>
</div>
    </main>

    <footer>
      <a href="https://instagram.com/yk3music" target="_blank" rel="noopener noreferrer">
        Powered by Yk3
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
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

      main p {
        font-size: 1.2rem;
      }

      footer {
        width: 100%;
        height: 60px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #45009d;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer a {
        color: #f4f4f4;
        text-decoration: none;
      }

      .logo {
        margin-bottom: 2rem;
      }

      .logo img {
        width: 300px;
      }

      .buttons {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin-top: 6rem;
      }

      a.button {
        background-color: #6700eb;
        padding: 1rem 2rem;
        color: #f4f4f4;
        text-align: center;
      }

      a.button:hover {
        background-color: #45009d;
      }

      a.button-outline {
        border: 2px solid #6700eb;
        padding: 1rem 2rem;
        color: #6700eb;
        text-align: center;
      }

      a.button-outline:hover {
        border-color: #45009d;
        color: #45009d;
      }

      pre {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
      }
      code {
        font-size: 0.9rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
          Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
      }
    `}</style>
       
  </div>
)

export default Home
