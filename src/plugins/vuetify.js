import Vue from 'vue'
import {

    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VBottomNav,
    VForm,
    VSelect,
    VSnackbar,
    VDataTable,
    VExpansionPanel,
    VBottomSheet,
    VDataIterator,
    VTextField,
    transitions,

} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify, {
    components: {
        VBottomNav,
        VCard,
        VForm,
        VTextField,
        VSelect,
        VSnackbar,
        VDataTable,
        VDataIterator,
        VExpansionPanel,
        VBottomSheet,
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions
    },
    theme: {
        primary: "#388E3C",
        secondary: "#66BB6A",
        accent: "#1DE9B6",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    },
    customProperties: true,
    iconfont: 'md',
    lang: {
        locales: { zhHans },
        current: 'zh-Hans'
    },
})
