import { createAction } from 'src/utils/createAction';

import * as actionTypes from './actionTypes';

export const fetchClasses = payload =>
  createAction(actionTypes.FETCH_CLASSES, payload);
