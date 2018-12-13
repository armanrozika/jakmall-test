import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        btnlink: 'Continue to payment',
        linkto: '/payment',
        purchased: 10,
        isvalid: '',
        cost: 500000,
        dropFee:{
          title: '',
          cost: ''
        },
        totalcost: 500000,
        checked: false,
        addrcount:{
          used: 0,
          left: 120
        },
        valid: {
          nameval: false,
          emailval: false,
          phoneval: false,
          addressval: false,
          droname: false,
          drophone: false
        },
        notvalid: {
          nameval: false,
          emailval: false,
          phoneval: false,
          addressval: false,
          droname: false,
          drophone: false
        },
        user: {
          name: '',
          phone: '',
          email: '',
          address: '',
          droname: '',
          drophone: ''
        }
    },
    getters: {
        
    }
})