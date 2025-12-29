export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export type Competition = 'League' | 'Cup' | 'Champions League';

export interface Player {
  id: number;
  name: string;
  number: number;
  position: Position;
  image: string;
  nationality: string;
  age: number;
  goals: number;
  assists: number;
  appearances: number;
}

export interface Match {
  id: number;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  venue: string;
  competition: Competition;
  isHome: boolean;
  score?: {
    home: number;
    away: number;
  };
  status: 'upcoming' | 'completed' | 'live';
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'Match Report' | 'Transfer' | 'Club News';
  image: string;
  date: string;
  author: string;
  featured: boolean;
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  image: string;
  nationality: string;
}

export interface Stat {
  label: string;
  value: string | number;
}

export interface StandingsRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

// Mock Players Data
export const players: Player[] = [
  { id: 1, name: "Thabo Molefe", number: 1, position: "Goalkeeper", image: "https://images.unsplash.com/photo-1511195646665-96bb75c5a8c4?w=400", nationality: "South Africa", age: 28, goals: 0, assists: 0, appearances: 32 },
  { id: 2, name: "Sipho Ndlovu", number: 16, position: "Goalkeeper", image: "https://images.unsplash.com/photo-1509396591411-549f8e842c62?w=400", nationality: "South Africa", age: 24, goals: 0, assists: 0, appearances: 8 },
  
  { id: 3, name: "Kabelo Dlamini", number: 2, position: "Defender", image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400", nationality: "South Africa", age: 29, goals: 2, assists: 1, appearances: 30 },
  { id: 4, name: "Teboho Mokoena", number: 3, position: "Defender", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400", nationality: "South Africa", age: 26, goals: 1, assists: 3, appearances: 28 },
  { id: 5, name: "Lebohang Maboe", number: 4, position: "Defender", image: "https://images.unsplash.com/photo-1577223625816-7546f0b40e80?w=400", nationality: "South Africa", age: 27, goals: 0, assists: 2, appearances: 25 },
  { id: 6, name: "Goodman Mosele", number: 5, position: "Defender", image: "https://images.unsplash.com/photo-1594731074149-dd4e6b059299?w=400", nationality: "South Africa", age: 25, goals: 1, assists: 1, appearances: 32 },
  { id: 7, name: "Siyanda Xulu", number: 15, position: "Defender", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400", nationality: "South Africa", age: 30, goals: 3, assists: 0, appearances: 27 },
  { id: 8, name: "Rushine De Reuck", number: 22, position: "Defender", image: "https://images.unsplash.com/photo-1552181765-ba91bef8f5b3?w=400", nationality: "South Africa", age: 28, goals: 2, assists: 1, appearances: 24 },
  { id: 9, name: "Aubrey Modiba", number: 23, position: "Defender", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400", nationality: "South Africa", age: 27, goals: 1, assists: 4, appearances: 29 },
  
  { id: 10, name: "Tshegofatso Mabasa", number: 6, position: "Midfielder", image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400", nationality: "South Africa", age: 26, goals: 5, assists: 8, appearances: 31 },
  { id: 11, name: "Monnapule Saleng", number: 7, position: "Midfielder", image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400", nationality: "South Africa", age: 24, goals: 7, assists: 5, appearances: 30 },
  { id: 12, name: "Evidence Makgopa", number: 8, position: "Midfielder", image: "https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=400", nationality: "South Africa", age: 23, goals: 4, assists: 6, appearances: 28 },
  { id: 13, name: "Bandile Shandu", number: 10, position: "Midfielder", image: "https://images.unsplash.com/photo-1560414779-2f99c4b0cd04?w=400", nationality: "South Africa", age: 25, goals: 3, assists: 7, appearances: 32 },
  { id: 14, name: "Ntsikelelo Nyauza", number: 11, position: "Midfielder", image: "https://images.unsplash.com/photo-1518136247453-74e7b5265980?w=400", nationality: "South Africa", age: 27, goals: 2, assists: 4, appearances: 26 },
  { id: 15, name: "Olisa Ndah", number: 14, position: "Midfielder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", nationality: "Nigeria", age: 25, goals: 1, assists: 3, appearances: 29 },
  { id: 16, name: "Terrence Dzvukamanja", number: 17, position: "Midfielder", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400", nationality: "Zimbabwe", age: 28, goals: 6, assists: 4, appearances: 27 },
  { id: 17, name: "Bongani Sam", number: 18, position: "Midfielder", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", nationality: "South Africa", age: 26, goals: 2, assists: 5, appearances: 25 },
  { id: 18, name: "Deon Hotto", number: 20, position: "Midfielder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", nationality: "Namibia", age: 31, goals: 8, assists: 9, appearances: 32 },
  { id: 19, name: "Relebohile Mofokeng", number: 21, position: "Midfielder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", nationality: "South Africa", age: 19, goals: 3, assists: 4, appearances: 20 },
  
  { id: 20, name: "Kermit Erasmus", number: 9, position: "Forward", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400", nationality: "South Africa", age: 33, goals: 12, assists: 4, appearances: 29 },
  { id: 21, name: "Vincent Pule", number: 19, position: "Forward", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400", nationality: "South Africa", age: 31, goals: 10, assists: 6, appearances: 28 },
  { id: 22, name: "Zakhele Lepasa", number: 24, position: "Forward", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400", nationality: "South Africa", age: 25, goals: 9, assists: 3, appearances: 26 },
  { id: 23, name: "Bienvenu Eva Nga", number: 25, position: "Forward", image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400", nationality: "Cameroon", age: 28, goals: 11, assists: 5, appearances: 30 },
  { id: 24, name: "Thabang Monare", number: 26, position: "Forward", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400", nationality: "South Africa", age: 29, goals: 7, assists: 4, appearances: 27 },
  { id: 25, name: "Lebo Phiri", number: 27, position: "Forward", image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=400", nationality: "South Africa", age: 22, goals: 5, assists: 2, appearances: 18 },
];

// Mock Coaching Staff
export const staff: Staff[] = [
  { id: 1, name: "Bernard Molekwa", role: "Head Coach", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400", nationality: "South Africa" },
  { id: 2, name: "John Maduka", role: "Assistant Coach", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400", nationality: "South Africa" },
  { id: 3, name: "Richard Henyekane", role: "Technical Advisor", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca44?w=400", nationality: "South Africa" },
  { id: 4, name: "Siyabulela Gwamanda", role: "Goalkeeper Coach", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", nationality: "South Africa" },
  { id: 5, name: "Dr. Thabo Mokone", role: "Team Doctor", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400", nationality: "South Africa" },
];

// Mock Matches Data
export const matches: Match[] = [
  {
    id: 1,
    opponent: "Mamelodi Sundowns",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-01-20",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "League",
    isHome: true,
    status: "upcoming"
  },
  {
    id: 2,
    opponent: "Orlando Pirates",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-01-27",
    time: "19:30",
    venue: "Orlando Stadium",
    competition: "League",
    isHome: false,
    status: "upcoming"
  },
  {
    id: 3,
    opponent: "Kaizer Chiefs",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-02-03",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "Cup",
    isHome: true,
    status: "upcoming"
  },
  {
    id: 4,
    opponent: "Cape Town City",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-02-10",
    time: "17:00",
    venue: "Cape Town Stadium",
    competition: "League",
    isHome: false,
    status: "upcoming"
  },
  {
    id: 5,
    opponent: "Supersport United",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-02-17",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "League",
    isHome: true,
    status: "upcoming"
  },
  {
    id: 6,
    opponent: "AmaZulu FC",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2024-01-06",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "League",
    isHome: true,
    score: { home: 2, away: 1 },
    status: "completed"
  },
  {
    id: 7,
    opponent: "Stellenbosch FC",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2023-12-30",
    time: "17:00",
    venue: "Danie Craven Stadium",
    competition: "League",
    isHome: false,
    score: { home: 1, away: 1 },
    status: "completed"
  },
  {
    id: 8,
    opponent: "Golden Arrows",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2023-12-23",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "League",
    isHome: true,
    score: { home: 3, away: 0 },
    status: "completed"
  },
  {
    id: 9,
    opponent: "TS Galaxy",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2023-12-16",
    time: "19:30",
    venue: "Mbombela Stadium",
    competition: "League",
    isHome: false,
    score: { home: 2, away: 2 },
    status: "completed"
  },
  {
    id: 10,
    opponent: "Sekhukhune United",
    opponentLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100",
    date: "2023-12-09",
    time: "15:00",
    venue: "Peter Mokaba Stadium",
    competition: "Cup",
    isHome: true,
    score: { home: 1, away: 0 },
    status: "completed"
  }
];

// Mock News Articles
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Rise of the City: Polokwane City FC Ready for Title Challenge",
    excerpt: "After an impressive start to the season, Polokwane City FC is positioning itself as a serious contender for the league title.",
    content: "Full article content here...",
    category: "Club News",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    date: "2024-01-15",
    author: "Sports Desk",
    featured: true
  },
  {
    id: 2,
    title: "Match Report: City Dominates Golden Arrows 3-0",
    excerpt: "A commanding performance sees Polokwane City secure three crucial points at home with a convincing victory.",
    content: "Full match report...",
    category: "Match Report",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800",
    date: "2023-12-23",
    author: "John Mokwena",
    featured: false
  },
  {
    id: 3,
    title: "New Signing: Bienvenu Eva Nga Joins Rise of the City",
    excerpt: "Cameroonian striker Bienvenu Eva Nga has officially signed with Polokwane City FC on a three-year deal.",
    content: "Transfer details...",
    category: "Transfer",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800",
    date: "2024-01-10",
    author: "Transfer News",
    featured: false
  },
  {
    id: 4,
    title: "Youth Academy Success: Five Players Promoted to First Team",
    excerpt: "The club's investment in youth development pays dividends as five academy graduates earn first-team contracts.",
    content: "Youth development story...",
    category: "Club News",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    date: "2024-01-08",
    author: "Academy Report",
    featured: false
  },
  {
    id: 5,
    title: "Draw Against Stellenbosch: Points Shared in Thrilling Encounter",
    excerpt: "A late equalizer denies City all three points in an entertaining 1-1 draw away from home.",
    content: "Match analysis...",
    category: "Match Report",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800",
    date: "2023-12-30",
    author: "Match Reporter",
    featured: false
  },
  {
    id: 6,
    title: "Stadium Upgrade: Peter Mokaba to Get New Facilities",
    excerpt: "Major renovations announced for Peter Mokaba Stadium, enhancing fan experience and player facilities.",
    content: "Stadium development news...",
    category: "Club News",
    image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=800",
    date: "2024-01-05",
    author: "Infrastructure Team",
    featured: false
  },
  {
    id: 7,
    title: "Player Interview: Kermit Erasmus on His Goal-Scoring Form",
    excerpt: "The veteran striker discusses his impressive season and ambitions for the remainder of the campaign.",
    content: "Interview transcript...",
    category: "Club News",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800",
    date: "2024-01-12",
    author: "Media Team",
    featured: false
  },
  {
    id: 8,
    title: "Community Day: City Gives Back to Polokwane",
    excerpt: "Players and staff spend the day with local schools and community centers, spreading joy and inspiration.",
    content: "Community outreach story...",
    category: "Club News",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    date: "2024-01-14",
    author: "Community Relations",
    featured: false
  }
];

// Mock Standings
export const standings: StandingsRow[] = [
  { position: 1, team: "Mamelodi Sundowns", played: 20, won: 15, drawn: 3, lost: 2, goalsFor: 42, goalsAgainst: 12, goalDifference: 30, points: 48 },
  { position: 2, team: "Orlando Pirates", played: 20, won: 13, drawn: 5, lost: 2, goalsFor: 38, goalsAgainst: 15, goalDifference: 23, points: 44 },
  { position: 3, team: "Polokwane City FC", played: 20, won: 12, drawn: 4, lost: 4, goalsFor: 35, goalsAgainst: 18, goalDifference: 17, points: 40 },
  { position: 4, team: "Cape Town City", played: 20, won: 11, drawn: 5, lost: 4, goalsFor: 32, goalsAgainst: 20, goalDifference: 12, points: 38 },
  { position: 5, team: "Kaizer Chiefs", played: 20, won: 10, drawn: 6, lost: 4, goalsFor: 30, goalsAgainst: 22, goalDifference: 8, points: 36 },
];

// Mock Top Scorers
export const topScorers: Stat[] = [
  { label: "Kermit Erasmus", value: 12 },
  { label: "Bienvenu Eva Nga", value: 11 },
  { label: "Vincent Pule", value: 10 },
  { label: "Zakhele Lepasa", value: 9 },
  { label: "Deon Hotto", value: 8 },
];

// Mock Team Stats
export const teamStats: Stat[] = [
  { label: "League Position", value: "3rd" },
  { label: "Points", value: 40 },
  { label: "Matches Played", value: 20 },
  { label: "Wins", value: 12 },
  { label: "Clean Sheets", value: 8 },
  { label: "Goals Scored", value: 35 },
];

// Mock Sponsors
export const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "https://via.placeholder.com/150x60?text=Sponsor+1" },
  { id: 2, name: "Sponsor 2", logo: "https://via.placeholder.com/150x60?text=Sponsor+2" },
  { id: 3, name: "Sponsor 3", logo: "https://via.placeholder.com/150x60?text=Sponsor+3" },
  { id: 4, name: "Sponsor 4", logo: "https://via.placeholder.com/150x60?text=Sponsor+4" },
  { id: 5, name: "Sponsor 5", logo: "https://via.placeholder.com/150x60?text=Sponsor+5" },
  { id: 6, name: "Sponsor 6", logo: "https://via.placeholder.com/150x60?text=Sponsor+6" },
];
