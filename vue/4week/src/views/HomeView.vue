<template>
  <div>
    <h1 class="text-4xl text-center m-4">오늘 할일 적어보세요</h1>
    <div class="p-8 flex">
      <v-text-field v-model="title"> </v-text-field>
      <v-btn class="mx-2" fab dark small color="none">
        <v-icon @click="pushTodo(title)">mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    pushTodo() {
      axios
        .post(
          'https://api.notion.com/v1/pages',
          {
            parent: {
              database_id: process.env.VUE_APP_NOTION_DATABASE_ID
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: this.title
                    }
                  }
                ]
              }
            }
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_NOTION_API_TOKEN}`,
              'Content-Type': 'application/json',
              'Notion-Version': '2021-05-13'
            }
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style></style>
