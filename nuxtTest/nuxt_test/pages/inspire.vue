<template>
  <div>
    <div>
      <div class="container mx-auto pt-8">
        <h1 class="mb-4 text-3xl font-bold text-white">Your To-do Append</h1>
        <p class="text-sm pb-4">
          This is your To-do append to notion. Type your To-do
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <v-text-field id="input" v-model="input" @keyup.enter="notion()">
      </v-text-field>
      <v-btn for="input">
        <v-icon color="white" @click="notion()">mdi-plus</v-icon>
      </v-btn>
    </div>
    <div>
      <ContentTable />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      input: '',
    }
  },
  methods: {
    notion() {
      this.input = ''
    },
  },
}
</script>
