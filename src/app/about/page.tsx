import Image from 'next/image';
import { Heart, Globe, BookOpen, Eye, Users, Target } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const teamMembers = [
  { name: 'Swami Ananda', role: 'Spiritual Director', avatar: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop', fallback: 'SA' },
  { name: 'Ananya Sharma', role: 'Content Head', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', fallback: 'AS' },
  { name: 'Dr. Ramesh Rao', role: 'Chief Editor', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop', fallback: 'RR' },
  { name: 'Priya Mehta', role: 'Community Manager', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', fallback: 'PM' },
];

const schedule = [
    { channel: 'DharmGranth TV', program: 'BHAJAN', time: '00:00:00' },
    { channel: 'DharmGranth TV', program: 'SUNDARKANDPAH', time: '04:30:00' },
    { channel: 'DharmGranth TV', program: 'SALASAR BALA JI AARTI', time: '06:15:00' },
    { channel: 'DharmGranth TV', program: 'KHATUN SHYAM JI D-LIVE AARTI', time: '07:00:00' },
    { channel: 'DharmGranth TV', program: 'BHAJAN CHALESA', time: '07:30:00' },
    { channel: 'DharmGranth TV', program: 'BHAJAN CHALESA', time: '08:00:00' },
    { channel: 'DharmGranth TV', program: 'JHANDEWALAN MATA LIVE AARTI', time: '09:00:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '10:30:00' },
    { channel: 'DharmGranth TV', program: 'JHANDEWALAN MATA LIVE AARTI', time: '12:00:00' },
    { channel: 'DharmGranth TV', program: 'KAVI SAMMELAN 1/28', time: '15:00:00' },
    { channel: 'DharmGranth TV', program: 'GAYATRI MANTRA', time: '16:30:00' },
    { channel: 'DharmGranth TV', program: 'CHALESA', time: '17:00:00' },
    { channel: 'DharmGranth TV', program: 'KHATUN SHYAM JI D-LIVE AARTI', time: '18:30:00' },
    { channel: 'DharmGranth TV', program: 'SARYU MATA LIVE AARTI FROM AYODHYA', time: '18:45:00' },
    { channel: 'DharmGranth TV', program: 'CHITRAKOOT DHAM LIVE AARTI', time: '19:05:00' },
    { channel: 'DharmGranth TV', program: 'JHANDEWALAN MATA LIVE AARTI', time: '19:30:00' },
    { channel: 'DharmGranth TV', program: 'DHARMGRANTH TV SPACIAL SHOW', time: '20:05:00' },
    { channel: 'DharmGranth TV', program: 'HANUMANGARHI LIVE AARTI FROM AYODHYA', time: '21:00:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '21:30:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '22:00:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '22:30:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '23:00:00' },
    { channel: 'DharmGranth TV', program: 'KATHA D – LIVE', time: '23:30:00' },
];

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container py-16 md:py-24 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground mb-4">
            धर्म ग्रंथ टीवी एक ऐसा मंच है जो विभिन्न टीवी चैनलों के मुफ्त लाइव स्ट्रीमिंग के साथ-साथ अनेक प्रकार की वीडियो सामग्री प्रदान करता है। यह मंच विशेष रूप से सुलभता पर ध्यान केंद्रित करके डिज़ाइन किया गया है, जिससे उपयोगकर्ताओं को टीवी चैनल्स को रीयल-टाइम में देखने का अवसर मिलता है। यह विविध दर्शकों को ध्यान में रखते हुए सांस्कृतिक, धार्मिक और मनोरंजन कार्यक्रमों की पेशकश करता है। इसके उपयोगकर्ता-अनुकूल इंटरफ़ेस के कारण, दर्शकों के लिए चैनल्स और वीडियो तक पहुंचना आसान है, और इसके लिए किसी सदस्यता या छुपे हुए शुल्क की आवश्यकता नहीं होती।
            </p>
          </div>
          <div className="flex items-center justify-center p-8">
            <Image
              src="https://ik.imagekit.io/ggelm1lwa/DharmaGranth-Logo_1-removebg-preview.png?updatedAt=1761733737365"
              alt="Dharmagranth TV Logo"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-center">
                <Image
                src="https://ik.imagekit.io/ggelm1lwa/_Pngtree_tv-shape-red-live-icon_5602091-removebg-preview.png?updatedAt=1761748975338"
                alt="Our Mission"
                width={400}
                height={400}
                className="w-full max-w-xs h-auto object-cover"
                />
            </div>
            <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Mission</h1>
                <p className="text-lg text-muted-foreground mb-4">
                धर्म ग्रंथ टीवी का उद्देश्य मुफ्त और सुलभ सामग्री प्रदान करना है, जो लाइव टीवी स्ट्रीम और शैक्षणिक, सांस्कृतिक और धार्मिक वीडियो की विविध रेंज के माध्यम से जीवन को समृद्ध करती है। हम हर पृष्ठभूमि के दर्शकों के लिए ज्ञान, आध्यात्मिक विकास और सांस्कृतिक संबंध को प्रोत्साहित करना चाहते हैं, जिससे मूल्यवान सामग्री को किसी भी स्थान पर, बिना किसी लागत के, सभी के लिए उपलब्ध कराया जा सके।
                </p>
            </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-headline font-bold mb-12">TV Schedule</h2>
          <Card className="shadow-lg border-2 border-primary/10 bg-card/80 backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="text-left">Channel Name</TableHead>
                  <TableHead className="text-left">Programme Name</TableHead>
                  <TableHead className="text-right">Airing Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((item, index) => (
                  <TableRow key={index} className="transition-colors hover:bg-muted/30">
                    <TableCell className="text-left">{item.channel}</TableCell>
                    <TableCell className="text-left">{item.program}</TableCell>
                    <TableCell className="text-right font-mono">{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
        
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-headline font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Welcoming all seekers, regardless of background or belief.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Presenting teachings from genuine and respected spiritual lineages.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Serving humanity by making spiritual knowledge accessible to all.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h2 className="text-3xl font-headline font-bold mb-12">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
                We are a dedicated team of spiritual seekers, professionals, and volunteers passionate about sharing dharmic wisdom.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <Avatar className="h-24 w-24 border-4 border-primary/20">
                            <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                            <AvatarFallback>{member.fallback}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-headline font-semibold text-lg">{member.name}</h3>
                            <p className="text-sm text-primary">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
