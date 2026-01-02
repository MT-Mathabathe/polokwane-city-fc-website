'use client';

import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import MatchCard from '@/components/MatchCard';
import PlayerCard from '@/components/PlayerCard';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { matches, players, newsArticles, standings, topScorers, teamStats, sponsors } from '@/lib/data';
import { Trophy, Target, Award, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const upcomingMatches = matches.filter(m => m.status === 'upcoming').slice(0, 3);
  const recentNews = newsArticles.slice(0, 3);
  const featuredPlayers = players.filter(p => p.position === 'Forward').slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest News"
            subtitle="Stay updated with the latest happenings at Polokwane City FC"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/news">
              <Button size="lg">View All News</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Upcoming Matches"
            subtitle="Don't miss the next thrilling encounters"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/fixtures">
              <Button size="lg" variant="outline">View All Fixtures</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Players Spotlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Players Spotlight"
            subtitle="Meet our star players leading the charge"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team">
              <Button size="lg">View Full Squad</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Dashboard Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Season Statistics"
            subtitle="Our performance this season"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Team Stats */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-[#FF6B00] mr-3" />
                <h3 className="text-xl font-bold">Team Stats</h3>
              </div>
              <div className="space-y-3">
                {teamStats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="font-bold text-[#FF6B00]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* League Standings */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#FF6B00] mr-3" />
                <h3 className="text-xl font-bold">League Position</h3>
              </div>
              <div className="space-y-2">
                {standings.slice(0, 5).map((team) => (
                  <div
                    key={team.position}
                    className={`flex items-center justify-between p-2 rounded ${
                      team.team === 'Polokwane City FC' ? 'bg-[#FF6B00]/30' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="font-bold mr-3 text-[#FF6B00]">{team.position}</span>
                      <span className="text-sm">{team.team}</span>
                    </div>
                    <span className="font-bold">{team.points}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Scorers */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-[#FF6B00] mr-3" />
                <h3 className="text-xl font-bold">Top Scorers</h3>
              </div>
              <div className="space-y-3">
                {topScorers.map((scorer, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{scorer.label}</span>
                    <span className="font-bold text-2xl text-[#FF6B00]">{scorer.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-[#e05000] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for exclusive updates, match highlights, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-black"
                required
              />
              <Button type="submit" variant="dark" size="lg">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

