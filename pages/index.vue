<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" lg="12">
      <Hero />
      <RandomCard />
      <Multiple />
      <Year />
    </v-col>
  </v-row>
</template>

<script>
import Hero from '../components/Hero'
import RandomCard from '../components/RandomCard'
import Multiple from '../components/Multiple'
import Year from '../components/Year'
export default {
  name: 'IndexPage',
  components:{
    Hero,
    RandomCard,
    Multiple,
    Year  
  },
}

</script>
