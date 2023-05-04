class Termek {
  #allapot;
  constructor(id, szuloElem) {
    this.id = id;
    szuloElem.html(`<div class ="elem">
        <p></p>
        <p></p>
        <p></p>
        <button></button>
        </div>`);
    this.elem = $("article div:last-child");
    this.hELEM = this.elem.children("button");
    this.#allapot = true;
    this.elem.on("click", () => {
        /*Kedvenlistába ide*/
    });
  }
  setElem(ertek) {
    this.hELEM.html(ertek);
  }
  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Termek;
