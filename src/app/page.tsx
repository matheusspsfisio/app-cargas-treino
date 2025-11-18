"use client";

import { useState } from "react";
import { Activity, TrendingUp, Calendar, Zap } from "lucide-react";
import RMTestInput from "./components/RMTestInput";
import AIAnalysis from "./components/AIAnalysis";
import TrainingPlan from "./components/TrainingPlan";

export default function Home() {
  const [rmData, setRmData] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">APEX Performance</h1>
                <p className="text-xs text-slate-400">Elite Training Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20">
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  IA Ativa
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-lg">
                +12%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {rmData ? `${rmData.exercises?.length || 0}` : "0"}
            </h3>
            <p className="text-sm text-slate-400">Exercícios Avaliados</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-lg">
                Ótimo
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {analysis ? `${analysis.weeklyFrequency}x` : "--"}
            </h3>
            <p className="text-sm text-slate-400">Treinos/Semana</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-pink-400 bg-pink-500/10 px-2 py-1 rounded-lg">
                Ativo
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {analysis ? `${analysis.macrocycle}` : "--"}
            </h3>
            <p className="text-sm text-slate-400">Macrociclo Atual</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
                Alta
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {analysis ? `${analysis.currentPhase}` : "--"}
            </h3>
            <p className="text-sm text-slate-400">Fase de Treino</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <RMTestInput onDataSubmit={setRmData} />
          </div>

          {/* Analysis & Plan Section */}
          <div className="lg:col-span-2 space-y-6">
            <AIAnalysis rmData={rmData} onAnalysisComplete={setAnalysis} />
            <TrainingPlan analysis={analysis} rmData={rmData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2024 APEX Performance - Elite Training Intelligence
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Powered by</span>
              <span className="text-xs font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                OpenAI GPT-4
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
