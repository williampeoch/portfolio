export const profile = {
  name: "William Peoc'h",
  title: "Machine Learning Research · AI for Science",
  location: "Lyon, France",
  email: "william.peoch@insa-lyon.fr",
  linkedin: "https://www.linkedin.com/in/william-peoc-h-ba208a268/",
  github: "https://github.com/williampeoch",
  website: "https://williampeoch.me",
  profileImage: "/profile.png",
  resume: "/resume.pdf",
  summary: "University of Oxford ML research intern working on physical inverse problems, multimodal learning, and biological data.",
  availability: "Available for a six-month final internship beginning in January 2027.",
  about: "Machine learning researcher and engineer working on AI for Science, physical inverse problems, multimodal learning, and biological data. Currently an ML research intern with the Hallou Group at the University of Oxford, developing models that infer per-cell stress tensors from microscopy images. Available for a six-month final internship beginning in January 2027."
}

export const experiences = [
  {
    id: 1,
    title: "Machine Learning Research Intern",
    company: "University of Oxford — Hallou Group",
    location: "Oxford, United Kingdom",
    period: "Jun 2026 – Aug 2026",
    description: [
      "Developing deep learning methods for a physical inverse problem: inferring per-cell stress tensors directly from microscopy images of cellular tissues.",
      "Designing and systematically evaluating local-global architectures that combine pretrained vision encoders with cross-attention to fuse cell morphology and tissue-level context.",
      "Building a reproducible PyTorch experimentation pipeline spanning synthetic data generation, distributed multi-GPU training on Isambard-AI, controlled ablations, and model diagnostics."
    ],
    technologies: ["PyTorch", "Physical Inverse Problems", "Computer Vision", "Pretrained Encoders", "Cross-Attention", "Distributed Training", "Isambard-AI"]
  },
  {
    id: 2,
    title: "Machine Learning Research Intern",
    company: "Inria — French National Research Institute for Digital Science",
    location: "Lyon, France",
    period: "Jun 2025 – Aug 2025",
    description: [
      "Fine-tuned transformer models for biomedical text classification, named-entity recognition, and information extraction using PubMed-derived datasets.",
      "Built NLP experimentation pipelines covering dataset construction, preprocessing, model training, evaluation, and error analysis.",
      "Conducted reproducible experiments on HPC infrastructure, including model comparisons, hyperparameter studies, and controlled ablations."
    ],
    technologies: ["Transformers", "Biomedical NLP", "NER", "Information Extraction", "PyTorch", "HPC"]
  },
  {
    id: 3,
    title: "Machine Learning Intern",
    company: "Axon' Cable – Medical Division",
    location: "Reims, France",
    period: "Apr 2024 – Jun 2024",
    description: [
      "Developed CNN and U-Net models for retinal image classification and segmentation across heterogeneous imaging datasets.",
      "Integrated the inference pipeline into a C# application used by ophthalmologists for retinal image analysis."
    ],
    technologies: ["CNN", "U-Net", "Computer Vision", "PyTorch", "Retinal Imaging", "C#"]
  }
]

export const projects = [
  {
    id: 1,
    title: "Axonet",
    description: "Neural network and automatic differentiation engine implemented from scratch in pure Python, covering scalar autograd, computational graphs, backpropagation, and multilayer perceptrons.",
    technologies: ["Python", "Autograd", "Computational Graphs", "Backpropagation", "ML Internals"],
    github: "https://github.com/williampeoch/axonet",
    featured: true,
  },
  {
    id: 2,
    title: "Facial Composite",
    description: "Facial composite generation system combining a variational autoencoder, latent-space search, a genetic algorithm, and an interactive interface.",
    technologies: ["VAE", "Latent-Space Search", "Genetic Algorithm", "Generative Models", "Interactive ML"],
    github: "https://github.com/williampeoch/facial-composite",
    featured: true,
  },
  {
    id: 3,
    title: "Multimodal Medical Assistant",
    description: "Built at the Mistral AI x Alan Hackathon: a multimodal medical assistant combining image analysis, conversational AI, and voice interaction. Awarded First Place and Best Pitch.",
    technologies: ["Multimodal Learning", "Image Analysis", "Conversational AI", "Voice Interaction"],
    featured: false,
    hackathon: "First Place and Best Pitch - Mistral AI x Alan Hackathon, 2024"
  }
]

export const skills = {
  machine_learning: [
    "PyTorch", "Transformers", "Representation Learning", "Multimodal Learning", "Computer Vision", "Biomedical NLP", "Model Evaluation", "Controlled Ablations"
  ],
  ml_systems: [
    "PyTorch DistributedDataParallel", "Slurm", "Multi-GPU Training", "HPC", "Isambard-AI", "Linux", "Docker", "Git"
  ],
  software: [
    "Python", "R", "TypeScript", "C#", "Docker", "Git", "Linux"
  ],
}

export const education = [
  {
    id: 1,
    degree: "MSc in Bioinformatics and Modeling",
    school: "INSA Lyon – National Institute of Applied Sciences",
    location: "Lyon, France",
    period: "Sep 2024 – Jun 2027, expected",
    description: "Research-focused curriculum in machine learning, applied mathematics, statistics, computational biology, and numerical modeling."
  },
  {
    id: 2,
    degree: "Exchange Semester – Mathematics & Machine Learning",
    school: "City University of Hong Kong",
    location: "Hong Kong SAR",
    period: "Sep 2025 – Jan 2026",
    description: "Completed exchange semester in mathematics and machine learning."
  },
  {
    id: 3,
    degree: "Two-year degree in Computer Science",
    school: "University Institute of Technology of Reims (URCA)",
    location: "Reims, France",
    period: "Sep 2022 – Jun 2024",
    description: "Two-year computer science program at the University of Reims."
  }
]

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "C1 – TOEIC 900/990" },
  { name: "Spanish", level: "B1" },
  { name: "Chinese", level: "A2" }
]

export const interests = [
  "AI for Science",
  "Physical Inverse Problems",
  "Representation Learning",
  "Multimodal Learning",
  "Computer Vision",
  "Biomedical NLP",
  "Distributed Training",
  "Biological Data"
]

export const contact = {
  email: "william.peoch@insa-lyon.fr",
  website: "https://williampeoch.me",
  location: "Lyon, France",
  social: {
    linkedin: "https://www.linkedin.com/in/william-peoc-h-ba208a268/",
    github: "https://github.com/williampeoch"
  }
}

export const awards = [
  {
    id: 1,
    title: "Mistral AI x Alan Hackathon – 1st Place & Best Pitch",
    organization: "Mistral AI · Alan",
    description: "Built an AI medical assistant with image diagnostics and a voice/chat interface; ranked 1st among 150+ participants and received the Best Pitch Award.",
    period: "Oct 2024"
  }
]
