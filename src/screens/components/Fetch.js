/*const useFetch = async (apiLink) => {
  try{
    const response = await fetch(process.env.REACT_APP_API_IP + apiLink);
    console.log(await response.json());
  } catch (error){
    console.log(error)
  }
}
export default useFetch;*/
const useFetch = async (url) => {
  try{
    const response = await fetch(process.env.REACT_APP_API_IP + url);
    console.log( await response.text());
  } catch (error){
    console.log(error)
  }
};
export default useFetch;