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
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Single Select"
          class="pa-3"
        ></v-switch>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      title: '',
      headers: [
        {
          text: 'To-do',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Title', value: 'title' },
      ],
      todoList: [
        {
          name: this.title,
        },
      ],
    }
  },
}
</script>
<style></style>
