import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  mutations: {
    addItemsToCart (state, item) {
      
      let found = false;
      let cartItems = state.cartItems;
      cartItems.forEach((curItem) => {
        if(curItem.id == item.id ){
          found = true
          curItem.qnty += 1;

        }
      })
      if(!found){
        state.cartItems.push(item)
      } 
       
    },
    deleteItem(state, id){
    	let cartItems = state.cartItems
      	cartItems.forEach( (item,index) => {
        if(item.id == id){
        	if(item.qnty > 1) {
        		item.qnty -= 1
        	} 
        }
      })
    },
    deleteProduct(state,id) {
    	let cartItems = state.cartItems
      	cartItems.forEach( (item,index) => {
        if(item.id == id){
        	state.cartItems.splice(index,1) 
        }
      })
        
    }
  },
  getters: {
    cartItems (state) {
      return state.cartItems
    },
    cartItemsCount (state) {
      return state.cartItems.length
    },
    totalPurchase(state) {
    	let total = 0
    	state.cartItems.forEach((item,index) => {
    		let itemTotal = item.price * item.qnty
    		total += itemTotal
    	})
    	return total
    }
  }
  
})
