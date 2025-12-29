interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className="flex items-center gap-4 mb-3">
        {!centered && <div className="w-16 h-1 bg-[#FF6B00]" />}
        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        {centered && <div className="w-16 h-1 bg-[#FF6B00]" />}
      </div>
      {subtitle && (
        <p className={`text-gray-600 text-lg ${centered ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
