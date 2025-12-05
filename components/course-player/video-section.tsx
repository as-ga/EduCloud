'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function VideoSection() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <Card className="aspect-video w-full flex items-center justify-center relative group cursor-pointer shadow-lg mb-4 shrink-0 bg-slate-900">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all rounded-lg"></div>
        <PlayCircle className="text-white w-20 h-20 opacity-90 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h2 className="font-bold font-headline text-lg">Lecture 4.2: List Comprehensions</h2>
          <div className="flex items-center gap-4 text-sm text-slate-300 mt-1">
            <span>14:20 mins</span>
            <div className="h-1 bg-white/30 w-32 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3"></div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-4 border-b mb-4 shrink-0">
        <button
          onClick={() => setActiveTab('content')}
          className={`pb-3 text-sm font-medium ${activeTab === 'content' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
        >
          Transcript & Notes
        </button>
        <button
          onClick={() => setActiveTab('discussion')}
          className={`pb-3 text-sm font-medium ${activeTab === 'discussion' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
        >
          Discussion Forum
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === 'content' ? (
          <div className="prose prose-slate max-w-none text-foreground">
            <h3 className="text-xl font-bold font-headline text-foreground mb-2">Understanding Lists</h3>
            <p className="text-foreground/80 mb-4">
              List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable.
            </p>
            <div className="bg-muted p-4 rounded-lg border font-mono text-sm mb-4">
              {`squares = [x**2 for x in range(10)]\nprint(squares)`}
            </div>
            <p className="text-foreground/80">
              This creates a list of squares from 0 to 9. It is equivalent to using a for loop but is more Pythonic.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">S{i}</div>
                <div>
                  <p className="text-sm font-bold text-foreground">Student {i}</p>
                  <p className="text-sm text-muted-foreground">Can someone explain the difference between tuple and list comprehension?</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
