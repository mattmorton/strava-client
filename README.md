# Strava Client

A [Strava](https://www.strava.com/) client built with Angular. Login to see details of your most recent activities, and basic total statistics.

[Visit the site!](https://strava.mattmorton.info)

## Details

- Authenticates Strava users with oauth flow.
- Integrate with Strava API to get various user activities.
- Google Map plugin to display activity routes.
- [Bulma](https://bulma.io/) CSS framework for basic styling.
- Minimal CI/CD flow with Jenkins.

## Build

1. Create an environment.ts and environment.prod.ts file in src/environments and populate with the Strava app details created [here](https://www.strava.com/settings/api):
```javascript
    export const environment = {
      production: true,
      stravaBaseUrl: 'https://www.strava.com/api/v3',
      stravaOAuth: {
        clientId: {{clientId}},
        redirectUri: {{redirectUri}}/login,
        issuer: 'https://www.strava.com',
        scope: 'activity:read_all,profile:read_all',
        responseType: 'code',
        loginUrl: 'https://www.strava.com/oauth/authorize',
        oidc: false,
        tokenEndpoint: 'https://www.strava.com/oauth/token',
        dummyClientSecret: {{clientSecret}},
        showDebugInformation: false,
        logoutUrl: 'https://www.strava.com/oauth/deauthorize',
        revocationEndpoint: 'https://www.strava.com/oauth/deauthorize'
      }
    };
```
2. Run `ng build` to build the project. The build artifacts will be stored in the `dist/strava-client` directory. Use the `--prod` flag for a production build.