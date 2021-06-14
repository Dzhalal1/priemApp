import {createStore} from 'vuex'

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
    }
})