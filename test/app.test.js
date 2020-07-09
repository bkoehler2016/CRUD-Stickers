const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD Stickers', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      }).then(() => done());
  });

  
});