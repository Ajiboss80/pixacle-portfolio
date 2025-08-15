import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold my-6">
            <span className="gradient-text">About Me</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the designer behind the work
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <Card className="relative glass overflow-hidden">
                <CardContent className="p-8">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-64 h-64 object-cover rounded-xl mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              {/* <h3 className="text-2xl font-bold mb-4 gradient-text">
                {personalInfo.name}
              </h3> */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-purple-400" />
              <span>{personalInfo.contact.location}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                size="lg"
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Skills/Expertise Preview */}
            {/* <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Brand Identity",
                  "Product Design",
                  "Flyers & Posters"
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#4169E1] to-[#20B2AA] rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;