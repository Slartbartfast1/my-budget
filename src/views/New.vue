<template>
<div>
    <v-toolbar
            slot="header"
            class="mb-2"
            color="primary"
            dark
            flat
    >
        <v-toolbar-title>支出</v-toolbar-title>
    </v-toolbar>
<v-card>

    <v-container>
        <v-form v-model="valid">
            <v-text-field
                    type="number"
                    v-model="payout"
                    :rules="payoutRules"
                    label="支出"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="desc"
                    :rules="descRules"
                    label="描述"
                    required
            ></v-text-field>
            <v-select
                    v-model="select"
                    :items="items"
                    label="类别"
                    required
            >
            </v-select>
        </v-form>
        <v-btn block color="secondary"  @click="submit">提交</v-btn>
    </v-container>
    <v-snackbar
            v-model="snackbar"
            :color="color"
            :multi-line="mode === 'multi-line'"
            :timeout="timeout"
            :vertical="mode === 'vertical'"
    >
        {{ text }}
        <v-btn
                dark
                flat
                @click="snackbar = false"
        >
            Close
        </v-btn>
    </v-snackbar>

</v-card>

</div>
</template>

<script>
    import store from '../store.js'
    export default {
        store,
        name: "New",
        data: () => ({
            payout:null,
            valid: false,
            name: '',
            desc: '',
            select: null,
            payoutRules:[
                v => !!v || '请输入支出',
            ],
            descRules: [
                v => !!v || '请输入描述',
            ],
            items:['数码用品','教育','日用品','其他'],
            timeout:1000,
            snackbar: false,
            text:'提交成功',
            color:'#AEEA00',
        }),
        methods:{
            submit(){
                var a={id:new Date().getTime(),category:this.select,payout:this.payout,desc:this.desc,date:new Date().toLocaleDateString()};
                this.$store.commit('add',a);
                this.snackbar=true;
            }
        }
    }
</script>

<style scoped>

</style>