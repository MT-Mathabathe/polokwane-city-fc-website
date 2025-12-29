'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/utils';
import Image from 'next/image';
import type { Match } from '@/lib/data';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const isCompleted = match.status === 'completed';
  const homeTeam = match.isHome ? 'Polokwane City FC' : match.opponent;
  const awayTeam = match.isHome ? match.opponent : 'Polokwane City FC';

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#e05000] text-white p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">{match.competition}</span>
          {match.status === 'live' && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
              LIVE
            </span>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Home Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 relative mb-2">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">
                  {homeTeam === 'Polokwane City FC' ? 'PC' : homeTeam.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-center text-sm font-semibold">{homeTeam}</p>
          </div>

          {/* Score or VS */}
          <div className="flex-shrink-0 mx-4">
            {isCompleted && match.score ? (
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {match.isHome ? match.score.home : match.score.away} - {match.isHome ? match.score.away : match.score.home}
                </div>
                <div className="text-xs text-gray-500 mt-1">Full Time</div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">VS</div>
                <div className="text-xs text-gray-500 mt-1">
                  {formatTime(match.date + 'T' + match.time)}
                </div>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 relative mb-2">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">
                  {awayTeam === 'Polokwane City FC' ? 'PC' : awayTeam.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-center text-sm font-semibold">{awayTeam}</p>
          </div>
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-[#FF6B00]" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-[#FF6B00]" />
            <span>{match.venue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
