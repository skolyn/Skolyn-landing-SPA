import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Settings, Clock, Users } from 'lucide-react';

const Login = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030f4f] to-[#030f4f]/80 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Website
        </Button>

        {/* Main Card */}
        <Card className="backdrop-blur-sm bg-white/95 shadow-2xl">
          <CardHeader className="text-center pb-8">
            {/* Skolyn Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#030f4f] rounded-2xl flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#030f4f] rounded-full border-dashed animate-spin"></div>
                </div>
              </div>
            </div>
            
            <CardTitle className="text-2xl font-bold text-[#030f4f] mb-2">
              Skolyn Clinical OS
            </CardTitle>
            <p className="text-gray-600">
              Early. Accurate. Trusted.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Work in Progress Message */}
            <div className="text-center p-8 bg-gradient-to-r from-[#00A99D]/10 to-[#030f4f]/10 rounded-xl border-2 border-dashed border-[#00A99D]/30">
              <Settings className="h-12 w-12 text-[#00A99D] mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-[#030f4f] mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Clinical Intelligence Platform is currently in development. 
                We're building something extraordinary for healthcare professionals.
              </p>
            </div>

            {/* Status Updates */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-700 font-medium">AI Models Training Complete</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700 font-medium">Security Framework Implemented</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-amber-700 font-medium">Clinical Validation in Progress</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-4 w-4 text-[#030f4f]" />
                <span className="font-semibold text-[#030f4f] text-sm">Expected Timeline</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Beta Launch</span>
                  <span className="font-medium">Q2 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Platform Release</span>
                  <span className="font-medium">Q4 2026</span>
                </div>
              </div>
            </div>

            {/* Early Access */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Interested in early access or partnership opportunities?
              </p>
              <Button 
                className="w-full bg-[#00A99D] hover:bg-[#00A99D]/90"
                onClick={() => window.location.href = 'mailto:demo@skolyn.se?subject=Early Access Interest'}
              >
                <Users className="h-4 w-4 mr-2" />
                Request Early Access
              </Button>
            </div>

            {/* Contact */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                For enterprise inquiries: 
                <a href="mailto:demo@skolyn.se" className="text-[#00A99D] hover:underline ml-1">
                  demo@skolyn.se
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">
            © 2025 Skolyn LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;