import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { 
  Cloud, 
  Database, 
  Cpu, 
  Network, 
  Lock, 
  Shield, 
  Eye, 
  Brain,
  BarChart3,
  Zap,
  CheckCircle,
  Globe
} from 'lucide-react';

const TechnologySection = () => {
  const techPillars = [
    {
      id: 'architecture',
      title: 'Cloud-Native Architecture',
      icon: <Cloud className="h-8 w-8" />,
      description: 'Scalable, resilient infrastructure built on Google Cloud Platform',
      details: {
        overview: 'Our platform is built using modern cloud-native principles, ensuring maximum scalability, reliability, and performance. We leverage Google Cloud Platform\'s enterprise-grade infrastructure to deliver consistent, low-latency performance across global markets.',
        technologies: ['Kubernetes', 'Docker', 'Microservices', 'gRPC', 'Istio Service Mesh'],
        benefits: [
          'Auto-scaling based on demand',
          '99.99% uptime SLA',
          'Global load balancing',
          'Disaster recovery across regions'
        ]
      }
    },
    {
      id: 'ai',
      title: 'AI Research Engine',
      icon: <Brain className="h-8 w-8" />,
      description: 'State-of-the-art deep learning models trained on millions of medical images',
      details: {
        overview: 'Our AI models combine the latest advances in computer vision, natural language processing, and explainable AI. We use ensemble methods with CNNs, Vision Transformers, and custom architectures optimized for medical imaging.',
        technologies: ['PyTorch', 'TensorFlow', 'ONNX Runtime', 'Triton Inference Server', 'MLflow'],
        benefits: [
          '99.3% diagnostic accuracy',
          'Sub-second inference times',
          'Continuous learning capabilities',
          'Model versioning and rollback'
        ]
      }
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <Lock className="h-8 w-8" />,
      description: 'Enterprise-grade security with HIPAA, GDPR, and ISO 27001 compliance',
      details: {
        overview: 'Security and privacy are fundamental to our platform design. We implement defense-in-depth strategies with end-to-end encryption, zero-trust networking, and comprehensive audit logging.',
        technologies: ['Vault', 'OAuth 2.0', 'mTLS', 'RBAC', 'Data Loss Prevention'],
        benefits: [
          'End-to-end encryption',
          'Zero-trust security model',
          'Automated compliance monitoring',
          'Comprehensive audit trails'
        ]
      }
    },
    {
      id: 'ethics',
      title: 'Ethical AI Framework',
      icon: <Eye className="h-8 w-8" />,
      description: 'Bias auditing, uncertainty quantification, and clinician-in-control philosophy',
      details: {
        overview: 'We believe AI should augment, not replace, clinical judgment. Our ethical framework ensures fairness, transparency, and accountability in every AI decision through continuous bias monitoring and uncertainty quantification.',
        technologies: ['Fairness Indicators', 'LIME/SHAP', 'Bayesian Neural Networks', 'Adversarial Testing'],
        benefits: [
          'Continuous bias monitoring',
          'Uncertainty quantification',
          'Explainable AI outputs',
          'Human-in-the-loop design'
        ]
      }
    }
  ];

  const architectureDiagram = {
    layers: [
      { name: 'Presentation Layer', components: ['React Frontend', 'Mobile Apps', 'API Gateway'] },
      { name: 'Application Layer', components: ['Authentication Service', 'Workflow Engine', 'Report Generator'] },
      { name: 'AI/ML Layer', components: ['Inference Engine', 'Model Registry', 'Training Pipeline'] },
      { name: 'Data Layer', components: ['DICOM Storage', 'Metadata DB', 'Analytics DB'] },
      { name: 'Infrastructure Layer', components: ['Kubernetes', 'Load Balancers', 'Monitoring'] }
    ]
  };

  return (
    <section id="technology" className="py-24 bg-[#030f4f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">Technology Deep Dive</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-[#00A99D]">Scale</span> & <span className="text-[#00A99D]">Trust</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our technology stack combines cutting-edge AI research with enterprise-grade 
            infrastructure, ensuring both clinical excellence and operational reliability.
          </p>
        </div>

        {/* Technology Pillars */}
        <Tabs defaultValue="architecture" className="mb-16 ">
          <TabsList className="grid w-full grid-cols-4 bg-[#030f4f]/50">
            {techPillars.map((pillar) => (
              <TabsTrigger 
                key={pillar.id} 
                value={pillar.id}
                className="text-white data-[state=active]:bg-[#00A99D] data-[state=active]:text-white "
              >
                <div className="flex flex-col items-center space-y-2">
                  {pillar.icon}
                  <span className="hidden sm:block text-sm">{pillar.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {techPillars.map((pillar) => (
            <TabsContent key={pillar.id} value={pillar.id} className="mt-12 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Overview */}
                <Card className="bg-white/5 border-gray-700 text-white">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-[#00A99D] rounded-lg">
                        {pillar.icon}
                      </div>
                      <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-base">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {pillar.details.overview}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#00A99D]">Key Benefits:</h4>
                      {pillar.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#00A99D]" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card className="bg-white/5 border-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {pillar.details.technologies.map((tech, index) => (
                        <div key={index} className="bg-[#00A99D]/20 rounded-lg p-3 text-center">
                          <span className="text-[#00A99D] font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mock Architecture Visualization */}
                    <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                      <h5 className="text-[#00A99D] font-semibold mb-4">System Architecture</h5>
                      <div className="space-y-3">
                        {architectureDiagram.layers.map((layer, layerIndex) => (
                          <div key={layerIndex} className="border border-gray-700 rounded p-3">
                            <h6 className="text-white font-medium mb-2">{layer.name}</h6>
                            <div className="flex flex-wrap gap-2">
                              {layer.components.map((component, compIndex) => (
                                <Badge key={compIndex} variant="outline" className="text-gray-300 border-gray-600">
                                  {component}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Performance Metrics */}
        <div className="bg-white/5 rounded-2xl p-12 border border-gray-700">
          <h3 className="text-3xl font-bold text-center mb-12">
            Platform Performance & Scale
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                label: 'Processing Speed', 
                value: '<500ms', 
                icon: <Zap className="h-8 w-8" />,
                description: 'Average inference time'
              },
              { 
                label: 'Throughput', 
                value: '10,000+', 
                icon: <BarChart3 className="h-8 w-8" />,
                description: 'Studies processed daily'
              },
              { 
                label: 'Uptime', 
                value: '99.99%', 
                icon: <Shield className="h-8 w-8" />,
                description: 'Service availability'
              },
              { 
                label: 'Global Reach', 
                value: '15+', 
                icon: <Globe className="h-8 w-8" />,
                description: 'Data centers worldwide'
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#00A99D]/20 rounded-full text-[#00A99D]">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-[#00A99D] font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Innovation */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Continuous Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Research Publications',
                value: '25+',
                description: 'Peer-reviewed papers in top-tier journals'
              },
              {
                title: 'Patents Filed',
                value: '12',
                description: 'Proprietary AI and medical imaging innovations'
              },
              {
                title: 'Clinical Partnerships',
                value: '50+',
                description: 'Collaborations with leading medical institutions'
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 border-gray-700 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#00A99D] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold mb-2">
                    {stat.title}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;