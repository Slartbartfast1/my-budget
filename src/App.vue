<template>
    <v-app>
        <router-view/>

        <BottomNav></BottomNav>
    </v-app>
</template>

<script>
    import BottomNav from './components/BottomNav.vue'

    export default {
        name: 'App',
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js'
            }
        },
        components: {BottomNav}
    }
</script>
