const http = require('http');

const server = http.createServer()
  .on('request', handleRequest)
  .listen(3000);

function handleRequest(request, response) {
  const isLoggedIn = request.headers?.cookie?.includes('session');
  const message = isLoggedIn ? 'logged in' : 'logged out';
  response.setHeader('Set-Cookie', 'session=1; SameSite=Strict');
  response.end(message);
}

/*
  Testing direct navigation
  - run this file (node --harmony file)
  - Ensure all private mode windows are closed
  - open localhost:3000 in private mode (cookie is now set)
  - open index.html
  - click on link
  - Note logged out
  - Refresh the page
  - Note logged in

  Testing navigating to site via link
  - run this file (node --harmony file)
  - Ensure all private mode windows are closed
  - Ensure all private mode windows are closed
  - open localhost:3000 in private mode (cookie is now set)
  - open index.html
  - click on link
  - Note logged out
  - Refresh the page
  - Note logged out
  - Go to address bar and press return
  - Note logged in
*/
