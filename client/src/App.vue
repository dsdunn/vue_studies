<template>
  <div id="app">
    <StudyList :studies="studies" @update_study="updateStudy" @delete_study="addOrDeleteStudy" />
    <button class="add-study-button" @click="addOrDeleteStudy(null)">+ Add Study</button>
  </div>
</template>

<script>
import StudyList from './components/StudyList.vue';
import { getStudies, addStudy, deleteStudy, updateStudy } from './api';

export default {
  name: 'app',
  components: {
    StudyList
  },
  data: function() {
    return {
      studies: []
    }
  },
  mounted() {
    this.fetchStudies();
  },
  methods: {
    fetchStudies: async function () {
      let { data } = await getStudies();
      
      if (data) {
        let { studies } = data;

        this.studies = studies;
      }
    },
    addOrDeleteStudy: async function(id) {
      if (id) {
        let index = this.studies.findIndex(study => study.id === id);

        deleteStudy(id);

        this.studies.splice(index, 1);
      } else {
        let { data } = await addStudy();

        this.studies.push(data.addStudy);
      }
    },
    updateStudy: async function(update = {}) {
      let { changeType, id, newName } = update;
      let study = this.studies.find(study => study.id === id);

      switch (changeType) {
        case 'add_complete':
          study.numCompletes++;
          break;
        case 'update_name':
          study.studyName = newName
          break;
      }
      updateStudy(study);
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: #2b6890;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 13% 10%;
}

button.add-study-button {
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #174462;
  padding: 0.3em 1em;
  box-shadow: 0 2px 2px gray;
  font-size: 0.8em;
  
  &:hover {
    cursor: pointer;
  }
}



</style>
