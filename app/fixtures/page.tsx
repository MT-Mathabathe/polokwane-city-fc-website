'use client';

import { useState } from 'react';
import MatchCard from '@/components/MatchCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { matches, type Competition } from '@/lib/data';
import { motion } from 'framer-motion';

export default function FixturesPage() {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | 'All'>('All');
  const [view, setView] = useState<'upcoming' | 'results'>('upcoming');

  const competitions: (Competition | 'All')[] = ['All', 'League', 'Cup', 'Champions League'];

  const upcomingMatches = matches.filter(m => m.status === 'upcoming');
  const completedMatches = matches.filter(m => m.status === 'completed');

  const filteredMatches = view === 'upcoming' ? upcomingMatches : completedMatches;
  const displayMatches = selectedCompetition === 'All'
    ? filteredMatches
    : filteredMatches.filter(m => m.competition === selectedCompetition);

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1920)',
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
            Fixtures & Results
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay up to date with our match schedule and recent results
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <SectionHeader
          title={view === 'upcoming' ? 'Upcoming Matches' : 'Recent Results'}
          subtitle="Filter by competition to view specific matches"
        />

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={view === 'upcoming' ? 'primary' : 'outline'}
            onClick={() => setView('upcoming')}
            size="lg"
          >
            Upcoming Matches
          </Button>
          <Button
            variant={view === 'results' ? 'primary' : 'outline'}
            onClick={() => setView('results')}
            size="lg"
          >
            Recent Results
          </Button>
        </div>

        {/* Competition Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {competitions.map((competition) => (
            <Button
              key={competition}
              variant={selectedCompetition === competition ? 'primary' : 'outline'}
              onClick={() => setSelectedCompetition(competition)}
            >
              {competition}
            </Button>
          ))}
        </div>

        {/* Matches Grid */}
        {displayMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">No matches found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
