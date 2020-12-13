import { createAction } from 'src/utils/createAction';

import * as actionTypes from './actionTypes';

export const toggleDrawer = payload =>
  createAction(actionTypes.TOGGLE_DRAWER, payload);
