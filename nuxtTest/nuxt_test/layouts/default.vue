<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-dialog v-model="dialog" width="500">
        <template #activator="{ on, attrs }">
          <v-btn dark class="bg-gray-200" v-bind="attrs" v-on="on">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-5 white text-black"> Login </v-card-title>
          <v-card-text class="m-1">
            <v-text-field
              v-model="id"
              label="ID"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :type="show1 ? 'text' : 'password'"
              label="PASSWORD"
              :rules="rules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              name="input-10-1"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="logIn()">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      id: '',
      password: '',
      show1: false,
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters',
      ],
      dialog: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-checkbox-marked-circle-plus-outline',
          title: 'To-do',
          to: '/inspire',
        },
        {
          icon: 'mdi-view-gallery-outline',
          title: 'Gallery',
          to: '/gallery',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'School Life',
    }
  },
  methods: {
    logIn() {
      this.$axios
        .post('https://reqres.in/api/login', {
          email: this.id,
          password: this.password,
        })
        .then((res) => {
          if (res.data.token === 'QpwL5tke4Pnpja7X4') {
            alert('SUCCESS')
          }
        })
        .catch((err) => {
          alert(`${err}`)
        })
    },
  },
}
</script>
