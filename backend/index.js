const mongoose = require('mongoose')
const express = require('express')
const { ServerApiVersion } = require('mongodb');

const url = "mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/?retryWrites=true&w=majority";

const app = express()
mongoose.connect(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });