class Termek {
  #allapot;
  constructor(id, szuloElem) {
    this.id = id;
    szuloElem.append(`<div class ="elem">
        <p></p>
        <p></p>
        <p></p>
        <button></button>
        </div>`);
    this.elem = $("article div:last-child");
    this.hELEM = this.elem.children("button");
    this.#allapot = true;
    this.elem.on("click", () => {
      if (this.#allapot == true) {
        this.esemenyTrigger();
      }
      this.#allapot = false;
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
