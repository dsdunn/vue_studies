<template>
  <table class="container">
    <tr class="table-head">
      <th>Study Name</th>
      <th>Study ID</th>
      <th>Created</th>
      <th>Completes</th>
      <th></th>
    </tr>
    <Study v-for="study in studies" :key="study.id" :study="study" />
  </table>
</template>

<script>
import Study from './Study';

export default {
  name: 'StudyList',
  components: {
    Study
  },
  props: {
    studies: Array
  }
}
</script>

<style lang="scss" scoped>
  table {
    width: 100%;

    tr {
      padding: 0 2em;
      text-align: left;

      .table-head {
        width: 100%;
      }
    }
  }
</style>
