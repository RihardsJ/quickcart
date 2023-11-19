import { createContainer, InjectionMode, asValue, asFunction } from 'awilix';

import constants from './constants';
import { IContainer } from '../interfaces';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import server from '../server';

// Middlewares

// Create the container;
const container = createContainer<IContainer>({
  injectionMode: InjectionMode.PROXY,
});

// Register dependencies
container.register({
  constants: asValue(constants),
  express: asValue(express),
  morgan: asValue(morgan),
  cors: asValue(cors),
  server: asFunction(server).singleton(),
});

export default container;
