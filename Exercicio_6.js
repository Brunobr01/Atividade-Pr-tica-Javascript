function verificaMorte(dano, saude) {
    if (saude - dano <= 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(verificaMorte(50, 30)); // 1 (morreu)
console.log(verificaMorte(20, 30)); // 0 (não morreu)