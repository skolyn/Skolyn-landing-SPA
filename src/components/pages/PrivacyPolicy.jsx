import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
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
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-gray-300">Your privacy and data protection rights</p>
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
            <CardTitle className="text-[#030f4f]">Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              At Skolyn LLC, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website, use our Clinical Intelligence Platform, or engage with our services.
            </p>
          </CardContent>
        </Card>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 text-[#00A99D] mx-auto mb-3" />
              <h3 className="font-semibold text-[#030f4f] mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">We clearly explain what data we collect and why</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Lock className="h-8 w-8 text-[#00A99D] mx-auto mb-3" />
              <h3 className="font-semibold text-[#030f4f] mb-2">Security</h3>
              <p className="text-sm text-gray-600">Your data is protected with enterprise-grade security</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <UserCheck className="h-8 w-8 text-[#00A99D] mx-auto mb-3" />
              <h3 className="font-semibold text-[#030f4f] mb-2">Control</h3>
              <p className="text-sm text-gray-600">You have full control over your personal information</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Request a demo or consultation</li>
                  <li>Register for our platform</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Apply for employment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h4>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, 
                  including information about your web browser, IP address, time zone, and some of the cookies 
                  that are installed on your device.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you marketing and promotional communications</li>
                <li>Find and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">3. Data Security & HIPAA Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a healthcare technology company, we implement robust security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>End-to-end encryption for all data transmission</li>
                <li>HIPAA-compliant infrastructure and procedures</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data storage with backup and recovery systems</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">4. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">5. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Skolyn is based in Azerbaijan, and we may transfer, store, and process your information in 
                countries other than your own. We ensure that such transfers comply with applicable data 
                protection laws and implement appropriate safeguards to protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#030f4f]">6. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Skolyn LLC</strong><br />
                  Z.Nudirəliyev küç. 79, Nərimanov rayonu<br />
                  Bakı, Azərbaycan, AZ1078<br />
                  Email: privacy@skolyn.se<br />
                  Phone: +994 12 555 0123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            This Privacy Policy is governed by the laws of the Republic of Azerbaijan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;