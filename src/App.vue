<template>
    <v-app>
        <NavBar />
        <router-view></router-view>
    </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
    components: { NavBar }

}
</script>
