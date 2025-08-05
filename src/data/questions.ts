import { Question } from "@/components/QuestionCard";

export const assessmentQuestions: Question[] = [
  // Psychometric Questions (Interest Scale)
  {
    id: "psy_1",
    type: "likert",
    category: "psychometric",
    subcategory: "interest",
    question: "How excited are you about the idea of defining what products should do and how they should work?",
    options: [
      { value: "1", label: "Not at all excited", score: 20 },
      { value: "2", label: "Slightly excited", score: 40 },
      { value: "3", label: "Moderately excited", score: 60 },
      { value: "4", label: "Very excited", score: 80 },
      { value: "5", label: "Extremely excited", score: 100 }
    ]
  },
  {
    id: "psy_2",
    type: "likert",
    category: "psychometric",
    subcategory: "personality",
    question: "When working on group projects, how often do you naturally take on a coordinating role?",
    options: [
      { value: "1", label: "Never", score: 20 },
      { value: "2", label: "Rarely", score: 40 },
      { value: "3", label: "Sometimes", score: 60 },
      { value: "4", label: "Often", score: 80 },
      { value: "5", label: "Always", score: 100 }
    ]
  },
  {
    id: "psy_3",
    type: "scenario",
    category: "psychometric",
    subcategory: "motivation",
    question: "What motivates you most in your ideal work environment?",
    options: [
      { value: "impact", label: "Making a meaningful impact on users' lives", score: 100 },
      { value: "growth", label: "Continuous learning and skill development", score: 80 },
      { value: "salary", label: "High compensation and financial security", score: 40 },
      { value: "stability", label: "Job security and predictable routine", score: 20 }
    ]
  },

  // Technical Questions
  {
    id: "tech_1",
    type: "multiple-choice",
    category: "technical",
    subcategory: "logical-reasoning",
    question: "A product team needs to prioritize features. They have limited development time. What's the best approach?",
    options: [
      { value: "user_value", label: "Prioritize based on user value and business impact", score: 100 },
      { value: "easy_first", label: "Do the easiest features first to show progress", score: 40 },
      { value: "exec_wants", label: "Build what executives are asking for", score: 20 },
      { value: "all_equal", label: "Try to build everything equally", score: 0 }
    ]
  },
  {
    id: "tech_2",
    type: "scenario",
    category: "technical",
    subcategory: "domain-knowledge",
    question: "What does MVP stand for in product development?",
    options: [
      { value: "mvp_correct", label: "Minimum Viable Product", score: 100 },
      { value: "mvp_wrong1", label: "Most Valuable Player", score: 0 },
      { value: "mvp_wrong2", label: "Maximum Value Proposition", score: 20 },
      { value: "mvp_wrong3", label: "Minimum Variable Product", score: 10 }
    ]
  },
  {
    id: "tech_3",
    type: "scenario",
    category: "technical",
    subcategory: "numerical-ability",
    question: "If Feature A increases user engagement by 15% and Feature B increases it by 8%, but Feature B takes half the development time, which should you prioritize?",
    options: [
      { value: "depends", label: "It depends on the business goals and resource constraints", score: 100 },
      { value: "feature_a", label: "Always choose Feature A because it has higher impact", score: 60 },
      { value: "feature_b", label: "Always choose Feature B because it's faster", score: 40 },
      { value: "both", label: "Build both features simultaneously", score: 20 }
    ]
  },

  // WISCAR Questions
  {
    id: "wis_1",
    type: "likert",
    category: "wiscar",
    subcategory: "will",
    question: "How determined are you to pursue a career in product management, even if it requires significant learning and adaptation?",
    options: [
      { value: "1", label: "Not determined at all", score: 20 },
      { value: "2", label: "Slightly determined", score: 40 },
      { value: "3", label: "Moderately determined", score: 60 },
      { value: "4", label: "Very determined", score: 80 },
      { value: "5", label: "Extremely determined", score: 100 }
    ]
  },
  {
    id: "wis_2",
    type: "scenario",
    category: "wiscar",
    subcategory: "skill",
    question: "A stakeholder disagrees with your product decision. How do you handle this?",
    options: [
      { value: "listen_data", label: "Listen to their concerns and present data to support my decision", score: 100 },
      { value: "compromise", label: "Find a middle ground that partially satisfies both viewpoints", score: 70 },
      { value: "stick_position", label: "Firmly stick to my original decision", score: 30 },
      { value: "give_in", label: "Accept their viewpoint to avoid conflict", score: 20 }
    ]
  },
  {
    id: "wis_3",
    type: "likert",
    category: "wiscar",
    subcategory: "cognitive",
    question: "How comfortable are you with making decisions when you don't have all the information you'd like?",
    options: [
      { value: "1", label: "Very uncomfortable", score: 20 },
      { value: "2", label: "Somewhat uncomfortable", score: 40 },
      { value: "3", label: "Neutral", score: 60 },
      { value: "4", label: "Fairly comfortable", score: 80 },
      { value: "5", label: "Very comfortable", score: 100 }
    ]
  },
  {
    id: "wis_4",
    type: "scenario",
    category: "wiscar",
    subcategory: "real-world",
    question: "What do you think a Product Manager spends most of their time doing?",
    options: [
      { value: "stakeholders", label: "Communicating with stakeholders and aligning teams", score: 100 },
      { value: "features", label: "Designing new features and writing specifications", score: 70 },
      { value: "meetings", label: "Attending meetings and managing projects", score: 50 },
      { value: "coding", label: "Writing code and technical documentation", score: 10 }
    ]
  }
];