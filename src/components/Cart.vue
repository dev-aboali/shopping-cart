<template>
 
    <div class="cart">
        <div class="image-box">
            <img src="../assets/cart.png" alt="" class="img-fluid image-box__img">
        </div>
        <div class="cart-items" v-if="cartItemCount">
            <transition-group class="list-group" tag="ul" name="list">
                <li class="list-group-item d-flex align-items-center justify-content-between mb-2" v-for="cartItem in cartItems" :key="cartItem.id">
                   {{cartItem.id}} - {{cartItem.title}} 
                    <span class="badge badge-warning badge-pill"> {{cartItem.qnty}} x
                     {{cartItem.price | currency}} </span>

                     <button class="btn btn-light" @click="increment(cartItem)">+</button>

                     <button v-if="cartItem.qnty > 1" class="btn btn-light" @click="deleteItem(cartItem.id)">-</button> 

                     <button class="btn btn-danger" @click="deleteFullProduct(cartItem.id)">X</button>
                </li>
            </transition-group>
        <p class="text-success font-weight-bold">Total:
         {{total | currency}}</p>
        </div>
        <p v-else>No Items in the cart.</p>
    </div>
      
</template>

<script>

export default {
    computed: {
        // Total money to purchase
        total(){
            return this.$store.getters.totalPurchase;
        },
        cartItemCount(){
            return this.$store.getters.cartItemsCount
        },
         cartItems(){
            return this.$store.getters.cartItems
        }

    },
    methods: {
        increment(item) {
            this.$store.commit('addItemsToCart', item)
        },
        deleteItem(id){
            this.$store.commit('deleteItem', id);
        },
        deleteFullProduct(id) {
            this.$store.commit('deleteProduct', id);
        }
        
    }
}
</script>

<style scoped lang="scss"> 
    .list-enter-active{
        opacity: 0;
        transform: translateX(-10rem) scale(1.8);
        transition: all .6s ease-in-out;
    }
    .list-leave-active{
        opacity: 1;
        transform: translateX(0) scale(1);
        
    }

    .cart{
        border-left: 3px solid #ddd;
    }

    .image-box{
        height: 5rem;
        width: 5rem;
        margin-bottom: 2rem;
        margin-left: 2rem;

        &__img{
            display: inline-block;
            width: 100%;
            height: 100%;
            text-align: center;
            
        }

      
    }


</style>

