<template>
    <div class="list">
        <v-toolbar
                slot="header"
                class="mb-2"
                color="primary"
                dark
                flat
        >
            <v-toolbar-title>账单</v-toolbar-title>
        </v-toolbar>
        <v-container>
<v-card
        flat
        :height="max"
>
    <v-card-title>
        <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
        ></v-text-field>
    </v-card-title>

        <v-data-table
                :headers="headers"
                :items="list"
                class="elevation-1"
                :search="search"
                item-key="id"
    >
            <template slot="items" slot-scope="props">
                <!--@click="props.expanded = !props.expanded"-->
                <tr @click="sheet1(props.item)" >
                <td >{{props.item.category}}</td>
                <td >{{props.item.payout }}</td>
                <td >{{props.item.date}}</td>
                <td >{{props.item.desc}}</td>
                </tr>
            </template>
            <template slot="expand" slot-scope="props">
                <v-card flat>
                    <v-card-text><td>{{props.item.desc}}</td></v-card-text>
                </v-card>
            </template>


        </v-data-table>

</v-card>
        </v-container>
        <div class="text-xs-center">
            <v-bottom-sheet v-model="sheet">
                <v-list>
                    <v-btn block color="error"  @click="remove()">删除</v-btn>
                </v-list>
            </v-bottom-sheet>
        </div>
    </div>
</template>

<script>
    import store from '../store.js'
    export default {
        store,
        name: "List",
        data(){
            return{
                sheet: false,
                target:null,
                pressTimer:null,
                max:'100vh',
                search: '',
                headers:[
                    { text: '类别', value: 'category' },
                    { text: '支出（元）', value: 'payout' },
                    { text: '日期', value: 'date' },
                    { text: '描述', value: 'desc' },

                ],
                list:this.$store.state.list,
            }
        },
        methods:{
            sheet1(el){
                this.target=el.id;
                this.sheet=true;

            },
            remove(){
                this.$store.commit('remove',this.target);
            },
        }
    }
</script>

<style scoped>
.list{
    padding-bottom: 56px;
}
</style>