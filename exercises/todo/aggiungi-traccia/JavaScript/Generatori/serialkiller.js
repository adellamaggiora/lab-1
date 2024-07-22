class NoKillsError extends Error {}
class JustOneKillError extends Error {}

function* serialKiller(vittime) {
    if (vittime.length === 0) {
        throw new NoKillsError()
    } else {
        for (let vittima of vittime) {
            if (vittime.length === 1) {
                yield vittima
                throw new JustOneKillError()
            } else {
                yield vittima
            }
        }
    }
}