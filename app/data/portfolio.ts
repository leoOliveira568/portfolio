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
  chart: number[];
  flow: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  credentialId?: string;
  credentialUrl?: string;
  tags: string[];
  status: "completed" | "in_progress";
};

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
    id: "orion",
    index: "PROJ_01",
    category: "DATA ENGINEERING",
    title: "Orion Pipeline",
    description:
      "Estudo de pipeline incremental para validar schemas, tratar eventos e preparar tabelas analíticas com observabilidade.",
    status: "protótipo autoral",
    learning:
      "Estruturar qualidade e rastreabilidade como parte do pipeline, não como uma etapa posterior.",
    metrics: [
      { value: "ETL", label: "pipeline incremental", note: "execução local" },
      { value: "Tests", label: "qualidade de dados", note: "schemas e regras" },
      { value: "Logs", label: "observabilidade", note: "fluxo instrumentado" },
    ],
    stack: ["Python", "SQL", "dbt", "Airflow"],
    chart: [18, 24, 22, 38, 34, 51, 48, 64, 71, 82],
    flow: ["sources", "schema check", "transform", "warehouse", "BI"],
  },
  {
    id: "northstar",
    index: "PROJ_02",
    category: "ANALYTICS",
    title: "Northstar Analytics",
    description:
      "Dashboard exploratório para estudar aquisição, retenção e receita sem perder a origem e o contexto de cada dado.",
    status: "estudo em evolução",
    learning:
      "Traduzir métricas em uma interface que permita explorar perguntas, e não apenas observar números.",
    metrics: [
      { value: "BI", label: "visão consolidada", note: "dataset de estudo" },
      { value: "API", label: "camada de dados", note: "integração local" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "BI"],
    chart: [30, 39, 33, 47, 44, 58, 62, 59, 73, 78],
    flow: ["events", "model", "API", "dashboard"],
  },
  {
    id: "signalwatch",
    index: "PROJ_03",
    category: "DATA OBSERVABILITY",
    title: "SignalWatch",
    description:
      "Protótipo de monitoramento de anomalias e SLAs para transformar falhas silenciosas em sinais com contexto.",
    status: "laboratório técnico",
    learning:
      "Projetar alertas que expliquem o problema e reduzam ruído, em vez de apenas registrar que algo falhou.",
    metrics: [
      { value: "Checks", label: "monitoramento", note: "rotinas automatizadas" },
      { value: "SLA", label: "sinais e alertas", note: "ambiente controlado" },
    ],
    stack: ["Python", "FastAPI", "Pandas", "Docker"],
    chart: [72, 68, 74, 70, 77, 76, 84, 82, 89, 92],
    flow: ["metrics", "detector", "severity", "alert"],
  },
];

// Adicione aqui apenas credenciais reais antes de publicá-las.
export const certificates: Certificate[] = [];

export const learningSteps = [
  { index: "01", label: "Explorar", detail: "perguntas · contexto · dados" },
  { index: "02", label: "Estudar", detail: "docs · cursos · referências" },
  { index: "03", label: "Construir", detail: "código · testes · protótipo" },
  { index: "04", label: "Documentar", detail: "decisões · erros · aprendizados" },
  { index: "05", label: "Evoluir", detail: "feedback · refatoração · próximo passo" },
];
