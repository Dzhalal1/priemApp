import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return {
            applicantId: null,
            authToken: null,
            userId: null
        }
    },
    mutations: {
        setStations(state: any, payload: any) {
            state.applicantId = payload.applicant_id
            state.authToken = payload.auth_token
            state.userId = payload.user_id
        }
    },
    getters: {
        getToken(state: any) {
            return state.authToken
        },
        getApplicantId(state: any) {
            return state.applicantId
        }
    },
    plugins: [createPersistedState()],
})