// Mock data for Skolyn website
export const mockData = {
  company: {
    name: "Skolyn LLC",
    tagline: "Clarity in Complexity",
    description: "Enterprise-grade Clinical Intelligence Platform leveraging proprietary Explainable AI",
    colors: {
      primary: "#030f4f",
      accent: "#00A99D"
    }
  },
  
  partners: [
    { name: 'INNOland', color: '#0066CC', description: 'Incubation & Acceleration Center' },
    { name: 'TəBİB', color: '#FF4444', description: 'Healthcare Technology Partner' },
    { name: 'SSN', color: '#0088FF', description: 'Ministry of Health Partner' },
    { name: 'University', color: '#4CAF50', description: 'Research Collaboration' },
    { name: 'Google for Startups', color: '#FF9800', description: 'Technology Partner' }
  ],

  platformFeatures: [
    {
      id: 'triage',
      title: 'Smart Worklist & AI Triage',
      description: 'Intelligent case prioritization that identifies critical findings instantly',
      accuracy: '99.3%',
      speedImprovement: '67%'
    },
    {
      id: 'diagnostic',
      title: 'Multi-Modal Diagnostic Core',
      description: 'Comprehensive AI analysis across all major imaging modalities',
      modules: ['Breast', 'Neuro', 'Prostate', 'MSK'],
      accuracy: '99.1%'
    },
    {
      id: 'explainable',
      title: 'Explainable AI Engine',
      description: 'Visual heatmaps and detailed explanations for every AI decision',
      trustScore: '94%'
    }
  ],

  teamMembers: [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Executive Officer',
      background: 'Former McKinsey Partner, Harvard MD',
      image: '/placeholder-ceo.jpg'
    },
    {
      name: 'Dr. Alex Chen',
      role: 'Chief Technology Officer', 
      background: 'Former Google AI, Stanford PhD',
      image: '/placeholder-cto.jpg'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Chief Medical Officer',
      background: 'Mayo Clinic Radiologist, 15+ years',
      image: '/placeholder-cmo.jpg'
    }
  ],

  newsArticles: [
    {
      title: 'Skolyn Announces Acceptance into INNOland Incubation Program',
      date: '2024-03-15',
      category: 'Press Release',
      excerpt: 'Partnership will accelerate development of next-generation medical AI platform'
    },
    {
      title: 'The Future of Explainable AI in Medical Imaging',
      date: '2024-03-10', 
      category: 'Thought Leadership',
      excerpt: 'Why transparency is critical for AI adoption in healthcare'
    },
    {
      title: 'Skolyn Secures Pre-Seed Funding from Strategic Partners',
      date: '2024-02-28',
      category: 'Press Release',
      excerpt: 'Investment will support clinical trials and regulatory approval process'
    }
  ],

  careers: [
    {
      title: 'Senior Backend Engineer (Go)',
      department: 'Engineering',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      description: 'Build scalable microservices for our medical AI platform'
    },
    {
      title: 'ML Engineer - Computer Vision',
      department: 'AI Research',
      location: 'Baku, Azerbaijan / Remote', 
      type: 'Full-time',
      description: 'Develop and optimize deep learning models for medical imaging'
    },
    {
      title: 'Clinical Affairs Manager',
      department: 'Regulatory',
      location: 'Baku, Azerbaijan',
      type: 'Full-time',
      description: 'Lead clinical trials and regulatory submissions'
    }
  ],

  contactInfo: {
    email: 'leads@skolyn.se',
    phone: '+994 12 555 0123',
    address: 'INNOland Incubation Center, Baku, Azerbaijan',
    social: {
      linkedin: 'https://linkedin.com/company/skolyn',
      twitter: 'https://twitter.com/skolyn'
    }
  }
};

export default mockData;