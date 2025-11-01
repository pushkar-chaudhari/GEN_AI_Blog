import BlogHeader from "@/components/BlogHeader";
import ArticleHeader from "@/components/ArticleHeader";
import IndustryCard from "@/components/IndustryCard";
import JobProjectionTable from "@/components/JobProjectionTable";
import BlogFooter from "@/components/BlogFooter";
import { GraduationCap, Heart, DollarSign, Code, Palette } from "lucide-react";

export default function BlogArticle() {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education Sector",
      points: [
        "Teachers and educators spend less time on grading and administrative work through AI-based assessment tools.",
        "Lesson planning and content creation are becoming faster with generative AI tutors and educational chatbots.",
        "New roles like AI learning designers are emerging to create adaptive and personalized learning experiences."
      ]
    },
    {
      icon: Heart,
      title: "Medical and Healthcare Sector",
      points: [
        "AI diagnostic assistants analyze medical images, lab results, and patient data more efficiently.",
        "Administrative roles such as medical transcription and record keeping are rapidly being automated.",
        "Doctors now focus more on patient care and clinical decision-making, supported by AI insights."
      ]
    },
    {
      icon: DollarSign,
      title: "Finance Sector",
      points: [
        "Financial analysts and accountants are using AI for data analysis, report automation, and fraud detection.",
        "Tasks like expense categorization, invoice processing, and risk assessment are now AI-driven.",
        "Professionals shift toward strategic planning, client advisory, and AI oversight roles."
      ]
    },
    {
      icon: Code,
      title: "IT and Software Sector",
      points: [
        "Developers use AI coding assistants (like GitHub Copilot) to write and debug code faster.",
        "Routine testing, documentation, and error detection are increasingly automated.",
        "Focus moves toward system architecture, AI integration, and innovation management."
      ]
    },
    {
      icon: Palette,
      title: "Creative and Marketing Fields",
      points: [
        "Graphic designers, writers, and marketers use AI tools for faster content generation and campaign design.",
        "Routine copywriting and visual edits are automated, letting professionals focus on strategy and storytelling.",
        "Demand for AI prompt engineers and creative technologists is rapidly growing."
      ]
    }
  ];

  const jobProjections = [
    {
      category: "Data Entry/Clerical",
      impact: "High Automation Risk (Routine Tasks)",
      change: "-7.5M Jobs",
      isPositive: false
    },
    {
      category: "Customer Service/Sales",
      impact: "High Augmentation / Displacement",
      change: "-1.3M Jobs",
      isPositive: false
    },
    {
      category: "Production/Manufacturing",
      impact: "Robotics & AI Automation",
      change: "-0.9M Jobs",
      isPositive: false
    },
    {
      category: "STEM/Tech (AI & Data Roles)",
      impact: "New Job Creation (Prompt Engineers, MLOps)",
      change: "+20.0M Jobs",
      isPositive: true
    },
    {
      category: "Healthcare Professionals",
      impact: "High Demand / AI Augmentation",
      change: "+50.0M Jobs",
      isPositive: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <article className="font-serif">
        <ArticleHeader
          category="Future of Work Series"
          title="The Future of Work: How Generative AI Will Redefine Jobs and Skills"
          subtitle="Exploring the transformative power of Generative AI, from task automation to the creation of entirely new professional roles."
          authors={["Aaryan Nerkar", "Pushkar Chaudhari", "Samrat Latane"]}
          date="October 25, 2025"
          readTime="12 min"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 font-sans" data-testid="heading-transformative-power">
              The Transformative Power of Generative AI on the Workforce
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
              <strong className="text-foreground">Generative AI</strong> marks a turning point in what machines can do. Unlike traditional AI that follows fixed rules, it creates—writing essays, designing products, composing music, or coding—often with minimal input. What makes it groundbreaking is its creativity and versatility across domains. A single model can switch between drafting legal documents and designing ads effortlessly.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
              This isn't just automation; it's <strong className="text-foreground">augmentation of human creativity and cognition</strong>. By handling analytical and creative tasks once reserved for people, generative AI is changing what work means and how we approach problem-solving. It's not replacing human intelligence—it's expanding it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-sans" data-testid="heading-jobs-affected">
              Jobs and Tasks Most Affected by Generative AI
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Generative AI is revolutionizing how we work, especially in roles that rely heavily on <strong className="text-foreground">knowledge processing, data analysis, and content creation</strong>. Studies suggest that nearly two-thirds of all current work tasks could soon be automated or AI-assisted. Instead of replacing workers entirely, AI is transforming how professionals perform their daily tasks—reducing manual work and boosting productivity.
            </p>
          </section>

          <section className="mb-12 -mx-4 sm:mx-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {industries.map((industry, index) => (
                  <IndustryCard
                    key={index}
                    icon={industry.icon}
                    title={industry.title}
                    points={industry.points}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-sans" data-testid="heading-task-automation">
              Task Automation vs. Job Replacement
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
              AI isn't replacing people—it's <strong className="text-foreground">replacing certain tasks</strong>. Most jobs will evolve, not vanish. Generative AI typically automates 30–50% of daily work, freeing professionals to focus on human strengths like <strong className="text-foreground">judgment, empathy, and innovation</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
              For instance, instead of writing lengthy reports, workers can refine AI drafts, strategize, or connect with clients. This mirrors past technological shifts: accountants thrived after spreadsheets by moving into analysis and strategy. The future of work won't belong to those competing with AI—but to those who <strong className="text-foreground">collaborate with it</strong>, using it to amplify human intelligence and creativity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-sans" data-testid="heading-navigating-future">
              Navigating the Future: Adapting Skills and Shaping AI's Impact
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4 font-sans" data-testid="heading-impact-existing">
              Impact on Existing Jobs
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Generative AI is reshaping the modern workplace by automating routine and repetitive tasks, freeing professionals to focus on creativity and decision-making. Industries are already seeing major time and accuracy gains—teachers use automated grading tools to save hours weekly, while medical AI assistants analyze scans faster and more precisely than before. In finance, AI-powered fraud detection systems have cut false alerts by more than 60%, improving response time.
            </p>

            <h3 className="text-2xl font-semibold mb-4 font-sans" data-testid="heading-downfall">
              Downfall and Need to Adopt New Jobs
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              As automation accelerates, roles built on repetition—like data entry, customer service, and basic manufacturing—are disappearing. This doesn't signal the end of work, but a shift in required skills. The rise of <strong className="text-foreground">digital fluency and AI literacy</strong> is becoming essential, even for non-technical professionals. According to McKinsey, success in the AI era depends on hybrid human–AI collaboration, where people learn to guide and optimize machine performance.
            </p>

            <h3 className="text-2xl font-semibold mb-4 font-sans" data-testid="heading-new-roles">
              New Job Roles Created by Generative AI
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              While some jobs fade, Generative AI is giving rise to entirely new professions. Roles like <strong className="text-foreground">AI ethicists, policy managers, and prompt engineers</strong> are now in high demand—some earning over $175,000 annually. These specialists ensure AI systems remain ethical, transparent, and effective. Other emerging careers include data annotation experts, AI system integrators, and <strong className="text-foreground">creative technologists</strong> who combine art with algorithms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 font-sans" data-testid="heading-job-boom">
              Job Boom vs. Downfall: Projected Changes by 2030
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              The data below, based on various economic studies, highlights the shifting labor demand, illustrating where jobs are being augmented and where entirely new demand is emerging.
            </p>
            <div className="bg-card rounded-lg p-6 border border-card-border">
              <JobProjectionTable projections={jobProjections} />
            </div>
          </section>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
}
