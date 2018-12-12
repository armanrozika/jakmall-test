<template>
  <div class="delivery">
    <a href="#" class="delivery__out">
       <i class="fa fa-arrow-left"></i>
       <p>Back to cart</p>
    </a>
    <div class="delivery__grid">
      <div class="delivery__details">
        <h1>Delivery details</h1>
        <div class="delivery__input">
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <input type="text" placeholder="Phone Number">
          <textarea placeholder="Delivery Address"></textarea>
        </div>
      </div>
      <div class="delivery__dropship">
        <div class="checkbox">
          <label>Send as dropshipper <span @click="checked = !checked"><div v-if="checked"></div></span></label>
        </div>
        <div class="delivery__input" v-if="checked">
          <input type="text" placeholder="Dropshipper Name">
          <input type="text" placeholder="Dropshipper Phone Number">
        </div>
      </div>
      <div class="delivery__summary">
        <Summary />
      </div>
    </div>
   
  </div>
</template>

<script>
import Summary from './Summary.vue'
export default {
  data(){
    return {
      checked: false,
    }
  },
  components: {
    Summary,
  }
  
}
</script>

<style scoped lang="scss">
  .fa{
    font-size: 13px;
    margin-right: 10px;
  }
  .delivery{
    padding: 40px;
    .delivery__out{
      display: flex;
      align-items: center;
      color: #656567;
    }
    .delivery__grid{
      display: grid;
      grid-template-columns: 3fr 2fr 2fr;
      grid-gap: 30px;
      margin-top: 20px;
      .delivery__details{
        h1{
          padding-bottom: -5px;
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
      }
      .delivery__dropship{
        .checkbox{
          display: flex;
          padding: 7px;
          align-items: center;
          justify-content: flex-end;
          color: #656567;
          :checked > div{
            display: block;
          }
         label{
           position: relative;
            span{
              position: absolute;
              width: 18px;
              height: 18px;
              border: 1px solid #43e194;
              top: 0;
              left: -25px;
              cursor: pointer;
              div{
                position: absolute;
                left: 5px;
                content: ' ';
                top: 2px;
                width: 6px;
                height: 10px;
                border: solid #43e194;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            }
         }
        }
      }
      .delivery__summary{
        border-left: 2px solid #fff3e5;
        padding-left: 20px;
      }
    }
    .delivery__input{
      margin-top: 25px;
      width: 100%;
      input{
        width: 100%;
        height: 40px;
        margin-bottom: 15px;
        &:focus{
           outline: 1px solid #ff8a00;
        }
        &::placeholder{
          color: #b8b7ba;
        }
        border: 1px solid #b8b7ba;
        padding: 10px;
      }
      textarea{
        width: 100%; 
        height: 130px;
        border: 1px solid #b8b7ba;
        padding: 10px;
        &:focus{
           outline: 1px solid #ff8a00;
        }
        &::placeholder{
          color: #b8b7ba;
        }
      }
    }
  }
</style>