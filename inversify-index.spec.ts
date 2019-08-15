import {container, mockContainer, TYPES, ITestClass, inversifyTestClass, IInversifyAxios} from './inversify-index'

test('Inversify worked', async () => {
  const testClass:any = container.get<ITestClass>(TYPES.inversifyTestClass)
  // const testClass:any = container.get(inversifyTestClass)
  let status: number = await testClass.getJson()
  expect(status).toBe(200)
})

test('Stubbing inversify worked', async () => {
  const testClass:any = mockContainer.get<ITestClass>(TYPES.inversifyTestClass)

  let status: number = await testClass.getJson()
  expect(status).toBe(201)
})