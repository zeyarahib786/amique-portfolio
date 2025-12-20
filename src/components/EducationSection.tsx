import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (CSE)",
    institution: "Quest Infosys Foundation Group of Institution",
    university: "I.K. Gujral Punjab Technical University",
    period: "2021 - 2025",
    grade: "CGPA: 7.9",
    icon: GraduationCap,
  },
  {
    degree: "Class XII (BSEB)",
    institution: "R.K College, Madhubani, Bihar",
    period: "2017 - 2019",
    grade: "Percentage: 86%",
    icon: BookOpen,
  },
  {
    degree: "Class X (BSEB)",
    institution: "Utkramit Madhyamik School Marar, Rahika, Madhubani, Bihar",
    period: "2017",
    grade: "Percentage: 82.4%",
    icon: BookOpen,
  },
];

const achievements = [
  {
    title: "2nd Rank in B.Tech (1st & 2nd Semester)",
    description: "Secured 2nd position in the institution",
    icon: Trophy,
  },
  {
    title: "2nd Rank in Class X",
    description: "Secured 2nd position in High School",
    icon: Trophy,
  },
];

const certifications = [
  {
    title: "MERN Full Stack Development",
    issuer: "Certification Program",
    icon: Award,
  },
  {
    title: "Core Java",
    issuer: "Certification Program",
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            My academic journey and accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass-card p-5 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{item.degree}</h4>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                    {item.university && (
                      <p className="text-muted-foreground text-sm mb-2">{item.university}</p>
                    )}
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Trophy className="text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card p-5 rounded-xl flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Award className="text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card p-5 rounded-xl flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
