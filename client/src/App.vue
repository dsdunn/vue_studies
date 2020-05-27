<template>
  <div id="app">
    <StudyList :studies="studies" @update_study="updateStudy" @delete_study="addOrDeleteStudy" />
    <button class="add-study-button" @click="addOrDeleteStudy(null)">+ Add Study</button>
  </div>
</template>

<script>
import StudyList from './components/StudyList.vue';
import { fetchData } from './api';

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
      let { data } = await fetchData();
      console.log(data);
      
      if (data) {
        let { studies } = data;

        this.studies = studies;
      }
    },
    addOrDeleteStudy: function(id) {
      if (id) {
        let index = this.studies.findIndex(study => study.id === id);

        this.studies.splice(index, 1);
      } else {
        let creationDate = new Date();

        this.studies.push({
          studyName: 'New Study',
          id: Date.now(),
          creationDate,
          numCompletes: 0
        })
      }
    },
    updateStudy: function(update = {}) {
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
