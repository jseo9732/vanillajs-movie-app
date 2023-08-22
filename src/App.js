import { Component } from './core/heropy';
export default class App extends Component {
  constructor() {
    super({ state: { inputText: '' } });
  }
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
        <input />
        <button>Click!</button>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListner('input', () => {
      this.state.inputText = inputEl.value;
    });

    const buttonEl = this.el.querySelector('button');
    buttonEl.addEventListner('click', () => {
      console.log(this.state.inputText);
    });
  }
}
