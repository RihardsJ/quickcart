export enum LOGGER_FORMAT_ENUM {
  COMBINED = 'combined',
  COMMON = 'common',
  DEV = 'dev',
  SHORT = 'short',
  TINY = 'tiny',
}

export interface IConstants {
  PORT: number;
  LOGGER: {
    FORMAT: LOGGER_FORMAT_ENUM;
  };
}
