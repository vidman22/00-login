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

// token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9ETkRRME15UVROQk1rVTBOalF4UXpSR05ERkdOekV5TUVFMU5qa3pPRE5GUlRkQ056azNOdyJ9.eyJnaXZlbl9uYW1lIjoiSm9obiIsImZhbWlseV9uYW1lIjoiVmlkbWFyIiwibmlja25hbWUiOiJqdmlkbWFyMzciLCJuYW1lIjoiSm9obiBWaWRtYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1VWkNaNi05Znk4RS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFhQS9SRUxkSTNiRXlRdy9waG90by5qcGciLCJnZW5kZXIiOiJtYWxlIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAxOC0xMi0yN1QwNToyNDo1OC43MzhaIiwiaXNzIjoiaHR0cHM6Ly92aWRtYW4uYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAyNTQyODIzMzc2MjU2MDQ3NjQxIiwiYXVkIjoiMmN0MmxHcTZmYjUzNmUwNDMwRHYzcTMxSmpTTEpSSFciLCJpYXQiOjE1NDU4ODgyOTksImV4cCI6MTU0NTkyNDI5OX0.DsHCtlV1QvZGQTo87xIqfmCQo9YAofAMEpVdgZZo9K9K2TZJXxqzImz-ZM1KCrDUFtYHzQWVW-wK25q8ZbH6_sBRQRelzP4mhf0610ltjTQ6RGBnskROki68mAvRx-4PPCVcQ36Ixrjy7mCfXTMVX5bjPshksocrSZrn7YpRgUDj1PQpdZnu556487WHdGPdBphrf1ndbhhkiggBehLNxyrVSyg5LzTOfaYhe0ZG0CKDFKPxRo9gxv_SAjlDdU7XZSSbZEFnV-OUwWQUwN43kTD9PanSVZU_BJJtrFYFK1g36TsWDndHIXtLjhVeXgUljd5CExD8CVaN45MrqGakUQ"
// secret = "MIIC+zCCAeOgAwIBAgIJVElJSN4JrxctMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNVBAMTEHZpZG1hbi5hdXRoMC5jb20wHhcNMTgwNzAxMTk1OTAzWhcNMzIwMzA5MTk1OTAzWjAbMRkwFwYDVQQDExB2aWRtYW4uYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnDbQKEV671e5QTFABmLogFh8vrYuce3BbhzNQ4zIBZc00NEyH7U/w3PIhKW5iQoKh29hmVB/7cDAeaDulFet1SBNFO9QhebaxiuWnttEG9tSD1EBBzjXr6llKd+dqlozog2xJGWTi6+uT3swqG0EbAJYr00y3x5oSv9T6NohZEWumLkYNTrYJdMEDzoHrftuZro63bvyBLIOFzzSsJuYLuOdoravYCQQdZ20LVcIW13eOJujG93tX8hWfdqkc86LZJr4V6DaWBKm9nMuW53rNUwfoIEBcwJz+EF6DniqaksV3XhhIQ8yuM/QgyGxaC/ZPqwomhCIsQlI4gavym+ymwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQoT77QO18reiS/UdInEDuvorO1GjAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAGXdjBlw/0gL8GSJ9C7IH9yzL/gKgCaTS7bkixiCGB6dMubTvyuC3A56fwjcZFFEnvMPEl23V67AbTrf0h40nkFWT24Nk1Qq+6jxao9ihMZY56DsO0SDEl6hypxboxmapmdT5cZgNG8mwfb5VehPrMluI6SlsLuKPzkBaWafQl4/K8hiei+dEeo9Fmf4EkIF+0/BMcjk0VQW3zJAfAoCpnPr/UPGOg19UtEFsB+0x2sCZ9AVA/sRbJd9RG8hxjCtEzF12ggbVsskopyihBaXqYKm/OfLxrT/7kJTLWrEkt35a84UBHhUJy+0iHZSMwM2ReZSmlFSlMljIon2y52+3Sg=";


// const decoded = jwt.verify(token, secret, {algorithms: ['RS256']});
// console.log('decoded', decoded) // bar

// verify a token symmetric
// jwt.verify(token, `${secret}`, function(err, decoded) {
//   console.log(decoded.foo) // bar
// });