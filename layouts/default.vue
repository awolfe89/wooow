<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
      class="dblue"
    >
      <nuxt-link to="/" class="text-decoration-none">
        <v-toolbar-title class="white--text font-weight-bold">{{title}}</v-toolbar-title>
      </nuxt-link>
      
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
   <Footer />
  </v-app>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'DefaultLayout',
  components: {
    Footer,
  },
  
  data () {
    
    return {
      title: 'Woow!'
    }
  }
}
</script>
