import Adatok from "./adatok.js";
import Termek from "./Termek.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    console.log(Adatok);
    const szuloElem = $("article");
    for (let index = 0; index < Adatok.length; index++) {
      const elem = new Termek(Adatok[index], szuloElem);
    }
    $(window).on("elemKattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
  }
}

export default Termekek;
