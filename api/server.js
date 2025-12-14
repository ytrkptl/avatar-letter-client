import express from 'express';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import path from 'path';
import { fileURLToPath } from 'url';
import errorHandler from './controllers/error/error.js';
import avatarLetterRoutes from './avatar-letter-routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
// to work with render.com's health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

// middlewares

// need to do this limit stuff to avoid request entity too large error
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

// added to protect against XSS and such
// Source: https://expressjs.com/en/advanced/best-practice-security.html
// removed 15 items. see the link https://helmetjs.github.io/
// x-powered-by shows up in frontend headers due to create-react-app using
// webpack-dev-server (built on Express), and not from this Express app
app.use(helmet());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'dist')));

// API routes
app.use('/api/file', avatarLetterRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// error Handler middlerware. Must keep it down here at the very end
app.use((req, res, next) => {
  // If we got here, it's a 404 for an API route or file not found
  // For API routes, return JSON 404
  if (req.url.startsWith('/api')) {
    const err = new Error(`Not Found ${req.url}`);
    err.status = 404;
    next(err);
  } else {
    // For other routes, the catchall above *should* have handled it, 
    // but if we fall through, send 404
    res.status(404).send('Not found');
  }
});

app.use(errorHandler);

export default app;
