<template>
  <v-container fluid class=" mt-10 mb-10 pb-10"> 
    <v-row no-gutters class="pt-10">
      <v-col cols="12" lg="6" >
        <v-card flat class="ma-8 card" width="100%"> 
          <v-toolbar flat class="background">
            <v-toolbar-title>
              How many movies would you like to see?
            </v-toolbar-title>
          </v-toolbar>
          <v-row no-gutters class="mx-5 mt-5">
            <v-select 
              v-model="resultQTY" 
              solo
              placeholder="Select Amount" 
              :items="qty" 
            />
            <v-btn @click="fetchRandom" class="dblue" block>click</v-btn>
          </v-row>

          <v-row no-gutters class="mt-6 mx-5 pb-6">
            <v-card width="100%" flat class="card">
              <v-card-text class="headline black--text">
                Movies
              </v-card-text>
              <v-skeleton-loader
                v-if="movies.length <= 0"
                type="article, actions"
                boilerplate
              />
                <v-list v-if="movies.length > 0" class="card" >
                  <v-list-group
                    v-for="(movie, i) in movies" :key="i"
                    class="mx-0 px-0"
                  >
                    <template v-slot:activator>
                      <v-list-item-icon>
                          <v-icon color="dblue">mdi-filmstrip</v-icon>
                        </v-list-item-icon>
                      <v-list-item-title class="black--text">{{movie.movie}}</v-list-item-title>
                    </template>

                    <v-list-group
                      no-action
                      sub-group
                      prepend-icon="mdi-arrow-down-drop-circle-outline"
                      class="mx-0 px-0"
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Details</v-list-item-title>
                        </v-list-item-content>
                      </template>
                      <!-- Year -->
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-calendar</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-card-text class="ma-0 pa-0">
                            <span class="font-weight-bold">
                              Year:
                            </span>
                            {{movie.year}}
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- CHARACTER -->
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon >mdi-magnify</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-card-text class="ma-0 pa-0">
                            <span class="font-weight-bold">
                              Character:
                            </span>
                            {{movie.character}}
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- WOWS --> 
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-account-alert-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-card-text class="ma-0 pa-0">
                            <span class="font-weight-bold">
                              Total Wows:
                            </span>
                              {{movie.total_wows_in_movie}}
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- Random WOW --> 
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-code-json</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-card-text class="ma-0 pa-0">
                            <span class="font-weight-bold">
                              Random WOW Line:
                            </span>
                            {{movie.full_line}}
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- WOW timestamp --> 
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-transit-connection-horizontal</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-card-text class="ma-0 pa-0">
                            <span class="font-weight-bold">
                              ^ Wow Timestamp:
                            </span>
                            {{movie.timestamp}}
                          </v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- Poster --> 
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src='movie.poster' />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-group>
                  </v-list-group>
                </v-list>
              </v-card>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" lg='6' class="d-flex justify-center mt-10">
          <img src="../static/owen-2.png" alt="" height="300">
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    movies: [],
    qty: ['1','2','3','4','5','6','7','8', '9', '10'],
    resultQTY: 0,
  }),
  methods: {
    async fetchRandom(resultQTY){
       this.movies = await this.$axios.$get(`/api/wows/random?results=${this.resultQTY}`)
      console.log(resultQTY)
    },
  }
}
</script>

