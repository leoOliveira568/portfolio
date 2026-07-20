export type StackDomain = {
  code: string;
  label: string;
  accent: "cyan" | "emerald" | "violet";
  summary: string;
  core: string[];
  supporting: string[];
};

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  status: string;
  learning: string;
  metrics: Array<{ value: string; label: string; note: string }>;
  stack: string[];
  image: string;
  flow: string[];
  link?: string;
  repoLink?: string;
};

export type Experience = {
  code: string;
  role: string;
  company: string;
  period: string;
  type: string;
  status: "atual" | "concluído";
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Education = {
  code: string;
  course: string;
  institution: string;
  period: string;
  status: "concluído" | "transferência" | "em andamento";
  detail: string;
  accent: "cyan" | "emerald" | "violet";
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  status: "completed" | "in-progress";
  tags: string[];
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
};

export const certificates: Certificate[] = [
  {
    id: "ibm-data-science",
    title: "IBM Data Science",
    issuer: "Coursera · IBM",
    issuedAt: "Dez 2024",
    status: "completed",
    tags: ["Python", "Machine Learning", "SQL", "Data Visualization", "Data Analysis"],
    credentialId: "IX0ORVQVQQSI",
    credentialUrl: "https://coursera.org/verify/professional-cert/IX0ORVQVQQSI",
    image: "/certificates/ibm-data-science.jfif",
  },
  {
    id: "banco-dados-sql",
    title: "O curso completo de Banco de Dados e SQL, sem mistérios!",
    issuer: "Udemy · Felipe Mafra",
    issuedAt: "Jul 2026",
    status: "completed",
    tags: ["SQL", "Banco de Dados", "Modelagem"],
    credentialId: "UC-0f59fdfe-be13-4ff5-95b9-48ce2caf8229",
    credentialUrl: "https://ude.my/UC-0f59fdfe-be13-4ff5-95b9-48ce2caf8229",
    image: "/certificates/banco-de-dados-sql.jpg",
  },
  {
    id: "python3-avancado",
    title: "Curso de Python 3 do básico ao avançado - com projetos reais",
    issuer: "Udemy · Luiz Otávio Miranda",
    issuedAt: "Jul 2026",
    status: "completed",
    tags: ["Python", "Automação", "Projetos"],
    credentialId: "UC-19dec185-6247-4997-8793-33f93832c7c7",
    credentialUrl: "https://ude.my/UC-19dec185-6247-4997-8793-33f93832c7c7",
    image: "/certificates/python3-avancado.jpg",
  },
];

export const experiences: Experience[] = [
  {
    code: "EXP_01",
    role: "Desenvolvedor & Analista de Dados",
    company: "Quadcode",
    period: "2025 — 2026",
    type: "Tempo integral",
    status: "concluído",
    summary:
      "Atuação entre desenvolvimento de software e análise de dados, apoiando decisões de negócio com dados e mantendo soluções em produção.",
    highlights: [
      "Desenvolvimento e manutenção de soluções de software e rotinas de dados.",
      "Análise de dados para apoiar decisões de negócio e gerar insights acionáveis.",
      "Construção de relatórios, dashboards e automações para as áreas de negócio.",
    ],
    stack: ["Python", "SQL", "Data Analytics", "Dashboards"],
  },
];

// Trajetória acadêmica — sempre dentro da computação, convergindo para desenvolvimento e dados.
export const education: Education[] = [
  {
    code: "EDU_01",
    course: "Ciência da Computação",
    institution: "IF Goiano",
    period: "Jan 2023 — Jun 2024",
    status: "concluído",
    detail:
      "Base sólida em algoritmos, matemática e fundamentos de computação em instituto federal.",
    accent: "cyan",
  },
  {
    code: "EDU_02",
    course: "Tecnologia em Sistemas para Internet",
    institution: "IF Goiano",
    period: "Jun 2024 — Jun 2025",
    status: "transferência",
    detail:
      "Aproximação da prática: desenvolvimento web e construção de sistemas para a internet.",
    accent: "violet",
  },
  {
    code: "EDU_03",
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Estácio",
    period: "Jun 2025 — previsão Jun 2027",
    status: "em andamento",
    detail:
      "Formação atual, com foco em desenvolvimento de software e análise de dados.",
    accent: "emerald",
  },
];

// Stack organizada pelo papel de cada ferramenta no fluxo: da coleta ao produto.
export const stackDomains: StackDomain[] = [
  {
    code: "01 · DATA",
    label: "Dados & Análise",
    accent: "cyan",
    summary:
      "A base de tudo: extrair, limpar e explorar dados até encontrar a pergunta certa.",
    core: ["Python", "SQL", "Pandas"],
    supporting: ["NumPy", "Jupyter"],
  },
  {
    code: "02 · MODEL",
    label: "Machine Learning",
    accent: "violet",
    summary:
      "Modelos preditivos ponta a ponta — do baseline à avaliação e ao monitoramento.",
    core: ["scikit-learn", "Feature Engineering"],
    supporting: ["Model Evaluation", "Data Drift"],
  },
  {
    code: "03 · VIZ",
    label: "Visualização & BI",
    accent: "emerald",
    summary:
      "Transformar resultado em dashboard e narrativa que orientam a decisão.",
    core: ["Streamlit", "Data Viz"],
    supporting: ["Dashboards", "Storytelling"],
  },
  {
    code: "04 · PRODUCT",
    label: "Desenvolvimento Web",
    accent: "cyan",
    summary:
      "Interfaces e produtos de dados que chegam ao usuário final, prontos para uso.",
    core: ["React", "Next.js", "TypeScript"],
    supporting: ["Node.js", "Git"],
  },
];

export const projects: Project[] = [
  {
    id: "churnguard",
    index: "PROJ_01",
    category: "DATA SCIENCE",
    title: "ChurnGuard",
    description:
      "Modelo preditivo ponta a ponta para prever o cancelamento de clientes em telecomunicações. Monitora 5.174 clientes ativos, identifica 1.161 em alto risco (22,4% da base) com 74,9% de recall no holdout, acompanhado de um dashboard gerencial interativo.",
    status: "concluído",
    learning:
      "A importância de ir além do modelo: traduzir as previsões em segmentação de risco acionável e construir um dashboard que as áreas de negócio possam usar diretamente.",
    metrics: [
      { value: "74,9%", label: "recall no holdout", note: "churners capturados" },
      { value: "1.161", label: "clientes em alto risco", note: "22,4% da base ativa" },
      { value: "R$ 87 mil", label: "exposição mensal", note: "grupo de alto risco" },
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Next.js"],
    image: "/projects/churn.png",
    flow: ["exploração", "modelagem", "avaliação", "segmentação", "dashboard"],
    link: "https://churnguard-prediction.netlify.app/",
    repoLink: "https://github.com/leoOliveira568/PredictionChurnGuard/tree/main/churnguard-customer-churn",
  },
  {
    id: "commercepulse",
    index: "PROJ_02",
    category: "DATA ANALYTICS",
    title: "CommercePulse",
    description:
      "Dashboard interativo de análise 360º de e-commerce brasileiro utilizando dados da Olist. Focado em evolução do GMV, satisfação do cliente e logística.",
    status: "concluído",
    learning:
      "Desenvolvimento de uma visão analítica consolidada a partir de dados brutos e construção de aplicações de dados escaláveis.",
    metrics: [
      { value: "R$ 15,8 mi", label: "GMV analisado", note: "produtos + frete" },
      { value: "98,7 mil", label: "pedidos processados", note: "base Olist" },
    ],
    stack: ["Python", "Streamlit", "Pandas", "Data Viz"],
    image: "/projects/commerce.png",
    flow: ["entendimento", "EDA", "segmentação", "dashboard"],
    link: "https://commercepulse.streamlit.app/",
    repoLink: "https://github.com/leoOliveira568/CommercePulse",
  },
  {
    id: "pokeevo",
    index: "PROJ_03",
    category: "PRODUÇÃO",
    title: "PokéEVO",
    description:
      "A maior comunidade brasileira de batalhas Pokémon, com mais de 1.000 usuários. Plataforma dedicada a organizar torneios, rankings e fóruns interativos para jogadores ativos.",
    status: "em produção",
    learning:
      "Aprendizados reais ao criar e manter uma plataforma estável e gerenciar uma grande comunidade online de forma contínua.",
    metrics: [
      { value: "1.000+", label: "usuários ativos", note: "comunidade" },
      { value: "Live", label: "torneios e rankings", note: "operação contínua" },
    ],
    stack: ["Plataforma Web", "Gestão de Comunidade", "Eventos"],
    image: "/projects/pokeevo.png",
    flow: ["concepção", "desenvolvimento", "deploy", "operação"],
    link: "https://www.pokeevo.net/",
  },
  {
    id: "trackflow",
    index: "PROJ_04",
    category: "PRODUÇÃO",
    title: "TrackFlow",
    description:
      "Plataforma de monitoramento médico com mais de 100 usuários, desenvolvida para auxiliar profissionais de saúde a avaliarem pacientes e otimizarem o acompanhamento clínico.",
    status: "em produção",
    learning:
      "Como projetar e sustentar sistemas críticos focados em usabilidade para o dia a dia operacional de profissionais de saúde.",
    metrics: [
      { value: "100+", label: "usuários ativos", note: "profissionais de saúde" },
      { value: "Live", label: "monitoramento clínico", note: "em produção" },
    ],
    stack: ["React", "TypeScript", "Vite", "UI/UX"],
    image: "/projects/trackflow.png",
    flow: ["requisitos", "arquitetura", "construção", "entrega"],
    link: "https://trackflow.net.br/",
  },
  {
    id: "demandwise",
    index: "PROJ_05",
    category: "DATA ANALYTICS",
    title: "Demand Wise Retail",
    description: "Sistema de previsão de demanda para o varejo: 500 séries loja×produto previstas em horizonte de 90 dias, traduzidas em prioridades de estoque e reposição.",
    status: "concluído",
    learning: "Desenvolvimento de dashboards interativos e integração de modelos analíticos validados como produção para o setor varejista.",
    metrics: [
      { value: "23,2%", label: "ganho sobre baseline", note: "redução no MAE" },
      { value: "913 mil", label: "vendas modeladas", note: "5 anos de histórico" },
    ],
    stack: ["Data Analytics", "Machine Learning", "Dashboard"],
    image: "/projects/wind.png",
    flow: ["entendimento", "modelagem", "dashboard", "deploy"],
    link: "https://demandwiseretail.netlify.app/",
    repoLink: "https://github.com/leoOliveira568/DemandWise",
  },
];

// Adicione aqui apenas credenciais reais antes de publicá-las.
export const learningSteps = [
  { index: "01", label: "Explorar", detail: "perguntas · contexto · dados" },
  { index: "02", label: "Estudar", detail: "docs · cursos · referências" },
  { index: "03", label: "Construir", detail: "código · testes · protótipo" },
  { index: "04", label: "Documentar", detail: "decisões · erros · aprendizados" },
  { index: "05", label: "Evoluir", detail: "feedback · refatoração · próximo passo" },
];
