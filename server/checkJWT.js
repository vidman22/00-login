const jwt = require('jsonwebtoken');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
// const checkJwt = jwt({
//   // Dynamically provide a signing key
//   // based on the kid in the header and 
//   // the signing keys provided by the JWKS endpoint.
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://vidman.auth0.com/.well-known/jwks.json`
//   }),

//   // Validate the audience and the issuer.
//   audience: 'YOUR_API_IDENTIFIER',
//   issuer: `https://vidman.auth0.com/`,
//   algorithms: ['RS256']
// });


// const decoded = jwt.verify(token, secret, {algorithms: ['RS256']});
// console.log('decoded', decoded) // bar

// verify a token symmetric
// jwt.verify(token, `${secret}`, function(err, decoded) {
//   console.log(decoded.foo) // bar
// });