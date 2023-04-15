<template>
    <v-dialog
        v-model="dialogVisible"
        max-width="600"
    >
        <v-card>
            <v-card-title>{{ full_title }}</v-card-title>
            <v-card-text>
                <v-img
                    :src="photo.url"
                />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "PhotoDialog",
    props: {
        photo: {
            type: Object,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        dialogVisible: false
    }),
    computed: {
        full_title() {
            return `Photo name - ${this.photo.title}`
        }
    },
    watch: {
        value(newVal) {
            this.dialogVisible = newVal
        },
        dialogVisible(newVal) {
            this.$emit("input", newVal)
        }
    },
    created() {
        this.dialogVisible = this.value
    },
}
</script>

