<template>
    <v-container>
        <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto" />
        <div v-else>You can't upload more photos</div>
        <v-row>
            <Photo
                v-for="photo in photos"
                :key="photo.id"
                :photo="photo"
                @openPhoto="openPhoto"
            />
        </v-row>
        <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
    </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
import axios from "axios";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";

export default {
    name: "PhotoPage",
    components: {PhotoDialog, PhotoForm, Photo},
    data: () => ({
        photos: [],
        currentPhoto: {},
        dialogVisible: false
    }),
    async mounted() {
        await this.getPhotos()
    },
    methods: {
        async getPhotos() {
            const params = {
                _limit: 10
            }
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/photos", { params })
                this.photos = res.data
            } catch (e) {
                console.log(e)
            }
        },
        addPhoto(photo) {
            this.photos = [photo, ...this.photos]
        },
        openPhoto(photo) {
            this.currentPhoto = photo
            this.dialogVisible = true
        }
    }
}
</script>

<style scoped>

</style>
