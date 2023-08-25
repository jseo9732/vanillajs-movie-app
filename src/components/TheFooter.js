import { Component } from '../core/heropy';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/jseo9732/vanillajs-movie-app">
                    GitHub Repository
                </a>
            </div>
            <div>
                <a href="https://github.com/jseo9732">
                    ${new Date().getFullYear()}
                    JIGU
                </a>
            </div>
        `;
  }
}
