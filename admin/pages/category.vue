<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <!-- Left Side -->
        <div class="col-sm-3">
          a
        </div>

        <!-- Center -->
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2>Add a new category</h2>

          <form>
            <!-- Type input -->
            <div class="a-spacing-top-medium">
              <label>Type</label>
              <input v-model="type" class="a-input-text" style="width:100%">
            </div>

            <!-- Button Register -->
            <hr>
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span
                    class="a-button-text"
                    @click="onAddCategory"
                  >Add category</span>
                </span>
              </span>
            </div>
          </form>
          <br>
          <ul class="list-group-item">
            <li v-for="category in categories" :key="category._id">
              {{ category.type }}
            </li>
          </ul>
        </div>

        <!-- Right Side -->
        <div class="col-sm-3">
          c
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  // if you want to publish the data on your page
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:5000/api/categories')
      return {
        categories: response.categories
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      type: ''
    }
  },
  methods: {
    async onAddCategory () {
      try {
        const data = { type: this.type }
        await this.$axios.$post('http://localhost:5000/api/categories', data)
        this.categories.push(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
