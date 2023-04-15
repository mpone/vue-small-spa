<template>
    <v-col cols="4">
        <v-card @click="openPhoto">
            <v-card-title>{{ photo.title }}</v-card-title>
            <v-card-text>
                <v-img width="200" height="200" :src="photo.url" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from "vuex"

export default {
    name: "Photo",
    props: {
        photo: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations(["SET_CURRENT_PHOTO", "HANDLE_DIALOG"]),
        openPhoto() {
            this.SET_CURRENT_PHOTO(this.photo)
            this.HANDLE_DIALOG(true)
        }
    }
}
</script>
