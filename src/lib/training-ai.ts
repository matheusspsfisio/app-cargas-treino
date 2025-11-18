/**
 * Training AI - Análise científica de dados de dinamometria
 * Baseado em princípios de periodização e ciência do treinamento
 */

interface Exercise {
  name: string;
  category: string;
}

interface BasicTests {
  supino: string;
  agachamento: string;
  levantamentoTerra: string;
  barraFixa: string;
  desenvolvimentoOmbro: string;
}

interface TrainingData {
  basicTests: BasicTests;
  exercises: Exercise[];
  timestamp: string;
}

interface TrainingAnalysis {
  performanceLevel: string;
  performanceDescription: string;
  weeklyFrequency: number;
  averageIntensity: number;
  macrocycle: string;
  currentPhase: string;
  loadZones: LoadZone[];
  insights: string[];
  imbalances: Imbalance[];
  personalizedWorkout?: PersonalizedWorkout;
}

interface Imbalance {
  type: string;
  severity: "Leve" | "Moderado" | "Severo";
  description: string;
  recommendation: string;
}

interface LoadZone {
  phase: string;
  intensity: number;
  weeks: number;
  description: string;
}

interface PersonalizedWorkout {
  title: string;
  description: string;
  duration: string;
  workoutSessions: WorkoutSession[];
}

interface WorkoutSession {
  day: string;
  focus: string;
  exercises: WorkoutExercise[];
  warmup: string;
  cooldown: string;
}

interface WorkoutExercise {
  name: string;
  sets: number;
  reps: string;
  load: string;
  rest: string;
  tempo: string;
  notes: string;
}

/**
 * Banco de dados completo de exercícios por categoria
 */
const EXERCISE_DATABASE = {
  // PEITO
  chest: [
    "Supino Reto com Barra",
    "Supino Inclinado com Barra",
    "Supino Declinado com Barra",
    "Supino Reto com Halteres",
    "Supino Inclinado com Halteres",
    "Supino Declinado com Halteres",
    "Crucifixo Reto com Halteres",
    "Crucifixo Inclinado com Halteres",
    "Crucifixo na Polia (Crossover)",
    "Flexão de Braço Tradicional",
    "Flexão de Braço Declinada",
    "Flexão de Braço com Peso",
    "Supino na Máquina (Smith)",
    "Peck Deck (Voador)",
    "Pullover com Haltere",
    "Supino Guilhotina",
  ],

  // COSTAS
  back: [
    "Barra Fixa (Pull-up)",
    "Barra Fixa Supinada (Chin-up)",
    "Barra Fixa Neutra",
    "Remada Curvada com Barra",
    "Remada Curvada com Halteres",
    "Remada Unilateral com Haltere",
    "Remada Cavalinho",
    "Remada Baixa na Polia",
    "Remada Alta na Polia",
    "Remada Sentado",
    "Pulldown Frontal",
    "Pulldown Pegada Aberta",
    "Pulldown Pegada Fechada",
    "Pullover na Polia",
    "Levantamento Terra Convencional",
    "Levantamento Terra Sumô",
    "Levantamento Terra Romeno",
    "Remada Pendlay",
    "Remada T-Bar",
    "Face Pull",
  ],

  // OMBROS
  shoulders: [
    "Desenvolvimento com Barra",
    "Desenvolvimento com Halteres",
    "Desenvolvimento Arnold",
    "Desenvolvimento na Máquina",
    "Elevação Lateral com Halteres",
    "Elevação Lateral na Polia",
    "Elevação Frontal com Barra",
    "Elevação Frontal com Halteres",
    "Elevação Frontal com Anilha",
    "Remada Alta com Barra",
    "Remada Alta com Halteres",
    "Crucifixo Inverso com Halteres",
    "Crucifixo Inverso na Polia",
    "Encolhimento com Barra",
    "Encolhimento com Halteres",
    "Desenvolvimento Militar",
    "Push Press",
  ],

  // PERNAS (QUADRÍCEPS)
  quads: [
    "Agachamento Livre com Barra",
    "Agachamento Frontal",
    "Agachamento Sumô",
    "Agachamento Búlgaro",
    "Agachamento Hack",
    "Agachamento na Máquina Smith",
    "Leg Press 45°",
    "Leg Press Horizontal",
    "Leg Press Unilateral",
    "Cadeira Extensora",
    "Extensora Unilateral",
    "Afundo com Barra",
    "Afundo com Halteres",
    "Afundo Caminhando",
    "Afundo Reverso",
    "Sissy Squat",
    "Agachamento Pistol",
  ],

  // PERNAS (POSTERIOR)
  hamstrings: [
    "Levantamento Terra Romeno",
    "Levantamento Terra Stiff",
    "Mesa Flexora",
    "Mesa Flexora Unilateral",
    "Mesa Flexora em Pé",
    "Good Morning",
    "Hip Thrust com Barra",
    "Hip Thrust Unilateral",
    "Ponte de Glúteo",
    "Ponte de Glúteo Unilateral",
    "Glute Ham Raise",
    "Nordic Curl",
    "Cadeira Abdutora",
    "Cadeira Adutora",
    "Coice na Polia",
    "Stiff Unilateral",
  ],

  // PANTURRILHAS
  calves: [
    "Panturrilha em Pé na Máquina",
    "Panturrilha Sentado",
    "Panturrilha no Leg Press",
    "Panturrilha Unilateral",
    "Panturrilha no Smith",
  ],

  // BÍCEPS
  biceps: [
    "Rosca Direta com Barra",
    "Rosca Direta com Barra W",
    "Rosca Direta com Halteres",
    "Rosca Alternada com Halteres",
    "Rosca Martelo",
    "Rosca Concentrada",
    "Rosca Scott com Barra",
    "Rosca Scott com Halteres",
    "Rosca Scott Unilateral",
    "Rosca Inversa",
    "Rosca 21",
    "Rosca na Polia Baixa",
    "Rosca Spider",
    "Rosca Inclinada",
  ],

  // TRÍCEPS
  triceps: [
    "Tríceps Testa com Barra",
    "Tríceps Testa com Halteres",
    "Tríceps Francês com Barra",
    "Tríceps Francês com Haltere",
    "Tríceps na Polia (Corda)",
    "Tríceps na Polia (Barra Reta)",
    "Tríceps na Polia (Barra V)",
    "Tríceps Coice com Haltere",
    "Mergulho em Paralelas",
    "Mergulho no Banco",
    "Supino Fechado",
    "Tríceps Unilateral na Polia",
  ],

  // CORE/ABDÔMEN
  core: [
    "Prancha Frontal",
    "Prancha Lateral",
    "Prancha com Elevação de Perna",
    "Abdominal Supra",
    "Abdominal Infra",
    "Abdominal Oblíquo",
    "Abdominal na Polia",
    "Abdominal Canivete",
    "Elevação de Pernas Suspenso",
    "Elevação de Pernas Deitado",
    "Bicicleta no Ar",
    "Russian Twist",
    "Pallof Press",
    "Dead Bug",
    "Bird Dog",
    "Mountain Climber",
    "Ab Wheel (Roda Abdominal)",
  ],

  // FUNCIONAIS/OLÍMPICOS
  functional: [
    "Clean (Arranco)",
    "Power Clean",
    "Snatch (Arremesso)",
    "Power Snatch",
    "Clean and Jerk",
    "Thruster",
    "Wall Ball",
    "Kettlebell Swing",
    "Turkish Get-Up",
    "Farmer's Walk",
    "Sled Push",
    "Sled Pull",
    "Battle Rope",
    "Box Jump",
    "Burpee",
  ],
};

/**
 * Detecta desbalanceamentos musculares baseado nos testes de 1RM
 */
function detectImbalances(basicTests: BasicTests): Imbalance[] {
  const imbalances: Imbalance[] = [];
  
  const supino = parseFloat(basicTests.supino) || 0;
  const agachamento = parseFloat(basicTests.agachamento) || 0;
  const levantamentoTerra = parseFloat(basicTests.levantamentoTerra) || 0;
  const barraFixa = parseFloat(basicTests.barraFixa) || 0;
  const desenvolvimentoOmbro = parseFloat(basicTests.desenvolvimentoOmbro) || 0;

  // Razão Supino/Desenvolvimento (ideal: 1.3-1.5)
  if (supino > 0 && desenvolvimentoOmbro > 0) {
    const ratio = supino / desenvolvimentoOmbro;
    if (ratio > 1.8) {
      imbalances.push({
        type: "Desbalanceamento Peito/Ombros",
        severity: "Moderado",
        description: `Supino (${supino}kg) muito superior ao Desenvolvimento (${desenvolvimentoOmbro}kg). Razão: ${ratio.toFixed(2)}:1 (ideal: 1.3-1.5:1)`,
        recommendation: "Priorize exercícios de ombros e reduza volume de peito. Adicione desenvolvimento militar e elevações laterais."
      });
    } else if (ratio < 1.2) {
      imbalances.push({
        type: "Desbalanceamento Ombros/Peito",
        severity: "Leve",
        description: `Desenvolvimento (${desenvolvimentoOmbro}kg) próximo ao Supino (${supino}kg). Razão: ${ratio.toFixed(2)}:1`,
        recommendation: "Aumente volume de peito com exercícios compostos. Foque em supino inclinado e reto."
      });
    }
  }

  // Razão Agachamento/Levantamento Terra (ideal: 0.8-1.0)
  if (agachamento > 0 && levantamentoTerra > 0) {
    const ratio = agachamento / levantamentoTerra;
    if (ratio < 0.7) {
      imbalances.push({
        type: "Fraqueza em Quadríceps",
        severity: "Moderado",
        description: `Agachamento (${agachamento}kg) muito inferior ao Levantamento Terra (${levantamentoTerra}kg). Razão: ${ratio.toFixed(2)}:1 (ideal: 0.8-1.0:1)`,
        recommendation: "Priorize agachamentos e leg press. Trabalhe mobilidade de tornozelo e quadril. Adicione agachamento frontal."
      });
    } else if (ratio > 1.2) {
      imbalances.push({
        type: "Fraqueza em Cadeia Posterior",
        severity: "Moderado",
        description: `Levantamento Terra (${levantamentoTerra}kg) inferior ao Agachamento (${agachamento}kg). Razão: ${ratio.toFixed(2)}:1`,
        recommendation: "Fortaleça cadeia posterior com levantamento terra romeno, good mornings e hip thrusts. Trabalhe glúteos e posteriores."
      });
    }
  }

  // Razão Barra Fixa/Supino (ideal: 0.9-1.1)
  if (barraFixa > 0 && supino > 0) {
    const ratio = barraFixa / supino;
    if (ratio < 0.75) {
      imbalances.push({
        type: "Fraqueza em Costas",
        severity: "Severo",
        description: `Barra Fixa (${barraFixa}kg) muito inferior ao Supino (${supino}kg). Razão: ${ratio.toFixed(2)}:1 (ideal: 0.9-1.1:1)`,
        recommendation: "PRIORIDADE: Fortaleça costas urgentemente. Adicione remadas, pulldowns e trabalho de dorsais. Risco de lesão por desbalanceamento."
      });
    } else if (ratio > 1.3) {
      imbalances.push({
        type: "Fraqueza em Peito",
        severity: "Moderado",
        description: `Supino (${supino}kg) inferior à Barra Fixa (${barraFixa}kg). Razão: ${ratio.toFixed(2)}:1`,
        recommendation: "Aumente volume de peito. Foque em supino reto, inclinado e crucifixos."
      });
    }
  }

  // Análise de força absoluta
  if (supino > 0 && supino < 60) {
    imbalances.push({
      type: "Força Absoluta Baixa - Peito",
      severity: "Leve",
      description: `Supino de ${supino}kg indica força inicial. Potencial de crescimento elevado.`,
      recommendation: "Foque em progressão linear. Aumente carga 2.5kg por semana enquanto mantiver boa técnica."
    });
  }

  if (agachamento > 0 && agachamento < 80) {
    imbalances.push({
      type: "Força Absoluta Baixa - Pernas",
      severity: "Leve",
      description: `Agachamento de ${agachamento}kg indica força inicial. Grande margem para desenvolvimento.`,
      recommendation: "Priorize agachamento 2x/semana. Trabalhe mobilidade e técnica. Progressão gradual de carga."
    });
  }

  // Se não houver desbalanceamentos significativos
  if (imbalances.length === 0) {
    imbalances.push({
      type: "Desenvolvimento Equilibrado",
      severity: "Leve",
      description: "Seus testes de 1RM indicam desenvolvimento muscular equilibrado entre grupos musculares.",
      recommendation: "Mantenha variedade de exercícios e progressão balanceada em todos os movimentos."
    });
  }

  return imbalances;
}

/**
 * Avalia nível de performance baseado nos dados de 1RM
 */
function assessPerformanceLevel(basicTests: BasicTests, exercises: Exercise[]): {
  level: string;
  description: string;
} {
  const supino = parseFloat(basicTests.supino) || 0;
  const agachamento = parseFloat(basicTests.agachamento) || 0;
  const levantamentoTerra = parseFloat(basicTests.levantamentoTerra) || 0;

  // Calcula força total relativa
  const totalStrength = supino + agachamento + levantamentoTerra;
  const exerciseCount = exercises.length;

  if (totalStrength < 200 || exerciseCount <= 3) {
    return {
      level: "Iniciante",
      description:
        "Perfil em desenvolvimento. Foco em construir base sólida com exercícios fundamentais e técnica perfeita.",
    };
  } else if (totalStrength < 350 || exerciseCount <= 6) {
    return {
      level: "Intermediário",
      description:
        "Boa base estabelecida. Pronto para periodização estruturada, maior volume e intensidade progressiva.",
    };
  } else {
    return {
      level: "Avançado",
      description:
        "Experiência consolidada. Capacidade para treinos de alta intensidade, volume elevado e técnicas avançadas.",
    };
  }
}

/**
 * Determina frequência semanal ideal baseada no nível e desbalanceamentos
 */
function calculateOptimalFrequency(
  performanceLevel: string,
  exerciseCount: number,
  imbalances: Imbalance[]
): number {
  const severeImbalances = imbalances.filter(i => i.severity === "Severo").length;
  
  if (performanceLevel === "Iniciante") {
    return severeImbalances > 0 ? 4 : 3; // Mais frequência se houver desbalanceamentos
  } else if (performanceLevel === "Intermediário") {
    return severeImbalances > 0 ? 5 : 4;
  } else {
    return 5;
  }
}

/**
 * Gera zonas de carga para periodização linear
 */
function generateLoadZones(performanceLevel: string): LoadZone[] {
  const baseIntensities = {
    Iniciante: [60, 70, 75, 65],
    Intermediário: [65, 75, 85, 70],
    Avançado: [70, 80, 90, 75],
  };

  const intensities =
    baseIntensities[performanceLevel as keyof typeof baseIntensities] ||
    baseIntensities.Intermediário;

  return [
    {
      phase: "Adaptação Anatômica",
      intensity: intensities[0],
      weeks: 3,
      description: "Foco em volume, técnica e preparação dos tecidos",
    },
    {
      phase: "Hipertrofia",
      intensity: intensities[1],
      weeks: 4,
      description: "Desenvolvimento de massa muscular e capacidade de trabalho",
    },
    {
      phase: "Força Máxima",
      intensity: intensities[2],
      weeks: 3,
      description: "Intensidade elevada para ganhos neurais e força pura",
    },
    {
      phase: "Transição/Recuperação",
      intensity: intensities[3],
      weeks: 2,
      description: "Redução de volume para recuperação e supercompensação",
    },
  ];
}

/**
 * Seleciona exercícios variados do banco de dados
 */
function selectVariedExercises(category: string, count: number): string[] {
  const categoryMap: { [key: string]: string[] } = {
    chest: EXERCISE_DATABASE.chest,
    back: EXERCISE_DATABASE.back,
    shoulders: EXERCISE_DATABASE.shoulders,
    quads: EXERCISE_DATABASE.quads,
    hamstrings: EXERCISE_DATABASE.hamstrings,
    calves: EXERCISE_DATABASE.calves,
    biceps: EXERCISE_DATABASE.biceps,
    triceps: EXERCISE_DATABASE.triceps,
    core: EXERCISE_DATABASE.core,
    functional: EXERCISE_DATABASE.functional,
  };

  const exercises = categoryMap[category] || EXERCISE_DATABASE.chest;
  
  // Embaralha e seleciona
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Gera treino personalizado baseado em 1RM e desbalanceamentos
 */
function generatePersonalizedWorkout(
  basicTests: BasicTests,
  exercises: Exercise[],
  performanceLevel: string,
  frequency: number,
  currentIntensity: number,
  imbalances: Imbalance[]
): PersonalizedWorkout {
  const supino = parseFloat(basicTests.supino) || 0;
  const agachamento = parseFloat(basicTests.agachamento) || 0;
  const levantamentoTerra = parseFloat(basicTests.levantamentoTerra) || 0;
  const barraFixa = parseFloat(basicTests.barraFixa) || 0;
  const desenvolvimentoOmbro = parseFloat(basicTests.desenvolvimentoOmbro) || 0;

  // Define parâmetros baseados no nível
  const params = {
    Iniciante: { 
      sets: [3, 3, 3], 
      reps: ["12-15", "10-12", "15-20"], 
      rest: ["90s", "60s", "45s"], 
      tempo: "2-0-2-0" 
    },
    Intermediário: { 
      sets: [4, 4, 3], 
      reps: ["8-12", "10-12", "12-15"], 
      rest: ["120s", "90s", "60s"], 
      tempo: "3-0-1-0" 
    },
    Avançado: { 
      sets: [5, 4, 4], 
      reps: ["6-8", "8-10", "10-12"], 
      rest: ["180s", "120s", "90s"], 
      tempo: "3-1-1-0" 
    },
  };

  const workoutParams = params[performanceLevel as keyof typeof params] || params.Intermediário;

  // Detecta grupos musculares fracos para priorizar
  const weakChest = imbalances.some(i => i.type.includes("Fraqueza em Peito"));
  const weakBack = imbalances.some(i => i.type.includes("Fraqueza em Costas"));
  const weakLegs = imbalances.some(i => i.type.includes("Fraqueza em Quadríceps"));
  const weakPosterior = imbalances.some(i => i.type.includes("Cadeia Posterior"));

  // Gera sessões de treino COMPLETAS
  const workoutSessions: WorkoutSession[] = [];

  if (frequency >= 3) {
    // TREINO A - PEITO + TRÍCEPS (com cargas baseadas em 1RM)
    const chestLoad1 = supino > 0 ? `${(supino * currentIntensity / 100).toFixed(1)}kg (${currentIntensity}% 1RM)` : `${currentIntensity}% 1RM`;
    const chestLoad2 = supino > 0 ? `${(supino * (currentIntensity - 10) / 100).toFixed(1)}kg (${currentIntensity - 10}% 1RM)` : `${currentIntensity - 10}% 1RM`;
    const chestLoad3 = supino > 0 ? `${(supino * (currentIntensity - 20) / 100).toFixed(1)}kg (${currentIntensity - 20}% 1RM)` : `${currentIntensity - 20}% 1RM`;

    workoutSessions.push({
      day: "Dia 1",
      focus: weakChest ? "Peito + Tríceps (PRIORIDADE - Correção)" : "Peito + Tríceps",
      exercises: [
        {
          name: "Supino Reto com Barra",
          sets: weakChest ? workoutParams.sets[0] + 1 : workoutParams.sets[0],
          reps: workoutParams.reps[0],
          load: chestLoad1,
          rest: workoutParams.rest[0],
          tempo: workoutParams.tempo,
          notes: weakChest ? "PRIORIDADE: Foco em força e técnica perfeita" : "Exercício principal - foco em força",
        },
        {
          name: selectVariedExercises("chest", 2)[1],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: chestLoad2,
          rest: workoutParams.rest[1],
          tempo: workoutParams.tempo,
          notes: "Exercício secundário - volume moderado",
        },
        {
          name: selectVariedExercises("chest", 3)[2],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: chestLoad3,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Exercício de isolamento - pump muscular",
        },
        {
          name: selectVariedExercises("triceps", 1)[0],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Tríceps principal - força",
        },
        {
          name: selectVariedExercises("triceps", 2)[1],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: `${currentIntensity - 25}% 1RM`,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Tríceps isolamento - congestão",
        },
      ],
      warmup: "10 min cardio leve + mobilidade de ombros e cotovelos + 3 séries progressivas de aquecimento específico (barra vazia → 50% → 70%)",
      cooldown: "Alongamento estático de peito e tríceps (10 min) + foam rolling peitoral",
    });

    // TREINO B - COSTAS + BÍCEPS (com cargas baseadas em 1RM)
    const backLoad1 = barraFixa > 0 ? `${(barraFixa * currentIntensity / 100).toFixed(1)}kg (${currentIntensity}% 1RM)` : `${currentIntensity}% 1RM`;
    const backLoad2 = barraFixa > 0 ? `${(barraFixa * (currentIntensity - 10) / 100).toFixed(1)}kg (${currentIntensity - 10}% 1RM)` : `${currentIntensity - 10}% 1RM`;

    workoutSessions.push({
      day: "Dia 2",
      focus: weakBack ? "Costas + Bíceps (PRIORIDADE - Correção)" : "Costas + Bíceps",
      exercises: [
        {
          name: "Barra Fixa (Pull-up)",
          sets: weakBack ? workoutParams.sets[0] + 1 : workoutParams.sets[0],
          reps: workoutParams.reps[0],
          load: backLoad1,
          rest: workoutParams.rest[0],
          tempo: workoutParams.tempo,
          notes: weakBack ? "PRIORIDADE: Fortalecer costas urgentemente" : "Exercício principal - desenvolvimento de espessura",
        },
        {
          name: selectVariedExercises("back", 2)[1],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: backLoad2,
          rest: workoutParams.rest[1],
          tempo: workoutParams.tempo,
          notes: "Exercício secundário - largura das costas",
        },
        {
          name: selectVariedExercises("back", 3)[2],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Remada - trabalho de densidade",
        },
        {
          name: selectVariedExercises("back", 4)[3],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: `${currentIntensity - 20}% 1RM`,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Isolamento de dorsais",
        },
        {
          name: selectVariedExercises("biceps", 1)[0],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Bíceps principal - força",
        },
        {
          name: selectVariedExercises("biceps", 2)[1],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: `${currentIntensity - 25}% 1RM`,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Bíceps isolamento - pump",
        },
      ],
      warmup: "10 min cardio leve + mobilidade de ombros e escápulas + ativação de romboides + aquecimento específico progressivo",
      cooldown: "Alongamento estático de costas e bíceps (10 min) + liberação miofascial de dorsais",
    });

    // TREINO C - PERNAS (QUADRÍCEPS DOMINANTE) com cargas baseadas em 1RM
    const legLoad1 = agachamento > 0 ? `${(agachamento * currentIntensity / 100).toFixed(1)}kg (${currentIntensity}% 1RM)` : `${currentIntensity}% 1RM`;
    const legLoad2 = agachamento > 0 ? `${(agachamento * (currentIntensity - 10) / 100).toFixed(1)}kg (${currentIntensity - 10}% 1RM)` : `${currentIntensity - 10}% 1RM`;

    workoutSessions.push({
      day: "Dia 3",
      focus: weakLegs ? "Pernas - Quadríceps (PRIORIDADE - Correção)" : "Pernas - Quadríceps Dominante",
      exercises: [
        {
          name: "Agachamento Livre com Barra",
          sets: weakLegs ? workoutParams.sets[0] + 1 : workoutParams.sets[0],
          reps: workoutParams.reps[0],
          load: legLoad1,
          rest: workoutParams.rest[0],
          tempo: workoutParams.tempo,
          notes: weakLegs ? "PRIORIDADE: Fortalecer pernas - técnica perfeita" : "Exercício principal - força de pernas",
        },
        {
          name: selectVariedExercises("quads", 2)[1],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: legLoad2,
          rest: workoutParams.rest[1],
          tempo: workoutParams.tempo,
          notes: "Exercício secundário - volume",
        },
        {
          name: selectVariedExercises("quads", 3)[2],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Trabalho unilateral - correção de assimetrias",
        },
        {
          name: selectVariedExercises("quads", 4)[3],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: `${currentIntensity - 20}% 1RM`,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Isolamento de quadríceps",
        },
        {
          name: selectVariedExercises("calves", 1)[0],
          sets: 4,
          reps: "15-20",
          load: `${currentIntensity - 15}% 1RM`,
          rest: "60s",
          tempo: "2-2-1-0",
          notes: "Panturrilha - pausa no pico de contração",
        },
      ],
      warmup: "10 min bike ou elíptico + mobilidade de quadril e tornozelos + ativação de glúteos + aquecimento específico progressivo",
      cooldown: "Alongamento estático de quadríceps e flexores de quadril (12 min) + foam rolling de IT band e quadríceps",
    });
  }

  if (frequency >= 4) {
    // TREINO D - OMBROS + TRAPÉZIO (com cargas baseadas em 1RM)
    const shoulderLoad1 = desenvolvimentoOmbro > 0 ? `${(desenvolvimentoOmbro * currentIntensity / 100).toFixed(1)}kg (${currentIntensity}% 1RM)` : `${currentIntensity}% 1RM`;

    workoutSessions.push({
      day: "Dia 4",
      focus: "Ombros + Trapézio",
      exercises: [
        {
          name: "Desenvolvimento com Barra",
          sets: workoutParams.sets[0],
          reps: workoutParams.reps[0],
          load: shoulderLoad1,
          rest: workoutParams.rest[0],
          tempo: workoutParams.tempo,
          notes: "Desenvolvimento principal - força de ombros",
        },
        {
          name: selectVariedExercises("shoulders", 2)[1],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Deltoide lateral - largura de ombros",
        },
        {
          name: selectVariedExercises("shoulders", 3)[2],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Deltoide frontal - volume",
        },
        {
          name: selectVariedExercises("shoulders", 4)[3],
          sets: workoutParams.sets[2],
          reps: workoutParams.reps[2],
          load: `${currentIntensity - 20}% 1RM`,
          rest: workoutParams.rest[2],
          tempo: "2-0-1-0",
          notes: "Deltoide posterior - simetria",
        },
        {
          name: selectVariedExercises("shoulders", 5)[4],
          sets: 4,
          reps: "12-15",
          load: `${currentIntensity - 10}% 1RM`,
          rest: "90s",
          tempo: "2-1-1-0",
          notes: "Trapézio - desenvolvimento",
        },
      ],
      warmup: "8 min cardio leve + mobilidade de ombros (rotações, círculos) + ativação de manguito rotador + aquecimento específico",
      cooldown: "Alongamento estático de ombros e trapézio (10 min) + liberação de tensão cervical",
    });
  }

  if (frequency >= 5) {
    // TREINO E - PERNAS (POSTERIOR DOMINANTE) + CORE (com cargas baseadas em 1RM)
    const posteriorLoad1 = levantamentoTerra > 0 ? `${(levantamentoTerra * currentIntensity / 100).toFixed(1)}kg (${currentIntensity}% 1RM)` : `${currentIntensity}% 1RM`;

    workoutSessions.push({
      day: "Dia 5",
      focus: weakPosterior ? "Pernas - Posterior + Core (PRIORIDADE - Correção)" : "Pernas - Posterior + Core",
      exercises: [
        {
          name: "Levantamento Terra Romeno",
          sets: weakPosterior ? workoutParams.sets[0] + 1 : workoutParams.sets[0],
          reps: workoutParams.reps[0],
          load: posteriorLoad1,
          rest: workoutParams.rest[0],
          tempo: workoutParams.tempo,
          notes: weakPosterior ? "PRIORIDADE: Fortalecer cadeia posterior" : "Exercício principal - cadeia posterior",
        },
        {
          name: selectVariedExercises("hamstrings", 2)[1],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 10}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: workoutParams.tempo,
          notes: "Glúteos e posteriores - força",
        },
        {
          name: selectVariedExercises("hamstrings", 3)[2],
          sets: workoutParams.sets[1],
          reps: workoutParams.reps[1],
          load: `${currentIntensity - 15}% 1RM`,
          rest: workoutParams.rest[1],
          tempo: "2-0-2-0",
          notes: "Isolamento de posteriores",
        },
        {
          name: selectVariedExercises("core", 1)[0],
          sets: 4,
          reps: "45-60s",
          load: "Peso corporal",
          rest: "60s",
          tempo: "Isométrico",
          notes: "Core - estabilidade",
        },
        {
          name: selectVariedExercises("core", 2)[1],
          sets: 3,
          reps: "15-20",
          load: "Peso corporal ou carga leve",
          rest: "45s",
          tempo: "Controlado",
          notes: "Core - força dinâmica",
        },
        {
          name: selectVariedExercises("core", 3)[2],
          sets: 3,
          reps: "12-15/lado",
          load: "Peso corporal",
          rest: "45s",
          tempo: "Controlado",
          notes: "Core - anti-rotação",
        },
      ],
      warmup: "10 min cardio leve + mobilidade de quadril + ativação de glúteos e core + aquecimento específico",
      cooldown: "Alongamento completo de cadeia posterior (15 min) + foam rolling de glúteos e posteriores + liberação de fáscia plantar",
    });
  }

  return {
    title: `Programa APEX Performance - Nível ${performanceLevel}`,
    description: `Treino científico personalizado com ${frequency}x/semana baseado em seus dados de 1RM. Periodização linear focada em ${
      currentIntensity >= 80 ? "força máxima e potência" : "hipertrofia muscular e força"
    }. Programa ajustado para corrigir desbalanceamentos detectados.`,
    duration: "4 semanas (microciclo)",
    workoutSessions,
  };
}

/**
 * Gera insights científicos personalizados
 */
function generateInsights(
  exercises: Exercise[],
  performanceLevel: string,
  frequency: number,
  imbalances: Imbalance[]
): string[] {
  const insights: string[] = [];

  // Análise de variedade
  insights.push(
    `Programa estruturado com ${frequency}x/semana otimizado para seu nível ${performanceLevel.toLowerCase()}.`
  );

  // Desbalanceamentos detectados
  const severeImbalances = imbalances.filter(i => i.severity === "Severo");
  if (severeImbalances.length > 0) {
    insights.push(
      `⚠️ ATENÇÃO: ${severeImbalances.length} desbalanceamento(s) severo(s) detectado(s). Treino ajustado para correção prioritária.`
    );
  }

  // Periodização
  insights.push(
    "Periodização linear de 12 semanas: progressão gradual de volume para intensidade máxima."
  );

  // Recuperação
  insights.push(
    `Frequência de ${frequency}x/semana permite recuperação adequada entre estímulos, essencial para hipertrofia.`
  );

  // Variedade
  insights.push(
    "Exercícios variados previnem adaptação e platôs, mantendo progressão constante."
  );

  // Monitoramento
  insights.push(
    "Reavalie cargas a cada 4 semanas. Aumente 2-5% quando conseguir completar todas as séries com boa técnica."
  );

  // Nutrição
  insights.push(
    "Mantenha superávit calórico de 300-500 kcal/dia para hipertrofia ou déficit de 300-500 kcal/dia para definição."
  );

  return insights;
}

/**
 * Função principal de análise
 */
export function analyzeTrainingData(data: TrainingData): TrainingAnalysis {
  const { basicTests, exercises } = data;

  // Detecta desbalanceamentos
  const imbalances = detectImbalances(basicTests);

  // Avaliação de performance
  const { level, description } = assessPerformanceLevel(basicTests, exercises);

  // Frequência semanal (ajustada por desbalanceamentos)
  const weeklyFrequency = calculateOptimalFrequency(level, exercises.length, imbalances);

  // Zonas de carga
  const loadZones = generateLoadZones(level);

  // Intensidade média (fase atual - hipertrofia)
  const averageIntensity = loadZones[1].intensity;

  // Insights personalizados
  const insights = generateInsights(exercises, level, weeklyFrequency, imbalances);

  // Treino personalizado baseado em 1RM e desbalanceamentos
  const personalizedWorkout = generatePersonalizedWorkout(
    basicTests,
    exercises,
    level,
    weeklyFrequency,
    averageIntensity,
    imbalances
  );

  return {
    performanceLevel: level,
    performanceDescription: description,
    weeklyFrequency,
    averageIntensity,
    macrocycle: "Preparação Geral",
    currentPhase: loadZones[1].phase,
    loadZones,
    insights,
    imbalances,
    personalizedWorkout,
  };
}

/**
 * Calcula carga prescrita para um exercício específico
 */
export function calculatePrescribedLoad(
  rm1: number,
  intensityPercentage: number,
  roundTo: number = 2.5
): number {
  const load = (rm1 * intensityPercentage) / 100;
  return Math.round(load / roundTo) * roundTo;
}

/**
 * Determina zona de velocidade alvo baseada na intensidade
 */
export function getVelocityZone(intensityPercentage: number): {
  min: number;
  max: number;
  description: string;
} {
  if (intensityPercentage >= 90) {
    return { min: 0.15, max: 0.25, description: "Força Máxima" };
  } else if (intensityPercentage >= 75) {
    return { min: 0.25, max: 0.4, description: "Hipertrofia/Força" };
  } else {
    return { min: 0.4, max: 0.6, description: "Potência/Velocidade" };
  }
}
