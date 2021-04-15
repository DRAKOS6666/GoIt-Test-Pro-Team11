import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';
import { refreshToken } from "../../services/auth-api";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unSet() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const refreshTokenMiddleware = store => next => action => {
    const { auth } = store.getState()
    const { payload } = action
    console.log('action', action)
    console.log('payload', payload)
    if (payload && payload.error && auth.sessionId) {
        token.set(auth.refreshToken)
        refreshToken({ sid: auth.sessionId }).then(res => {
            console.log('res', res)
            store.dispatch({ type: 'SET_TOKENS', payload: { accesToken: res.newAccessToken, refreshToken: res.newRefreshToken, sid: res.newSid } })
            token.set(res.newAccessToken)
            return res
        }).catch(err => err)
    }


    return next(action)
    // const theStore = store.getState()
    // console.log('theStore', theStore)
    // console.log('action', action.requestStatus)
    // try {
    //     const {
    //         response,
    //     } = action;
    //     // console.log('response', response)
    //     if (!response) {
    //         return next(action);
    //     }

    //     // console.log('itsGood')
    //     // const { sid, refreshToken } = store.getState()
    //     // console.log('sid and rToken', sid, refreshToken)
    //     // const response = authOperations.refreshUser(refreshToken, sid)
    //     // return response
    //     return next(action)
    // } catch (err) {
    //     console.log('errorHandle', err)
    //     const { sid, refreshToken } = store.getState()

    //     const response = authOperations.refreshUser(refreshToken, sid)
    //     return response
    //   Raven.captureException(err, {
    //     extra: {
    //       action,
    //       state: store.getState()
    //     }
    //   })
    //   throw err
    // }
}
export default refreshTokenMiddleware
// export default function refreshToken() {
//     return ({ dispatch, getState }) => next => (action) => {
//         console.log('action', action)
//         const {
//             request,
//         } = action;

//         if (!request) {
//             return next(action);
//         }

//         const { sid, refreshToken } = getState().auth;


//         if (refreshToken && sid) {
//             const response = authOperations.refreshUser(sid, refreshToken)
//             dispatch({ accesToken: response.newAccessToken, refreshToken: response.newRefreshToken, sid: response.newSid })
//             // axios.post('/path/to/renew')
//             //     .then({ refresh_token: tokens.refresh_token })
//             //     .catch((err, { body } = {}) => {
//             //         dispatch({ type: 'SET_TOKENS', payload: body });
//             //         request(body);
//             //     });
//         }
//         return next(action);
//     };
// }