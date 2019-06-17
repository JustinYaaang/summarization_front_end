import axios from "axios";

const submitUrl = "https://essay-helper.herokuapp.com/submit";
const testUrl = "http://localhost:2999/submit";


const postPdf = async (fileType, file) => {
  const url = testUrl;
  const headers = {
    Type: fileType,
    Accept: "application/json"
  };

  var data = new FormData();
  data.append('file', file);

  axios
    .post(url, data, { headers: headers })
    .then(response => console.log("POST server success: ", response))
    .catch(error => console.error("POST server error: ", error));
};

export default postPdf;