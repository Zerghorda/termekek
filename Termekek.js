import Termek from "./Termek.js";
import Aszinkron from "./Adatok.json";
class Termekek {
  #kedvencek = [];
  constructor() {
    const aszinkron = new Aszinkron();
    let vegpont = "  http://localhost:3000/Adatok";
    aszinkron.adatBeolvas(vegpont, this.#termekMegjelenito);
    $(window).on("elemKattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
  }
  #termekMegjelenito(Adatok) {
    let sajatlista = Adatok;
    const szuloElem = $("article");
    for (let index = 0; index < sajatlista.length; index++) {
      const elem = new Termek(sajatlista[index], szuloElem);
    }
  }
}

export default Termekek;
