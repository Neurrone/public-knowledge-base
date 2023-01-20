
# JWT

A JSON Web Token (JWT) is a security token encoded as a JSON with a specific format.

There are two types of JWTs:

- JSON Web Signature (JWS): data contained in the token is public and not encrypted
- JSON Web Encryption (JWE): data is encrypted and private.

## JWS

JWS are used by OAuth2 providers. It is sent as an HTTP header that looks like this:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIENvZGVyIn0.5dlp7GmziL2QS06sZgK4mtaqv0_xX4oFUuTDh1zHK4U
```

JWS contain 3 parts, separate by a dot (`.`):

1. Header, Base64 url-encoded JSON. Contains information on how the JWT was created.
2. Payload, Base64 url-encoded JSON
3. Cryptographic signature, base64 url-encoded binary data

In the example above, the 3 parts are:

1. Header: `eyJhbGciOiJIUzI1NiJ9`, this is base64 url-decoded into `{"alg":"HS256"}` which specifies the hashing algorithm HMAC SHA-256 is used to generate or validate the signature
2. Payload: `eyJuYW1lIjoiSm9lIENvZGVyIn0`, base64 url-decodes to `{"name":"Joe Coder"}`
3. Signature: `5dlp7GmziL2QS06sZgK4mtaqv0_xX4oFUuTDh1zHK4U`

When people talk about JWTs, they usually refer to JWS.

If you have a JWT with more than three sections, it’s probably a JWE.

## JWT Claims

A JWT claim is a key-value pair in the payload. In the above example, the key is `"name"` and the value is `"Joe Coder"`. The value of a claim can be any JSON object.

There are 3 types of claims: registered, public and private.

Registered and public claims can be found on the [official IANA registry](https://www.iana.org/assignments/jwt/jwt.xhtml#claims).
The use of registered claims is optional, but when they are present, they MUST be validated. For example, a JWT may contain date-time fields that describe when the token is valid.

Private claims are any other custom claims not in the registry. Avoid choosing names that collide with public or registered claims.

## JWT Signatures

The JWT spec lists two types of signing algorithms:

- HMAC based shared secret, these have the HS prefix which stands for HMAC SHA
- Public key pair, either RSA or ECDSA

To validate the JWS in the above example, calculate the HMAC of the first two parts of the token, then compare the output with the base64-url decoded signature.

## Problems With JWTs

Fully validating a JWT is difficult, use an updated and maintained library.

The algorithm header claim can be set to "none", which disables signature verification. When possible, configure your JWT library to only allow a specific list of algorithms.

Validating a token locally does NOT check if it has been revoked, e.g., a user has logged out or has been deleted. Keeping the life span of the token short (by setting the "expiration" claim) can help mitigate the risk.

## Useful Websites

- [token.dev](https://token.dev/): inspect and generate JWTs
