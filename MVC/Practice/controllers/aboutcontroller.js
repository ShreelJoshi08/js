module.exports = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(`
      <html>
        <head><title>About</title>
         <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial; padding: 20px;">
          <h1>🏬 About Our Store</h1>
          <p>We are a fresh produce and electronics store offering high-quality goods at affordable prices.</p>
        </body>
      </html>
    `);
  };