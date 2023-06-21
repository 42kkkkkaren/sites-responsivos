function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Herbert P. Bear",
      imagem: "https://clubpenguinmountains.com/wp-content/uploads/2021/10/herbert-maze-bg.png",
      descricao:
        "Herbert Percival Bear é o vilão principal do Club Penguin e o inimigo número um da Elite Penguin Force. É o personagem que já causou vários problemas à ilha, atacando pela primeira vez na Missão 3 da Agência Secreta dos Pinguins. Quando chegou ao Club Penguin, notou que era ainda mais frio do que o lugar onde ele estava e, desde aquele dia, Herbert tenta usar seus planos para esquentar a ilha, causando até seu quase derretimento.",
      citacao:
        "Enjoy it before I destroy it!",
    },
    bio02: {
      nome: "Rookie",
      imagem: "https://clubpenguinmountains.com/wp-content/uploads/2018/09/rookiesgiveawaybackground.png",
      descricao:
        "Rookie é um dos mascotes do Club Penguin. Ele é o agente de relações públicas da EPF e ex-agente da extinta ASP. Ele é um pinguim verde que usa o Boné com Hélice, os Óculos do Rookie e a Camisa Havaiana Vermelha. Rookie, assim como diz o nome, é um agente novato que, na maioria das vezes, atrapalha os planos da Agência Secreta dos Pinguins (ASP) e da Elite Penguin Force (EPF).",
      citacao:
        "Before I go, I'm giving you an advice, if a jug says HUGS, do not get it, it may be BUGS.",
    },

    bio03: {
      nome: "Cadence",
      imagem: "https://clubpenguinmountains.com/wp-content/uploads/2018/01/latest-26.png",
      descricao:
        "Cadence , conhecida temporariamente como Princesa Cadence , é um DJ, uma cantora, dançarina e artista musical popular  no Club Penguin. Ela apareceu pela primeira vez no Club Penguin News, quando houve um tour sobre o Dance Club. Sua frase favorita é É hora de dançar, Ela gosta de chamar a si mesma de Máquina de Dança",
      citacao:
        "Im' dancing to your GROOVES! Great job Penguins! You can REALLY break it down! Lets RAISE the ROOF!",
    },

    bio04: {
      nome: "Gary, o Pinguim Inventor",
      imagem: "https://clubpenguinmountains.com/wp-content/uploads/2018/05/adfsdfsfdsdfsf.png",
      descricao:
        " Gary, o Pinguim Inventor , também conhecido como Gary ou G, é o inventor local do Club Penguin e o ex-dono da Loja de Esportes. Ele sempre aparece com um jaleco branco e seus óculos. Ele é conhecido por gostar de comer Pizza com queijo e peixe extra, e quase sempre é visto bebendo Café no QG. Ele já foi um pouco tímido e potencialmente claustrofóbico.",
      citacao:
        "Great work, my inventive friend",
    },

    bio05: {
      nome: "Sensei",
      imagem: "https://clubpenguinmountains.com/wp-content/uploads/2018/01/latest-11.png",
      descricao:
        "Sensei é um antigo pinguim, e um mestre de todos os elementos. Ele tem uma barba, sobrancelhas brancas grossas, um chapéu de palha tradicional japonês e uma bengala, e na sua atual aparência, ele utiliza um Kimono preto, com chinelos orientais. Sensei refere-se a novos ninjas ou estudantes como gafanhotos. Sensei é japonês tornando-o um dos quatro personagens estrangeiros no Club Penguin. Os outros são Herbert (nativo do Pólo Norte) TP (da Austrália) e Tia Arctic (do Reino Unido). Ele é um mestre do Desafio-Ninja, e é também um professor do mesmo.",
      citacao:
        "One single snowflake is quiet, but many of them... ...a powerful force.",
    },
    bio06: {
      nome: "Rockhopper",
      imagem: "https://pbs.twimg.com/media/Eqh13D1VQAAqEUH.jpg",
      descricao:
        "Rockhopper (também conhecido como Capitão Rockhopper) é um pirata amigável e um marinheiro que navega regularmente para Ilha Club Penguin com seu barco, conhecido como o Migrator. Ele é um dos mascotes. Ele está sempre acompanhado de seu Puffle Vermelho, o Yarr.",
      citacao:
        "⁠Você nunca deve ter medo do que está fazendo quando está certo.",
    },
  };

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "<blockquote><q>" +
      biografias[bio].citacao +
      "</q></blockquote>" +
      "</details></div>";
  }
}
carregaDicionario();
