export const fetchData = async () => {

  let query = `{
            studies {
              studyName,
              numCompletes,
              creationDate
            }
          }`
  let response = await fetch('http://localhost:3000/graphql?query=' +query);
  return await response.json();
}