"use client";

import { useState } from "react";
import { Plus, Trash2, Save, Dumbbell, TrendingUp } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  category: string;
  rm1?: number;
}

interface RMTestInputProps {
  onDataSubmit: (data: any) => void;
}

export default function RMTestInput({ onDataSubmit }: RMTestInputProps) {
  const [step, setStep] = useState<"basic" | "selection">("basic");
  const [basicTests, setBasicTests] = useState({
    supino: "",
    agachamento: "",
    levantamentoTerra: "",
    barraFixa: "",
    desenvolvimentoOmbro: "",
  });
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState({
    name: "",
    category: "chest",
  });

  const exerciseCategories = [
    { value: "chest", label: "Peito" },
    { value: "back", label: "Costas" },
    { value: "shoulders", label: "Ombros" },
    { value: "quads", label: "Pernas (Quadríceps)" },
    { value: "hamstrings", label: "Pernas (Posteriores)" },
    { value: "biceps", label: "Bíceps" },
    { value: "triceps", label: "Tríceps" },
    { value: "core", label: "Core/Abdômen" },
  ];

  const commonExercises: { [key: string]: string[] } = {
    chest: [
      "Supino Reto com Barra",
      "Supino Inclinado com Barra",
      "Supino com Halteres",
      "Crucifixo",
      "Flexão de Braço",
    ],
    back: [
      "Barra Fixa",
      "Remada Curvada",
      "Pulldown",
      "Levantamento Terra",
      "Remada Baixa",
    ],
    shoulders: [
      "Desenvolvimento com Barra",
      "Desenvolvimento com Halteres",
      "Elevação Lateral",
      "Elevação Frontal",
      "Remada Alta",
    ],
    quads: [
      "Agachamento Livre",
      "Leg Press",
      "Agachamento Frontal",
      "Afundo",
      "Cadeira Extensora",
    ],
    hamstrings: [
      "Levantamento Terra Romeno",
      "Mesa Flexora",
      "Hip Thrust",
      "Good Morning",
      "Stiff",
    ],
    biceps: [
      "Rosca Direta com Barra",
      "Rosca com Halteres",
      "Rosca Martelo",
      "Rosca Scott",
      "Rosca Concentrada",
    ],
    triceps: [
      "Tríceps Testa",
      "Tríceps na Polia",
      "Mergulho em Paralelas",
      "Tríceps Francês",
      "Supino Fechado",
    ],
    core: [
      "Prancha",
      "Abdominal Supra",
      "Elevação de Pernas",
      "Russian Twist",
      "Ab Wheel",
    ],
  };

  const handleBasicTestsSubmit = () => {
    const filledTests = Object.entries(basicTests).filter(([_, value]) => value !== "");
    
    if (filledTests.length >= 3) {
      setStep("selection");
    }
  };

  const addExercise = () => {
    if (currentExercise.name) {
      const newExercise: Exercise = {
        id: Date.now().toString(),
        name: currentExercise.name,
        category: currentExercise.category,
      };

      const updatedExercises = [...exercises, newExercise];
      setExercises(updatedExercises);
      setCurrentExercise({ name: "", category: "chest" });
    }
  };

  const removeExercise = (id: string) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  const handleSubmit = () => {
    if (exercises.length > 0) {
      onDataSubmit({ 
        basicTests, 
        exercises, 
        timestamp: new Date().toISOString() 
      });
    }
  };

  // Step 1: Basic 1RM Tests
  if (step === "basic") {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Testes de 1RM Básicos</h2>
            <p className="text-xs text-slate-400">
              Informe sua carga máxima para 1 repetição
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {/* Supino */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Supino Reto com Barra (kg)
            </label>
            <input
              type="number"
              value={basicTests.supino}
              onChange={(e) =>
                setBasicTests({ ...basicTests, supino: e.target.value })
              }
              placeholder="Ex: 80"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Agachamento */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Agachamento Livre (kg)
            </label>
            <input
              type="number"
              value={basicTests.agachamento}
              onChange={(e) =>
                setBasicTests({ ...basicTests, agachamento: e.target.value })
              }
              placeholder="Ex: 100"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Levantamento Terra */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Levantamento Terra (kg)
            </label>
            <input
              type="number"
              value={basicTests.levantamentoTerra}
              onChange={(e) =>
                setBasicTests({ ...basicTests, levantamentoTerra: e.target.value })
              }
              placeholder="Ex: 120"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Barra Fixa */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Barra Fixa (kg adicional ou peso corporal)
            </label>
            <input
              type="number"
              value={basicTests.barraFixa}
              onChange={(e) =>
                setBasicTests({ ...basicTests, barraFixa: e.target.value })
              }
              placeholder="Ex: 75 (peso corporal) ou +10"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Desenvolvimento de Ombro */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Desenvolvimento de Ombro com Barra (kg)
            </label>
            <input
              type="number"
              value={basicTests.desenvolvimentoOmbro}
              onChange={(e) =>
                setBasicTests({ ...basicTests, desenvolvimentoOmbro: e.target.value })
              }
              placeholder="Ex: 50"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          onClick={handleBasicTestsSubmit}
          disabled={Object.values(basicTests).filter(v => v !== "").length < 3}
          className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <TrendingUp className="w-5 h-5" />
          Continuar para Seleção de Exercícios
        </button>

        {/* Info Box */}
        <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-xl p-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            💡 <strong className="text-white">Importante:</strong> Preencha pelo menos 3 exercícios básicos. Esses dados serão usados pela IA para detectar desbalanceamentos musculares e criar um programa de treino personalizado e equilibrado.
          </p>
        </div>
      </div>
    );
  }

  // Step 2: Exercise Selection
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
          <Dumbbell className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Seleção de Exercícios</h2>
          <p className="text-xs text-slate-400">Escolha os exercícios que deseja treinar</p>
        </div>
      </div>

      {/* Show Basic Tests Summary */}
      <div className="mb-6 bg-slate-950 border border-slate-700 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-slate-300 mb-3">
          📊 Seus Testes de 1RM
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {basicTests.supino && (
            <div className="text-slate-400">
              <span className="text-cyan-400">Supino:</span> {basicTests.supino}kg
            </div>
          )}
          {basicTests.agachamento && (
            <div className="text-slate-400">
              <span className="text-purple-400">Agachamento:</span> {basicTests.agachamento}kg
            </div>
          )}
          {basicTests.levantamentoTerra && (
            <div className="text-slate-400">
              <span className="text-emerald-400">Levantamento Terra:</span> {basicTests.levantamentoTerra}kg
            </div>
          )}
          {basicTests.barraFixa && (
            <div className="text-slate-400">
              <span className="text-pink-400">Barra Fixa:</span> {basicTests.barraFixa}kg
            </div>
          )}
          {basicTests.desenvolvimentoOmbro && (
            <div className="text-slate-400">
              <span className="text-orange-400">Desenvolvimento:</span> {basicTests.desenvolvimentoOmbro}kg
            </div>
          )}
        </div>
        <button
          onClick={() => setStep("basic")}
          className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          ← Editar testes de 1RM
        </button>
      </div>

      {/* Input Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Categoria
          </label>
          <select
            value={currentExercise.category}
            onChange={(e) =>
              setCurrentExercise({ ...currentExercise, category: e.target.value, name: "" })
            }
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          >
            {exerciseCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Exercício
          </label>
          <input
            type="text"
            list="common-exercises"
            value={currentExercise.name}
            onChange={(e) =>
              setCurrentExercise({ ...currentExercise, name: e.target.value })
            }
            placeholder="Ex: Supino Reto com Barra"
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
          <datalist id="common-exercises">
            {commonExercises[currentExercise.category]?.map((ex) => (
              <option key={ex} value={ex} />
            ))}
          </datalist>
        </div>

        <button
          onClick={addExercise}
          disabled={!currentExercise.name}
          className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          Adicionar Exercício
        </button>
      </div>

      {/* Exercise List */}
      {exercises.length > 0 && (
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-semibold text-slate-300">
            Exercícios Selecionados ({exercises.length})
          </h3>
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-slate-950 border border-slate-700 rounded-xl p-4 flex items-center justify-between hover:border-slate-600 transition-all"
            >
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">{exercise.name}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    {exerciseCategories.find((c) => c.value === exercise.category)?.label}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeExercise(exercise.id)}
                className="p-2 hover:bg-red-500/10 rounded-lg transition-all group"
              >
                <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      {exercises.length > 0 && (
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          <Save className="w-5 h-5" />
          Gerar Programa de Treino com IA
        </button>
      )}

      {/* Info Box */}
      <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-xl p-4">
        <p className="text-xs text-slate-300 leading-relaxed">
          💡 <strong className="text-white">Dica:</strong> Selecione de 3 a 8 exercícios que você gostaria de incluir no seu programa. A IA irá analisar seus dados de 1RM, detectar desbalanceamentos e criar um treino completo e equilibrado.
        </p>
      </div>
    </div>
  );
}
