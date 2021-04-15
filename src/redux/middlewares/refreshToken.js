import axios from 'axios';
import { refreshToken } from '../../services/auth-api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refreshTokenMiddleware = ({ getState, dispatch }) => next => action => {
  const { auth } = getState();
  const { payload } = action;
  const handleExpiredToken = async () => {
    if (payload && payload.error && auth.sessionId) {

      if (payload.error.response.status === 401) {
        token.set(auth.refreshToken);
        try {
          const res = await refreshToken({ sid: auth.sessionId });
          token.set(res.newAccessToken);
          dispatch({
            type: 'SET_TOKENS',
            payload: { accessToken: res.newAccessToken, refreshToken: res.newRefreshToken, sid: res.newSid },
          });
          payload.thunk && dispatch(payload.thunk({ ...payload.args, accessToken: res.newAccessToken }));
        } catch (err) {
          console.log('-> err', err);
        }
      }
    }
  };

  handleExpiredToken();

  return next(action);
};
export default refreshTokenMiddleware;
