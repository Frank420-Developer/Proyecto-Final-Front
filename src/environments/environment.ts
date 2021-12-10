// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //baseUrl: 'https://activity-record.com/',
  baseUrl: 'http://3.238.21.227:8080/',

  endPoint: {
    login: 'auth/login',
    refreshToken: 'auth/refresh',
    projects: '/projects',
    notificationsToSend: 'toSend',
    notificationsSent: 'sent',
  },

  msPath: {
    clients: 'clients/',
    news: 'news/',
    activities: 'activities/',
    workTeam: 'workteam/',
    users: 'users/',
    notifications: 'notifications/',
    authentication: 'auth/',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
