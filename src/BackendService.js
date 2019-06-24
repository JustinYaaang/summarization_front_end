import axios from "axios";

const submitUrl = "https://essay-helper.herokuapp.com/submit";
const testUrl = "http://localhost:2999/submit";
var fs = require('fs');

var data = fs.readFileSync('App.js', 'utf8');
console.log(data);

fs.readFile('App.js', function (err, data) {
  if (err) throw err;
  console.log(data);
});

const postPdf = async (fileType, file) => {
  const url = testUrl;
  const headers = {
    Type: fileType,
    Accept: "application/json"
  };

  fs.readFile('demofile1.html', function(err, data) {
    console.log(data)
  });

  // var stream = fs.createReadStream()
  // fs.readFile(__dirname + file, (err, data) => {
  //   console.log(data)
  // })

  // var stream = fs.createReadStream(file);
  // var data = new FormData();
  // data.append('file', file);

  // axios
  //   .post(url, data, { headers: headers })
  //   .then(response => console.log("POST server success: ", response))
  //   .catch(error => console.error("POST server error: ", error));
};

export default postPdf;