import axios from "axios"

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    getters: {
        photos: state => state.photos,
        dialogVisible: state => state.dialogVisible,
        currentPhoto: state => state.currentPhoto
    },
    mutations: {
        SET_PHOTOS(state, payload) {
            state.photos = payload
        },
        HANDLE_DIALOG(state, payload) {
            state.dialogVisible = payload
        },
        SET_CURRENT_PHOTO(state, payload) {
            state.currentPhoto = payload
        }
    },
    actions: {
        async getPhotos({ commit }) {
            const params = { _limit: 10 }
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/photos", { params })
                commit("SET_PHOTOS", res.data)
            } catch (e) {
                console.log(e)
            }
        },
    }
}
