let heroi = ["Batman","6500"]
let nivel

if (heroi[1] < 1000)
    nivel = "Ferro"
else if (heroi[1] >= 1001 && heroi[1] <= 2000)
    nivel = "Bronze"
else if (heroi[1] >= 2001 && heroi[1] <= 5000)
    nivel = "Prata"
else if (heroi[1] >= 5001 && heroi[1] <= 7000)
    nivel = "Ouro"
else if (heroi[1] >= 7001 && heroi[1] <= 8000)
    nivel = "Platina"
else if (heroi[1] >= 8001 && heroi[1] <= 9000)
    nivel = "Ascendente"
else if (heroi[1] >= 9001 && heroi[1] <= 10000)
    nivel = "Imortal"
else
    nivel = "Radiante"

console.log(`O Herói ${heroi[0]} está no nível ${nivel}!`);