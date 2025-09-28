export const profile = {
  name: "William Peoc'h",
  title: "Étudiant en Bioinformatique | IA & Biotechnologie",
  location: "Hong Kong (Échange) | Lyon, France",
  email: "william.peoch@example.com",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://linkedin.com/in/williampeoch",
  github: "https://github.com/williampeoch",
  website: "https://williampeoch.dev",
  about: {
    fr: "Étudiant en 4ème année d'ingénierie à l'INSA Lyon en Bioinformatique, actuellement en échange à City University of Hong Kong en Mathématiques avec une spécialisation en Machine Learning. Passionné par l'IA et la biotechnologie, je développe des systèmes d'IA pratiques à l'intersection de la bioinformatique, des mathématiques et de la santé. Je recherche activement un stage pour mettre en pratique mes compétences et contribuer à des projets innovants.",
    en: "Fourth-year engineering student at INSA Lyon specializing in Bioinformatics, currently on exchange at City University of Hong Kong in Mathematics with a focus on Machine Learning. Passionate about AI and biotechnology, I build practical AI systems at the intersection of bioinformatics, mathematics, and healthcare. Actively seeking an internship to apply my skills and contribute to innovative projects."
  }
}

export const experiences = [
  {
    id: 1,
    title: "Stage Machine Learning",
    company: "Inria",
    location: "Lyon, France",
    period: "Juillet 2025 - Août 2025",
    description: "Découverte ciblée de cibles thérapeutiques pour les maladies neurologiques en utilisant des LLM génératifs. Fine-tuning de classificateurs basés sur BERT et LLM, construction de pipelines NER pour la littérature biomédicale, scraping et curation de bases de données biomédicales.",
    technologies: ["BERT", "LLM", "Python", "NER", "Biomedical Data", "Machine Learning"]
  },
  {
    id: 2,
    title: "Stage Machine Learning",
    company: "Groupe Axon' Cable",
    location: "Reims, France",
    period: "Avril 2024 - Juin 2024",
    description: "Développement de modèles de classification et de segmentation pour la détection de rétinopathie diabétique et la mise en évidence de lésions sur des images de fond d'œil, permettant un diagnostic plus précoce et de meilleurs résultats pour les patients.",
    technologies: ["Computer Vision", "Deep Learning", "Medical Imaging", "C#", "RAG", "PyTorch"]
  }
]

export const projects = [
  {
    id: 1,
    title: "X-Raystral - AI Medical Reports",
    description: "Outil d'IA générant des rapports médicaux à partir de radiographies pulmonaires en fine-tunant Pixtral-12B et l'intégrant dans une app Next.js. Enrichissement des sorties avec la littérature médicale et les données patients. MVP complet construit et pitché en 48h.",
    image: "/projects/xraystral.jpg",
    technologies: ["Medical Imaging", "Finetuning", "Computer Vision", "LLM", "Next.js", "Pixtral-12B"],
    github: "https://github.com/williampeoch/xraystral",
    demo: "https://xraystral-demo.williampeoch.dev",
    featured: true,
    hackathon: "Paris Bio x AI Hackathon (Entrepreneur First) - Décembre 2024"
  },
  {
    id: 2,
    title: "AI Virtual Medical Doctor",
    description: "Médecin virtuel alimenté par l'IA avec diagnostics basés sur l'image, interface vocale/chat et réservation automatique de rendez-vous. Construit en moins de 24h.",
    image: "/projects/ai-doctor.jpg",
    technologies: ["Next.js", "LLM", "Voice Interface", "Medical AI", "Computer Vision"],
    github: "https://github.com/williampeoch/ai-medical-doctor",
    demo: "https://ai-doctor.williampeoch.dev",
    featured: true,
    hackathon: "1ère Place - Mistral x Alan Hackathon - Octobre 2024"
  },
  {
    id: 3,
    title: "RAG Legal Research System",
    description: "Système de RAG (Retrieval-Augmented Generation) pour les avocats afin d'accélérer la recherche juridique et automatiser les workflows.",
    image: "/projects/legal-rag.jpg",
    technologies: ["RAG", "Next.js", "Docker", "Legal Tech", "NLP"],
    github: "https://github.com/williampeoch/legal-rag",
    demo: "https://legal-rag.williampeoch.dev",
    featured: false,
    hackathon: "LLM x Law Hackathon - Novembre 2024"
  },
  {
    id: 4,
    title: "Mistral ASCII Art Generator",
    description: "Fine-tuning de Mistral-7B pour générer de l'art ASCII avec un dataset personnalisé et déploiement avec une interface temps réel.",
    image: "/projects/ascii-art.jpg",
    technologies: ["Finetuning", "LLM", "Python", "Mistral-7B", "ASCII Art"],
    github: "https://github.com/williampeoch/mistral-ascii",
    demo: "https://ascii-art.williampeoch.dev",
    featured: false,
    hackathon: "Mistral Paris Hackathon - Mai 2024"
  },
  {
    id: 5,
    title: "Brain Tumor Classification",
    description: "Conception et entraînement d'un CNN en PyTorch pour classifier les images IRM du cerveau et détecter les tumeurs en utilisant un dataset curé.",
    image: "/projects/brain-tumor.jpg",
    technologies: ["Deep Learning", "PyTorch", "Python", "CNN", "Medical Imaging", "MRI"],
    github: "https://github.com/williampeoch/brain-tumor-classification",
    demo: "https://brain-tumor.williampeoch.dev",
    featured: false,
    hackathon: "Projet Personnel"
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
    degree: "Échange - Mathématiques & Machine Learning",
    school: "City University of Hong Kong",
    location: "Hong Kong",
    period: "Août 2025 - Février 2026",
    description: "Major en Mathématiques, mineur en Machine Learning ; exploration de sujets avancés en IA et science des données."
  },
  {
    id: 2,
    degree: "Ingénieur en Bioinformatique et Modélisation",
    school: "INSA Lyon (Institut National des Sciences Appliquées de Lyon)",
    location: "Lyon, France",
    period: "Septembre 2024 - Juin 2027",
    description: "Formation d'ingénieur spécialisée en bioinformatique avec focus sur la modélisation et l'analyse de données biologiques."
  },
  {
    id: 3,
    degree: "DUT Informatique - Spécialisation Data Science",
    school: "IUT de Reims–Châlons–Charleville",
    location: "Reims, France",
    period: "2022 - 2024",
    description: "Formation technique en informatique avec spécialisation en science des données. Compétences : Python, visualisation de données, MongoDB, SQL, React.js, Docker, Symfony, analyse de données, PHP, Git, bases de données relationnelles, Flask, algèbre linéaire, théorie des graphes, probabilités."
  },
  {
    id: 4,
    degree: "Licence Biologie",
    school: "Université de Nantes",
    location: "Nantes, France",
    period: "Septembre 2021 - Mai 2022",
    description: "Formation en biologie moléculaire, biologie cellulaire et sciences de la vie."
  },
  {
    id: 5,
    degree: "PASS (Parcours d'Accès Spécifique Santé)",
    school: "Université Grenoble Alpes",
    location: "Grenoble, France",
    period: "Septembre 2020 - Mai 2021",
    description: "Formation préparatoire aux études de santé avec focus sur la biologie cellulaire, la chimie physique, la physiologie humaine et l'histologie."
  },
  {
    id: 6,
    degree: "Baccalauréat Scientifique",
    school: "Lycée Gabriel Guist'hau",
    location: "Nantes, France",
    period: "Septembre 2017 - Juillet 2020",
    description: "Diplôme de fin d'études secondaires avec spécialisation scientifique."
  }
]

export const certifications = [
  {
    id: 1,
    name: "TOEIC - Score 900/990",
    issuer: "ETS Global",
    date: "2024",
    credential: "Niveau B2/C1 en Anglais"
  }
]

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "B2/C1 (TOEIC 900/990)" },
  { name: "Espagnol", level: "B1" },
  { name: "Chinois", level: "Élémentaire" }
]

export const interests = [
  "Intelligence Artificielle",
  "Biotechnologie",
  "Recherche Médicale",
  "Hackathons",
  "Open Source",
  "Veille Technologique",
  "Voyage",
  "Sport",
  "Lecture Scientifique"
]

export const contact = {
  email: "william.peoch@example.com",
  phone: "+33 6 12 34 56 78",
  location: "Hong Kong (Échange) | Lyon, France",
  social: {
    linkedin: "https://linkedin.com/in/williampeoch",
    github: "https://github.com/williampeoch",
    twitter: "https://twitter.com/williampeoch",
    instagram: "https://instagram.com/williampeoch"
  }
}
