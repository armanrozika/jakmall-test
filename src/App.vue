<template>
  <div class="root">
    <div class="root__container">
      <ul class="root__breadcrumbs">
        <li><p>1</p>Delivery <span></span></li>
        <li><p>2</p>Payment <span></span></li>
        <li><p>3</p>Finish</li>
      </ul>
      <div class="root__content">
        <Delivery/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Delivery from './components/Delivery.vue'

export default {
  components: {
    Delivery,
  }
  
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
  }
  .root{
    width: 100%;
    height: 100vh;
    background: #fffae6;
    .root__container{
      width: 80%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .root__breadcrumbs{
        position: relative;
        transform: translateY(50%);
        width: 45%;
        background: #fffae6;
        padding: 15px 30px;
        border-radius: 25px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        li{
          display: flex;
          align-items: center;
          color: #ff8a00;
         p{
          background: #ff8a00;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-align: center;
          padding: 6px;
          margin-right: 5px;
          color: #fff;
         }
         span{
          width: 8px;
          height: 8px;
          border-right: 2px solid #ff8a00;
          border-bottom: 2px solid #ff8a00;
          transform: rotate(-45deg);
          margin-left: 1.5em;
         }
        }
      }
      .root__content{
        width: 100%;
        height: 50vh;
        background: #fff;
      }
    }
    
  }
</style>
