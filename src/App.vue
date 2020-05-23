<template>
  <div id="app">
    <StudyList :studies="studies" @update_study="updateStudy" @delete_study="addOrDeleteStudy" />
    <button @click="addOrDeleteStudy(null)">+ Add Study</button>
  </div>
</template>

<script>
import StudyList from './components/StudyList.vue'

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
      let response = await fetch('https://www.cxsurveys.com/devtest/getStudyData.php');
      let result = await response.json();
      
      if (result) {
        let { studyData } = result;

        this.studies = studyData;
      }
    },
    addOrDeleteStudy: function(id) {
      if (id) {
        let index = this.studies.findIndex(study => study.id === id);

        this.studies.splice(index, 1);
      } else {
        let now = Date.now();
        let creationDate = new Date();

        this.studies.push({
          studyName: 'New Study',
          id: now,
          creationDate,
          numCompletes: 0
        })
      }
    },
    updateStudy: function(update = {}) {
      let { changeType, id, newName } = update;
      // console.log(changeType, id, value);
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
