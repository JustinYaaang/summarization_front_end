import axios from "axios";

const submitUrl = "https://essay-helper.herokuapp.com/submit";
const testUrl = "http://localhost:2999/submit";


const postFile = async (senderID, recipientID, message) => {
  const url = testUrl;
  const headers = {
    Accept: "application/json"
  };
  const data = {
    message: `<message_start>${message}<message_end>`
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => console.log("POST server success: ", response))
    .catch(error => console.error("POST server error: ", error));
};

export default postFile;