<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          x1
        </div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium" />
            <h2 style="text-align:center">
              Add a new product
            </h2>
            <form class="a-spacing-top-medium">
              <!-- category DropDown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID" >
                  <option
                    v-for="category in categories"
                    :key="category._id"
                    :value="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>
              <!-- Owner DropDown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerID" >
                  <option
                    v-for="owner in owners"
                    :key="owner._id"
                    :value="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Title</label>
                <input  type="text" class="a-input-text" style="width:100%" v-model="title">
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Price</label>
                <input type="number" class="a-input-text" style="width:100%" v-model="price" >
              </div>
              <!-- Stock Quantity input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Stock Quantity</label>
                <input  type="number" class="a-input-text" style="width:100%" v-model="stockQuantity">
              </div>
              <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Description</label>
                <textarea
                  placeholder="Provide details such as a product description"
                  style="width:100%"
                  v-model="description"
                />
              </div>
              <!-- Photo file -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus" />
                    <input type="file" @change="onFileSelected">
                    <p style="margin-top:-70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>
              <!-- Button Register -->
              <hr>
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddProduct">Add product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3">
          x3
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
      const categories = await $axios.$get(
        'http://localhost:5000/api/categories'
      )
      const owners = await $axios.$get('http://localhost:5000/api/owners')

      // Promise run the 2 api (categories,owners) at the same time
      const [categoryResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ])

      return {
        categories: categoryResponse.categories,
        owners: ownerResponse.owners
      }
    } catch (error) {
      console.log(error)
    }
  },
  // data vs asyncData
  // data is a process on the client side
  // asyncData is a process on the server side to call the api
  data () {
    // DOM: Document Object Model
    // create new model so we can map the model into the right input field
    return {
      categoryID: null,
      ownerID: null,
      title: '',
      price: 0,
      stockQuantity: 1,
      description: '',
      selectedFile: null,
      fileName: ''
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(' this.selectedFile', this.selectedFile)
      this.fileName = event.target.files[0].name
    },
    async onAddProduct () {
      const data = new FormData()
      data.append('title', this.title)
      data.append('price', this.price)
      data.append('description', this.description)
      data.append('ownerID', this.ownerID)
      data.append('categoryID', this.categoryID)
      data.append('photo', this.selectedFile)
      data.append('selectedFile', this.selectedFile.name)
      data.append('stockQuantity', this.stockQuantity)

      const result = await this.$axios.$post(
        'http://localhost:5000/api/products',
        data
      )
      console.log(result)
      this.$router.push('/')
    }
  }
}
</script>
