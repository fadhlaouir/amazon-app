<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <!-- Left Side -->
        <div class="col-sm-3" />

        <!-- Center -->
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2>Profile Page</h2>

          <!-- onLogout -->
          <a href="#" @click="onLogout">Logout</a>
          <!-- onLogout -->

          <form>
            <!-- Name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input
                v-model="name"
                :placeholder="$auth.$state.user.name"
                class="a-input-text"
                style="width:100%"
              >
            </div>
            <!-- Email -->
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input
                v-model="email"
                :placeholder="$auth.$state.user.email"
                type="email"
                class="a-input-text"
                style="width:100%"
              >
            </div>
            <!-- Password -->
            <div class="a-spacing-top-medium">
              <label>Password</label>
              <input v-model="password" class="a-input-text" type="password" style="width:100%">
            </div>

            <!-- Button Register -->
            <hr>
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                </span>
              </span>
            </div>
          </form>
        </div>

        <!-- Right Side -->
        <div class="col-sm-3" />
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async onUpdateProfile () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        const response = await this.$axios.$put('/api/auth/user', data)
        console.log('response', response)

        if (response.success) {
          this.name = ''
          this.email = ''
          this.password = ''

          await this.$auth.fetchUser()
        }
      } catch (error) {
        console.log('error', error)
      }
    },
    async onLogout () {
      await this.$auth.logout()
    }
  }
}
</script>
