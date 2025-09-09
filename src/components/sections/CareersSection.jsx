import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Users, 
  Heart, 
  Target, 
  Zap, 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowRight,
  Mail,
  Coffee,
  Gamepad2,
  Plane,
  GraduationCap,
  Shield
} from 'lucide-react';

const CareersSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Positions', count: 8 },
    { id: 'engineering', label: 'Engineering', count: 4 },
    { id: 'ai', label: 'AI & Research', count: 2 },
    { id: 'clinical', label: 'Clinical Affairs', count: 1 },
    { id: 'business', label: 'Business', count: 1 }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity packages, and performance bonuses'
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO, sabbatical options, and flexible working arrangements'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Learning & Development',
      description: 'Conference budgets, online courses, and professional development support'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Amazing Culture',
      description: 'Team events, flexible workspace, and collaborative environment'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Job Security',
      description: 'Stable funding, growing market, and long-term career growth opportunities'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Backend Engineer (Go)',
      department: 'Engineering',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build scalable microservices for our medical AI platform using Go, Kubernetes, and cloud technologies.',
      requirements: [
        'Strong experience with Go, Docker, and Kubernetes',
        'Experience with healthcare/medical data systems',
        'Knowledge of HIPAA compliance and security best practices',
        'Microservices architecture experience'
      ],
      responsibilities: [
        'Design and implement high-performance backend services',
        'Ensure HIPAA compliance and data security',
        'Collaborate with AI team on model deployment',
        'Optimize system performance and scalability'
      ]
    },
    {
      title: 'ML Engineer - Computer Vision',
      department: 'AI & Research',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and optimize deep learning models for medical imaging analysis using PyTorch and modern ML infrastructure.',
      requirements: [
        'PhD/MS in Computer Science, ML, or related field',
        'Experience with PyTorch, computer vision, and medical imaging',
        'Publication record in top-tier ML conferences',
        'Experience with MLOps and model deployment'
      ],
      responsibilities: [
        'Design and train state-of-the-art computer vision models',
        'Implement explainable AI techniques for medical applications',
        'Collaborate with clinical team on model validation',
        'Optimize model performance for production deployment'
      ]
    },
    {
      title: 'Frontend Engineer (React/TypeScript)',
      department: 'Engineering',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build intuitive user interfaces for our clinical intelligence platform using React, TypeScript, and modern web technologies.',
      requirements: [
        'Strong experience with React, TypeScript, and modern JavaScript',
        'Experience with medical/healthcare user interfaces',
        'Knowledge of accessibility standards and best practices',
        'Experience with data visualization and complex UIs'
      ],
      responsibilities: [
        'Develop responsive and accessible user interfaces',
        'Create data visualization components for medical imaging',
        'Collaborate with UX designers and clinical users',
        'Implement real-time features and notifications'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for our enterprise medical AI platform.',
      requirements: [
        'Experience with Kubernetes, Docker, and cloud platforms (GCP preferred)',
        'Infrastructure as Code experience (Terraform, Helm)',
        'CI/CD pipeline management and monitoring',
        'Security and compliance knowledge (HIPAA, SOC2)'
      ],
      responsibilities: [
        'Manage Kubernetes clusters and microservices deployment',
        'Implement security and compliance controls',
        'Monitor system performance and reliability',
        'Automate deployment and scaling processes'
      ]
    },
    {
      title: 'Clinical Affairs Manager',
      department: 'Clinical Affairs',
      location: 'Baku, Azerbaijan',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Lead clinical trials, regulatory submissions, and partnerships with medical institutions.',
      requirements: [
        'Advanced degree in life sciences or related field',
        'Experience with medical device clinical trials',
        'Knowledge of FDA, CE marking, and international regulations',
        'Strong project management and communication skills'
      ],
      responsibilities: [
        'Design and execute clinical validation studies',
        'Manage regulatory submissions and approvals',
        'Build relationships with key opinion leaders',
        'Coordinate with clinical partners and institutions'
      ]
    },
    {
      title: 'Product Manager - AI/ML',
      department: 'Business',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI-powered clinical intelligence platform.',
      requirements: [
        'Experience with AI/ML product management',
        'Healthcare or medical device industry experience',
        'Strong analytical and strategic thinking skills',
        'Experience working with clinical users and stakeholders'
      ],
      responsibilities: [
        'Define product strategy and roadmap',
        'Collaborate with clinical users to understand needs',
        'Work with engineering teams to prioritize features',
        'Analyze product performance and user feedback'
      ]
    },
    {
      title: 'Research Scientist - Explainable AI',
      department: 'AI & Research',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop novel explainable AI techniques for medical imaging applications.',
      requirements: [
        'PhD in Computer Science, ML, or related field',
        'Research experience in explainable AI or interpretable ML',
        'Strong publication record in top conferences',
        'Experience with medical imaging applications'
      ],
      responsibilities: [
        'Research novel explainable AI techniques',
        'Publish research in top-tier conferences and journals',
        'Collaborate with product team on technology transfer',
        'Present research at conferences and workshops'
      ]
    },
    {
      title: 'QA Engineer - Healthcare Systems',
      department: 'Engineering',
      location: 'Baku, Azerbaijan / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure quality and reliability of our medical AI platform through comprehensive testing strategies.',
      requirements: [
        'Experience with healthcare/medical software testing',
        'Knowledge of medical device quality standards (ISO 13485)',
        'Automated testing and CI/CD experience',
        'Understanding of HIPAA and privacy requirements'
      ],
      responsibilities: [
        'Develop comprehensive testing strategies',
        'Implement automated testing frameworks',
        'Ensure compliance with medical device standards',
        'Collaborate with clinical team on validation testing'
      ]
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => 
        position.department.toLowerCase().includes(selectedDepartment)
      );

  const teamTestimonials = [
    {
      name: 'Rajab Iskandarli',
      role: 'Lead AI Engineer',
      testimonial: 'Working at Skolyn feels like being at the forefront of a revolution. Every day, I know my work is directly improving patient outcomes.',
      joinedYear: '2025'
    },
    {
      name: 'Habib Mammadov',
      role: 'Backend Engineer',
      testimonial: 'The technical challenges are incredibly rewarding, and the team culture is collaborative and supportive. Plus, the mission is deeply meaningful.',
      joinedYear: '2025'
    },
    {
      name: 'Dr. Nurgul Abbasova',
      role: 'Clinical Specialist',
      testimonial: 'As a practicing radiologist, I love how Skolyn truly understands clinical workflows. We\'re building tools that clinicians actually want to use.',
      joinedYear: '2025'
    }
  ];

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">Join Our Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030f4f] mb-6">
            Build the Future of Healthcare
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a mission-driven team of world-class engineers, researchers, and clinicians 
            working to revolutionize medical diagnostics through explainable AI.
          </p>
        </div>

        {/* Why Work at Skolyn */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-12">
            Why Choose Skolyn?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#00A99D]/10 rounded-full text-[#00A99D]">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-[#030f4f] mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-12">
            Meet the Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#030f4f] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#030f4f]">{testimonial.name}</h4>
                      <p className="text-sm text-[#00A99D]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base italic mb-4">"{testimonial.testimonial}"</p>
                  <p className="text-xs text-gray-500">Joined in {testimonial.joinedYear}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-8">
            Open Positions
          </h3>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.id ? "default" : "outline"}
                onClick={() => setSelectedDepartment(dept.id)}
                className={selectedDepartment === dept.id 
                  ? "bg-[#00A99D] hover:bg-[#00A99D]/90" 
                  : "hover:border-[#00A99D] hover:text-[#00A99D]"
                }
              >
                {dept.label} ({dept.count})
              </Button>
            ))}
          </div>

          {/* Position Cards */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-[#030f4f] mb-2">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className="bg-[#00A99D] text-white">
                          {position.department}
                        </Badge>
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.experience}</Badge>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                    </div>
                    <Button className="bg-[#00A99D] hover:bg-[#00A99D]/90 mt-4 md:mt-0">
                      <Mail className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-[#030f4f] mb-3">Requirements:</h5>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-[#00A99D] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-[#030f4f] mb-3">Responsibilities:</h5>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-[#00A99D] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-[#030f4f] text-white rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">
            Don't See the Perfect Role?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and 
            tell us how you'd like to contribute to the future of medical AI.
          </p>
         <Button
  asChild
  className="bg-[#00A99D] hover:bg-[#00A99D]/90"
>
  <a
    href="mailto:careers@skolyn.se"
    aria-label="Send General Application"
  >
    <Mail className="h-4 w-4 mr-2" />
    Send General Application
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};

export default CareersSection;

