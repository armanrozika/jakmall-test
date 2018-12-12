<template>
  <div class="summary">
      <div class="summary__purchased">
        <h1>Summary</h1>
        <p>10 items purchased</p>
      </div>
     
      <div class="summary__total">
          <button>Continue to payment</button>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
    .summary{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 9fr;
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
