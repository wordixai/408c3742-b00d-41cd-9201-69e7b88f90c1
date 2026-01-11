import { Megaphone, Sparkles, HelpCircle, Bell } from 'lucide-react';

export type TemplateType = 'promotional' | 'inspirational' | 'question' | 'announcement';

interface Template {
  id: TemplateType;
  name: string;
  icon: React.ReactNode;
  description: string;
  template: string;
}

const templates: Template[] = [
  {
    id: 'promotional',
    name: 'Promotional',
    icon: <Megaphone className="w-5 h-5" />,
    description: 'Promote products or services',
    template: "🚀 Exciting news! [Your product/service] is here to [benefit]. Don't miss out on [offer]!\n\nLearn more: [link]"
  },
  {
    id: 'inspirational',
    name: 'Inspirational',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Motivate your audience',
    template: "✨ [Inspirational quote or message]\n\nRemember: [Supporting thought]\n\nWhat's your take on this?"
  },
  {
    id: 'question',
    name: 'Question',
    icon: <HelpCircle className="w-5 h-5" />,
    description: 'Engage with questions',
    template: "🤔 Quick question for you:\n\n[Your question here]\n\nDrop your answer below! 👇"
  },
  {
    id: 'announcement',
    name: 'Announcement',
    icon: <Bell className="w-5 h-5" />,
    description: 'Share important updates',
    template: "📢 Big announcement!\n\n[Your news here]\n\nStay tuned for more updates!"
  }
];

interface TemplateSelectorProps {
  selected: TemplateType;
  onSelect: (template: TemplateType, content: string) => void;
}

export function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground">Choose Template</h3>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id, template.template)}
            className={`group relative p-4 rounded-lg border text-left transition-all duration-200 ${
              selected === template.id
                ? 'border-primary bg-primary/5 shadow-soft'
                : 'border-border bg-card hover:border-primary/50 hover:bg-secondary/50'
            }`}
          >
            <div className={`inline-flex p-2 rounded-md mb-2 transition-colors ${
              selected === template.id
                ? 'gradient-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground group-hover:text-primary'
            }`}>
              {template.icon}
            </div>
            <h4 className="font-medium text-card-foreground">{template.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
