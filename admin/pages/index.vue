<template>
  <main>
    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All products
          </h1>
          <div class="a-spacing-large" />
          <!-- Button -->
          <nuxt-link to="/products" class="a-button-buy-again">
            Add a new product
          </nuxt-link>
          <nuxt-link to="/category" class="a-button-history margin-right-10">
            Add a new category
          </nuxt-link>
          <nuxt-link to="/owner" class="a-button-history margin-right-10">
            Add a new owner
          </nuxt-link>

          <!-- Listing page -->
        </div>
      </div>
    </div>

    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="(product,index) in products" :key="product._id" class="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb">
          <div class="history-box">
            <div class="text-center">
              <!-- Product image -->
              <a href="#" class="a-link-normal">
                <img :src="product.photo" class="img-fluid">
              </a>
              <!-- Product title -->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{ product.title }}</div>
                </span>
              </div>
              <!-- Product rating -->
              <div class="a-row">
                <a href="#">
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                </a>
                <span class="a-letter-space" />
                <span class="a-color-tertiary a-size-small asin-reviews">(1723)</span>
              </div>
              <!-- Product price -->
              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">TND {{ product.price }}</span>
                </span>
              </div>
              <!-- Product button -->
              <div class="a-row">
                <a href="#" class="a-button-history margin-right-10">Update</a>
                <a href="#" class="a-button-history margin-right-10" @click="onDeleteProduct(product._id,index)">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // asyncData is fetching Data before nuxt page finished loading on the browser
  // It is good for SEO because the Data will be loaded first
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:5000/api/products')
      console.log('response', response.products)
      return {
        products: response.products
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async  onDeleteProduct (id, index) {
      try {
        const response = await this.$axios.$delete(`http://localhost:5000/api/products/${id}`)

        if (response.status) {
          // remove product
          this.products.splice(index, 1)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
