<template>
  <v-card width="100%" class="card mb-10 mt-10">
    <v-row no-gutters class="d-flex justify-center">
      <v-card-title 
        class="headline darktext--text font-weight-bold"
      >
        Your Random WOW of the day:
      </v-card-title>
    </v-row>
    <v-row no-gutters class="py-5 mx-4 d-flex justify-space-between">
      <v-col cols="12" lg="5">
        <v-card  width="100%" flat class="card">
          <v-row no-gutters>
            <v-list v-for="(random, i) in movies" :key="i" class="card" >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="display-1">
                    <span class="darktext--text font-weight-bold">
                      Movie:
                    </span> 
                      {{random.movie}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="display-1">
                    <span class="darktext--text font-weight-bold">
                      Number of WOWs:
                    </span>
                      {{random.total_wows_in_movie}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-card-text class="display-1 pl-0">
                      <span class="darktext--text font-weight-bold">
                      Full Line:
                    </span>
                      {{random.full_line}}
                    </v-card-text>  
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="display-1">
                    <span class="darktext--text font-weight-bold">
                      Character:
                    </span> 
                      {{random.character}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-card>
      </v-col>
     <!-- audio player --> 
      <v-col cols="12" lg="5">
        <v-card class="card darken-1 mt-10" flat>
          <v-card-text class="darktext--text headline">
            HAVE A LISTEN! 
          </v-card-text>
          <!-- <v-card-text v-for="(movie, i) in movies" :key="i">
            <vuetify-audio :file="movie.audio" ></vuetify-audio>
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'RandomCard',
  components: {
    VuetifyAudio: () => import('vuetify-audio'),
  },
  data: () => ({
      movies: [],
    }),
    async fetch(){
        await this.fetchRandom()
      },
  methods: {
    async fetchRandom(){
      try {
        this.movies = await this.$axios.$get('/api/wows/random')
      } catch (err){}
    },
  },
  
  }
</script>