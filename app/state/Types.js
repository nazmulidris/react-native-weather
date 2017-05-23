// @flow

/*
 more info on flow & redux
 - https://goo.gl/jPgimk
 
 more info on flow
 - https://flow.org/en/docs/types/arrays/
 - https://flow.org/en/docs/types/aliases/
 - https://flow.org/en/docs/types/interfaces/
 
 test the code here
 - https://flow.org/try/
 
 sample code that I wrote
 - https://goo.gl/3wYVfw
 */

//
// types
//

export type Action = {
  type: number,
  payload: any,
}

export type State = {
  app: AppState,
}

export type AppState = {
  user: User,
  locations: LocationWatchList,
  reports: WeatherReports,
}

export type User = {
  isAnon: boolean,
  name: string,
  userid: string,
  profilePictureUrl: string,
}

export type LocationWatchList = Array<string>;

export type WeatherReports = Array<WeatherReport>;

export type WeatherReport = {
  location: string,
  current: CurrentConditions,
  forecast: WeeklyForecast,
}

export type CurrentConditions = {
  temp: number,
  humidity: number,
  wind: number,
  uvindex: number,
  sunrise: number,
  sunset: number,
}

export type WeeklyForecast = {
  days: Array<DailyForecast>,
}

export type DailyForecast = {
  day: string,
  hi: number,
  lo: number,
}

//
// objects
//

let initState: State = {
  user     : null,
  locations: null,
  reports  : null,
};

let myUser: User = {
  isAnon           : true,
  name             : 'naz',
  userid           : '123',
  profilePictureUrl: 'http://boo',
};

let myLocations: LocationWatchList = ['12', '13', '14'];

let myReports: WeatherReports =
      [
        {
          location: '12',
          current : {
            temp    : 12,
            humidity: 80,
            wind    : 3,
            uvindex : 5,
            sunrise : 12,
            sunset  : 18,
          },
          forecast: {
            days: [
              {
                day: 'mon',
                hi : 70,
                lo : 60,
              },
            ],
          },
        },
      ];