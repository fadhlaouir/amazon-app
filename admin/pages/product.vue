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
                <select class="a-select-option">
                  <option v-for="category in categories" :key="category._id" :value="category._id">
                    {{ category.type }}
                  </option>
                </select>
              </div>
              <!-- Owner DropDown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option v-for="owner in owners" :key="owner._id" :value="owner._id">
                    {{ owner.name }}
                  </option>
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Title</label>
                <input type="text" class="a-input-text" style="width:100%">
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Price</label>
                <input type="number" class="a-input-text" style="width:100%">
              </div>
              <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Description</label>
                <textarea placeholder="Provide details such as a product description" style="width:100%" />
              </div>
              <!-- Photo file -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px;">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus" />
                    <input type="file">
                    <p style="margin-top:-70px">name of the</p>
                  </label>
                </div>
              </div>
              <!-- Button Register -->
              <hr>
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add product</span>
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
      const categories = await $axios.$get('http://localhost:5000/api/categories')
      const owners = await $axios.$get('http://localhost:5000/api/owners')

      // Promise run the 2 api (categories,owners) at the same time
      const [categoryResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ])
      console.log('categoryResponse', categoryResponse)
      return {
        categories: categoryResponse.categories,
        owners: ownerResponse.owners
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
