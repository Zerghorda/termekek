import Adatok from "./adatok.js";
import Termek from "./Termek.js";
class Termekek {
  constructor() {
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Adatok(index, szuloElem);
    }
    $(window).on("elemKattintas", (event) => {
      if (szam % 2 == 0) {
        event.detail.setElem("X");
      } else {
        event.detail.setElem("O");
      }
      szam++;
    });
  }
}
export default Termekek;
