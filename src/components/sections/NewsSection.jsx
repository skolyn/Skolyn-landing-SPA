import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Calendar, 
  ArrowRight, 
  Newspaper, 
  Award, 
  Users, 
  Globe,
  ExternalLink,
  Play
} from 'lucide-react';

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsCategories = [
    { id: 'all', label: 'All News', count: 12 },
    { id: 'press', label: 'Press Releases', count: 5 },
    { id: 'thought', label: 'Thought Leadership', count: 4 },
    { id: 'events', label: 'Events & Webinars', count: 3 }
  ];

  const featuredNews = {
    title: 'Skolyn Announces Strategic Partnership with Leading Medical Centers',
    excerpt: 'Multi-institutional collaboration will accelerate clinical validation of next-generation AI diagnostic platform',
    date: '2024-03-20',
    category: 'Press Release',
    readTime: '3 min read',
    image: '/placeholder-news-featured.jpg'
  };

  const newsArticles = [
    {
      title: 'The Evolution of Explainable AI in Medical Imaging',
      excerpt: 'Why transparency and interpretability are becoming non-negotiable requirements for clinical AI adoption',
      date: '2024-03-18',
      category: 'Thought Leadership',
      author: 'Dr. Alex Chen',
      readTime: '8 min read',
      featured: false
    },
    {
      title: 'Skolyn Secures $2.5M Pre-Seed Funding Round',
      excerpt: 'Investment led by healthcare-focused VCs will accelerate product development and clinical trials',
      date: '2024-03-15',
      category: 'Press Release',
      author: 'Skolyn Communications',
      readTime: '4 min read',
      featured: false
    },
    {
      title: 'Addressing Bias in Medical AI: Our Approach to Fairness',
      excerpt: 'How we ensure our AI models work equitably across diverse patient populations',
      date: '2024-03-12',
      category: 'Thought Leadership',
      author: 'Dr. Maria Rodriguez',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'Upcoming Webinar: AI in Radiology - Myths vs Reality',
      excerpt: 'Join our panel of experts for an honest discussion about the current state and future of AI in medical imaging',
      date: '2024-03-25',
      category: 'Events & Webinars',
      author: 'Skolyn Events Team',
      readTime: '1 hour',
      featured: false
    },
    {
      title: 'Partnership Announcement: INNOland Incubation Program',
      excerpt: 'Skolyn selected for Azerbaijan\'s premier startup accelerator program',
      date: '2024-03-08',
      category: 'Press Release',
      author: 'Skolyn Communications',
      readTime: '3 min read',
      featured: false
    },
    {
      title: 'The Future of Radiology: Human-AI Collaboration',
      excerpt: 'How AI will augment rather than replace radiologists in the next decade',
      date: '2024-03-05',
      category: 'Thought Leadership',
      author: 'Dr. Sarah Mitchell',
      readTime: '7 min read',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'RSNA 2024 - Booth #3421',
      date: '2024-12-01',
      location: 'Chicago, IL',
      type: 'Conference',
      description: 'Visit us at the world\'s largest radiology conference'
    },
    {
      title: 'Healthcare AI Summit',
      date: '2024-11-15',
      location: 'Virtual',
      type: 'Speaking Engagement',
      description: 'Dr. Chen presenting on explainable AI in healthcare'
    },
    {
      title: 'Skolyn Product Demo Day',
      date: '2024-10-30',
      location: 'Baku, Azerbaijan',
      type: 'Product Demo',
      description: 'Exclusive demonstration for healthcare partners'
    }
  ];

  const mediaLogos = [
    { name: 'Healthcare IT News', logo: '/placeholder-media-1.jpg' },
    { name: 'AuntMinnie', logo: '/placeholder-media-2.jpg' },
    { name: 'Radiology Today', logo: '/placeholder-media-3.jpg' },
    { name: 'AJMC', logo: '/placeholder-media-4.jpg' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => 
        article.category.toLowerCase().includes(selectedCategory)
      );

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#00A99D] text-white mb-4">Newsroom</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#030f4f] mb-6">
            Latest News & Insights
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, thought leadership, and 
            company milestones from the Skolyn team.
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Featured Image */}
            <div className="bg-gradient-to-br from-[#030f4f] to-[#00A99D] p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <Newspaper className="h-20 w-20 mx-auto mb-4 opacity-20" />
                <p className="text-lg font-semibold">Featured Story</p>
              </div>
            </div>
            
            {/* Featured Content */}
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-[#030f4f] text-white">
                  {featuredNews.category}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(featuredNews.date).toLocaleDateString()}
                </div>
                <span className="text-gray-500 text-sm">{featuredNews.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#030f4f] mb-4">
                {featuredNews.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              
              <Button className="bg-[#00A99D] hover:bg-[#00A99D]/90">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* News Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {newsCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-[#00A99D] hover:bg-[#00A99D]/90" 
                : "hover:border-[#00A99D] hover:text-[#00A99D]"
              }
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-[#00A99D] border-[#00A99D]">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                
                <CardTitle className="text-lg text-[#030f4f] leading-tight">
                  {article.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By {article.author} • {article.readTime}
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#00A99D]">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#030f4f] text-center mb-8">
            Upcoming Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-[#00A99D] text-white">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-lg text-[#030f4f]">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#030f4f] mb-8">
            Skolyn in the Media
          </h3>
          
          <p className="text-sm md:text-base text-gray-600 mb-8">
            Leading healthcare publications covering our innovation and impact
          </p>
          
    <div className="
  flex flex-wrap justify-center items-center
  gap-4 sm:gap-x-8 sm:gap-y-6
  opacity-60 hover:opacity-100 transition-opacity duration-300
">
  {mediaLogos.map((media, index) => (
    <div key={index} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
        <Newspaper className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
      </div>
      <span className="text-sm sm:text-base font-medium text-gray-700">{media.name}</span>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;