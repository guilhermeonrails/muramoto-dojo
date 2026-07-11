// Conteúdo institucional — placeholders realistas de alta qualidade.
// Substituir pelos dados oficiais do Muramoto Dojo quando disponíveis.

const IMG = 'https://images.unsplash.com/photo-'
// Fábrica de URL responsiva do Unsplash (todas verificadas 200/JPEG)
export const img = (id, w = 1200, extra = '') =>
  `${IMG}${id}?auto=format&fit=crop&w=${w}&q=80${extra}`

export const images = {
  heroBelt: '1656653121475-e33829581294', // P&B, mãos amarrando faixa preta, fumaça
  meditation: '1529566193698-bc394165d541', // fileira em mokuso (meditação)
  dojoInterior: '1598300606161-4019d0dfec28', // interior de dojo em movimento
  glowBelt: '1525198104776-f6e8a873f9b7', // faixa dramática, luz quente
  senseiStance: '1545058197-64626c80b9b6', // homem em kata, natureza
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
  discipline: 'Karate Shidokan',
  phoneDisplay: '(11) 98888-0000',
  phoneHref: 'tel:+5511988880000',
  whatsappNumber: '5511988880000',
  email: 'contato@muramotodojo.com.br',
  addressLine1: 'Rua da Consolação, 1420',
  addressLine2: 'Consolação · São Paulo — SP',
  cep: '01302-000',
  hoursWeek: 'Seg a Sex · 07h às 21h30',
  hoursSat: 'Sábado · 08h às 12h',
  instagram: 'https://instagram.com/muramotodojo',
  facebook: 'https://facebook.com/muramotodojo',
  youtube: 'https://youtube.com/@muramotodojo',
}

export const whatsapp = (
  message = 'Olá! Gostaria de agendar uma aula experimental de Karate no Muramoto Dojo.',
) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const nav = [
  { id: 'sobre', label: 'O Dojo' },
  { id: 'historia', label: 'Shidokan' },
  { id: 'sensei', label: 'Sensei' },
  { id: 'modalidades', label: 'Modalidades' },
  { id: 'horarios', label: 'Horários' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'contato', label: 'Contato' },
]

export const historia = [
  {
    year: '1932',
    title: 'A origem da linhagem',
    text: 'A tradição que dá forma ao Shidokan nasce em Okinawa, berço do Karate, onde o combate e a filosofia se fundem numa única prática de aperfeiçoamento humano.',
  },
  {
    year: '1969',
    title: 'A fundação do estilo',
    text: 'O Shidokan se consolida como escola própria, unindo o kata tradicional, o kumite de contato e o treino de resistência — o corpo, a técnica e o espírito treinados como um só.',
  },
  {
    year: '1991',
    title: 'O Karate chega ao Muramoto',
    text: 'O Sensei fundador inicia sua jornada no Shidokan e carrega a disciplina okinawana para o Brasil, formando as primeiras gerações de praticantes.',
  },
  {
    year: '2008',
    title: 'A abertura do Dojo',
    text: 'Nasce o Muramoto Dojo: um espaço dedicado a ensinar o Karate como caminho, com o rigor da tradição e o acolhimento de quem começa do zero.',
  },
  {
    year: 'Hoje',
    title: 'Uma casa de formação',
    text: 'Centenas de alunos já cruzaram nossa porta. Crianças que viraram faixas-pretas, adultos que reencontraram o equilíbrio, atletas que subiram ao pódio. O caminho continua.',
  },
]

export const modalidades = [
  {
    id: 'infantil',
    kanji: '子',
    title: 'Infantil',
    age: '5 a 9 anos',
    image: images.child,
    alt: 'Criança de faixa verde em posição de guarda, sob orientação do instrutor',
    desc: 'O primeiro contato com a arte. Coordenação, foco e respeito através de jogos e do kata, no ritmo da criança.',
    benefits: ['Concentração e autocontrole', 'Coordenação motora', 'Respeito e convívio'],
  },
  {
    id: 'juvenil',
    kanji: '青',
    title: 'Juvenil',
    age: '10 a 15 anos',
    image: images.groupBeach,
    alt: 'Grupo de jovens praticando kata em formação ao amanhecer',
    desc: 'A fase de firmar a base. Técnica apurada, disciplina e confiança para atravessar a adolescência com o corpo e a mente firmes.',
    benefits: ['Disciplina e responsabilidade', 'Condicionamento físico', 'Autoconfiança'],
  },
  {
    id: 'adulto',
    kanji: '道',
    title: 'Adulto',
    age: '16 anos ou mais',
    image: images.studioKick,
    alt: 'Praticante adulto executando chute lateral com técnica precisa',
    desc: 'Para quem busca condicionamento, alívio do estresse e uma prática que dura a vida inteira. Do iniciante ao faixa-preta.',
    benefits: ['Condicionamento completo', 'Controle emocional', 'Prática para a vida'],
  },
  {
    id: 'competicao',
    kanji: '闘',
    title: 'Competição',
    age: 'Por avaliação',
    image: images.spar,
    alt: 'Dois atletas em kumite, um executando chute em salto',
    desc: 'Preparação de alto rendimento em kata e kumite para atletas que representam o dojo em campeonatos regionais e nacionais.',
    benefits: ['Treino de alta performance', 'Estratégia de kumite', 'Preparação para campeonatos'],
  },
  {
    id: 'defesa',
    kanji: '護',
    title: 'Defesa Pessoal',
    age: 'Adultos',
    image: images.grappling,
    alt: 'Treino de defesa pessoal com técnica de imobilização no solo',
    desc: 'Fundamentos aplicados a situações reais: consciência, reação e controle. Segurança que nasce da técnica, não da força bruta.',
    benefits: ['Reação sob pressão', 'Consciência situacional', 'Confiança no dia a dia'],
  },
]

export const instrutores = [
  {
    name: 'Sensei Hiroshi Muramoto',
    rank: '7º Dan · Renshi',
    role: 'Diretor técnico',
    image: images.senseiStance,
    alt: 'Sensei Hiroshi Muramoto em posição de kata',
    specialty: 'Kata tradicional e formação de professores',
  },
  {
    name: 'Sensei Marina Tanaka',
    rank: '4º Dan',
    role: 'Instrutora-chefe',
    image: images.beachWoman,
    alt: 'Instrutora Marina Tanaka executando kata',
    specialty: 'Turmas infantil e juvenil',
  },
  {
    name: 'Sempai Rafael Oda',
    rank: '2º Dan',
    role: 'Preparador de competição',
    image: images.studioKick,
    alt: 'Sempai Rafael Oda em técnica de chute',
    specialty: 'Kumite e alto rendimento',
  },
]

export const beneficios = [
  { kanji: '律', title: 'Disciplina', text: 'A constância do treino molda a rotina e a mente.' },
  { kanji: '礼', title: 'Respeito', text: 'Tudo começa e termina com uma reverência — ao mestre, ao colega, a si.' },
  { kanji: '信', title: 'Autoconfiança', text: 'Cada faixa conquistada é a prova de que o esforço tem retorno.' },
  { kanji: '力', title: 'Condicionamento', text: 'Força, resistência e mobilidade treinadas de forma integral.' },
  { kanji: '和', title: 'Coordenação', text: 'Corpo e mente aprendem a agir em harmonia.' },
  { kanji: '静', title: 'Controle emocional', text: 'A calma diante da pressão se treina como qualquer técnica.' },
  { kanji: '念', title: 'Concentração', text: 'O foco no presente que atravessa o tatame e chega ao dia a dia.' },
  { kanji: '道', title: 'Um caminho', text: 'Mais que um esporte: uma prática de aperfeiçoamento para a vida.' },
]

export const horarios = [
  { turma: 'Infantil', dias: 'Ter · Qui', horario: '17h00 — 18h00', publico: '5 a 9 anos' },
  { turma: 'Juvenil', dias: 'Seg · Qua · Sex', horario: '18h00 — 19h15', publico: '10 a 15 anos' },
  { turma: 'Adulto — Iniciante', dias: 'Seg · Qua · Sex', horario: '19h30 — 20h45', publico: '16+' },
  { turma: 'Adulto — Avançado', dias: 'Ter · Qui', horario: '19h30 — 21h00', publico: 'Faixas coloridas+' },
  { turma: 'Competição', dias: 'Sábado', horario: '08h00 — 10h30', publico: 'Por avaliação' },
  { turma: 'Defesa Pessoal', dias: 'Sábado', horario: '10h30 — 12h00', publico: 'Adultos' },
]

export const galeria = [
  { id: images.meditation, alt: 'Alunos em mokuso, a meditação que abre o treino', span: 'wide' },
  { id: images.beltDetail, alt: 'Detalhe de uma faixa branca, enrolada com cuidado', span: 'tall' },
  { id: images.senseiStance, alt: 'Execução de kata em meio à natureza' },
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
      'Procurava algo além da academia comum. Aqui encontrei disciplina, uma comunidade séria e um sensei que ensina o Karate como filosofia, não só como luta.',
    name: 'Daniel Moreira',
    role: 'Aluno adulto, 2 anos de dojo',
  },
  {
    quote:
      'Cheguei sem nunca ter treinado nada. Fui acolhida do primeiro dia. Hoje compito e nunca me senti tão forte — de corpo e de cabeça.',
    name: 'Juliana Ferraz',
    role: 'Faixa roxa · equipe de competição',
  },
]

export const faq = [
  {
    q: 'Existe idade mínima para começar?',
    a: 'A partir dos 5 anos, na turma infantil. Não há idade máxima: temos alunos iniciando o Karate na terceira idade. Cada turma respeita o ritmo e o corpo de sua faixa etária.',
  },
  {
    q: 'Preciso comprar o kimono para começar?',
    a: 'Não. Na aula experimental e nas primeiras semanas, roupas confortáveis bastam. Quando você decidir seguir, orientamos sobre o kimono (gi) ideal — sem pressa e sem obrigação.',
  },
  {
    q: 'Posso fazer uma aula experimental?',
    a: 'Sim, e é gratuita. É a melhor forma de sentir o ambiente do dojo. Basta agendar pelo WhatsApp e escolher o melhor horário para você ou seu filho.',
  },
  {
    q: 'Quanto custa a mensalidade?',
    a: 'Temos planos por modalidade e frequência, com condições para famílias e para quem treina mais de uma turma. Os valores são apresentados na aula experimental, de acordo com o seu objetivo.',
  },
  {
    q: 'Nunca pratiquei nenhuma arte marcial. É para mim?',
    a: 'Especialmente para você. A maior parte dos nossos alunos começou do zero. O Karate é um caminho pessoal — você evolui a partir de onde está, no seu tempo.',
  },
  {
    q: 'Karate é uma prática violenta?',
    a: 'Ao contrário. O Shidokan ensina o controle antes do golpe. O respeito e a serenidade são o coração da prática; a técnica de combate vem acompanhada da responsabilidade de nunca precisar usá-la.',
  },
]
