<template>
  <v-card rounded class="card mt-10">
    <v-row no-gutters>
      <v-col cols="6" class="d-flex justify-center">
        <v-card class="dblue ma-10">
          <v-row no-gutters>
            <v-card-text class="display-2 d-flex justify-center">
              Playing Around with the 'wow API'
            </v-card-text>
          </v-row>
          <v-row no-gutters>
            <v-card-text class="headline ">
              A Redditor created the Owen Wilson 'WOW' API and I had to 
              give it a try. A link to their post is 
              <a 
                href="https://www.reddit.com" 
                target="_blank"
                class="font-weight-bold card--text text-decoration-none"
              >
                here
              </a>
              here and a link to their Reddit profile is 
              <a 
                href="https://www.reddit.com" 
                target="_blank"
                class="font-weight-bold card--text text-decoration-none"
              >
                here
              </a>
              </v-card-text>
              <v-row class="d-flex justify-end mr-6" no-gutters>
                <v-btn to="about">About this app</v-btn>
              </v-row>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <img src="../static/owen.png" alt="" height="500">
      </v-col>
    </v-row>
  </v-card>
</template>
