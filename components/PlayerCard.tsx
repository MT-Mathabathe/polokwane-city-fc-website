'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import type { Player } from '@/lib/data';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-96 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card */}
        <Card
          className="absolute inset-0 overflow-hidden backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#FF6B00] font-semibold mb-1">
                    {player.position}
                  </p>
                  <h3 className="text-2xl font-bold mb-1">{player.name}</h3>
                  <p className="text-sm text-gray-300">{player.nationality}</p>
                </div>
                <div className="text-6xl font-bold text-[#FF6B00] opacity-80">
                  {player.number}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Back of Card */}
        <Card
          className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#e05000] text-white backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <CardContent className="h-full flex flex-col justify-center p-6">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold mb-2">{player.number}</div>
              <h3 className="text-2xl font-bold">{player.name}</h3>
              <p className="text-sm opacity-90">{player.position}</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/30 pb-2">
                <span className="text-sm">Age</span>
                <span className="font-bold">{player.age}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-2">
                <span className="text-sm">Appearances</span>
                <span className="font-bold">{player.appearances}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-2">
                <span className="text-sm">Goals</span>
                <span className="font-bold">{player.goals}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-2">
                <span className="text-sm">Assists</span>
                <span className="font-bold">{player.assists}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
