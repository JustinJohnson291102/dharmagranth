export default function LivePage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold mb-4">Live TV</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our live stream for daily programs, special events, and continuous spiritual content.
        </p>
      </div>
      <div className="aspect-video bg-card border rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
        <div className="w-full h-full flex items-center justify-center bg-black text-white">
          <p className="text-lg">Live stream player will be embedded here.</p>
        </div>
      </div>
    </div>
  );
}
