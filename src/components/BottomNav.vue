<template>

    <v-card height="200px" flat fixed>
        <router-link></router-link>
        <router-link></router-link>
        <router-link></router-link>
        <v-bottom-nav
                :active.sync="bottomNav"
                :value="true"
                fixed
                color="transparent"

        >

            <router-link to="/about">
                <v-btn
                        color="teal"
                        flat
                        value="recent"

                >
                    <span>Recent</span>
                    <v-icon>history</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/about">
                <v-btn
                        color="teal"
                        flat
                        value="favorites"
                >
                    <span>Favorites</span>
                    <v-icon>favorite</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/about">
                <v-btn
                        color="teal"
                        flat
                        value="nearby"
                >
                    <span>Nearby</span>
                    <v-icon>place</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>
    </v-card>
</template>


<script>
    export default {
        name: "BottomNav",
        data() {
            return {
                bottomNav: 'recent'
            }
        }
    }
</script>

<style scoped>

    a {
        width:33%;
        text-decoration: none;
        display: inline-block;
    }
</style>