const env = require('dotenv').config();
const axios = require('axios');

let updateDb = async function (updateData) {
  try {
    await axios.put(process.env.JSONBIN_URL, JSON.stringify(updateData), {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": process.env.MASTER_KEY
      }
    })

  } catch (error) {
    console.log(error)
  }
}

module.exports = { updateDb }

