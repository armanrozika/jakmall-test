<template>
  <div class="summary">
      <div class="summary__purchased">
        <h1>Summary</h1>
        <p>{{purchased}} items purchased</p>
      </div>
     
      <div class="summary__total">
        <div class="summary__cost">
            <p>Cost of goods</p>
            <p>500,000</p>
            <p>{{dropFee.title}}</p>
            <p>{{dropFee.cost}}</p>
            <h1>Total</h1>
            <h1>{{totalcost}}</h1>
        </div>
        <button>Continue to payment</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    purchased:{
        type: Number,
        required: true
    },
    dropFee:{
        type: Object,
        required: true
    },
    totalcost:{
        type: Number,
        
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
