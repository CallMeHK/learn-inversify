import axios, { AxiosInstance } from 'axios'
import { inject, injectable, Container } from 'inversify';
import "reflect-metadata"

export interface IInversifyAxios {
  get(url: string): Promise<any>
}

export interface ITestClass {
  getJson(): Promise<number>
}

const TYPES = {
  inversifyAxios: Symbol.for("inversifyAxios"),
  mockInversifyAxios: Symbol.for("mockInversifyAxios"),
  inversifyTestClass: Symbol.for("inversifyTestClass")
}



@injectable()
export class inversifyAxios implements IInversifyAxios {
  public get(url: string): Promise<any> {
    return axios.get(url)
  }

}

@injectable()
export class mockInversifyAxios implements IInversifyAxios {
  public get(url: string): Promise<any> {
    return Promise.resolve({ status: 201 })
  }

}

@injectable()
export class inversifyTestClass implements ITestClass {

  @inject(TYPES.inversifyAxios) iaxios: IInversifyAxios

  async getJson<T>(): Promise<number> {
    const response = await this.iaxios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.status
  }
}

let container = new Container()
container.bind<IInversifyAxios>(TYPES.inversifyAxios).to(inversifyAxios)
container.bind<ITestClass>(TYPES.inversifyTestClass).to(inversifyTestClass)


let mockContainer = new Container()
mockContainer.bind<IInversifyAxios>(TYPES.inversifyAxios).to(mockInversifyAxios)
mockContainer.bind<ITestClass>(TYPES.inversifyTestClass).to(inversifyTestClass)


export { TYPES, container, mockContainer }