import { useMemo } from "react";

const images = [
  { src: "images/portfolio/carousel/Bank Statement.jpg", alt: "Bank statement with Grace Edu Consult" },
  { src: "images/portfolio/carousel/cambridge 7 28th January.png", alt: "Cambridge 7 virtual life coaching" },
  { src: "images/portfolio/carousel/Caregiver.jpg", alt: "Caregiver application with grace Edu Consult" },
  { src: "images/portfolio/carousel/CBT IELTS.jpg", alt: "CBT IELTS with grace Edu Consult" },
  { src: "images/portfolio/carousel/explore your career in Germany.jpg", alt: "Germany opportunity for nurses" },
  { src: "images/portfolio/carousel/GEC price list.jpg", alt: "Exams price list with Grace Edu Consult" },
  { src: "images/portfolio/carousel/GEC Study in Malta new.jpg", alt: "Study in Malta with Grace Edu consult" },
  { src: "images/portfolio/carousel/happy New month August.jpg", alt: "August new month flyer" },
  { src: "images/portfolio/carousel/International Women's day.jpg", alt: "International Women's Day" },
  { src: "images/portfolio/carousel/He is Risen.jpg", alt: "2025 Easter flyer" },
  { src: "images/portfolio/carousel/IELTS handbill offa2.jpg", alt: "Grace Edu Consult IELTS Offa branch" },
  { src: "images/portfolio/carousel/midwifery osce tutorials.jpg", alt: "midwifery osce tutorials" },
  { src: "images/portfolio/carousel/outreach to indegent pupils.jpg", alt: "School Outreach" },
  { src: "images/portfolio/carousel/share your IELTS story.jpg", alt: "Share & Win" },
  { src: "images/portfolio/carousel/mens store.jpg", alt: "The Men's Store poster" },
  { src: "images/portfolio/carousel/KBA.png", alt: "Kwara Business Awards thubmnail" },
  { src: "images/portfolio/carousel/KBA countdown.png", alt: "Kwara Business Awards countdown" },
  { src: "images/portfolio/carousel/KBA entry.jpg", alt: "Kwara Business Awards tags" },
  { src: "images/portfolio/carousel/KBA nominees.png", alt: "Kwara Business Awards nominees poster" },
  { src: "images/portfolio/carousel/KBA winner.png", alt: "Kwara Business Awards winner poster" },
  { src: "images/portfolio/carousel/green nacos christmas.jpg", alt: "Christmas poster for NACOSS" },
  { src: "images/portfolio/carousel/anticipate freshers picnic.jpg", alt: "Picnic anticipate poster" }, 
  { src: "images/portfolio/carousel/freshers picnic.jpg", alt: "Picnic poster" }, 
  { src: "images/portfolio/carousel/beginning the session.jpg", alt: "beginning the session with God poster" }, 
  { src: "images/portfolio/carousel/carol.jpg", alt: "Christmas carol" }, 
  { src: "images/portfolio/carousel/impartation service.jpg", alt: "Impartation service" }, 
  { src: "images/portfolio/carousel/mission 2025 anticipate.jpg", alt: "mission outreach anticipate" }, 
  { src: "images/portfolio/carousel/See you next year.jpg", alt: "see you next year" }, 
  { src: "images/portfolio/carousel/virtual devotion.png", alt: "devotion" }, 
  { src: "images/portfolio/carousel/welcome to day 2.jpg", alt: "welcome" }, 
  { src: "images/portfolio/carousel/ydf.png", alt: "Youth Discipleship Forum" },
  { src: "images/portfolio/carousel/KBA logos.jpg", alt: "Kwara Business Awards logo" },
  { src: "images/portfolio/carousel/KBA newer logo hands.png", alt: "Kwara Business Awards logo" },
  { src: "images/portfolio/carousel/congratulations.jpg", alt: "Congratulatory poster" },
  { src: "images/portfolio/carousel/alafia re.png", alt: "yoruba radio program" },
  { src: "images/portfolio/carousel/farewell.png", alt: "send forth poster" },
  { src: "images/portfolio/carousel/governor's diary.jpg", alt: "governor's diary" },
  { src: "images/portfolio/carousel/happy birthday sinmi williams.png", alt: "birthday" },
  { src: "images/portfolio/carousel/monday motivation2.jpg", alt: "new week poster" },
  { src: "images/portfolio/carousel/monday motivation3.jpg", alt: "new week poster" },
  { src: "images/portfolio/carousel/TGIF.jpg", alt: "weekend poster" },
  { src: "images/portfolio/carousel/welcome september.jpg", alt: "new month poster" }
];

const ImageCarousel = () => {
  // Duplicate images in memory (for seamless loop)
  const loopImages = useMemo(() => [...images, ...images], []);

  return (
    <section className="pt-10 pb-16 overflow-hidden bg-gradient-to-r from-background/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 gradient-text">
          Moreeee...
        </h2>
      </div>
      <div className="w-full">
        <style>{`
          .carousel-scroll {
            display: flex;
            gap: 1rem; /* matches gap-6 */
            animation: scroll-left 50s linear infinite;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-500%);
            }
          }

          .carousel-container:hover .carousel-scroll {
            animation-play-state: paused;
          }
        `}</style>

        <div className="carousel-container relative">
          <div className="carousel-scroll">
            {loopImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
