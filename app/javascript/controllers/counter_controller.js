import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["countries", "meters", "tours"]
  connect() {
    console.log("hi");
    // this.startCounter();
    this.startLoopOne();
    this.startLoopTwo();
    this.startLoopThree();
  }
  startLoopOne() {
    let count = 0;
    const number = this.countriesTarget.getAttribute('country');
    const interval = setInterval(() => {
      this.countriesTarget.innerText = count;
      count++;
      if (count > number) {
        clearInterval(interval);
      }
    }, 30); // Loop every second
  }

  startLoopTwo() {
    let count = 0;
    const number = this.metersTarget.getAttribute('height');
    const interval = setInterval(() => {
      this.metersTarget.innerText = count;
      count += 10;
      if (count > number) {
        clearInterval(interval);
      }
    }, 2); // Loop every second
  }

  startLoopThree() {
    let count = 0;
    const number = this.toursTarget.getAttribute('alps');
    const interval = setInterval(() => {
      this.toursTarget.innerText = count;
      count++;
      if (count > number) {
        clearInterval(interval);
      }
    }, 100); // Loop every second
  }
}
