import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  User,
  Building,
  Users,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

const DemoSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    useCase: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email subject and body with form data
    const subject = `Demo Request - ${formData.firstName} ${formData.lastName} from ${formData.company}`;
    const body = `Hello Skolyn Team,

I would like to request a personalized demo of the Skolyn Clinical Intelligence Platform.

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Company/Institution: ${formData.company}
- Role: ${formData.role}
- Phone: ${formData.phone || 'Not provided'}

Demo Details:
- Primary Use Case: ${formData.useCase}
- Additional Information: ${formData.message || 'None provided'}

Please contact me to schedule a demonstration at your earliest convenience.

Best regards,
${formData.firstName} ${formData.lastName}`;

    // Create mailto link with prefilled data
    const mailtoLink = `mailto:leads@skolyn.se?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        useCase: '',
        message: ''
      });
    }, 3000);
  };

  const demoHighlights = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: '30-Minute Demo',
      description: 'Comprehensive platform walkthrough with our clinical experts'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Customized for You',
      description: 'Tailored demonstration based on your specific clinical needs'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Live Q&A',
      description: 'Direct access to our product and clinical teams for questions'
    }
  ];

  const contactInfo = {
    email: 'leads@skolyn.se',
    phone: '+994 12 555 0123',
    address: 'INNOland Incubation Center, Baku, Azerbaijan',
    businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM (AZT)'
  };

  const socialLinks = [
    { platform: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: '#' },
    { platform: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#' },
    { platform: 'Website', icon: <Globe className="h-5 w-5" />, url: '#' }
  ];

  if (isSubmitted) {
    return (
      <section id="demo" className="py-24 bg-[#030f4f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-[#00A99D] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300">
              Your demo request has been submitted successfully. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
          </div>
          
          <Card className="bg-white/10 border-gray-700 text-white max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">What happens next?</h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#00A99D] mr-2" />
                  Team review within 2 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#00A99D] mr-2" />
                  Demo scheduling within 24 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#00A99D] mr-2" />
                  Customized demo preparation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" className="py-24 bg-[#030f4f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">Request a Demo</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Skolyn in <span className="text-[#00A99D]">Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience firsthand how our Clinical Intelligence Platform can transform 
            your radiology workflow. Book a personalized demonstration with our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Request Form */}
          <Card className="bg-white text-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl text-[#030f4f]">
                Request Your Personalized Demo
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll schedule a demonstration tailored to your needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                    placeholder="john.doe@hospital.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Institution *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                      placeholder="City General Hospital"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Role *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="radiologist">Radiologist</option>
                      <option value="radiology-tech">Radiology Technologist</option>
                      <option value="it-director">IT Director</option>
                      <option value="cio">Chief Information Officer</option>
                      <option value="administrator">Hospital Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Use Case *</label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent"
                  >
                    <option value="">Select primary interest</option>
                    <option value="breast-imaging">Breast Imaging</option>
                    <option value="neuro-imaging">Neuro Imaging</option>
                    <option value="musculoskeletal">Musculoskeletal</option>
                    <option value="prostate-imaging">Prostate Imaging</option>
                    <option value="workflow-optimization">Workflow Optimization</option>
                    <option value="ai-triage">AI Triage & Prioritization</option>
                    <option value="reporting">AI-Assisted Reporting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent resize-none"
                    placeholder="Tell us about your current challenges, volume, or specific questions you'd like addressed during the demo..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#00A99D] hover:bg-[#00A99D]/90 text-lg py-3"
                >
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Demo Information & Contact */}
          <div className="space-y-8">
            {/* What to Expect */}
            <Card className="bg-white/10 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-[#00A99D] rounded-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-gray-300 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription className="text-gray-300">
                  Prefer to speak directly? Reach out to our team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#00A99D]" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#00A99D]" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#00A99D] mt-1" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#00A99D]" />
                    <span className="text-sm">{contactInfo.businessHours}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-300 mb-4">Follow us:</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="text-gray-300 hover:text-[#00A99D] hover:bg-white/10"
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/10 border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#00A99D] mb-1">500+</div>
                    <div className="text-xs text-gray-300">Demos Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00A99D] mb-1">24hr</div>
                    <div className="text-xs text-gray-300">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00A99D] mb-1">95%</div>
                    <div className="text-xs text-gray-300">Customer Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00A99D] mb-1">50+</div>
                    <div className="text-xs text-gray-300">Partner Institutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;