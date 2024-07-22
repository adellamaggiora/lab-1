// https://www.youtube.com/watch?v=-Df9ipREbuM
// https://www.youtube.com/watch?v=y3CcHKEM8r8
// https://www.youtube.com/watch?v=FsfRsGFHuv4

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

  add(n) {
    this.T[this.f(n)].push(n)
    this.size++
    return this.size
  }

  addAll(a) {
    for (let el of a) {
      this.T[this.f(el)].push(el)
      this.size++
    }
    return this.size
  }

  search(n) {
    return this.T[this.f(n)].indexOf(n)
  }

  remove(n) {
    let i = this.search(n)
    if (i != -1) {
      this.T[this.f(n)].splice(i, 1)
      this.size--
    }
    return this.size
  }

  getTab() {
    return this.T
  }
}   