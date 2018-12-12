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
          <div class="group" :class="{valid: valid.nameval, notvalid: notvalid.nameval}">
            <input type="text" required v-model="user.name" @keyup="validate" spellcheck="false">
            <label>Name</label>
          </div>
          <div class="group" :class="{valid: valid.emailval, notvalid: notvalid.emailval}">
            <input type="text" required v-model="user.email" @keyup="validate" spellcheck="false">
            <label>Email</label>
          </div>
          <div class="group" :class="{valid: valid.phoneval, notvalid: notvalid.phoneval}">
            <input type="text" required v-model="user.phone" @keyup="validate" spellcheck="false">
            <label>Phone Number</label>
          </div>
          <div class="text-area" :class="{valid: valid.addressval, notvalid: notvalid.addressval}">
            <textarea spellcheck="false" placeholder="Delivery Address" required v-model="user.address" @keyup="validate"></textarea>
            <p>{{addrcount.used}}/{{addrcount.left}}</p>
          </div>
          
        </div>

      </div>

      <div class="delivery__dropship">
        <div class="checkbox">
          <label>Send as dropshipper <span @click="isChecked"><div v-if="checked"></div></span></label>
        </div>
        <div class="delivery__input" v-if="checked">
          <div class="group" :class="{valid: valid.droname, notvalid: notvalid.droname}">
            <input type="text" required v-model="user.droname" @keyup="validate" spellcheck="false">
            <label>Dropshipper Name</label>
          </div>
          <div class="group" :class="{valid: valid.drophone, notvalid: notvalid.drophone}">
            <input type="text" required v-model="user.drophone" @keyup="validate" spellcheck="false">
            <label>Dropshipper Phone Number</label>
          </div>
        </div>
      </div>

      <div class="delivery__summary">
        <app-summary v-bind:purchased="purchased" v-bind:dropFee="dropFee" v-bind:totalcost="totalcost"></app-summary>
      </div>
    </div>
   
  </div>
</template>

<script>
import summary from './Summary.vue'
export default {
  components: {
    'app-summary': summary,
  },
  data(){
    return {
      purchased: 10,
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
    }
  },
 
  methods: {
    isChecked(){
      this.checked = this.checked ? false: true;
      if(this.checked){
        this.dropFee.title = 'Delifery Fee';
        this.dropFee.cost = 5900
      }else{
        this.dropFee.title = '';
        this.dropFee.cost = ''
      }
      //totalcost
      this.totalcost = parseInt(this.cost + this.dropFee.cost) 
      
    },
    validate(){
      //validate user name
      if(this.user.name == ''){
        this.notvalid.nameval = true;
        this.valid.nameval = false;
      }else{
        this.notvalid.nameval = false;
        this.valid.nameval = true;
      }

      //validate user email
      const emailRegex = /^[a-z]+((_|\.|-)?[a-z\d]+)*@[a-z\d]+((-)?[a-z\d]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
      let emailIsValid = emailRegex.test(this.user.email)
      if(!emailIsValid){
        this.notvalid.emailval = true;
        this.valid.emailval= false
      }else{
        this.notvalid.emailval = false;
        this.valid.emailval = true
      }

      //validate user phone
      const phoneRegex = /^(0|\+62|\(\d{3,4}\))[\d\-]{5,19}$/;
      let phoneIsValid = phoneRegex.test(this.user.phone);
      if(!phoneIsValid){
        this.notvalid.phoneval = true;
        this.valid.phoneval = false;
      }else{
        this.notvalid.phoneval = false;
        this.valid.phoneval = true;
      }

      //validate address
      if(this.user.address.length > 120 || this.user.address == ''){
        this.notvalid.addressval = true;
        this.valid.addressval = false;
      }else{
        this.notvalid.addressval = false;
        this.valid.addressval = true;
      }
      this.addrcount.used = this.user.address.length;

      //validate dropship name
      if(this.user.droname == ''){
        this.valid.droname = false;
        this.notvalid.droname = true
      }else{
        this.valid.droname = true;
        this.notvalid.droname = false
      }
      //validate dropship phon
      let isValidPhoneDrop = phoneRegex.test(this.user.drophone);
      if(!isValidPhoneDrop){
        this.valid.drophone = false;
        this.notvalid.drophone = true
      }else{
        this.valid.drophone = true;
        this.notvalid.drophone = false
      }
    }
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
      grid-gap: 25px;
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
      .group{
        width: 100%;
        height: 60px;
        margin-bottom: 15px;
        border: 1px solid #b8b7ba;
        padding: 10px;
        position: relative;
        input{
          padding:10px 10px 10px 5px;
          width: 100%;
          border: none;
          font-size: 16px;
          &:focus{
             outline: none;
          }
          &:focus ~ label, &:valid ~ label {
            font-size: 12px;
            top: 5px;
          }
        }
        label{
          position: absolute;
          pointer-events: none;
          top: 20px;
          left: 10px;
          color: #999;
          font-size: 15px;
          transition: all 0.4s ease;
        }
      }
      
     
      .text-area{
        width: 100%; 
        height: 130px;
        border: 1px solid #b8b7ba;
        position: relative;
        textarea{
          font-size: 16px;
          padding: 10px 20px 10px 10px;
          width: 100%;
          height: 100%;
          border: none;
          resize: none;
          outline: none;
          &::focus{
            outline: none;
          }
          &::placeholder{
            color: #999;
            font-size: 15px;
          }
        }
        p{
          color: #000;
          position: absolute;
          bottom: 2px;
          right: 2px;
          font-size: 12px;
        }
      }

      .valid{
        border: 1px solid #a7edc3;
        position: relative;
        &::after{
          content: ' ';
          position: absolute;
          top: 25px;
          right: 10px;
          width: 10px;
          height: 5px;
          border-left: 2px solid #25df8b;
          border-bottom: 2px solid #25df8b;
          transform: rotate(-45deg);
        }
        label{
          color: #25df8b;
        }
      }
      .notvalid{
        border: 1px solid #ff943f;
        position: relative;
        &::after{
          content: 'x';
          position: absolute;
          top: 20px;
          right: 10px;
          width: 10px;
          height: 10px;
          color: #ff943f;
        }
        label{
          color: #ff943f;
        }
      }
      
     
    }
  }
</style>