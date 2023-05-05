class Termek {

  #adat;
  #divElem;
  #buttonElem;
  constructor(adat, szuloElem) {
    console.log(adat);
    this.#adat = adat;
    szuloElem.append(`<div class ="elem">
        <p>${this.#adat.termek}</p>
        <p>${this.#adat.kor}</p>
        <p>${this.#adat.szin}</p>
        <button>Kedvenc</button>
        </div>`);
    this.#divElem = $("article div:last-child");
    this.#buttonElem = this.#divElem.children("button");
    this.#buttonElem.on("click", () => {
      this.esemenyTrigger();
      console.log("");
    });
  }
  setElem(adat) {
    this.#buttonElem.html(adat);
  }
  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", { detail: this.#adat.id });
    window.dispatchEvent(esemeny);
  }
}
export default Termek;
