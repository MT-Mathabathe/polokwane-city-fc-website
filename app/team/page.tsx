'use client';

import { useState } from 'react';
import PlayerCard from '@/components/PlayerCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { players, staff, type Position } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | 'All'>('All');

  const positions: (Position | 'All')[] = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const filteredPlayers = selectedPosition === 'All' 
    ? players 
    : players.filter(p => p.position === selectedPosition);

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920)',
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
            Our Team
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the talented squad representing Polokwane City FC
          </motion.p>
        </div>
      </section>

      {/* Squad Section */}
      <section className="container mx-auto px-4 mb-20">
        <SectionHeader
          title="Squad"
          subtitle="Filter by position to view our players"
        />

        {/* Position Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {positions.map((position) => (
            <Button
              key={position}
              variant={selectedPosition === position ? 'primary' : 'outline'}
              onClick={() => setSelectedPosition(position)}
              size="lg"
            >
              {position}
            </Button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>

      {/* Coaching Staff Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Coaching Staff"
            subtitle="The experts guiding our team to success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {staff.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#FF6B00] font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.nationality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
