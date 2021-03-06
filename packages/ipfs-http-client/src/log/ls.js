'use strict'

const configure = require('../lib/configure')
const toUrlSearchParams = require('../lib/to-url-search-params')

module.exports = configure(api => {
  return async (options = {}) => {
    const res = await api.post('log/ls', {
      timeout: options.timeout,
      signal: options.signal,
      searchParams: toUrlSearchParams(options)
    })

    const data = await res.json()
    return data.Strings
  }
})
