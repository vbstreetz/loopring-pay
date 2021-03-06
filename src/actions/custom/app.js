import cache from 'utils/cache';
import { ACTION_TYPE_TOGGLE_THEME, ACTION_TYPE_IS_MOBILE } from 'config';
import { isMobile } from 'utils';
import { history } from 'utils/store';

export function toggleTheme() {
  return async (dispatch, getState) => {
    dispatch({ type: ACTION_TYPE_TOGGLE_THEME });
    cache('theme', getState().app.theme);
  };
}

export function updateIsMobile() {
  return { type: ACTION_TYPE_IS_MOBILE, payload: isMobile() };
}

export function navigate(payload) {
  return async (dispatch, getState) => {
    history.push(payload);
  };
}
