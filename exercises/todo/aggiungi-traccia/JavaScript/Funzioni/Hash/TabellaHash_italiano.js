class tabellaHash {
    m
    f
    T
    size
  constructor(m, f) {
    this.m = m;
    this.f = f;
    this.T = new Array(m)
    for (let i = 0; i < m; i++)
      this.T[i] = [];
    this.size = 0
    console.log(this.T)
  }

  aggiungi(n) {
    this.T[this.f(n)].push(n)
    this.size++
    return this.size
  }

  aggiungiTutti(a) {
    for (let el of a) {
      this.T[this.f(el)].push(el)
      this.size++
    }
    return this.size
  }

  cerca(n) {
    return this.T[this.f(n)].indexOf(n)
  }

  rimuovi(n) {
    let i = this.cerca(n)
    if (i != -1) {
      this.T[this.f(n)].splice(i, 1)
      this.size--
    }
    return this.size
  }

  stampa() {
    return this.T
  }
}