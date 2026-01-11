import { TrendingUp, Plus } from 'lucide-react';

const trendingHashtags = [
  { tag: '#marketing', uses: '2.1M' },
  { tag: '#socialmedia', uses: '1.8M' },
  { tag: '#business', uses: '3.2M' },
  { tag: '#entrepreneur', uses: '1.5M' },
  { tag: '#motivation', uses: '2.7M' },
  { tag: '#success', uses: '1.9M' },
  { tag: '#growth', uses: '890K' },
  { tag: '#tips', uses: '1.2M' },
  { tag: '#viral', uses: '4.1M' },
  { tag: '#trending', uses: '3.8M' },
];

interface HashtagSuggestionsProps {
  onAdd: (hashtag: string) => void;
  usedHashtags: string[];
}

export function HashtagSuggestions({ onAdd, usedHashtags }: HashtagSuggestionsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-accent" />
        <h3 className="text-sm font-medium text-foreground">Trending Hashtags</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {trendingHashtags.map((item) => {
          const isUsed = usedHashtags.includes(item.tag);
          return (
            <button
              key={item.tag}
              onClick={() => !isUsed && onAdd(item.tag)}
              disabled={isUsed}
              className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                isUsed
                  ? 'bg-primary/10 text-primary cursor-default'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <span className="font-medium">{item.tag}</span>
              <span className={`text-xs ${isUsed ? 'text-primary/60' : 'text-muted-foreground group-hover:text-primary-foreground/70'}`}>
                {item.uses}
              </span>
              {!isUsed && (
                <Plus className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
