// Conteúdo institucional do Muramoto Dojo.
// Telefone, e-mail e redes sociais ainda são placeholders.

import senseiPhoto from '../assets/sensei.jpg'
import sensei2Photo from '../assets/sensei-2.jpg'

const IMG = 'https://images.unsplash.com/photo-'
// Fábrica de URL responsiva do Unsplash (todas verificadas 200/JPEG)
export const img = (id, w = 1200, extra = '') =>
  `${IMG}${id}?auto=format&fit=crop&w=${w}&q=80${extra}`

export const images = {
  heroBelt: '1656653121475-e33829581294', // P&B, mãos amarrando faixa preta, fumaça
  meditation: '1529566193698-bc394165d541', // fileira em mokuso (meditação)
  dojoInterior: '1598300606161-4019d0dfec28', // interior de dojo em movimento
  glowBelt: '1525198104776-f6e8a873f9b7', // faixa dramática, luz quente
  senseiStance: senseiPhoto, // foto local do sensei (retrato)
  sensei2: sensei2Photo, // foto local da Sensei Natália
  senseiKata: '1545058197-64626c80b9b6', // homem em kata, natureza (galeria)
  silhouetteDusk: '1476525223214-c31ff100e1ae', // silhueta chute, entardecer azul
  beltDetail: '1603210185246-b1662978ea37', // detalhe faixa branca enrolada
  studioKick: '1608583252022-09323426b8b6', // chute lateral em estúdio
  beachWoman: '1555597673-b21d5c935865', // kata na praia
  spar: '1529630218527-7df22fc2d4ee', // combate, chute voador
  groupBeach: '1555597408-26bc8e548a46', // turma treinando ao amanhecer
  child: '1583668023935-b79e1c1af0a2', // criança com faixa verde
  grappling: '1542937306-d1056fdd367a', // defesa pessoal / imobilização
  silhouettePunch: '1577998555981-6e798325914e', // silhueta soco, pôr do sol
}

export const contact = {
  brand: 'Muramoto Dojo',
  discipline: 'Karatê Shidokan',
  phoneDisplay: '(11) 98888-0000',
  phoneHref: 'tel:+5511988880000',
  whatsappNumber: '5511988880000',
  email: 'contato@muramotodojo.com.br',
  addressLine1: 'Bairro César de Souza',
  addressLine2: 'Mogi das Cruzes — SP',
  mapQuery: 'César de Souza, Mogi das Cruzes - SP',
  hours: 'Os horários disponíveis são informados no agendamento.',
  instagram: 'https://instagram.com/muramotodojo',
  facebook: 'https://facebook.com/muramotodojo',
  youtube: 'https://youtube.com/@muramotodojo',
}

export const whatsapp = (
  message = 'Olá! Gostaria de agendar uma aula experimental gratuita no Muramoto Dojo.',
) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const nav = [
  { id: 'sobre', label: 'O Dojo' },
  { id: 'historia', label: 'Shidokan' },
  { id: 'instrutores', label: 'Sensei' },
  { id: 'trajetoria', label: 'Conheça os mestres' },
  { id: 'modalidades', label: 'Para quem é' },
  { id: 'planos', label: 'Planos' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'contato', label: 'Contato' },
]

export const diferenciais = [
  {
    title: 'Trabalho em pequenos grupos',
    text: 'Aulas dinâmicas em que o instrutor acompanha de perto a evolução de cada aluno.',
  },
  {
    title: 'Aulas particulares',
    text: 'Treinos 100% personalizados para quem busca acelerar o aprendizado ou tem uma rotina flexível.',
  },
  {
    title: 'Treino duro, mas humanizado',
    text: 'Nosso tatame exige dedicação, suor e disciplina, mas o ambiente é acolhedor e seguro. Aqui, funcionamos como uma verdadeira família, em que os mais graduados apoiam e protegem os mais novos.',
  },
]

export const historia = [
  {
    year: '1947',
    title: 'O nascimento de um guerreiro',
    text: 'Descendente de uma antiga linhagem de samurais, Yoshiji Soeno nasce no Japão. Inicia sua jornada marcial pelo Judô e pelo Kendô, mas sua história muda drasticamente quando se torna um dos principais discípulos de Masutatsu Oyama, o lendário criador do Karatê Kyokushin.',
  },
  {
    year: '虎',
    title: 'O Tigre de Kyokushin',
    text: 'Pela agressividade, precisão e velocidade nos combates de contato total, Soeno ganha nos tatames japoneses o apelido de "O Tigre de Kyokushin" (The Tiger of Kyokushin). Consagra-se campeão nacional e uma das maiores referências de nocaute de sua época.',
  },
  {
    year: '1970',
    title: 'O desafio na Tailândia',
    text: 'Em busca da eficiência real do combate, Soeno viaja a Bangcoc na década de 1970 para testar suas habilidades contra campeões de Muay Thai em estádios lendários. A partir dessa imersão no Boxe Tailandês e de seus conhecimentos prévios de projeções do Judô, percebe a necessidade de criar um estilo de combate total.',
  },
  {
    year: '1981',
    title: 'A fundação do Shidokan',
    text: 'Em Tóquio, funda oficialmente a World Karate Association Shidokan. A palavra Shidokan carrega um significado profundo: "o lar do grupo que segue o caminho do guerreiro".',
  },
  {
    year: 'Brasil',
    title: 'Shihan Massakazu Moriyama, o introdutor',
    text: 'Com uma visão marcial de vanguarda e técnica impecável, o Shihan Massakazu Moriyama traz o dinamismo do Shidokan para o solo brasileiro. Estabelece as primeiras bases do estilo no país, forma a primeira geração de faixas-pretas e é peça-chave na fundação e na consolidação do Muramoto Dojo, em Mogi das Cruzes.',
  },
  {
    year: 'Hoje',
    title: 'Renshi Michio Misumi, a liderança atual',
    text: 'Após a saída de Moriyama, a responsabilidade de guiar o Shidokan no Brasil é assumida pelo Renshi Michio Misumi, atual representante oficial da modalidade no país. Nascido no Japão e radicado no Brasil, ele mantém vivo o intercâmbio com o Grão-Mestre Sosui Soeno, garantindo que nossos instrutores e alunos treinem exatamente a mesma metodologia praticada nos principais dojos do mundo.',
  },
]

export const modalidades = [
  {
    id: 'adultos',
    kanji: '護',
    title: 'Autodefesa e confiança',
    age: 'Para adultos',
    image: images.grappling,
    alt: 'Treino de defesa pessoal com técnica de imobilização no solo',
    desc: 'Se você busca aprender a se defender em situações reais do dia a dia, aliviar o estresse da rotina e blindar sua autoconfiança, nosso tatame é o seu lugar. Não importa sua idade ou seu condicionamento físico atual: o treino se adapta a você.',
    benefits: [
      'Defesa pessoal para situações reais',
      'Alívio do estresse da rotina',
      'Mais autoconfiança',
      'Treino adaptado à sua idade e ao seu condicionamento',
    ],
  },
  {
    id: 'criancas',
    kanji: '子',
    title: 'Disciplina e foco além das telas',
    age: 'Para crianças · a partir de 6 anos',
    image: images.child,
    alt: 'Criança de faixa verde em posição de guarda, sob orientação do instrutor',
    desc: 'No mundo digital, oferecemos o antídoto para o sedentarismo e a distração. Nosso treino infantil ajuda seu filho a sair da frente das telas, desenvolvendo disciplina interna, foco nos estudos, coordenação motora e respeito ao próximo.',
    benefits: ['Disciplina interna', 'Foco nos estudos', 'Coordenação motora', 'Respeito ao próximo'],
  },
]

export const instrutores = [
  {
    name: 'Shihan Ricardo Muramoto',
    rank: '4º Dan',
    role: 'Diretor técnico',
    image: images.senseiStance,
    alt: 'Shihan Ricardo Muramoto em posição de kata',
    specialty: 'Campeão Brasileiro 1997',
    href: '#sensei',
  },
  {
    name: 'Natália Salaroli',
    rank: 'Faixa Preta 3º Dan',
    role: 'Sensei',
    image: images.sensei2,
    alt: 'Sensei Natália Salaroli, instrutora do Muramoto Dojo',
    specialty: 'Campeã Brasileira (Absoluto) e Pentacampeã Paulista',
    href: '#sensei-natalia',
  },
]

export const missao =
  'Forjar o caráter e fortalecer o corpo e a mente de nossos alunos por meio do Karatê Shidokan e do Brazilian Jiu-Jitsu. Temos o compromisso de transmitir a essência marcial com excelência técnica, formando cidadãos mais autoconfiantes, disciplinados e prontos para os desafios da vida cotidiana e da segurança pessoal.'

export const visao =
  'Ser uma referência nacional no ensino de artes marciais e defesa pessoal, reconhecida pela qualidade técnica de nossa instrução, pela preservação dos valores tradicionais do Budo e pela transformação positiva na vida de nossa comunidade.'

export const valores = [
  { kanji: '礼', title: 'Honra e respeito', text: 'A base de toda interação dentro e fora do tatame.' },
  { kanji: '律', title: 'Disciplina operacional', text: 'Foco, constância e busca incessante pela evolução.' },
  { kanji: '忍', title: 'Resiliência', text: 'Capacidade de superar as dificuldades com coragem e serenidade.' },
  { kanji: '忠', title: 'Lealdade', text: 'Compromisso com os colegas de treino, com o mestre e com os próprios objetivos.' },
]

export const planos = [
  {
    id: 'grupos',
    title: 'Planos em pequenos grupos',
    intro: 'Ideal para quem busca a energia do tatame, a interação e uma alta evolução técnica com acompanhamento próximo.',
    items: [
      {
        name: 'Foco Semanal',
        freq: '1x por semana',
        desc: 'Perfeito para conciliar com rotinas corridas e viagens.',
        price: 'R$ 250',
      },
      {
        name: 'Evolução Contínua',
        freq: '2x por semana',
        desc: 'O ritmo ideal para ganhar condicionamento, disciplina e técnica rapidamente.',
        price: 'R$ 300',
      },
    ],
  },
  {
    id: 'particulares',
    title: 'Aulas particulares (VIP)',
    intro: 'Treino 100% individualizado e exclusivo com o instrutor. Foco total nos seus objetivos, correções cirúrgicas e máxima flexibilidade de horário.',
    items: [
      {
        name: 'Particular Essencial',
        freq: '1x por semana',
        desc: 'Atenção exclusiva para acelerar seu aprendizado e blindar sua autoconfiança.',
        price: 'R$ 400',
      },
      {
        name: 'Particular Black Belt',
        freq: '2x por semana',
        desc: 'A imersão definitiva nas artes marciais, com desenvolvimento técnico acelerado.',
        price: 'R$ 500',
      },
    ],
  },
]

export const galeria = [
  { id: images.meditation, alt: 'Alunos em mokuso, a meditação que abre o treino', span: 'wide' },
  { id: images.beltDetail, alt: 'Detalhe de uma faixa branca, enrolada com cuidado', span: 'tall' },
  { id: images.senseiKata, alt: 'Execução de kata em meio à natureza' },
  { id: images.dojoInterior, alt: 'O tatame durante um treino coletivo', span: 'tall' },
  { id: images.spar, alt: 'Kumite: o encontro entre técnica e coragem' },
  { id: images.beachWoman, alt: 'Kata ao amanhecer, à beira-mar' },
  { id: images.groupBeach, alt: 'Turma em treino de resistência ao ar livre', span: 'wide' },
  { id: images.silhouettePunch, alt: 'A silhueta de um soco firme contra o pôr do sol' },
]

export const depoimentos = [
  {
    quote:
      'Matriculei meu filho tímido de 7 anos. Um ano depois, é outra criança — mais concentrada, mais segura. O respeito que aprende no dojo, ele leva para casa.',
    name: 'Patrícia Alves',
    role: 'Mãe do Théo, faixa amarela',
  },
  {
    quote:
      'Procurava algo além da academia comum. Aqui encontrei disciplina, uma comunidade séria e um sensei que ensina o Karatê como filosofia, não só como luta.',
    name: 'Daniel Moreira',
    role: 'Aluno adulto, 2 anos de dojo',
  },
  {
    quote:
      'Cheguei sem nunca ter treinado nada. Fui acolhida desde o primeiro dia. Hoje compito e nunca me senti tão forte — de corpo e de cabeça.',
    name: 'Juliana Ferraz',
    role: 'Faixa roxa · equipe de competição',
  },
]

export const faq = [
  {
    q: 'Nunca treinei nenhuma arte marcial. Posso começar?',
    a: 'Com certeza! Nosso treino é duro, mas totalmente humanizado. Os pequenos grupos permitem que o instrutor adapte cada exercício ao seu ritmo e ao seu condicionamento físico atual. Você aprenderá a base passo a passo, com total segurança.',
  },
  {
    q: 'A partir de qual idade as crianças podem treinar no dojo?',
    a: 'Recebemos crianças a partir dos 6 anos. Nossas aulas infantis usam a metodologia marcial para trabalhar o foco e o respeito aos colegas e para tirar os pequenos da frente das telas, transformando energia em disciplina.',
  },
  {
    q: 'Como funciona o treino em pequenos grupos?',
    a: 'Diferentemente de academias lotadas, onde o aluno é apenas mais um, limitamos o número de praticantes por horário. Isso garante que você receba correções técnicas detalhadas e precisas, acelerando seu aprendizado em autodefesa, Karatê e Jiu-Jitsu.',
  },
  {
    q: 'Posso fazer o plano de 1x por semana e depois aumentar os dias?',
    a: 'Sim. O plano de 1x por semana é excelente para você criar o hábito do tatame e sentir os primeiros resultados na sua autoconfiança. Conforme sua rotina liberar mais espaço, você pode migrar facilmente para planos com mais dias.',
  },
  {
    q: 'Quais equipamentos e roupas preciso para a primeira aula?',
    a: 'Para a sua aula experimental, basta vir com uma roupa esportiva confortável (camiseta e calça de moletom ou bermuda sem zíper). Caso decida se matricular, orientaremos você sobre o uso do kimono ou do dogi oficial do estilo.',
  },
]
