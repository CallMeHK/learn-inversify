import axios from 'axios';


class testClass {
  public static getJson = async (): Promise<number> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.status
  }
}


export { testClass };

