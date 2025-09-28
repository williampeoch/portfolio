export const profile = {
  name: "William Peoc'h",
  title: "Bioinformatics Student | AI & Biotechnology",
  location: "Hong Kong (Exchange) | Lyon, France",
  email: "william.peoch@example.com",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://linkedin.com/in/williampeoch",
  github: "https://github.com/williampeoch",
  website: "https://williampeoch.dev",
  about: "Fourth-year engineering student at INSA Lyon specializing in Bioinformatics, currently on exchange at City University of Hong Kong in Mathematics with a focus on Machine Learning. Passionate about AI and biotechnology, I build practical AI systems at the intersection of bioinformatics, mathematics, and healthcare. Actively seeking an internship to apply my skills and contribute to innovative projects."
}

export const experiences = [
  {
    id: 1,
    title: "Machine Learning Internship",
    company: "Inria",
    location: "Lyon, France",
    period: "July 2025 - August 2025",
    description: "Targeted discovery of therapeutic targets for neurological diseases using generative LLMs. Fine-tuning BERT and LLM-based classifiers, building NER pipelines for biomedical literature, scraping and curating biomedical databases.",
    technologies: ["BERT", "LLM", "Python", "NER", "Biomedical Data", "Machine Learning"]
  },
  {
    id: 2,
    title: "Machine Learning Internship",
    company: "Groupe Axon' Cable",
    location: "Reims, France",
    period: "April 2024 - June 2024",
    description: "Development of classification and segmentation models for diabetic retinopathy detection and lesion highlighting on fundus images, enabling earlier diagnosis and better patient outcomes.",
    technologies: ["Computer Vision", "Deep Learning", "Medical Imaging", "C#", "RAG", "PyTorch"]
  }
]

export const projects = [
  {
    id: 1,
    title: "X-Raystral - AI Medical Reports",
    description: "AI tool generating medical reports from chest X-rays by fine-tuning Pixtral-12B and integrating it into a Next.js app. Enhanced outputs with medical literature and patient data. Complete MVP built and pitched in 48h.",
    image: "/projects/xraystral.jpg",
    technologies: ["Medical Imaging", "Finetuning", "Computer Vision", "LLM", "Next.js", "Pixtral-12B"],
    github: "https://github.com/williampeoch/xraystral",
    demo: "https://xraystral-demo.williampeoch.dev",
    featured: true,
    hackathon: "Paris Bio x AI Hackathon (Entrepreneur First) - December 2024"
  },
  {
    id: 2,
    title: "AI Virtual Medical Doctor",
    description: "AI-powered virtual doctor with image-based diagnostics, voice/chat interface and automatic appointment booking. Built in less than 24h.",
    image: "/projects/ai-doctor.jpg",
    technologies: ["Next.js", "LLM", "Voice Interface", "Medical AI", "Computer Vision"],
    github: "https://github.com/williampeoch/ai-medical-doctor",
    demo: "https://ai-doctor.williampeoch.dev",
    featured: true,
    hackathon: "1st Place - Mistral x Alan Hackathon - October 2024"
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
  ai_ml: [
    "Python", "PyTorch", "TensorFlow", "Scikit-learn", "BERT", "LLM", "Computer Vision", "Deep Learning", "Machine Learning", "NLP", "RAG", "Fine-tuning"
  ],
  bioinformatics: [
    "Biopython", "R", "Bioconductor", "BLAST", "Sequence Analysis", "Molecular Biology", "Genomics", "Proteomics", "Biomedical Data", "Medical Imaging"
  ],
  programming: [
    "Python", "JavaScript", "TypeScript", "C#", "R", "SQL", "HTML", "CSS", "React", "Next.js", "Node.js", "Docker"
  ],
  tools: [
    "Git", "Docker", "VS Code", "Jupyter", "MongoDB", "PostgreSQL", "AWS", "Vercel", "Linux", "Bash", "LaTeX", "Matlab"
  ]
}

export const education = [
  {
    id: 1,
    degree: "Exchange - Mathematics & Machine Learning",
    school: "City University of Hong Kong",
    location: "Hong Kong",
    period: "August 2025 - February 2026",
    description: "Major in Mathematics, minor in Machine Learning; exploring advanced topics in AI and data science."
  },
  {
    id: 2,
    degree: "Engineering in Bioinformatics and Modeling",
    school: "INSA Lyon (Institut National des Sciences Appliquées de Lyon)",
    location: "Lyon, France",
    period: "September 2024 - June 2027",
    description: "Engineering education specialized in bioinformatics with focus on modeling and biological data analysis."
  },
  {
    id: 3,
    degree: "DUT Computer Science - Data Science Specialization",
    school: "IUT de Reims–Châlons–Charleville",
    location: "Reims, France",
    period: "2022 - 2024",
    description: "Technical training in computer science with data science specialization. Skills: Python, data visualization, MongoDB, SQL, React.js, Docker, Symfony, data analysis, PHP, Git, relational databases, Flask, linear algebra, graph theory, probabilities."
  },
  {
    id: 4,
    degree: "Biology Bachelor's Degree",
    school: "Université de Nantes",
    location: "Nantes, France",
    period: "September 2021 - May 2022",
    description: "Training in molecular biology, cell biology and life sciences."
  },
  {
    id: 5,
    degree: "PASS (Parcours d'Accès Spécifique Santé)",
    school: "Université Grenoble Alpes",
    location: "Grenoble, France",
    period: "September 2020 - May 2021",
    description: "Preparatory training for health studies with focus on cell biology, physical chemistry, human physiology and histology."
  },
  {
    id: 6,
    degree: "Scientific Baccalaureate",
    school: "Lycée Gabriel Guist'hau",
    location: "Nantes, France",
    period: "September 2017 - July 2020",
    description: "High school diploma with scientific specialization."
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
  { name: "English", level: "B2/C1 (TOEIC 900/990)" },
  { name: "Spanish", level: "B1" },
  { name: "Chinese", level: "Elementary" }
]

export const interests = [
  "Artificial Intelligence",
  "Biotechnology",
  "Medical Research",
  "Hackathons",
  "Open Source",
  "Technology Watch",
  "Travel",
  "Sports",
  "Scientific Reading"
]

export const contact = {
  email: "william.peoch@example.com",
  phone: "+33 6 12 34 56 78",
  location: "Hong Kong (Exchange) | Lyon, France",
  social: {
    linkedin: "https://linkedin.com/in/williampeoch",
    github: "https://github.com/williampeoch",
    twitter: "https://twitter.com/williampeoch",
    instagram: "https://instagram.com/williampeoch"
  }
}
