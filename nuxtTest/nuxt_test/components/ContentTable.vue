<template>
  <div>
    <v-data-table
      v-model="selected"
      :single-select="singleSelect"
      :headers="headers"
      :items="todoList"
      item-key="name"
      show-select
      :item-per-page="5"
      class="elevation-1"
    >
      <template #top>
        <v-switch
          v-model="singleSelect"
          label="Single Select"
          class="pa-3"
        ></v-switch>
      </template>
    </v-data-table>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      todo: this.title,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'To-do',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
      todoList: [
        {
          name: 'Play music',
        },
      ],
    }
  },
  computed: {
    appendTodo() {
      return this.title
    },
  },
  methods: {
    addTodo() {
      this.todoList.push({ name: `${this.appendTodo}` })
    },
  },
}
</script>
<style></style>
