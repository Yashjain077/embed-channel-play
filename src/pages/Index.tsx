import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [activeChannel, setActiveChannel] = useState<1 | 2>(1);

  const channels = {
    1: {
      url: "https://cricketstan.github.io/Channel-14/",
      name: "Channel 1",
      description: "Watch live sports action on Channel 14. Enjoy high-quality streaming with minimal buffering."
    },
    2: {
      url: "https://video-float-buddy.lovable.app/",
      name: "Channel 2",
      description: "Alternative sports streaming channel with enhanced viewing experience."
    }
  };

  const currentChannel = channels[activeChannel];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {currentChannel.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">LIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Player Card */}
          <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
            <div className="aspect-video w-full relative bg-black">
              <iframe
                key={activeChannel}
                src={currentChannel.url}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${currentChannel.name} Live Stream`}
              />
            </div>
          </Card>

          {/* Channel Selector */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeChannel === 1 ? "default" : "secondary"}
              size="lg"
              onClick={() => setActiveChannel(1)}
              className="min-w-[140px] transition-[var(--transition-smooth)]"
            >
              Channel 1
            </Button>
            <Button
              variant={activeChannel === 2 ? "default" : "secondary"}
              size="lg"
              onClick={() => setActiveChannel(2)}
              className="min-w-[140px] transition-[var(--transition-smooth)]"
            >
              Channel 2
            </Button>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-[var(--transition-smooth)]">
              <h2 className="text-lg font-semibold mb-2 text-foreground">About the Stream</h2>
              <p className="text-muted-foreground">
                {currentChannel.description}
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-[var(--transition-smooth)]">
              <h2 className="text-lg font-semibold mb-2 text-foreground">Stream Quality</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-primary font-medium">Live & Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Quality</span>
                  <span className="text-foreground font-medium">HD</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
