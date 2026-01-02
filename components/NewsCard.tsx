'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0">
      <Link href={`/news/${article.id}`}>
        <div className="relative h-56 overflow-hidden bg-black">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <span className="inline-block bg-[#FF6B00] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center text-xs text-gray-500 mb-3 font-medium">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{formatDate(article.date)}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight text-black group-hover:text-[#FF6B00] transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center text-[#FF6B00] font-bold text-sm group-hover:gap-2 transition-all">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
}
