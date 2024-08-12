import {
  SET_VISUALIZATION_DATA,
  SET_HEAT_MAP_YEARS,
  RESET_VISUALIZATION_QUERY,
} from '../actionTypes';

/*
      ------------------------------------------------------

      NOTE ON ALL THE SWITCH STATEMENTS:

          Technically, for queries that don't have
        to do with citizenship, we COULD set the data
        in state for ALL the non-citizenship views between 
        those years, since we get all the necessary data 
        anyway, but I think it's more intuitive and 
        convenient for the UI to be able to remember a 
        DIFFERENT user query for each individual view. 
        That way if, say, a researcher wants to see all
        the data by office just from 2017, and then they
        tab over to view all the data as a time series from
        2015-2022, and then they go back to the Office tab,
        their previous query won't be overwritten by the
        one they made in the different tab, and they'll
        be able to seamlessly resume.

            -- Labs Staff

      ------------------------------------------------------
*/
export const initialState = {
  timeSeriesAllData: {},
  timeSeriesAllYears: [2015, 2022],
  officeHeatMapData: {},
  officeHeatMapYears: [2015, 2022],
  citizenshipMapAllData: {},
  citizenshipMapAllYears: [2015, 2022],
  offices: {
    'Los Angeles, CA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'San Francisco, CA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'New York, NY': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Houston, TX': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Chicago, IL': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Newark, NJ': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Arlington, VA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Boston, MA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'Miami, FL': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
    'New Orleans, LA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, 2022],
    },
  },
};

const vizReducer = (state = initialState, action) => {
  let dataKey = '';
  switch (action.type) {
    case RESET_VISUALIZATION_QUERY:
      if (!action.payload.office) {
        switch (action.payload.view) {
          case 'time-series':
            return {
              ...state,
              timeSeriesAllData: {},
              timeSeriesAllYears: [2015, 2022],
            };
          case 'office-heat-map':
            return {
              ...state,
              officeHeatMapData: {},
              officeHeatMapYears: [2015, 2022],
            };
          case 'citizenship':
            return {
              ...state,
              citizenshipMapAllData: {},
              citizenshipMapAllYears: [2015, 2022],
            };
          default:
            return state;
        }
      } else {
        switch (action.payload.view) {
          case 'time-series':
            return {
              ...state,
              offices: {
                ...state.offices,
                [action.payload.office]: {
                  ...state.offices[action.payload.office],
                  timeSeriesData: {},
                  timeSeriesYears: [2015, 2022],
                },
              },
            };
          case 'citizenship':
            return {
              ...state,
              offices: {
                ...state.offices,
                [action.payload.office]: {
                  ...state.offices[action.payload.office],
                  citizenshipMapData: {},
                  citizenshipMapYears: [2015, 2022],
                },
              },
            };
          default:
            return state;
        }
      }
    case SET_VISUALIZATION_DATA:
      if (!action.payload.office) {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesAllData';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllData';
            break;
          default:
            break;
        }
        return {
          ...state,
          [dataKey]: action.payload.data,
        };
      } else {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapData';
            break;
          default:
            break;
        }
        return {
          ...state,
          offices: {
            ...state.offices,
            [action.payload.office]: {
              ...state.offices[action.payload.office],
              [dataKey]: action.payload.data,
            },
          },
        };
      }
    case SET_HEAT_MAP_YEARS:
      if (!action.payload.office) {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesAllYears';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllYears';
            break;
          default:
            dataKey = 'timeSeriesAllYears';
            break;
        }
        return {
          ...state,
          [dataKey]:
            action.payload.idx === 0
              ? [action.payload.year, state[dataKey][1]]
              : [state[dataKey][0], action.payload.year],
        };
      } else {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapYears';
            break;
          default:
            dataKey = 'timeSeriesYears';
            break;
        }
        return {
          ...state,
          offices: {
            ...state.offices,
            [action.payload.office]: {
              ...state.offices[action.payload.office],
              [dataKey]:
                action.payload.idx === 0
                  ? [
                      action.payload.year,
                      state.offices[action.payload.office][dataKey][1],
                    ]
                  : [
                      state.offices[action.payload.office][dataKey][0],
                      action.payload.year,
                    ],
            },
          },
        };
      }
    default:
      return state;
  }
};

export default vizReducer;
