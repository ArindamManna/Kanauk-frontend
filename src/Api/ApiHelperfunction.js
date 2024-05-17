import axios from "axios";


let API_URL = "https://kanuck-backend-git-master-arindammannas-projects.vercel.app/api/";

export { API_URL };

export const ApiHelperFunction = async (data) => {
  const { urlPath, method, formData, typecontent } = data;
  let adminToken = localStorage.getItem("adminToken")
  let usertoken = localStorage.getItem("usertoken")
  console.log((urlPath.indexOf("admin") !== -1) ? "Bearer " + "adminToken" : "Bearer " + "usertoken");
  var config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    headers: {
      Accept: "application/json",
      "Content-Type": typecontent ? "multipart/form-data" : "application/json",
      Authorization: (urlPath.indexOf("admin") !== -1) ? "Bearer " + adminToken : "Bearer " + usertoken,
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
