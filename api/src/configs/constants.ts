import 'dotenv/config';
import { IConstants, LOGGER_FORMAT_ENUM } from '../interfaces';

const { PORT, NODE_ENV } = process.env;

const constants: IConstants = {
  PORT: Number(PORT) || 3000,
  LOGGER: {
    FORMAT: NODE_ENV === 'development' ? LOGGER_FORMAT_ENUM.DEV : LOGGER_FORMAT_ENUM.TINY,
  },
};

export default constants;
