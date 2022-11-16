<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Submit
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-base text-gray-500">Login</v-card-title>
          <v-card-text
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem autem laborum aliquam molestiae pariatur quasi non sit
            facilis, quos aliquid eligendi necessitatibus rerum nam voluptate
            voluptatibus doloremque nisi fuga at?</v-card-text
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
<style></style>
