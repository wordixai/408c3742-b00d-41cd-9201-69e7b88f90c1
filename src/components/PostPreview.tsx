import { User, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostPreviewProps {
  content: string;
}

export function PostPreview({ content }: PostPreviewProps) {
  const formatContent = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.startsWith('#')) {
        return <span key={i} className="text-primary font-medium">{word}</span>;
      }
      if (word.startsWith('@')) {
        return <span key={i} className="text-primary font-medium">{word}</span>;
      }
      if (word.match(/^https?:\/\//)) {
        return <span key={i} className="text-primary underline">{word}</span>;
      }
      return word;
    });
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground">Preview</h3>
      <div className="bg-card border border-border rounded-xl p-4 shadow-card animate-scale-in">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-card-foreground">Your Brand</span>
              <span className="text-muted-foreground text-sm">@yourbrand</span>
              <span className="text-muted-foreground text-sm">· now</span>
            </div>
            <div className="mt-2 text-card-foreground whitespace-pre-wrap break-words">
              {content ? formatContent(content) : (
                <span className="text-muted-foreground italic">Your post will appear here...</span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">24</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">182</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">12</span>
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
