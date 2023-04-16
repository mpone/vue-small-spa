<template>
    <v-container class="photos-page">
        <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto" />
        <div v-else>You can't upload more photos</div>
        <v-row>
            <Photo
                v-for="photo in photos"
                :key="photo.id"
                :photo="photo"
            />
        </v-row>
        <PhotoDialog />
    </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue"
import PhotoForm from "@/components/photo/PhotoForm.vue"
import PhotoDialog from "@/components/photo/PhotoDialog.vue"
import { mapActions, mapGetters } from "vuex"


export default {
    name: "PhotoPage",
    components: {PhotoDialog, PhotoForm, Photo},
    computed: {
        ...mapGetters(["photos"])
    },
    async mounted() {
        await this.getPhotos()
    },
    methods: {
        ...mapActions(["getPhotos"]),
        addPhoto(photo) {
            this.$store.commit("SET_PHOTOS", [photo, ...this.photos])
        }
    }
}
</script>

<style lang="scss" scoped>
.photos-page {
    margin-top: 70px;
    background: #7CB9E8;
}
</style>
