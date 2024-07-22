function* decadimento(n,k) {
    let divisore = 1
    while (true) {
      yield(Math.round(n/divisore))
      divisore = divisore * k
    }
  }