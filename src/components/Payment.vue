<template>
    <div class="payment">
       <router-link to="/" class="payment__out" @click.native="changelink">
            <i class="fa fa-arrow-left"></i>
            <p>Back to delivery</p>
       </router-link>
       <div class="payment__grid">
           <div class="payment__details">
               <h1>Shipment</h1>
               <div class="payment__service">
                   <div class="payment__courier" @click="activate(1)" :class="{active: active_el == 1}">
                       <p>GO-SEND</p>
                       <P>15,000</P>
                   </div>
                   <div class="payment__courier"  @click="activate(2)" :class="{active: active_el == 2}">
                       <p>GO-SEND</p>
                       <P>15,000</P>
                   </div>
                   <div class="payment__courier"  @click="activate(3)" :class="{active: active_el == 3}">
                       <p>GO-SEND</p>
                       <P>15,000</P>
                   </div>
               </div>
               <h1>Payment</h1>
               <div class="shipment__service">
                   <div class="shipment__courier" @click="payfunc(1)" :class="{activepay: active_ship == 1}">
                       <p>e-wallet</p>
                       <p>1,500,000 left</p>
                   </div>
                   <div class="shipment__courier" @click="payfunc(2)" :class="{activepay: active_ship == 2}">
                       <p>Bank Transfer</p>
                   </div>
                   <div class="shipment__courier" @click="payfunc(3)" :class="{activepay: active_ship == 3}">
                       <p>Virtual Account</p>
                   </div>
               </div>
           </div>
           <div class="payment__summary">
               <app-summary></app-summary>
           </div>
       </div>
    </div>
</template>

<script>
import summary from './Summary.vue'
export default {
    components: {
        'app-summary': summary
    },
    data(){
        return {
           active_el: 1,
           active_ship: 1 
        }
    },
    computed: {
        linkto(){
            return this.$store.state.linkto;
        }
    },
    methods: {
        activate(el){
            this.active_el = el;
            
        },
        payfunc(el){
            this.active_ship = el;
        },
        changelink(){
            //console.log(this.$store.state.linkto = '/payment')
            this.$store.state.linkto = '/payment';
            this.$store.state.btnlink = 'Continue to payment';
        },
    },
    
}
</script>

<style scoped lang="scss">
    .payment{
        padding: 40px;
        height: 100%;
        .fa{
            font-size: 13px;
            margin-right: 10px;
        }
        .payment__out{
            display: flex;
            align-items: center;
            color: #656567;
        }
        .payment__grid{
            display: grid;
            height: 80%;
            grid-template-columns: 5fr 2fr;
            grid-gap: 25px;
            margin-top: 20px;
            .payment__details{
                h1{
                    padding-bottom: -5px;
                    margin-bottom: 25px;
                    font-weight: bold;
                    color: #ff8a00;
                    font-size: 27px;
                    position: relative;
                    z-index: 1;
                    &::after{
                        position: absolute;
                        content: ' ';
                        width: 8em;
                        height: 7px;
                        background: #e9e9ec;
                        left: 0;
                        z-index: -1;
                        bottom: 2px;
                    }
                }
                .payment__service{
                    width: 85%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 20px;
                    margin-bottom: 65px;
                    .payment__courier{
                        height: 55px;
                        padding: 10px;
                        border: 1px solid #999;
                        cursor: pointer;
                        p{
                            font-size: 13px;
                        }
                    }
                     .active{
                        border: 1px solid #19c874;
                        background: #e5fce9;
                    }
                }
                .shipment__service{
                    @extend .payment__service;
                    .shipment__courier{
                        @extend .payment__courier
                    }
                    .activepay{
                        @extend .active;
                    }
                }
            }
        }
    }
</style>
