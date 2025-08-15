import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Contact = () => {
  const { personalInfo } = portfolioData;

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in discussing a design project with you.");
    window.open(`https://wa.me/${personalInfo.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Design Project Inquiry");
    const body = encodeURIComponent("Hi,\n\nI'm interested in discussing a design project with you.\n\nBest regards,");
    window.open(`mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* WhatsApp Contact */}
          <Card className="group glass hover:glow-secondary transition-all duration-500 cursor-pointer transform hover:scale-105" onClick={handleWhatsApp}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                Quick response and instant communication
              </p>
              <p className="text-sm font-mono text-green-400 mb-6">
                {personalInfo.contact.whatsapp}
              </p>
              <Button variant="outline" size="lg" className="group-hover:border-green-400 group-hover:text-green-400 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="group glass hover:glow-primary transition-all duration-500 cursor-pointer transform hover:scale-105" onClick={handleEmail}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#4169E1] to-[#20B2AA] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                Email
              </h3>
              <p className="text-muted-foreground mb-4">
                Detailed project discussions and proposals
              </p>
              <p className="text-sm font-mono text-purple-400 mb-6">
                {personalInfo.contact.email}
              </p>
              <Button variant="outline" size="lg" className="group-hover:border-purple-400 group-hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass p-8">
            <CardContent className="space-y-6">
              {/* <div className="flex items-center justify-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>{personalInfo.contact.location}</span>
              </div> */}
              
              <h3 className="text-2xl font-bold gradient-text">
                Ready to bring your vision to life?
              </h3>
              
              <p className="text-muted-foreground max-w-md mx-auto">
                Whether you need a complete brand identity, stunning print materials, or digital design solutions, I'm here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleEmail}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;