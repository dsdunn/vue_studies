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
        <button @click="handleChange('add_complete', study.id)">Add Complete</button>
        <font-awesome-icon icon="trash-alt" @click="deleteStudy(study.id)" />
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
      },
      handleChange(changeType, id) {
        this.$emit('update_study', {changeType, id})
      },
      deleteStudy(id) {
        this.$emit('delete_study', id);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>