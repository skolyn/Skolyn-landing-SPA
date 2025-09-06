import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  Target, 
  BarChart3,
  Users,
  FileText,
  Brain
} from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingUp className="h-12 w-12 text-red-500" />,
      title: "The Data Deluge",
      subtitle: "Exponential Growth in Medical Imaging",
      description: "Medical imaging data is growing at an unprecedented rate of 30% annually. Radiologists are drowning in a sea of scans, with the average department processing 10,000+ studies monthly. This exponential growth far outpaces the availability of qualified radiologists, creating critical bottlenecks in patient care.",
      stats: [
        { label: "Annual Growth Rate", value: "30%" },
        { label: "Studies Per Month", value: "10,000+" },
        { label: "Radiologist Shortage", value: "15,000" }
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-500" />,
      title: "The Crisis of Cognitive Burden",
      subtitle: "Clinician Burnout and Diagnostic Fatigue",
      description: "Radiologists spend 75% of their time on routine cases that could be handled by AI, leaving insufficient time for complex diagnoses that truly require human expertise. This cognitive overload leads to burnout, with 40% of radiologists reporting symptoms of depression and anxiety.",
      stats: [
        { label: "Time on Routine Cases", value: "75%" },
        { label: "Burnout Rate", value: "40%" },
        { label: "Cases Per Day", value: "150+" }
      ]
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-red-600" />,
      title: "The Economic Impact",
      subtitle: "Cost of Inefficiency in Healthcare",
      description: "Delayed diagnoses cost the healthcare system billions annually. The average radiology report takes 4-6 hours to complete, causing treatment delays that increase mortality rates by 12%. Emergency departments lose $2.3M annually due to imaging backlogs.",
      stats: [
        { label: "Report Turnaround", value: "4-6 hrs" },
        { label: "Mortality Increase", value: "12%" },
        { label: "Annual ED Loss", value: "$2.3M" }
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "The Trust Imperative",
      subtitle: "Why Black Box AI Fails in Medicine",
      description: "Traditional AI systems are 'black boxes' that clinicians cannot trust with patient lives. 78% of radiologists refuse to use AI tools they cannot understand. Medical AI must be explainable, interpretable, and auditable to gain clinical acceptance and ensure patient safety.",
      stats: [
        { label: "Radiologists Rejecting Black Box AI", value: "78%" },
        { label: "Malpractice Risk Increase", value: "45%" },
        { label: "AI Accuracy Required", value: "99.5%" }
      ]
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#030f4f] mb-6">
            The Crisis in Modern Radiology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Healthcare is facing an unprecedented challenge. The volume of medical imaging data is 
            exploding while the number of qualified radiologists remains stagnant, creating a 
            perfect storm of delays, burnout, and compromised patient care.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 hover:border-[#00A99D] transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-[#030f4f] mb-2">
                      {problem.title}
                    </CardTitle>
                    <CardDescription className="text-[#00A99D] font-semibold text-base">
                      {problem.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {problem.description}
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  {problem.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#030f4f] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-[#030f4f] mb-4">
            The Solution Must Be Intelligent, Explainable, and Trusted
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Traditional approaches have failed. We need a new paradigm that combines the power of 
            AI with the transparency and trust that clinicians demand. This is why Skolyn exists.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-[#00A99D]">
              <Brain className="h-5 w-5" />
              <span className="font-semibold">Explainable AI</span>
            </div>
            <div className="flex items-center space-x-2 text-[#00A99D]">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Clinician-Centric Design</span>
            </div>
            <div className="flex items-center space-x-2 text-[#00A99D]">
              <FileText className="h-5 w-5" />
              <span className="font-semibold">Evidence-Based Reports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;