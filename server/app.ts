import express from 'express';

export const app = express();

console.log('Setting up express app...');

// Temporary: Skip React Router, just serve a simple response
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>John's Portfolio</title></head>
      <body>
        <h1>Server is responding!</h1>
        <p>The React Router build is having issues. Investigating...</p>
      </body>
    </html>
  `);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

console.log('Express app configured successfully');
