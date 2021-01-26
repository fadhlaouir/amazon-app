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
            <img :src="owner.photo && owner.photo" style="width:150px; height:150px; border-radius: 150px;" class="img-fluid">
            <div class="imgBlock">
              <li>
                <strong>{{ owner.name }} </strong>
                <br>
                {{ owner.about }}
              </li>
            </div>
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
      about: '',
      fileName: '',
      selectedFile: null
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(' this.selectedFile', this.selectedFile)
      this.fileName = event.target.files[0].name
    },
    async onAddOwner () {
      try {
        const data = new FormData()
        data.append('name', this.name)
        data.append('about', this.about)
        data.append('photo', this.selectedFile)
        data.append('selectedFile', this.selectedFile.name)
        const xx = { name: this.name, about: this.about, photo: this.selectedFile.name }

        await this.$axios.$post('http://localhost:5000/api/owners', data)
        this.owners.push(xx)
        console.log('xx', xx)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
