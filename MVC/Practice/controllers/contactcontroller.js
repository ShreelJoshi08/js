module.exports = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(`
      <html>
        <head><title>Contact</title>
         <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial; padding: 20px;">
          <h1>📱 Contact Us</h1>
          <p>Email: support@charusat.ac.in</p>
          <p>Phone: +91-12345-67890</p>
        </body>
      </html>
    `);
  }