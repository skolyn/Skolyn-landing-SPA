import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = ({ onBack }) => {
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
            <Scale className="h-12 w-12 text-[#00A99D]" />
            <div>
              <h1 className="text-3xl font-bold">Terms of Service</h1>
              <p className="text-gray-300">Legal terms governing use of Skolyn services</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <div className="mb-8">
          <p className="text-gray-600">
            <strong>Last Updated:</strong> January 1, 2025 | 
            <strong> Effective Date:</strong> January 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-[#030f4f]">Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Skolyn LLC's Clinical Intelligence Platform 
              and related services. By accessing or using our services, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-[#030f4f] mb-2">Professional Use</h3>
              <p className="text-sm text-gray-600">Our platform is designed for licensed healthcare professionals</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-[#00A99D] mb-3" />
              <h3 className="font-semibold text-[#030f4f] mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-gray-600">All services comply with healthcare privacy regulations</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">1. Description of Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Skolyn provides a Clinical Intelligence Platform that utilizes artificial intelligence to assist 
                healthcare professionals in medical imaging analysis and diagnosis. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>AI-powered medical imaging analysis</li>
                <li>Explainable AI diagnostics and reporting</li>
                <li>Clinical workflow optimization tools</li>
                <li>Integration with existing healthcare systems</li>
                <li>Training and support services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">2. User Eligibility and Account Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Eligibility Requirements</h4>
                <p className="text-gray-700 leading-relaxed">
                  To use our services, you must be:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>A licensed healthcare professional or authorized healthcare organization</li>
                  <li>At least 18 years of age</li>
                  <li>Legally capable of entering into binding agreements</li>
                  <li>Compliant with all applicable laws and regulations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Account Security</h4>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. You must notify us immediately of any 
                  unauthorized use of your account.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f] flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                3. Clinical Use and Professional Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-amber-800 font-semibold">
                  IMPORTANT: AI ASSISTANCE DISCLAIMER
                </p>
                <p className="text-amber-700 text-sm mt-1">
                  Our AI platform provides assistance and insights but does not replace professional medical judgment. 
                  All diagnostic decisions remain the sole responsibility of the licensed healthcare professional.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You will use the platform only within your scope of professional practice</li>
                <li>Final diagnostic and treatment decisions remain your professional responsibility</li>
                <li>You will validate AI-generated insights using your clinical expertise</li>
                <li>You will maintain compliance with all applicable medical standards and regulations</li>
                <li>You will not rely solely on AI recommendations for patient care decisions</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">4. Data Privacy and Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to protecting patient data and maintaining HIPAA compliance:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All patient data is encrypted in transit and at rest</li>
                <li>Access controls ensure only authorized personnel can access data</li>
                <li>Audit logs track all system access and activities</li>
                <li>Business Associate Agreements (BAAs) are available for covered entities</li>
                <li>Data retention policies comply with healthcare regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">5. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Skolyn platform, including all software, algorithms, and documentation, is protected by 
                intellectual property laws. You are granted a limited, non-exclusive license to use our 
                services in accordance with these Terms.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Your Data Rights</h4>
                <p className="text-gray-700 text-sm">
                  You retain all rights to your patient data and clinical information. We do not claim 
                  ownership of any patient data processed through our platform.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKOLYN LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS 
                OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO YOUR USE OF OUR SERVICES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from your use of our services shall not 
                exceed the amount paid by you to Skolyn in the twelve (12) months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">7. Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Azerbaijan. 
                Any disputes arising out of or relating to these Terms or your use of our services shall be resolved 
                through binding arbitration in Baku, Azerbaijan, or in the competent courts of Azerbaijan.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">8. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Skolyn LLC</strong><br />
                  Legal Department<br />
                 79 Z. Nudiraliyev St., Baku, Azerbaijan, AZ1078<br />
                  Email: legal@skolyn.se<br />
                  Phone: +994 51 539 6228
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            By continuing to use our services, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;