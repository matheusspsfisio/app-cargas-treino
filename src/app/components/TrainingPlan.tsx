"use client";

import { Calendar, Dumbbell, Clock, Target, Zap, TrendingUp } from "lucide-react";

interface TrainingPlanProps {
  analysis: any;
  rmData: any;
}

export default function TrainingPlan({ analysis, rmData }: TrainingPlanProps) {
  if (!analysis || !rmData) {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Plano de Treino</h3>
        <p className="text-sm text-slate-400">
          Selecione seus exercícios para visualizar seu programa personalizado
        </p>
      </div>
    );
  }

  const generateWeeklyPlan = () => {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const frequency = analysis.weeklyFrequency;
    
    // Distribui treinos de forma inteligente
    const trainingDays = [];
    if (frequency === 3) {
      trainingDays.push(0, 2, 4); // Seg, Qua, Sex
    } else if (frequency === 4) {
      trainingDays.push(0, 1, 3, 4); // Seg, Ter, Qui, Sex
    } else if (frequency === 5) {
      trainingDays.push(0, 1, 2, 3, 4); // Seg-Sex
    } else {
      trainingDays.push(0, 3); // Seg, Qui
    }

    return days.map((day, index) => ({
      day,
      isTraining: trainingDays.includes(index),
      focus: trainingDays.includes(index) 
        ? index % 2 === 0 
          ? "Membros Superiores" 
          : "Membros Inferiores"
        : "Descanso",
    }));
  };

  const weeklyPlan = generateWeeklyPlan();
  const personalizedWorkout = analysis.personalizedWorkout;

  return (
    <div className="space-y-6">
      {/* Plano de Periodização */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Plano de Treino</h2>
            <p className="text-xs text-slate-400">Periodização estruturada em ciclos</p>
          </div>
        </div>

        {/* Macrocycle Overview */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">Macrociclo Atual</h3>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
              {analysis.macrocycle}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Fase</p>
              <p className="text-sm font-semibold text-white">{analysis.currentPhase}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Duração</p>
              <p className="text-sm font-semibold text-white">12 semanas</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Progresso</p>
              <p className="text-sm font-semibold text-white">Semana 1</p>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-semibold text-slate-300">Cronograma Semanal</h3>
          <div className="grid grid-cols-1 gap-2">
            {weeklyPlan.map((day, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 border transition-all ${
                  day.isTraining
                    ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30 hover:border-emerald-500/50"
                    : "bg-slate-950 border-slate-700 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        day.isTraining
                          ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                          : "bg-slate-800"
                      }`}
                    >
                      {day.isTraining ? (
                        <Dumbbell className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{day.day}</h4>
                      <p className="text-xs text-slate-400">{day.focus}</p>
                    </div>
                  </div>
                  {day.isTraining && (
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
                      Treino
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Microcycle Info */}
        <div className="bg-slate-950 border border-slate-700 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Microciclo Atual (Semana 1-4)</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-slate-300">Volume: Moderado-Alto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-slate-300">Intensidade: {analysis.averageIntensity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-slate-300">Descanso: 2-3 min</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <span className="text-slate-300">Velocidade: Controlada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Treino Personalizado pela IA */}
      {personalizedWorkout && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Treino Personalizado IA</h2>
              <p className="text-xs text-slate-400">Gerado especialmente para você</p>
            </div>
          </div>

          {/* Workout Header */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
            <h3 className="text-base font-bold text-white mb-2">{personalizedWorkout.title}</h3>
            <p className="text-sm text-slate-300 mb-3">{personalizedWorkout.description}</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400">
                Duração: {personalizedWorkout.duration}
              </span>
            </div>
          </div>

          {/* Workout Sessions */}
          <div className="space-y-4">
            {personalizedWorkout.workoutSessions.map((session: any, sessionIndex: number) => (
              <div
                key={sessionIndex}
                className="bg-slate-950 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all"
              >
                {/* Session Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{session.day}</h4>
                    <p className="text-sm text-emerald-400">{session.focus}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Warmup */}
                <div className="mb-4 p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <p className="text-xs font-semibold text-slate-400 mb-1">Aquecimento</p>
                  <p className="text-xs text-slate-300">{session.warmup}</p>
                </div>

                {/* Exercises */}
                <div className="space-y-3 mb-4">
                  {session.exercises.map((exercise: any, exerciseIndex: number) => (
                    <div
                      key={exerciseIndex}
                      className="bg-slate-900 border border-slate-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-white">{exercise.name}</h5>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm font-bold text-cyan-400">{exercise.load}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Séries</p>
                          <p className="text-sm font-semibold text-white">{exercise.sets}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Repetições</p>
                          <p className="text-sm font-semibold text-white">{exercise.reps}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Descanso</p>
                          <p className="text-sm font-semibold text-white">{exercise.rest}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Tempo</p>
                          <p className="text-sm font-semibold text-white">{exercise.tempo}</p>
                        </div>
                      </div>

                      {exercise.notes && (
                        <div className="pt-3 border-t border-slate-700">
                          <p className="text-xs text-slate-400">
                            💡 {exercise.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Cooldown */}
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <p className="text-xs font-semibold text-slate-400 mb-1">Volta à Calma</p>
                  <p className="text-xs text-slate-300">{session.cooldown}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Training Tips */}
          <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              Dicas de Execução
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Mantenha a técnica perfeita em todas as repetições</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Controle a velocidade conforme o tempo prescrito (ex: 3-0-1-0 = 3s descida, 0s pausa, 1s subida, 0s topo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Respeite os intervalos de descanso para otimizar recuperação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Ajuste a carga se não conseguir completar as repetições com boa forma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Hidrate-se adequadamente durante o treino</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
