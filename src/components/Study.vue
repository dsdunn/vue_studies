<template>
    <tr>
      <td>
        <span 
          contenteditable="isNameEditable" 
          ref="editableName" 
          @blur="handleChange('update_name', study.id)"
          @keypress="validateInput"
        >
          {{ study.studyName }}
        </span>
        <font-awesome-icon icon="pencil-alt" @click="editName"/>
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
    data() {
      return {
        isNameEditable: false
      }
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
        let newName = event.target.innerText;

        this.$emit('update_study', {changeType, id, newName})
      },
      deleteStudy(id) {
        this.$emit('delete_study', id);
      },
      editName() {
        this.isNameEditable = !this.isNameEditable;

        if (this.isNameEditable) {
          this.$refs.editableName.focus();
          let range = new Range();

          range.setStart(this.$refs.editableName, 0);
          range.setEnd(this.$refs.editableName, 1);
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(range);
        }
      },
      validateInput() {
        if (event.which === 13) {
          event.preventDefault();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>