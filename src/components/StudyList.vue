<template>
  <section class="studylist">
    <div class="study list-header">
      <span class="study-name">Study Name</span>
      <span>Study ID</span>
      <span>Created</span>
      <span>Completes</span>
      <span class="controls"></span>
    </div>
    <Study v-for="study in studies" :key="study.id" :study="study" v-on="$listeners"/>
  </section>
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

<style lang="scss">
  .studylist {
    list-style-type: none;
    width: 100%;
    margin: 1em auto 2.5em;

    .study {
      display: flex;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 0.6em;
      text-align: left;
      font-size: 0.8em;

      &:not(.list-header) {
        background: white;
        padding: 0.8em 2.1em;
      }

      &.list-header {
        color: white;
        font-weight: 400;
        padding: 0 2.1em;
      }

      span {
        width: 12%;
        min-width: 80px;
      }

      .study-name {
        width: 52%;
      }

      .controls {
        min-width: 130px
      }
    }
  }
</style>
