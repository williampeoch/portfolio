export const profile = {
  name: "William Peoc'h",
  title: "MSc Bioinformatics Student · AI/ML · Deep Learning",
  location: "Lyon, France · Hong Kong SAR",
  email: "william.peoch@insa-lyon.fr",
  phone: "+33 6 66 18 93 77",
  linkedin: "https://linkedin.com/in/williampeoch",
  github: "https://github.com/williampeoch",
  website: "https://williampeoch.me",
  profileImage: "/profile.jpg",
  resume: "/resume.pdf",
  about: "MSc Bioinformatics and Modeling student at INSA Lyon with research interests in medical AI, representation learning, multimodal learning, and foundation models for biomedical data. I build AI systems for biomedical and clinical applications and am currently spending Fall 2025 at City University of Hong Kong (Mathematics & Machine Learning)."
}

export const experiences = [
  {
    id: 1,
    title: "Machine Learning Research Intern",
    company: "INRIA – French National Institute for Research in Digital Science and Technology",
    location: "Lyon, France",
    period: "Jun 2025 – Aug 2025",
    description: "Fine-tuned transformer-based models (BERT, LLMs) for biomedical text classification, built NER pipelines that extract therapeutic targets from biomedical and clinical literature, curated large-scale biomedical datasets, and ran experiments autonomously on Grid'5000 HPC clusters.",
    technologies: ["Transformers", "BERT", "LLMs", "NER", "PyTorch", "Biomedical NLP", "HPC"]
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    company: "Axon' Cable – Medical Division",
    location: "Reims, France",
    period: "Apr 2024 – Jun 2024",
    description: "Developed CNN and U-Net models from scratch for diabetic-retinopathy lesion detection/segmentation, boosted lesion classification accuracy to 86% through advanced preprocessing across heterogeneous datasets, integrated the full pipeline inside a C# application for ophthalmologists, and added a RAG module to enrich diagnostic context.",
    technologies: ["CNN", "U-Net", "Computer Vision", "PyTorch", "Medical Imaging", "C#", "RAG"]
  }
]

export const projects = [
  {
    id: 1,
    title: "X-Raystral - AI Medical Reports",
    description: "Built during the Paris Bio x AI Hackathon: fine-tuned Pixtral-12B on chest X-ray datasets to deliver a medical report generator with structured outputs, literature grounding, and clinician-friendly UX.",
    image: "/projects/xraystral.jpg",
    technologies: ["Medical Imaging", "Fine-tuning", "Computer Vision", "LLM", "Next.js", "Pixtral-12B"],
    github: "https://github.com/williampeoch/xraystral",
    demo: "https://xraystral-demo.williampeoch.dev",
    featured: true,
    hackathon: "Paris Bio x AI Hackathon - Medical report generator (Dec 2024)"
  },
  {
    id: 2,
    title: "AI Virtual Medical Doctor",
    description: "AI medical assistant with image diagnostics plus multilingual voice/chat interface; shipped in <24h and won 1st prize + Best Pitch vs 150+ participants at the Mistral AI x Alan Hackathon.",
    image: "/projects/ai-doctor.jpg",
    technologies: ["Next.js", "LLM", "Voice Interface", "Medical AI", "Computer Vision"],
    github: "https://github.com/williampeoch/ai-medical-doctor",
    demo: "https://ai-doctor.williampeoch.dev",
    featured: true,
    hackathon: "1st Place & Best Pitch - Mistral AI x Alan Hackathon (Oct 2024)"
  },
  {
    id: 3,
    title: "RAG Legal Research System",
    description: "RAG (Retrieval-Augmented Generation) system for lawyers to accelerate legal research and automate workflows.",
    image: "/projects/legal-rag.jpg",
    technologies: ["RAG", "Next.js", "Docker", "Legal Tech", "NLP"],
    github: "https://github.com/williampeoch/legal-rag",
    demo: "https://legal-rag.williampeoch.dev",
    featured: false,
    hackathon: "LLM x Law Hackathon - November 2024"
  },
  {
    id: 4,
    title: "Mistral ASCII Art Generator",
    description: "Fine-tuning Mistral-7B to generate ASCII art with a custom dataset and deployment with real-time interface.",
    image: "/projects/ascii-art.jpg",
    technologies: ["Finetuning", "LLM", "Python", "Mistral-7B", "ASCII Art"],
    github: "https://github.com/williampeoch/mistral-ascii",
    demo: "https://ascii-art.williampeoch.dev",
    featured: false,
    hackathon: "Mistral Paris Hackathon - May 2024"
  },
  {
    id: 5,
    title: "Brain Tumor Classification",
    description: "Design and training of a CNN in PyTorch to classify brain MRI images and detect tumors using a curated dataset.",
    image: "/projects/brain-tumor.jpg",
    technologies: ["Deep Learning", "PyTorch", "Python", "CNN", "Medical Imaging", "MRI"],
    github: "https://github.com/williampeoch/brain-tumor-classification",
    demo: "https://brain-tumor.williampeoch.dev",
    featured: false,
    hackathon: "Personal Project"
  }
]

export const skills = {
  machine_learning: [
    "Deep Learning", "Transformers", "LLMs & Fine-tuning", "Computer Vision", "Generative Models", "Representation Learning", "Multimodal Learning", "Medical AI"
  ],
  mathematics: [
    "Linear Algebra", "Probability Theory", "Statistics", "Optimization"
  ],
  bioinformatics: [
    "Genomics", "Transcriptomics", "NGS", "RNA-seq", "Sequence Alignment", "Biomedical Data Curation"
  ],
  software: [
    "Python", "R", "TypeScript", "C#", "Docker", "Git", "Linux"
  ],
  tools: [
    "PyTorch", "TensorFlow", "HuggingFace", "NumPy", "SciPy", "scikit-learn", "pandas"
  ]
}

export const education = [
  {
    id: 1,
    degree: "MSc in Bioinformatics and Modeling",
    school: "INSA Lyon – National Institute of Applied Sciences",
    location: "Lyon, France",
    period: "Sep 2024 – Jun 2027",
    description: "Graduate engineering curriculum focused on bioinformatics, mathematical modeling, and biomedical data science."
  },
  {
    id: 2,
    degree: "Exchange Semester – Mathematics & Machine Learning",
    school: "City University of Hong Kong",
    location: "Hong Kong SAR",
    period: "Sep 2025 – Jan 2026",
    description: "Current exchange within the Department of Mathematics to deepen expertise in advanced machine learning."
  },
  {
    id: 3,
    degree: "Bachelor in Computer Science",
    school: "University Institute of Technology of Reims (URCA)",
    location: "Reims, France",
    period: "Sep 2022 – Jun 2024",
    description: "Undergraduate program in computer science with emphasis on data science, software engineering, and AI fundamentals."
  }
]

export const certifications = [
  {
    id: 1,
    name: "TOEIC - Score 900/990",
    issuer: "ETS Global",
    date: "2024",
    credential: "B2/C1 Level in English"
  }
]

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "C1 – TOEIC 900/990" },
  { name: "Spanish", level: "B1" },
  { name: "Chinese", level: "A2" }
]

export const interests = [
  "Medical AI",
  "Representation Learning",
  "Multimodal Learning",
  "Bioinformatics",
  "Hackathons",
  "Open Source",
  "Scientific Writing",
  "Travel & Culture"
]

export const contact = {
  email: "william.peoch@insa-lyon.fr",
  phone: "+33 6 66 18 93 77",
  location: "Lyon, France · Hong Kong SAR",
  social: {
    linkedin: "https://linkedin.com/in/williampeoch",
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
  },
  {
    id: 2,
    title: "Paris Bio x AI Hackathon",
    organization: "Entrepreneur First",
    description: "Fine-tuned Pixtral-12B on chest X-ray datasets to deliver a medical report generator tailored for clinicians.",
    period: "Dec 2024"
  },
  {
    id: 3,
    title: "LLM x Law Hackathon",
    organization: "LegalTech Community",
    description: "Developed an IP-focused paralegal RAG system that accelerates legal research workflows.",
    period: "2024"
  },
  {
    id: 4,
    title: "Mistral Paris Hackathon",
    organization: "Mistral AI",
    description: "Fine-tuned Mistral-7B to generate ASCII art and deployed a real-time interface for creatives.",
    period: "May 2024"
  }
]
