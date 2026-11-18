import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is ClassBuddy?",
    answer:
      "ClassBuddy is a platform that helps teachers and students collaborate seamlessly. Teachers can create groups, share AI-powered notes, and manage classes, while students can join groups, access shared resources, and stay updated in real-time.",
  },
  {
    question: "How can teachers generate AI-powered notes?",
    answer:
      "Teachers can use our built-in AI notes generator to quickly create structured notes. Simply input your topic, and the AI will generate clear, concise, and accurate notes that can be shared with students instantly.",
  },
  {
    question: "Can students join multiple groups?",
    answer:
      "Yes! Students can join multiple groups created by different teachers, making it easier to manage subjects and stay connected across various classes.",
  },
  {
    question: "Is ClassBuddy secure for sharing notes?",
    answer:
      "Absolutely. We use secure authentication and encrypted storage to ensure that only authorized members of a group can view and edit the shared notes.",
  },
  {
    question: "Does ClassBuddy support real-time updates?",
    answer:
      "Yes. When a teacher updates a note or adds new content, all students in the group are notified in real-time so everyone stays on the same page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 relative bg-neutral-50/60 dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden transition-colors duration-300">
      {/* Background divider line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mt-2 mb-12">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl tracking-tight font-extrabold text-center mb-6 text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg font-normal text-center">
            Here are some common questions about how ClassBuddy works for teachers
            and students.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-emerald-500/40 shadow-lg shadow-emerald-500/5 bg-white dark:bg-neutral-950/70"
                  : "border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950/70 shadow-2xs"
              }`}
            >
              {/* Question Row */}
              <button
                id={`faq-btn-${index}`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors hover:bg-emerald-50/30 dark:hover:bg-neutral-900/50 cursor-pointer"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-1.5 rounded-full transition-colors ${openIndex === index ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30' : 'bg-neutral-100 text-neutral-500 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-800'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>
              </button>

              {/* Answer Section */}
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`px-6 text-neutral-600 dark:text-neutral-300 text-[15px] leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 pb-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
