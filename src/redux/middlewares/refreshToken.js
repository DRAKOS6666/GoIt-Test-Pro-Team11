import axios from "axios";
import { authOperations } from 'redux/auth';


const refreshToken = store => next => action => {
    try {
        console.log('itsGood')
        const { sid, refreshToken } = store.getState()
        const response = authOperations.refreshUser(refreshToken, sid)
        return response
        // return next(action)
    } catch (err) {
        console.log('errorHandle', err)
        const { sid, refreshToken } = store.getState()
        const response = authOperations.refreshUser(refreshToken, sid)
        return response
        //   Raven.captureException(err, {
        //     extra: {
        //       action,
        //       state: store.getState()
        //     }
        //   })
        //   throw err
    }
}
export default refreshToken
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