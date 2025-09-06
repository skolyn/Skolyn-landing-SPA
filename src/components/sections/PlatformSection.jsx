import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Brain, 
  Eye, 
  FileText, 
  Activity, 
  Zap, 
  Target, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

const PlatformSection = () => {
  const [activeFeature, setActiveFeature] = useState('triage');

  const features = [
    {
      id: 'triage',
      title: 'Smart Worklist & AI Triage',
      icon: <Zap className="h-8 w-8" />,
      description: 'Intelligent case prioritization that identifies critical findings instantly',
      details: 'Our AI-powered triage system analyzes incoming studies in real-time, automatically prioritizing critical cases such as acute strokes, pulmonary embolisms, and fractures. The system reduces time-to-diagnosis for emergency cases by 67%.',
      benefits: ['67% faster emergency diagnosis', 'Automatic critical finding alerts', 'Intelligent case routing']
    },
    {
      id: 'diagnostic',
      title: 'Multi-Modal Diagnostic Core',
      icon: <Brain className="h-8 w-8" />,
      description: 'Comprehensive AI analysis across all major imaging modalities',
      details: 'Four specialized modules (Breast, Neuro, Prostate, MSK) each trained on millions of cases. Each module provides subspecialty-level analysis with explainable findings and confidence scores.',
      benefits: ['4 specialized modules', '99.3% diagnostic accuracy', 'Subspecialty-level analysis']
    },
    {
      id: 'explainable',
      title: 'Explainable AI Engine',
      icon: <Eye className="h-8 w-8" />,
      description: 'Visual heatmaps and detailed explanations for every AI decision',
      details: 'Our proprietary XAI technology generates visual explanations for every finding, showing exactly where and why the AI detected abnormalities. Includes uncertainty quantification and confidence intervals.',
      benefits: ['Visual explanation heatmaps', 'Uncertainty quantification', 'Audit trail for every decision']
    },
    {
      id: 'longitudinal',
      title: 'Longitudinal Analysis',
      icon: <Activity className="h-8 w-8" />,
      description: 'Track disease progression and treatment response over time',
      details: 'Automated comparison of current studies with historical exams, providing quantitative analysis of disease progression, treatment response, and long-term patient outcomes.',
      benefits: ['Automated progression tracking', 'Treatment response analysis', 'Long-term outcome prediction']
    },
    {
      id: 'reporting',
      title: 'AI-Assisted Reporting',
      icon: <FileText className="h-8 w-8" />,
      description: 'Generate comprehensive, structured reports in seconds',
      details: 'AI-generated draft reports that follow institutional templates and imaging guidelines. Radiologists can review, edit, and approve reports 75% faster than traditional dictation.',
      benefits: ['75% faster reporting', 'Structured templates', 'Quality assurance checks']
    }
  ];

  const currentFeature = features.find(f => f.id === activeFeature);

  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">The Skolyn Platform</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030f4f] mb-6">
            Clinical Intelligence, Redefined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform that transforms how clinicians interact with medical imaging, 
            providing AI-powered insights with unprecedented transparency and trust.
          </p>
        </div>

        {/* Interactive Platform Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Feature List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#030f4f] mb-6">Platform Capabilities</h3>
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? 'border-[#00A99D] border-2 bg-[#00A99D]/5' 
                    : 'border-gray-200 hover:border-[#00A99D]/50'
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activeFeature === feature.id 
                        ? 'bg-[#00A99D] text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#030f4f]">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Feature Details */}
          <div className="space-y-6">
            <Card className="border-2 border-[#00A99D]">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-[#00A99D] text-white rounded-lg">
                    {currentFeature.icon}
                  </div>
                  <CardTitle className="text-xl text-[#030f4f]">
                    {currentFeature.title}
                  </CardTitle>
                </div>
                
                {/* Mock UI Preview */}
                <div className="bg-gray-900 rounded-lg p-6 mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">Skolyn Clinical Intelligence Platform</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-[#00A99D]" />
                        <span className="text-white text-sm font-medium">Critical Finding</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div className="bg-[#00A99D] h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-gray-400 text-xs">Confidence: 87%</span>
                    </div>
                    <div className="bg-gray-800 rounded p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm font-medium">Analysis</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Normal</span>
                          <span className="text-green-400">94%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Abnormal</span>
                          <span className="text-red-400">6%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentFeature.details}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#030f4f]">Key Benefits:</h4>
                  {currentFeature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#00A99D]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demo Video Placeholder */}
            <Card className="bg-[#030f4f] text-white">
              <CardContent className="p-8 text-center">
                <Play className="h-16 w-16 mx-auto mb-4 text-[#00A99D]" />
                <h4 className="text-xl font-bold mb-2">Watch Platform Demo</h4>
                <p className="text-gray-300 mb-6">
                  See the Skolyn platform in action with our 90-second product demo
                </p>
                <Button className="bg-[#00A99D] hover:bg-[#00A99D]/90">
                  Play Demo Video <Play className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-12">
            Platform Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Diagnostic Accuracy', value: '99.3%', icon: <Target className="h-8 w-8" /> },
              { label: 'Report Time Reduction', value: '75%', icon: <Clock className="h-8 w-8" /> },
              { label: 'Critical Case Detection', value: '67%', icon: <Zap className="h-8 w-8" /> },
              { label: 'Clinician Satisfaction', value: '94%', icon: <CheckCircle className="h-8 w-8" /> }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#00A99D]/10 rounded-full text-[#00A99D]">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#030f4f] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;