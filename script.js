let quoteC = [
    "O amor é uma espécie de preconceito. A gente ama o que precisa, ama o que faz sentir bem, ama o que é conveniente. Como pode dizer que ama uma pessoa quando há dez mil outras no mundo que você amaria mais se conhecesse? Mas a gente nunca conhece.",
    "É este o problema com a bebida, pensei, enquanto me servia dum copo. Se acontece algo de mau, bebe-se para esquecer; se acontece algo de bom,bebe-se para celebrar, e se nada acontece, bebe-se para que aconteça qualquer coisa.",
    "Cheguei numa fase da minha vida que vejo que a única coisa que fiz até agora foi fugir, fugir de mim mesmo, do meu nada, e agora não tenho mais para onde ir, nem sei o que vou fazer, fui péssimo em tudo.",
    "Existem coisas piores que estar sozinho mas geralmente leva décadas para entender isso e quase sempre quando você entende é tarde demais. E não há nada pior que tarde demais.",
    "Eu estava longe de ser uma pessoa interessante. Não queria ser uma pessoa interessante, dava muito trabalho. Eu queria mesmo um espaço sossegado, e obscuro pra viver a minha solidão; por outro lado, de porre, eu abria o berreiro, pirava, queria tudo, e não conseguia nada.",
    "O que eu odeio é que algum dia tudo se reduzirá a nada, os amores, os poemas. Acabaremos recheados de terra como um taco barato. Que coisa mais triste, tudo é tão triste - a gente passa a vida inteira feito bobo pra depois morrer que nem besta.",
    "Acho que a gente devia encher a cara hoje, depois a gente fala mal dos inúteis que se acham super importantes.",
    "O mundo inteiro é um saco de merdas se rasgando. Não posso salvá-lo. Sei que nos movemos em direção à miragem, nossas vidas são desperdiçadas, como as de todo mundo. Eu sei que nove décimos de mim já morreram, mas eu guardo o décimo restante como uma arma.",
    "A diferença entre a Arte e a Vida é que a Arte é mais suportável.",
    "Sempre haverá alguma coisa para arruinar nossas vidas. Tudo depende do quê, ou de quem nos encontra antes... Nós estamos sempre maduros e prontos para sermos levados.",
    "Às vezes, me sinto como se estivéssemos todos presos num filme. Sabemos nossas falas, onde caminhar, como atuar, só que não há uma câmera. No entanto, não conseguimos sair do filme. E é um filme ruim.",
    "A maior parte do mundo estava doida. E a parte que não era doida era furiosa. E a parte que não era doida nem furiosa era apenas idiota.",
    "Meu quarto. A melhor coisa que havia ali era a cama. Gostava de ficar ali deitado por horas, mesmo durante o dia, com as cobertas puxadas até o queixo. Era bom ficar ali, nada acontecia por ali, nenhuma pessoa, nada.",
    "Observava as pessoas à distância, como numa peça de teatro. Apenas eles estavam no palco e eu era plateia de um homem só.",
    "Os verdadeiros valentes vencem a sua imaginação e fazem o que devem fazer."

];

function nextQuote(){
    let quote = quoteC [
        Math.floor(Math.random() * 
        quoteC.length)
    ]

    document.querySelector("#proxima").textContent=quote;
}