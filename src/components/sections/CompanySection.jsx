import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Target, 
  Linkedin,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

const CompanySection = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Executive Officer & Co-Founder',
      background: 'Former McKinsey Partner specializing in healthcare transformation',
      education: 'Harvard Medical School MD, Wharton MBA',
      bio: 'Sarah brings 15+ years of experience in healthcare strategy and digital transformation. She previously led McKinsey\'s Global Healthcare Practice and has advised Fortune 500 companies on AI adoption in clinical settings.',
      linkedin: '#',
      expertise: ['Healthcare Strategy', 'Digital Transformation', 'Clinical Operations']
    },
    {
      name: 'Dr. Alex Chen',
      role: 'Chief Technology Officer & Co-Founder',
      background: 'Former Senior Staff Engineer at Google AI, Computer Vision Research Lead',
      education: 'Stanford PhD Computer Science, MIT BS Electrical Engineering',
      bio: 'Alex is a renowned expert in medical AI with 20+ publications in top-tier journals. He previously led Google\'s medical imaging AI initiatives and holds 8 patents in computer vision and machine learning.',
      linkedin: '#',
      expertise: ['Medical AI', 'Computer Vision', 'Machine Learning']
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Chief Medical Officer',
      background: 'Board-certified Radiologist with 15+ years at Mayo Clinic',
      education: 'Johns Hopkins MD, Harvard Radiology Residency',
      bio: 'Maria is a practicing radiologist who understands the daily challenges clinicians face. She has published extensively on AI in radiology and serves on the American College of Radiology\'s AI Committee.',
      linkedin: '#',
      expertise: ['Radiology', 'Clinical Workflow', 'Medical Education']
    },
    {
      name: 'James Thompson',
      role: 'Chief Financial Officer',
      background: 'Former VP Finance at Philips Healthcare, CPA, CFA',
      education: 'University of Pennsylvania Wharton MBA, Duke University BS',
      bio: 'James brings deep healthcare industry financial expertise with a track record of scaling MedTech companies from startup to IPO. He previously managed $2B+ in healthcare technology investments.',
      linkedin: '#',
      expertise: ['Financial Strategy', 'Healthcare Economics', 'Capital Markets']
    }
  ];

  const companyValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Patient-First',
      description: 'Every decision we make is guided by its impact on patient outcomes and safety.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Clinical Excellence',
      description: 'We set the highest standards for accuracy, reliability, and clinical validation.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Clinician Partnership',
      description: 'We build with clinicians, not for them, ensuring our solutions fit real workflows.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'We strive to democratize access to world-class diagnostic capabilities worldwide.'
    }
  ];

 const milestones = [
    {
      year: '2025',
      quarter: 'Q3',
      title: 'Company Founded',
      description: 'Skolyn founded by AI researchers and clinical experts'
    },
    {
     year: '2025',
      quarter: 'Q3',
      title: 'Innoland Partnership',
      description: 'Accepted into Azerbaijan\'s premier startup incubator'
    },
    {
    year: '2025',
      quarter: 'Q4',
      title: 'Pre-Seed Funding',
      description: 'Secured initial funding from strategic healthcare investors'
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'First AI Models',
      description: 'Deployed initial breast imaging AI models for clinical validation'
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'Clinical Partnerships',
      description: 'Established partnerships with leading medical institutions'
    },
    {
      year: '2026',
      quarter: 'Q2',
      title: 'Platform Launch',
      description: 'Beta launch of comprehensive clinical intelligence platform'
    }
  ];

  return (
    <section id="company" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">Our Story</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030f4f] mb-6">
            Building the Future of Medical AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded by a team of AI researchers, clinicians, and healthcare executives, 
            Skolyn was born from a shared vision: to create AI that clinicians can trust 
            with their patients' lives.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#030f4f] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To revolutionize medical diagnostics through explainable AI that enhances 
                clinical decision-making while maintaining the human touch that defines 
                compassionate healthcare.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that AI should augment, not replace, clinical expertise. Our 
                platform is designed to give clinicians superhuman capabilities while 
                preserving their autonomy and professional judgment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {companyValues.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#00A99D]/10 rounded-full text-[#00A99D]">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-[#030f4f] mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-12">
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-[#030f4f] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-[#030f4f] mb-1">
                        {leader.name}
                      </CardTitle>
                      <CardDescription className="text-[#00A99D] font-semibold mb-2">
                        {leader.role}
                      </CardDescription>
                      <p className="text-sm text-gray-600">{leader.background}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#00A99D]">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#030f4f]">Education:</p>
                    <p className="text-sm text-gray-600">{leader.education}</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#030f4f] mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#00A99D] rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-[#00A99D] text-white">{milestone.year}</Badge>
                          <Badge variant="outline">{milestone.quarter}</Badge>
                        </div>
                        <h4 className="font-bold text-[#030f4f] mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#00A99D] rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Azerbaijan Commitment */}
        <div className="bg-[#030f4f] text-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Our Commitment to <span className="text-[#00A99D]">Azerbaijan</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a proudly Azerbaijani company, we are committed to advancing our nation's 
              position as a leader in healthcare technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Local Talent Development',
                description: 'Training the next generation of AI and healthcare professionals in Azerbaijan'
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: 'Healthcare Infrastructure',
                description: 'Improving diagnostic capabilities across Azerbaijan\'s medical institutions'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'National Technology Leadership',
                description: 'Positioning Azerbaijan as a regional hub for medical AI innovation'
              }
            ].map((commitment, index) => (
              <Card key={index} className="bg-white/10 border-gray-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#00A99D] rounded-full">
                      {commitment.icon}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">{commitment.title}</h4>
                  <p className="text-gray-300 text-sm">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;