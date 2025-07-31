module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>Product Added</title>
        <meta http-equiv="refresh" content="2; url=/overview" />
      </head>
      <body style="font-family: Arial; padding: 2rem;">
        <h1>✅ Product successfully added!</h1>
        <p>Redirecting to product list...</p>
        <p><a href="/overview">Click here if not redirected</a></p>
      </body>
    </html>
  `);
};
