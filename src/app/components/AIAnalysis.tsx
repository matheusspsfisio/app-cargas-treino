"use client";

import { useEffect, useState } from "react";
import { Brain, TrendingUp, AlertCircle, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { analyzeTrainingData } from "@/lib/training-ai";

interface AIAnalysisProps {
  rmData: any;
  onAnalysisComplete: (analysis: any) => void;
}

export default function AIAnalysis({ rmData, onAnalysisComplete }: AIAnalysisProps) {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (rmData && rmData.exercises && rmData.exercises.length > 0) {
      setLoading(true);
      
      // Simula processamento de IA
      setTimeout(() => {
        const result = analyzeTrainingData(rmData);
        setAnalysis(result);
        onAnalysisComplete(result);
        setLoading(false);
      }, 1500);
    }
  }, [rmData, onAnalysisComplete]);

  if (!rmData) {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
          <Brain className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Análise de IA</h3>
        <p className="text-sm text-slate-400">
          Adicione dados de 1RM para receber análise científica personalizada
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <Loader2 className="w-6 h-6 text-purple-400 absolute -top-1 -right-1 animate-spin" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-1">Analisando Dados...</h3>
            <p className="text-sm text-slate-400">
              IA processando força máxima, detectando desbalanceamentos e definindo periodização ideal
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Análise Científica</h2>
          <p className="text-xs text-slate-400">Baseada em dados de 1RM e dinamometria</p>
        </div>
      </div>

      {/* Performance Level */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-1">
              Nível de Performance: {analysis.performanceLevel}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {analysis.performanceDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Imbalances Detection */}
      {analysis.imbalances && analysis.imbalances.length > 0 && (
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Desbalanceamentos Detectados
          </h3>
          {analysis.imbalances.map((imbalance: any, index: number) => {
            const severityColors = {
              Leve: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
              Moderado: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
              Severo: "from-red-500/10 to-pink-500/10 border-red-500/20",
            };
            const severityBadgeColors = {
              Leve: "bg-blue-500/10 text-blue-400",
              Moderado: "bg-amber-500/10 text-amber-400",
              Severo: "bg-red-500/10 text-red-400",
            };

            return (
              <div
                key={index}
                className={`bg-gradient-to-r ${severityColors[imbalance.severity as keyof typeof severityColors]} border rounded-xl p-4`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">{imbalance.type}</h4>
                  <span className={`text-xs font-medium px-2 py-1 rounded-lg ${severityBadgeColors[imbalance.severity as keyof typeof severityBadgeColors]}`}>
                    {imbalance.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                  {imbalance.description}
                </p>
                <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400">
                    <strong className="text-cyan-400">Recomendação:</strong> {imbalance.recommendation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Training Recommendations */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-slate-300">Recomendações de Treino</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-xs font-medium text-slate-400">Frequência Semanal</span>
            </div>
            <p className="text-2xl font-bold text-white">{analysis.weeklyFrequency}x</p>
            <p className="text-xs text-slate-400 mt-1">treinos por semana</p>
          </div>

          <div className="bg-slate-950 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-xs font-medium text-slate-400">Intensidade Média</span>
            </div>
            <p className="text-2xl font-bold text-white">{analysis.averageIntensity}%</p>
            <p className="text-xs text-slate-400 mt-1">do 1RM</p>
          </div>
        </div>
      </div>

      {/* Load Zones */}
      <div className="space-y-3 mb-6">
        <h3 className="text-sm font-semibold text-slate-300">Zonas de Carga Recomendadas</h3>
        {analysis.loadZones.map((zone: any, index: number) => (
          <div
            key={index}
            className="bg-slate-950 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">{zone.phase}</h4>
              <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-lg">
                {zone.weeks} semanas
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${zone.intensity}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium text-white">{zone.intensity}%</span>
            </div>
            <p className="text-xs text-slate-400">{zone.description}</p>
          </div>
        ))}
      </div>

      {/* Scientific Insights */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-300">Insights Científicos</h3>
        {analysis.insights.map((insight: string, index: number) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-slate-950 border border-slate-700 rounded-xl p-3"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">{insight}</p>
          </div>
        ))}
      </div>

      {/* Warning */}
      <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-amber-300 mb-1">Importante</h4>
            <p className="text-xs text-amber-200/80 leading-relaxed">
              Esta análise é baseada em algoritmos científicos e dados de 1RM. Consulte um profissional de
              educação física para ajustes personalizados e acompanhamento adequado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
