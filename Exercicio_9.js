function maiusculaPrimeiraLetra(str) {
    return str.replace(/\b\w/g, function(l) {
        return l.toUpperCase();
    });
}

console.log(maiusculaPrimeiraLetra("olá mundo"));