import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Shield, Users, Database, CheckCircle, AlertCircle } from 'lucide-react';

const GDPRCompliance = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#030f4f] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Website
          </Button>
          
          <div className="flex items-center space-x-4 mb-4">
            <Shield className="h-12 w-12 text-[#00A99D]" />
            <div>
              <h1 className="text-3xl font-bold">GDPR Compliance</h1>
              <p className="text-gray-300">European data protection and privacy compliance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">Our GDPR Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Skolyn LLC is committed to protecting the privacy and personal data of all individuals in the European Union. 
              We comply with the General Data Protection Regulation (GDPR) to ensure your data rights are respected and protected. 
              This page outlines our GDPR compliance measures and your rights under European data protection law.
            </p>
          </CardContent>
        </Card>

        {/* GDPR Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#030f4f] mb-6">GDPR Principles We Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Lawfulness, Fairness & Transparency",
                description: "We process personal data lawfully, fairly, and transparently"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Purpose Limitation",
                description: "Data is collected for specified, explicit, and legitimate purposes"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Data Minimization",
                description: "We only collect data that is necessary for our stated purposes"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Accuracy",
                description: "We keep personal data accurate and up to date"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Storage Limitation",
                description: "Data is kept only as long as necessary for the stated purposes"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                title: "Integrity & Confidentiality",
                description: "We ensure appropriate security of personal data"
              }
            ].map((principle, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {principle.icon}
                    <div>
                      <h3 className="font-semibold text-[#030f4f] mb-1">{principle.title}</h3>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f] flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Your Rights Under GDPR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject under GDPR, you have the following rights regarding your personal data:
            </p>
            
            <div className="space-y-4">
              {[
                {
                  right: "Right of Access (Article 15)",
                  description: "You have the right to request copies of your personal data and information about how we process it."
                },
                {
                  right: "Right to Rectification (Article 16)",
                  description: "You have the right to request correction of inaccurate or incomplete personal data."
                },
                {
                  right: "Right to Erasure (Article 17)",
                  description: "You have the right to request deletion of your personal data under certain circumstances."
                },
                {
                  right: "Right to Restrict Processing (Article 18)",
                  description: "You have the right to request limitation of how we process your personal data."
                },
                {
                  right: "Right to Data Portability (Article 20)",
                  description: "You have the right to receive your personal data in a structured, machine-readable format."
                },
                {
                  right: "Right to Object (Article 21)",
                  description: "You have the right to object to our processing of your personal data for certain purposes."
                },
                {
                  right: "Rights Related to Automated Decision-Making (Article 22)",
                  description: "You have rights regarding automated decision-making, including AI-based processing."
                }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-[#00A99D] pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">{item.right}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Legal Basis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">Legal Basis for Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process personal data based on the following legal grounds under GDPR Article 6:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for specific purposes</li>
              <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you</li>
              <li><strong>Legal Obligation:</strong> Where we need to comply with legal or regulatory requirements</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests</li>
              <li><strong>Vital Interests:</strong> Where processing is necessary to protect someone's life (healthcare context)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Protection Measures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f] flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Technical and Organizational Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to ensure data security:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#030f4f] mb-3">Technical Measures</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>End-to-end encryption</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security updates</li>
                  <li>Vulnerability assessments</li>
                  <li>Backup and disaster recovery</li>
                  <li>Network security monitoring</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#030f4f] mb-3">Organizational Measures</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Privacy by design and default</li>
                  <li>Data Protection Impact Assessments</li>
                  <li>Staff training and awareness</li>
                  <li>Data processing agreements</li>
                  <li>Incident response procedures</li>
                  <li>Regular compliance audits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Transfers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-blue-800 font-semibold">Data Transfer Safeguards</p>
                  <p className="text-blue-700 text-sm mt-1">
                    When we transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We may transfer your personal data to countries outside the European Economic Area. 
              When we do, we ensure adequate protection through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>European Commission adequacy decisions</li>
              <li>Standard Contractual Clauses (SCCs)</li>  
              <li>Binding Corporate Rules</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact DPO */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">Data Protection Officer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Data Protection Officer (DPO) is responsible for overseeing our GDPR compliance. 
              You can contact our DPO for any data protection matters:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer</strong><br />
                Skolyn LLC<br />
                Z.Nudirəliyev küç. 79, Nərimanov rayonu<br />
                Bakı, Azərbaycan, AZ1078<br />
                Email: dpo@skolyn.se<br />
                Phone: +994 12 555 0123
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Exercise Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">How to Exercise Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of your GDPR rights, please:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact us using the information provided above</li>
              <li>Specify which right you wish to exercise</li>
              <li>Provide sufficient information to verify your identity</li>
              <li>Include relevant details about your request</li>
            </ol>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Response Time:</strong> We will respond to your request within one month of receipt. 
                In complex cases, we may extend this period by up to two additional months.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Supervisory Authority */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#030f4f]">Supervisory Authority</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              If you are not satisfied with our response to your data protection concerns, you have the right 
              to lodge a complaint with your local supervisory authority. For EU residents, you can find your 
              relevant supervisory authority at the European Data Protection Board website.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            This GDPR compliance information is effective as of January 1, 2025. We may update this information 
            to reflect changes in our practices or applicable law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;