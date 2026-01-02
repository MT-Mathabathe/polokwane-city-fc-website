'use client';

import { Card } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/utils';
import type { Match } from '@/lib/data';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const isCompleted = match.status === 'completed';
  const homeTeam = match.isHome ? 'Polokwane City FC' : match.opponent;
  const awayTeam = match.isHome ? match.opponent : 'Polokwane City FC';

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
      <div className="bg-[#FF6B00] text-white px-4 py-2">
        <span className="text-xs font-bold uppercase tracking-wide">{match.competition}</span>
      </div>
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          {/* Home Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 border-2 border-gray-200">
              <span className="text-2xl font-bold text-gray-700">
                {homeTeam === 'Polokwane City FC' ? 'PC' : homeTeam.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <p className="text-center text-sm font-bold text-black line-clamp-2 w-full">{homeTeam}</p>
          </div>

          {/* Score or VS */}
          <div className="flex-shrink-0 mx-4">
            {isCompleted && match.score ? (
              <div className="text-center">
                <div className="text-4xl font-black text-black">
                  {match.isHome ? match.score.home : match.score.away} - {match.isHome ? match.score.away : match.score.home}
                </div>
                <div className="text-xs text-gray-500 mt-2 font-semibold uppercase">Full Time</div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-2xl font-black text-gray-400">VS</div>
                <div className="text-sm text-[#FF6B00] mt-2 font-bold">
                  {formatTime(match.date + 'T' + match.time)}
                </div>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 border-2 border-gray-200">
              <span className="text-2xl font-bold text-gray-700">
                {awayTeam === 'Polokwane City FC' ? 'PC' : awayTeam.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <p className="text-center text-sm font-bold text-black line-clamp-2 w-full">{awayTeam}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-2.5">
          <div className="flex items-center text-sm text-gray-700 font-medium">
            <Calendar className="w-4 h-4 mr-2 text-[#FF6B00]" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700 font-medium">
            <MapPin className="w-4 h-4 mr-2 text-[#FF6B00]" />
            <span>{match.venue}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
