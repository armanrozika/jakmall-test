<template>
  <div class="root">
    <div class="root__container">
      <ul class="root__breadcrumbs">
        <li><p>1</p>Delivery</li>
        <span></span>
        <li><p>2</p>Payment</li>
        <span></span>
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
  @mixin if-moreThan-768px{
		@media (min-width: 768px){
			@content;
		}
	}
  .root{
    width: 100%;
    height: 100vh;
    background: #fffae6;
    .root__container{
      width: 70%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .root__breadcrumbs{
        position: relative;
        transform: translateY(50%);
        width: 45%;
        background: #fffae6;
        padding: 20px 30px;
        border-radius: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
          display: flex;
          align-items: center;
          color: #ff8a00;
         p{
          background: #ff8a00;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          text-align: center;
          padding: 3px;
          margin-right: 5px;
          color: #fff;
         }
        }
        span{
          width: 8px;
          height: 8px;
          border-right: 2px solid #ff8a00;
          border-bottom: 2px solid #ff8a00;
          transform: rotate(-45deg);
         }
      }
      .root__content{
        width: 100%;
        background: #fff;
        box-shadow: 0px 7px 30px #fbebd6;
        border-radius: 5px;
      }
    }
    
  }
</style>
