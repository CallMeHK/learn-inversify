const axios = require('axios')

test('Installation worked', async () => {
  axios.get = jest.fn().mockResolvedValue({status:201})
  
  const {testClass} = require('./index')
  let status: number = await testClass.getJson()
  expect(status).toBe(201)
})

