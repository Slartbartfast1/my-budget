<template>


        <v-bottom-nav
                :active.sync="bottomNav"
                :value="true"
                fixed
                color="transparent"

        >

            <router-link to="/new">
                <v-btn
                        color="teal"
                        flat
                        value="新增"

                >
                    <span>新增</span>
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/list">
                <v-btn
                        color="teal"
                        flat
                        value="账单"
                >
                    <span>账单</span>
                    <v-icon>credit_card</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/charts">
                <v-btn
                        color="teal"
                        flat
                        value="图表"
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