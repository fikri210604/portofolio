export default function SkillBridgeAIDetail() {
  return (
    <>
      <h4>🤖 Key Engineering Highlights</h4>
      <ul>
        <li>Dual-pipeline career intelligence platform combining Semantic Retrieval (SBERT) and Machine Learning Hybrid Scoring.</li>
        <li>Hybrid recommendation fusion: 60% Domain Heuristics + 40% ML Prediction using XGBoost trained on 60,940 pairwise samples (69.90% test accuracy).</li>
        <li>Multilingual semantic search engine (EN/ID) using SBERT (384-dimensional dense vectors) and NumPy cosine similarity on 1,491 refined Indonesian jobs.</li>
        <li>AI Career Advisor integrated with Google Gemini 2.5 Flash for automated skill gap analysis, personalized career roadmaps, and cover letters.</li>
        <li>Production-grade Clean Architecture with FastAPI backend, Next.js 16 App Router frontend, and MLOps tracking via MLflow & DagsHub on Cloud Run.</li>
      </ul>
    </>
  );
}
