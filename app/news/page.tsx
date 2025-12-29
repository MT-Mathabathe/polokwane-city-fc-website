'use client';

import { useState } from 'react';
import NewsCard from '@/components/NewsCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { newsArticles } from '@/lib/data';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Match Report', 'Transfer', 'Club News'];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#FF6B00]/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest News
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest updates from Polokwane City FC
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'All' && !searchQuery && (
          <section className="mb-16">
            <SectionHeader title="Featured Story" />
            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredArticle.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="bg-[#FF6B00] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {featuredArticle.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-[#FF6B00] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-xl text-gray-300 mb-4 max-w-3xl">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{featuredArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.date}</span>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        <SectionHeader
          title="All News"
          subtitle="Filter and search to find what you're looking for"
        />

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        {regularArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
