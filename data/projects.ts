export const projects = [
  {
    title: "VIGOR – Voice Identification System",
    description:
      "A production-grade audio intelligence system designed to identify who spoke when in large-scale call recordings.",
    tech: [
      "Python",
      "Speaker Diarization",
      "GANs",
      "DTLN",
      "Vector Embeddings",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Processed millions of real-world audio files in production",
      "Implemented speaker diarization and detection pipelines",
      "Reduced false positives using vector-based speaker comparison",
      "Optimized processing using multi-stage audio pipelines",
    ],
  },
  {
    title: "Audio Quality & Speaker Count Detection",
    description:
      "ML pipeline to determine single vs multiple speakers and assess audio quality after noise reduction.",
    tech: [
      "Python",
      "Audio Signal Processing",
      "Noise Reduction",
      "ML Classification",
    ],
    highlights: [
      "Experimented with multiple models to improve speaker count accuracy",
      "Handled noisy, real-world call audio",
      "Focused on post-noise-cleaning speaker analysis",
    ],
  },
  {
    title: "Flu Shot Learning – Vaccine Prediction",
    description:
      "Predictive modeling project focused on balanced and imbalanced healthcare datasets.",
    tech: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "EDA",
      "Classification Models",
    ],
    highlights: [
      "Handled class imbalance using SMOTE",
      "Compared model performance across balanced vs imbalanced data",
      "Evaluated Precision, Recall, and F1-score",
    ],
  },
];
