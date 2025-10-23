import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Recommendations from "@/components/account/Recommendations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// In a real app, this would come from a database after user logs in.
const mockUser = {
  name: "Spiritual Seeker",
  email: "seeker@example.com",
  avatar: "https://picsum.photos/seed/avatar/100/100",
  viewingHistory: [
    "The Art of Mindful Living",
    "Meditation for Beginners",
    "Understanding the Bhagavad Gita",
  ],
  preferences: "I am interested in philosophy, meditation, and the teachings of Vedanta.",
};

export default function AccountPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-headline font-bold">Welcome, {mockUser.name}</h1>
            <p className="text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>
        <Separator />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">AI-Powered Recommendations</CardTitle>
              <CardDescription>
                Based on your viewing habits, here are some videos we think you'll enjoy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Recommendations 
                viewingHistory={mockUser.viewingHistory} 
                preferences={mockUser.preferences} 
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm">Viewing History</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2">
                  {mockUser.viewingHistory.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Preferences</h3>
                <p className="text-muted-foreground text-sm mt-2">{mockUser.preferences}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
