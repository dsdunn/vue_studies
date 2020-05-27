const endpoint = "http://localhost:3000/graphql"

const postReq = async (query) => {
  let response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: query
  })

  return await response.json();
}

export const getStudies = async () => {
  let query = `{
            studies {
              id,
              studyName,
              numCompletes,
              creationDate
            }
          }`
  let response = await fetch(endpoint + '?query=' + query);

  return await response.json();
}

export const addStudy = async () => {
  let query = JSON.stringify({ 
    query: `mutation {
      addStudy(studyName: "New Study") {
        studyName,
        id,
        numCompletes,
        creationDate
      }
    }`
  })

  return await postReq(query);
}

export const deleteStudy = async (id) => {
  let query = JSON.stringify({ 
    query: `mutation {
      deleteStudy(id: "${id}") {
        studyName,
        id,
        numCompletes,
        creationDate
      }
    }`
  })

  return await postReq(query);
}

export const updateStudy = async (args) => {
  let query = JSON.stringify({ 
    query: `mutation {
      updateStudy(id: "${args.id}", studyName: "${args.studyName}", numCompletes: "${args.numCompletes.toString()}") {
        studyName,
        id,
        numCompletes,
        creationDate
      }
    }`
  })

  return await postReq(query);
}