export const getMenuList = async () => {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error.message);
    return [];
  }
}