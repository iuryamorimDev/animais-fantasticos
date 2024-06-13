//EXERCICIOS EXERCICIOS
//Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que comecaram com a palavra imagem
const imagemAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAnimais);

// Selecione todos os links internos (onde o href comeca com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// ^="" quer dizer que comece com
// isso acima super importante
//......

//Selecione o primeiro h2 dentro de .animas-descricao
const h2animais = document.querySelector(".animais-description h2");
console.log(h2animais);

// Selecione o ultimo p do site

const ultimoPara = document.querySelector(".copy p");
console.log(ultimoPara);
//ou use console.log(ultimoPara.length)
// para saber quantos p's tem no site
// e entao console.log(ultimoPara[ultimoPara.length - 1])
// ou console.log(ultimoPara[--ultimoPara.length])
//o sinal de -- quer dizer que esta pegando o ultimo
