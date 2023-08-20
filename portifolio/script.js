let musicas = [ 
    {titulo:"I'll Play The Blues Foru", artista:'Daniel castro', src:'musicas/blues.mp3', img:'imagens/guitar.jpg'},
    {titulo:'Never Let Me Down Again', artista:'Jessica Mazin', src:'musicas/mazin.mp3', img:'imagens/piano.jpg'},
    {titulo:'Linda', artista:'Roberio e Seus Teclados ', src:'musicas/rober.mp3', img:'imagens/pine.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math. floor(( musica.currentTime / musica.duration) * 100) + '%' ;
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = SegundosParaMinutos (Math.floor (musica.currentTime));
}

//funcao que transmforma segundos em minutos 
//dividindo o segundos por 60 e arredondando pra baixo ex: 120 / 60 = 2 minutos usando o math.floor ficara 2 muinutos.
//math.floor arredondo o numero para baixo - Math.ceil arredonda o numero para cima.


function SegundosParaMinutos (segundos){
        let CampoMinutos = Math.floor (segundos /60);
        let CampoSegundos = segundos % 60;
        if (CampoSegundos < 10){
            CampoSegundos = '0' + CampoSegundos
     }

     return CampoMinutos+ ':'+CampoSegundos;

}
 }