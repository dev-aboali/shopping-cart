<template>

<div>
  <app-header></app-header>
  <div id="app" class="container my-5">
    <div class="row">
      <div class="col-md-8">
         <app-content></app-content>
      </div>
   
    <div class="col-md-4">
      <app-cart></app-cart>
    </div>
  </div>
  
  </div>
  <app-footer></app-footer>
</div>

</template>
<script>
import  appHeader from './views/Header.vue'
import  appFooter from './views/Footer.vue'
import  appCart from './components/Cart.vue'
import  appContent from './components/Content.vue'



export default {
    components:{
      appHeader,
      appFooter,
      appContent,
      appCart
    }

}
    
</script>


<style lang="scss">

</style>
