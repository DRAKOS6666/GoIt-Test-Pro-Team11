import axios from "axios";
import { authOperations } from 'redux/auth';


export default function refreshToken() {
    return ({ dispatch, getState }) => next => (action) => {
        console.log('action', action)
        const {
            request,
        } = action;

        if (!request) {
            return next(action);
        }

        const { sid, refreshToken } = getState().auth;


        if (refreshToken && sid) {
            const response = authOperations.refreshUser(sid, refreshToken)
            dispatch({ accesToken: response.newAccessToken, refreshToken: response.newRefreshToken, sid: response.newSid })
            // axios.post('/path/to/renew')
            //     .then({ refresh_token: tokens.refresh_token })
            //     .catch((err, { body } = {}) => {
            //         dispatch({ type: 'SET_TOKENS', payload: body });
            //         request(body);
            //     });
        }
        return next(action);
    };
}