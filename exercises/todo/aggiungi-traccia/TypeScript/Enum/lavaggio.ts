class LavaggioError extends Error {}
enum TipoLavaggio {
    Intensivo = 90,
        Secco = 60,
        Delicati = 30
}
enum TipoTessuto {
    Cotone = 1.1,
        Seta = 2,
        Sintetico = 0.9,
        Lana = 1.75
}
type Lavaggio = [TipoTessuto, TipoLavaggio]

function processa(lavaggi: Lavaggio[]): void {
    lavaggi.sort((a: Lavaggio, b: Lavaggio): number => {
        let tipoTessuto_a: number = a[0];
        let tipoLavaggio_a: number = a[1];
        let tipoTessuto_b: number = b[0];
        let tipoLavaggio_b: number = b[1];
        if ((tipoTessuto_a === TipoTessuto.Seta || tipoTessuto_a === TipoTessuto.Lana) && (tipoLavaggio_a === TipoLavaggio.Intensivo)) {
            throw new LavaggioError("Impossibile effettuare questo lavaggio! ... ");
        }
        if ((tipoTessuto_a === TipoTessuto.Sintetico) && (tipoLavaggio_a === TipoLavaggio.Secco)) {
            throw new LavaggioError("Impossibile effettuare questo lavaggio! ... ");
        }
        let tempoLavaggio_A: number = tipoLavaggio_a * tipoTessuto_a;
        let tempoLavaggio_B: number = tipoLavaggio_b * tipoTessuto_b;
        return tempoLavaggio_A - tempoLavaggio_B;
    });
}