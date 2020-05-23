<template>
  <div class="container">
    <Study v-for="study in studies" :key="study.id" :study="study" />
  </div>
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

</style>
