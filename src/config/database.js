// url do railway.app aqui e no database/index.js

module.exports = {
  dialect: 'postgres',
  url: 'postgresql://postgres:LzCfjmA8hG6XgzVFAkEK@containers-us-west-206.railway.app:6128/railway',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
