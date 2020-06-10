import { AuthConfig } from 'angular-oauth2-oidc';
export const environment = {
  production: true,
  stravaBaseUrl: 'https://www.strava.com/api/v3',
  stravaOAuth: {
    clientId: '45694',
    redirectUri: 'http://localhost:4200/login',
    issuer: 'https://www.strava.com',
    scope: 'activity:read_all,profile:read_all',
    responseType: 'code',
    loginUrl: 'https://www.strava.com/oauth/authorize',
    oidc: false,
    tokenEndpoint: 'https://www.strava.com/oauth/token',
    dummyClientSecret: 'ba4473c4312b82ca26fca5ff686be25d36f5a501',
    showDebugInformation: false,
    logoutUrl: 'https://www.strava.com/oauth/deauthorize',
    revocationEndpoint: 'https://www.strava.com/oauth/deauthorize'
  }
};