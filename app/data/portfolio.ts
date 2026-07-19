export type Skill = {
  label: string;
  short: string;
  value: number;
  color: "cyan" | "emerald" | "violet";
  context: string;
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

export const skills: Skill[] = [
  {
    label: "Python",
    short: "PY",
    value: 92,
    color: "cyan",
    context: "ETL, automações, APIs e análise",
  },
  {
    label: "SQL",
    short: "SQL",
    value: 90,
    color: "emerald",
    context: "Modelagem, transformação e performance",
  },
  {
    label: "Data Pipelines",
    short: "PIPE",
    value: 88,
    color: "violet",
    context: "Ingestão, orquestração e qualidade",
  },
  {
    label: "Analytics & BI",
    short: "BI",
    value: 86,
    color: "cyan",
    context: "Dashboards e narrativa analítica",
  },
  {
    label: "React",
    short: "RE",
    value: 84,
    color: "emerald",
    context: "Interfaces orientadas a dados",
  },
  {
    label: "Node.js",
    short: "NODE",
    value: 78,
    color: "violet",
    context: "Back-end, integrações e automações",
  },
];

export const projects: Project[] = [
  {
    id: "churnguard",
    index: "PROJ_01",
    category: "DATA SCIENCE",
    title: "ChurnGuard",
    description:
      "Modelo preditivo ponta a ponta para prever o cancelamento de clientes em telecomunicações, acompanhado de um dashboard gerencial interativo.",
    status: "concluído",
    learning:
      "A importância de ir além do modelo: traduzir as previsões em segmentação de risco acionável e construir um dashboard que as áreas de negócio possam usar diretamente.",
    metrics: [
      { value: "Model", label: "previsão de churn", note: "scikit-learn" },
      { value: "UI", label: "dashboard de operação", note: "next.js" },
      { value: "Ops", label: "monitoramento", note: "análise de drift (PSI)" },
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
      { value: "GMV", label: "análise financeira", note: "vendas" },
      { value: "Logística", label: "tempo de entrega", note: "atrasos" },
      { value: "RFM", label: "segmentação", note: "clientes" },
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
      "A maior comunidade de batalhas Pokémon do Brasil. Plataforma dedicada a organizar torneios, rankings e fóruns interativos para centenas de jogadores ativos.",
    status: "em produção",
    learning:
      "Aprendizados reais ao criar e manter uma plataforma estável e gerenciar uma grande comunidade online de forma contínua.",
    metrics: [
      { value: "Live", label: "usuários ativos", note: "comunidade" },
      { value: "Ops", label: "torneios e eventos", note: "operação contínua" },
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
      "Plataforma médica desenvolvida para auxiliar profissionais de saúde a avaliarem pacientes, otimizando o fluxo e o acompanhamento clínico.",
    status: "em produção",
    learning:
      "Como projetar e sustentar sistemas críticos focados em usabilidade para o dia a dia operacional de profissionais de saúde.",
    metrics: [
      { value: "Clínica", label: "acompanhamento", note: "pacientes" },
      { value: "Impacto", label: "otimização", note: "tempo médico" },
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
    description: "Plataforma focada em análise e previsão de demanda para o varejo, otimizando estoques e resultados.",
    status: "concluído",
    learning: "Desenvolvimento de dashboards interativos e integração de modelos analíticos para o setor varejista.",
    metrics: [
      { value: "Previsão", label: "acurácia de vendas", note: "modelagem" },
      { value: "Varejo", label: "otimização", note: "estoque" },
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
