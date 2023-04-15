<template>
    <v-dialog
        :value="dialogVisible"
        max-width="600"
        @click:outside="closeDialog"
    >
        <v-card>
            <v-card-title>{{ full_title }}</v-card-title>
            <v-card-text>
                <v-img :src="currentPhoto.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "PhotoDialog",
    computed: {
        ...mapGetters(["dialogVisible", "currentPhoto"]),
        full_title() {
            return `Photo name - ${this.currentPhoto.title}`
        }
    },
    methods: {
        closeDialog() {
            this.$store.commit("HANDLE_DIALOG", false)
        }
    }
}
</script>
