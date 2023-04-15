<template>
    <v-container fluid class="navbar">
        <v-app-bar color="#00308F" dark :fluid="false">
            <v-spacer />
            <v-btn href="/" color="#5072A7" :disabled="onMainPage" class="mr-3">Main</v-btn>
            <v-btn href="/photo" color="#5072A7" :disabled="!onMainPage">Photos</v-btn>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: "NavBar",
    computed: {
        onMainPage() {
            return this.$route.path === "/"
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    position: absolute;
    z-index: 1;
}
</style>
