import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  sector: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ashley Khan",
    role: "Director of Outreach",
    company: "Kiini Empowerment Initiative Kenya",
    sector: "NGO Sector",
    quote:
      "Before partnering with this agency, our message was getting lost in the noise. We have a crucial mission, but we struggled to connect with a wider audience online. Their team didn't just run ads; they crafted a narrative around our cause that was both compelling and authentic. The 'Faces of Hope' campaign they developed led to a 150% increase in online donations and, more importantly, a tangible sense of community around our work. They gave our mission a voice that resonates.",
  },
  {
    name: "Dr. Marcal Thome",
    role: "Chief Medical Officer",
    company: "Pinecrest Hospital",
    sector: "Health Sector",
    quote:
      "In the healthcare space, trust is everything. We needed a digital strategy that was not only informative and professional but also deeply empathetic to the patient journey. This agency delivered just that. They revamped our website to be a warm, accessible resource and developed a content strategy that addressed our community's most pressing health questions. Our patient-led webinar series, their brainchild, has seen a 300% increase in attendance, establishing us as a trusted leader in our field. Their approach is both data-driven and human-centric, a rare and valuable combination.",
  },
  {
    name: "Elaine Viola",
    role: "Managing Broker",
    company: "High Sky Properties",
    sector: "Real Estate & Construction",
    quote:
      "The luxury real estate market is incredibly competitive. We have stunning properties, but we needed to capture the imagination of discerning buyers. This agency's video-first strategy was a game-changer. Their drone videography and virtual tours didn't just showcase our homes; they told a story of lifestyle and aspiration. We saw a 60% increase in qualified leads within the first quarter, and our agents are now closing deals with clients from across the globe who first fell in love with a property online. They understand that selling a home is about selling a dream.",
  },
  {
    name: "Ben Okua Ojua",
    role: "CEO",
    company: "Kimbo Construction Group",
    sector: "Real Estate & Construction",
    quote:
      "Our construction firm has a reputation for quality, but our digital presence was practically non-existent. We're experts in building, not branding. This agency became our trusted architect in the digital space. They built a robust SEO strategy that put us at the top of local search results and created a portfolio of project case studies that truly showcases the scale and craftsmanship of our work. Now, we're not just getting calls; we're getting inquiries for the exact high-value projects we want to be known for. They laid the foundation for our future growth.",
  },
  {
    name: "Samuel Isaka",
    role: "VP of Business Development",
    company: "GRS Freight Solutions",
    sector: "Logistics and Transportation",
    quote:
      "Efficiency and reliability are the pillars of our industry. We needed to communicate that to a B2B audience in a way that cut through the technical jargon. This agency's team took the time to understand the nuances of our supply chain solutions and translated them into a clear, powerful message. Their LinkedIn thought leadership campaign has positioned our executives as industry innovators, leading to a significant increase in corporate partnership inquiries. They didn't just market our services; they solidified our authority in the logistics space.",
  },
  {
    name: "Yvonne Mukua",
    role: "Head of Marketing",
    company: "Stellar TV",
    sector: "Television Industry",
    quote:
      "Launching a new series requires creating a cultural moment. This agency's digital launch strategy for 'The Crimson Hour' was nothing short of brilliant. They built an immersive, interactive fan experience online that started buzzing weeks before the premiere. Through a strategic mix of social media engagement, influencer partnerships, and targeted digital PR, they didn't just find our audience; they mobilized them. The show trended nationally on its debut night, and the online fan community they fostered continues to drive viewership week after week. They are masters of building anticipation and sustaining momentum.",
  },
  {
    name: "Bravin Karanji",
    role: "Owner",
    company: "The Serenity Spa",
    sector: "Lifestyle and Leisure",
    quote:
      "Our spa is an oasis, a place to escape. We wanted our online presence to evoke that same sense of tranquility and luxury. The brand story this agency developed for us was pure poetry. They managed a complete visual overhaul of our social media and booking platforms, focusing on serene imagery and calming, elegant copy. The result? A 40% increase in online bookings for our premium wellness packages and a clientele that arrives already feeling relaxed. They understood that our marketing needed to be an extension of the spa experience itself.",
  },
];



export default function WallOfLoveSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Creative masonry-style grid with staggered alignment */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3 xl:gap-8">
          {testimonials.map(
            ({ name, role, company, sector, quote }, index) => (
              <Card
                key={index}
                className={`
                break-inside-avoid mb-6 group overflow-hidden border-0 bg-gradient-to-br from-card/80 via-card to-card/60 
                backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5
                ${
                  index % 3 === 0
                    ? "hover:rotate-1"
                    : index % 3 === 1
                    ? "hover:-rotate-1"
                    : "hover:rotate-0"
                }
                hover:scale-[1.02] hover:border-primary/20
              `}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Sector Badge with gradient */}
                  <div className="flex justify-between items-start">
                    <span
                      className={`
                    inline-block px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300
                    ${
                      sector === "NGO Sector"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : sector === "Health Sector"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : sector === "Real Estate & Construction"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        : sector === "Logistics and Transportation"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        : sector === "Television Industry"
                        ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
                        : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    }
                  `}
                    >
                      {sector}
                    </span>

                    {/* Decorative quote mark */}
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Testimonial Quote with better typography */}
                  <blockquote className="relative">
                                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base font-light italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  </blockquote>

                  {/* Author section with enhanced design */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Avatar
                      className={`
                    h-12 w-12 ring-2 ring-offset-2 ring-offset-background transition-all duration-300 group-hover:ring-primary/30
                    ${
                      index % 5 === 0
                        ? "ring-green-200"
                        : index % 5 === 1
                        ? "ring-blue-200"
                        : index % 5 === 2
                        ? "ring-orange-200"
                        : index % 5 === 3
                        ? "ring-purple-200"
                        : "ring-pink-200"
                    }
                  `}
                    >
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/20 text-primary font-semibold text-lg transition-transform duration-300 group-hover:scale-110">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm lg:text-base text-foreground truncate">
                        {name}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground font-medium truncate">
                        {role}
                      </p>
                      <p className="text-xs text-primary font-semibold truncate mt-0.5">
                        {company}
                      </p>
                    </div>
                  </div>

                  {/* Subtle gradient overlay for visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
