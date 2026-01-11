import { useState } from 'react';
import { Copy, Check, Wand2 } from 'lucide-react';
import { TemplateSelector, TemplateType } from '../components/TemplateSelector';
import { HashtagSuggestions } from '../components/HashtagSuggestions';
import { PostEditor } from '../components/PostEditor';
import { PostPreview } from '../components/PostPreview';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('promotional');
  const [postContent, setPostContent] = useState('');
  const [copied, setCopied] = useState(false);

  const handleTemplateSelect = (template: TemplateType, content: string) => {
    setSelectedTemplate(template);
    setPostContent(content);
  };

  const handleAddHashtag = (hashtag: string) => {
    setPostContent(prev => prev + (prev.endsWith(' ') || prev === '' ? '' : ' ') + hashtag);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(postContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const extractHashtags = (text: string): string[] => {
    const matches = text.match(/#\w+/g);
    return matches || [];
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Wand2 className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Social Post <span className="gradient-primary bg-clip-text text-transparent">Generator</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Create engaging social media posts with customizable templates and trending hashtags
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Editor */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <TemplateSelector
                selected={selectedTemplate}
                onSelect={handleTemplateSelect}
              />
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <PostEditor
                value={postContent}
                onChange={setPostContent}
              />
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <HashtagSuggestions
                onAdd={handleAddHashtag}
                usedHashtags={extractHashtags(postContent)}
              />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card lg:sticky lg:top-8">
              <PostPreview content={postContent} />

              <button
                onClick={handleCopy}
                disabled={!postContent}
                className={`w-full mt-6 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
                  postContent
                    ? 'gradient-primary text-primary-foreground hover:shadow-glow'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy to Clipboard
                  </>
                )}
              </button>

              {/* Tips Section */}
              <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
                <h4 className="text-sm font-medium text-foreground mb-2">Quick Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Keep posts concise and engaging</li>
                  <li>• Use 3-5 relevant hashtags</li>
                  <li>• Include a clear call-to-action</li>
                  <li>• Add emojis for visual appeal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
