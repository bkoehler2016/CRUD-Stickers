// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bks-web-store'

  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-bks-web-store'

  }
}
