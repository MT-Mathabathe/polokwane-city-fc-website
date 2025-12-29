'use client';

import { Card, CardContent } from '@/components/ui/card';
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
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <Link href={`/news/${article.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(article.date)}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#FF6B00] transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center text-[#FF6B00] font-semibold text-sm group-hover:translate-x-2 transition-transform">
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
