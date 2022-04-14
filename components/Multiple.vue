<template>
  <v-card class="dblue" width="100%" flat>
    <v-card-title>More ways to Wow (5 random)</v-card-title>
    <v-tabs
      v-model="movieTabs"
      align-with-title  
    >
      <v-tabs-slider color="card" />

      <v-tab
        v-for="(movie, i) in movies"
        :key="i"
        class="cardHeadline--text"
        active-class="card--text"
      >
        {{ movie.movie }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="movieTabs">
      <v-tab-item
        v-for="(movie, i) in movies"
        :key="i"
        color="red"
      >
      <v-row no-gutters class="d-flex justify-center mt-4">
        <v-col cols="5">
           <v-card dark class="my-6">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="movie.character"
                />
                <v-card-subtitle v-text="movie.year" />
                <v-card-text>Wows: {{movie.total_wows_in_movie}}</v-card-text>
                <v-card-text class="py-0">Full Line: "{{movie.full_line}}"</v-card-text>
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="videoDialog = true"
                  >
                    Watch the Wow
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="200"
                tile
              >
                <v-img :src="movie.poster" />
              </v-avatar>  
              <!-- video dialog --> 
              <v-dialog max-width="800px" v-model="videoDialog">
                <v-card >
                  <v-toolbar flat class="dblue">
                    <v-toolbar-title>Watch the wow from {{movie.movie}}</v-toolbar-title>
                    <v-spacer />
                    <v-btn text @click="videoDialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-row no-gutters class="d-flex justify-center">
                    <video 
                      id="player" 
                      playsinline 
                      controls 
                      max-width="300"
                    >
                      <source :src="movie.video['1080p']" type="video/mp4" />
                    </video> 
                  </v-row> 
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs-items>  
  </v-card>
</template>

<script>
export default {
  name: 'MultipleCard',
  data: () => ({
      movies: [],
      movieTabs: null,
      videoDialog: false,
    }),
    async fetch(){
        await this.fetchRandom()
      },
  methods: {
    async fetchRandom(){
      try {
        this.movies = await this.$axios.$get('/api/wows/random?results=5')
      } catch (err){}
    },
  },
}
</script>

<style lang='scss' scoped>

#player {
  width: 300px;
  flex: content;
  height: auto;
}
</style>