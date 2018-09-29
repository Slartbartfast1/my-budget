<template>


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
                    <span>新增</span>
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/about">
                <v-btn
                        color="teal"
                        flat
                        value="favorites"
                >
                    <span>账单</span>
                    <v-icon>credit_card</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/about">
                <v-btn
                        color="teal"
                        flat
                        value="nearby"
                >
                    <span>图表</span>
                    <v-icon>pie_chart</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>

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