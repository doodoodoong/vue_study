<template>
  <v-app id="inspire">
    <v-app-bar app color="#c2c2c2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>School Life</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab small v-bind="attrs" v-on="on">
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-gray-500">Login</v-card-title>
          <v-card-text>
            <v-text-field
              label="ID"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="PASSWORD"
              :rules="rules"
              :type="show1 ? 'text' : 'password'"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="test"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <v-list>
        <v-list-item-group
          v-model="group"
          active-class="deep-grey--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/weather">
            <v-list-item-icon>
              <v-icon>mdi-sun-wireless-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Weather</v-list-item-title>
          </v-list-item>
          <v-list-item to="/todo">
            <v-list-item-icon>
              <v-icon>mdi-checkbox-marked-circle-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title> To-do </v-list-item-title>
          </v-list-item>
          <v-list-item to="/gallery">
            <v-list-item-icon>
              <v-icon>mdi-view-gallery-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
    rules: [(value) => !!value || 'Type Please'],
    password: '111',
    show1: false
  }),
  methods: {
    test() {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then((response) => {
          // handle success
          console.log(response)
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .finally(() => {
          // always executed
        })
    }
  }
}
</script>
