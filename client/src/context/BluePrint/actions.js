import { createAction } from 'src/utils/createAction';

import * as actionTypes from './actionTypes';

export const fetchThreads = payload =>
  createAction(actionTypes.FETCH_THREADS, payload);
export const fetchThreadDetail = payload =>
  createAction(actionTypes.FETCH_THREAD_DETAIL, payload);
