interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center ${centered ? 'justify-center' : ''} mb-2`}>
        <div className="w-1 h-8 bg-[#FF6B00] mr-3" />
        <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className={`text-gray-600 ${centered ? 'mx-auto max-w-2xl' : 'ml-4'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
