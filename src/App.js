import { Component } from './core/heropy';
export default class App extends Component {
  //   constructor() {  // 생략 가능
  //     super();
  //   }
  render() {
    this.el.textContent = 'Hello, world!';
  }
}
