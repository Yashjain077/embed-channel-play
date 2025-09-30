import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeChannel, setActiveChannel] = useState<1 | 2 | 4>(1);
  const { toast } = useToast();
  const telegramLink = "https://t.me/+NH1kewfKuaswMzg9";

  const channels = {
    1: {
      url: "https://hff-eight.vercel.app/",
      name: "Channel 1",
      description: "Watch live sports action with high-quality streaming and minimal buffering."
    },
    2: {
      url: "https://cricketstan.github.io/Channel-14/",
      name: "Channel 2",
      description: "Premium sports streaming channel for cricket enthusiasts."
    },
    4: {
      url: "https://cricketstan.github.io/Sony-Liv/",
      name: "Channel 4",
      description: "Sony Liv sports streaming with comprehensive cricket coverage."
    }
  };

  // Show Telegram join toast on initial load
  useEffect(() => {
    toast({
      title: "Join Our Community! 🎉",
      description: (
        <div className="flex flex-col gap-2">
          <p>Stay updated with latest streams and announcements</p>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => window.open(telegramLink, '_blank')}
            className="w-fit"
          >
            Join Telegram
          </Button>
        </div>
      ),
      duration: 6000,
    });
  }, []);

  // Show Telegram toast when channel changes
  useEffect(() => {
    if (activeChannel !== 1) { // Don't show on initial channel
      toast({
        title: "Enjoying the stream? 📺",
        description: (
          <div className="flex flex-col gap-2">
            <p>Join our Telegram for more channels!</p>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => window.open(telegramLink, '_blank')}
              className="w-fit"
            >
              Join Telegram
            </Button>
          </div>
        ),
        duration: 5000,
      });
    }
  }, [activeChannel]);

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
            <div className="flex items-center gap-4">
              <Button
                onClick={() => window.open(telegramLink, '_blank')}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Crick On Time
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">LIVE</span>
              </div>
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
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={activeChannel === 1 ? "default" : "secondary"}
              size="lg"
              onClick={() => setActiveChannel(1)}
              className="min-w-[130px] transition-[var(--transition-smooth)]"
            >
              Channel 1
            </Button>
            <Button
              variant={activeChannel === 2 ? "default" : "secondary"}
              size="lg"
              onClick={() => setActiveChannel(2)}
              className="min-w-[130px] transition-[var(--transition-smooth)]"
            >
              Channel 2
            </Button>
            <Button
              variant={activeChannel === 4 ? "default" : "secondary"}
              size="lg"
              onClick={() => setActiveChannel(4)}
              className="min-w-[130px] transition-[var(--transition-smooth)]"
            >
              Channel 4
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
