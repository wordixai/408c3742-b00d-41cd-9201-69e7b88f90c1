import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface PostEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export function PostEditor({ value, onChange, maxLength = 280 }: PostEditorProps) {
  const [charCount, setCharCount] = useState(value.length);
  const remaining = maxLength - charCount;
  const isOverLimit = remaining < 0;
  const isWarning = remaining <= 20 && remaining > 0;

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Your Post</h3>
        <div className={`text-sm font-medium flex items-center gap-1 ${
          isOverLimit ? 'text-destructive' : isWarning ? 'text-accent' : 'text-muted-foreground'
        }`}>
          {isOverLimit && <AlertCircle className="w-4 h-4" />}
          <span>{remaining}</span>
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your engaging post here..."
        className={`w-full h-40 p-4 rounded-lg border bg-card text-card-foreground placeholder:text-muted-foreground resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${
          isOverLimit
            ? 'border-destructive focus:ring-destructive'
            : 'border-input focus:ring-primary'
        }`}
      />
      <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            isOverLimit ? 'bg-destructive' : isWarning ? 'bg-accent' : 'gradient-primary'
          }`}
          style={{ width: `${Math.min((charCount / maxLength) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
