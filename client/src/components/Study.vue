<template>
    <div class="study">
      <span class="study-name">
        <span 
          :contenteditable="isNameEditable" 
          ref="editableName" 
          @blur="handleChange('update_name', study.id)"
          @keypress="validateInput"
        >
          {{ study.studyName }}
        </span>
        <font-awesome-icon class="icon" icon="pencil-alt" @click="editName"/>
      </span>
      <span>
        {{ study.id }}
      </span>
      <span>
        {{ formatDate(study.creationDate) }}
      </span>
      <span>
        {{ study.numCompletes }}
      </span>
      <span class="controls">
        <button @click="handleChange('add_complete', study.id)">Add Complete</button>
        <font-awesome-icon class="icon" icon="trash-alt" @click="deleteStudy(study.id)" />
      </span>
    </div>
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
          let range = new Range();
          
          this.$refs.editableName.focus();

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

  .study-name {
    font-size: 15px;
    font-weight: 600;
  }

  .icon {
    color: gray;
    font-size: 16px;
    margin: auto 7px;

    &:hover {
      color: lightgray;
      cursor: pointer;
    }
  }

  button {
    margin-right: 15px;
    border-radius: 4px;
    padding: 5px;
    color: #2b6890;
    background: #d4d4d4;
    box-shadow: 0 3px 3px #cccccc;

    &:hover {
      background-color: #e9e9e9;
      cursor: pointer;
    }
  }
</style>







