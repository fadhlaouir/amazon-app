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
          <h2>Add a new owner</h2>

          <form>
            <!-- Name input -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input v-model="name" class="a-input-text" style="width:100%">
            </div>

            <!-- About textarea -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom:0px;">About</label>
              <textarea
                v-model="about"
                placeholder="Provide details such as a owner role"
                style="width:100%"
              />
            </div>

            <!-- Button Register -->
            <hr>
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span
                    class="a-button-text"
                    @click="onAddOwner"
                  >Add owner</span>
                </span>
              </span>
            </div>
          </form>
          <br>
          <ul v-for="owner in owners" :key="owner._id" class="list-group-item">
            <li>
              <strong>{{ owner.name }} </strong>
              <br>
              {{ owner.about }}
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
      const response = await $axios.$get('http://localhost:5000/api/owners')
      return {
        owners: response.owners
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      name: '',
      about: ''
    }
  },
  methods: {
    async onAddOwner () {
      try {
        const data = { name: this.name, about: this.about }
        await this.$axios.$post('http://localhost:5000/api/owners', data)
        this.owners.push(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
