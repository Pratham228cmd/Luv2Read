export const oktaConfig = {
    clientId: '0oajq6c9f4LgHKfyA5d7',
    issuer: 'https://dev-72104884.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}