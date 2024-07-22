class BitNode {
    cnt: number = 0
    zero ? : BitNode
    uno ? : BitNode
    add(...nums: number[]): void {
        for (var n of nums)
            if (n == 0) this.cnt++
        else {
            if (n % 2 == 0) {
                if (!this.zero) this.zero = new BitNode()
                this.zero.add(n / 2)
            } else {
                if (!this.uno) this.uno = new BitNode()
                this.uno.add((n - 1) / 2)
            }
        }
    }
}