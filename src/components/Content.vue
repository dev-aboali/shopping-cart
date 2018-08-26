<template>
  <div>
  
    <form @submit.prevent="onSubmit" class=" ">

          
            <label for="searchText">Search: </label>
            <input type="text" v-model="searchText" id="searchText" placeholder="search in our products" class="form-control">
      
            <input type="submit" value="Search" class="btn btn-primary float-right mt-2" >
      
    </form>
    <h2 class="search__title">Search Results</h2>
    <div v-if="submitted">
      <p class="text-warning font-weight-bold" v-if="loading">Loading...</p>
      <p class="text-primary mt-4" v-else>
      Found {{results.length}} in terms of {{lastSearch}}</p>
    </div>
    <div class="card mb-3" v-for="(item,index) in items">

    <div class="card-body row">
      <div class="col-md-4">
        <img :src="item.img" alt="" class="img-fluid img-thumbnail">
      </div>
      <div class="col-md-8 mt-5">
          <p class=" text-lead text-muted">
          {{item.title}}
          </p>
         <p class="text-danger">Price: {{item.price | currency}}</p>
         <button class="btn btn-success btn-inline" @click="addItem(item.id,item.title,item.price)">Add To Cart</button>
      </div>
      
     
    </div>
    </div>
    <div id="seperator">
      <p v-if="noMoreItems" class="text-center font-weight-bold text-muted">No more items.</p>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import scrollMonitor from 'scrollmonitor'
export default {
  data(){
    return {
      items:[],
      searchText: '',
      loading: false,
      submitted: false,
      lastSearch: '',
      results: [],
      moreItems: 10
    }
  },
  methods: {
    addItem(id,title,price){
      const order = {
        id,
        title,
        price,
        qnty: 1
        
      }
      this.$store.commit('addItemsToCart', order)
      this.$store.commit('addToCart', price)
    },
    onSubmit(){
      if(this.searchText.length){
        this.loading = true
        this.submitted = true
        this.items = []
        this.lastSearch = this.searchText

      axios.get('gallery/search/top/0/?q='.concat(this.searchText)).
        then(res => {
          //console.log(res.data.data[0].link)
          const data = res.data.data
          let information = [];
           for (let key in data) {
            let id = data[key].id,
                img = data[key].link,
                title = data[key].title,
                price = (Math.random() * 50) + 1
            information.push({id,title,img,price});
          }

           this.results = information
           this.items = information.slice(0,10)
           this.loading = false 
        })
        .catch(err => err)
      } else{

      }
      
    },
    displayMoreItems () {
      if (this.items.length < this.results.length) {
        let addedItems = this.results.slice(this.items.length,this.items.length + this.moreItems)
        this.items = this.items.concat(addedItems)
      }
    },

  },
  computed: {
    noMoreItems(){
      return this.items.length == this.results.length && this.results.length > 0;
    }
  },
  mounted() {
    let self = this
    var el = document.getElementById('seperator')
    var elementWatcher = scrollMonitor.create( el )
    elementWatcher.enterViewport(function() {
      self.displayMoreItems()
    });
  
  
  }


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  .textfield{
    width: 75%;
  }

  .search__title{
    color: #999;
  }
</style>
