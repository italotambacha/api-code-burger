import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import Product from '../app/models/Product'
import User from '../app/models/User'
import Category from '../app/models/Category'

// import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  // url do railway.app aqui e no config/database.js
  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:LzCfjmA8hG6XgzVFAkEK@containers-us-west-206.railway.app:6128/railway'
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    mongoose.set('strictQuery', true) // adicionado para tirar erro mongo
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:viIt9mtWfYF0VenYYmsi@containers-us-west-172.railway.app:7402',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
