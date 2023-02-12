import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID uh7JKzfimhFrKZ6Y70kVMGfBWhovxnSqI5F85Dq0JQM",
    },
    params: {
      query: searchTerm,
    },
  });

  //console.log(response);
  return response.data.results;
};

export default searchImages;
