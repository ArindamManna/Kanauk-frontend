import axios from "axios";


let API_URL = "";

export { API_URL };

export const ApiHelperFunction = async (data) => {
  const { urlPath, method, formData, typecontent } = data;

  var config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    headers: {
      Accept: "application/json",
      "Content-Type": typecontent ? "multipart/form-data" : "application/json",
      Authorization: "Bearer " + localStorage.getItem("usertoken"),
    },
    data: formData,
  };

  let responseData = "";

  await axios(config)
    .then(function (response) {
      responseData = response;
    })

    .catch(function (error) {
      let temp = error;
      responseData = temp.response.data;
    });

  return responseData;
};