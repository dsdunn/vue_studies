<template>
    <tr>
      <td>
        <span>{{ study.studyName }}</span><font-awesome-icon icon="pencil-alt" />
      </td>
      <td>
        {{ study.id }}
      </td>
      <td>
        {{ formatDate(study.creationDate) }}
      </td>
      <td>
        {{ study.numCompletes }}
      </td>
      <td>
        <button>Add Complete</button>
        <font-awesome-icon icon="trash-alt" />
      </td>
    </tr>
</template>

<script>
  export default {
    name: 'Study',
    props: {
      study: Object
    },
    methods: {
      formatDate(dateString) {
        let jsDate = new Date(dateString);
        let day = jsDate.getDate();
        let month = jsDate.getMonth() + 1;
        let year = jsDate.getFullYear();

        return `${month}/${day}/${year}`
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>