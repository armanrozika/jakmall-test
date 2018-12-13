<template>
  <div class="summary">
      <div class="summary__purchased">
        <h1>Summary</h1>
        <p>{{purchased}} items purchased</p>
      </div>
     
      <div class="summary__total">
        <div class="summary__cost">
            <p>Cost of goods</p>
            <p>{{cost}}</p>
            <p>{{dropTitle}}</p>
            <p>{{dropFee}}</p>
            <h1>Total</h1>
            <h1>{{totalcomp}}</h1>
        </div>
        <router-link v-bind:to="linkto" v-bind:event="isvalid"><button @click="changebtn">{{link}}</button></router-link>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        purchased(){
            return this.$store.state.purchased;
        },
        cost(){
            return this.$store.state.cost.toLocaleString()
        },
        dropTitle(){
            return this.$store.state.dropFee.title
        },
        dropFee(){
            return this.$store.state.dropFee.cost.toLocaleString()
        },
        totalcomp(){
            return this.$store.state.totalcost.toLocaleString()
        },
        link(){
            return this.$store.state.btnlink;
        },
        linkto(){
            return this.$store.state.linkto;
        },
        isvalid(){
            return this.$store.state.isvalid;
        }
    },

    methods:{
        changebtn(){
            if(this.isvalid == 'click'){
                this.$store.state.btnlink = 'Pay with e-Wallet'
                this.$store.state.linkto = '/finish'
            }else if(this.isvalid == ''){
                //show error via store (push an error message to state)
            }
            
        }
    }
    
}
</script>

<style scoped lang="scss">
    .summary{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        .summary__purchased{
            h1{
            font-size: 20px;
            font-weight: bold;
            color: #ff8a00;
            }
            p{
                font-size: 16px;
                color: #656567;
            }
        }
        .summary__total{
            width: 100%;
            align-self: end;
            .summary__cost{
                display: grid;
                grid-template-columns: 3fr 1fr;
                margin-bottom: 10px;
                p{
                    font-size: 12px;
                    margin-bottom: 5px;
                    color: #656567;
                    &:nth-child(even){
                        justify-self: end;
                    }
                }
                h1{
                    font-size: 18px;
                    margin-top: 20px;
                    font-weight: bold;
                    color: #ff8a00;
                    &:nth-child(even){
                        justify-self: end;
                    }
                }
            }
            button{
                width: 100%;
                height: 50px;
                border: none;
                background: #ff8a00;
                color: #fff;
                border-radius: 3px;
                cursor: pointer;
                outline: none;
            }
        }
        
    }
</style>
