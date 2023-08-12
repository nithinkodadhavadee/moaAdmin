const env = require('dotenv').config();
const axios = require('axios');

let readDb = async function () {
  try {
    let readData = await axios.get(process.env.JSONBIN_URL + "/latest", {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": process.env.MASTER_KEY
      }
    });

    return readData.data.record;

  } catch (error) {
    console.log(error)
  }

}

module.exports = { readDb }

