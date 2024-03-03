import AccordionItem from "./AccordionItem/AccordionItem";

type AccordionProps = {
  bgcolor: React.CSSProperties;
  border: React.CSSProperties;
};

const Accordion = ({ bgcolor, border }: AccordionProps) => {
  const Faq = [
    {
      id: 1,
      question: "What is Paystride and how does it work?",
      answer:
        "Paystride is a payment notifications system that helps high foot traffic businesses like yours, collect transfer payments on scale, and empower your customer reps to confirm payments instantly without the need to confirm with any other person.",
    },
    {
      id: 2,
      question: "What types of transfers can I make using Paystride?",
      answer:
        "You can make mobile transfers, USSD transfers, and bank transfers.",
    },
    {
      id: 3,
      question:
        "Are there any fees associated with using Paystride for money transfers?",
      answer:
        "Paystride only collects 1% transaction fee capped at 1500 per payment.",
    },
    {
      id: 4,
      question:
        "What are the maximum and minimum transfer limits with Paystride?",
      answer:
        "There is no maximum or minimum transfer as long as it is not a fraudulent transaction as Paystride partners with EFCC to track any illegal transfer.",
    },
    {
      id: 5,
      question: "Can I send money internationally using Paystride?",
      answer: "No, paystride does not cover international money transactions.",
    },
    {
      id: 6,
      question: "How do i receive my payout from paystride as a business?",
      answer:
        "Paystride auto settles your business account submitted to paystride upon onboarding instantly.",
    },
  ];

  return (
    <>
      <div className="w-[90%] py-0 md:py-10 flex flex-col md:flex-row">
        <div className="flex-[1] py-0 md:py-7">
          <div>
            <h1 className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl">
              FAQs
            </h1>
            <p className="mt-3 mb-4 tracking-wide max-w-[50rem] md:mt-6 mx-auto md:text-lg text-start">
              We are happy to share more interesting information about us
            </p>
            <a href="mailto:sales@paystride.co">
              <button className="rounded-md border border-solid border-[#21232a] py-[6px] px-3 md:py-2 md:px-4 text-[12px] min-[360px]:text-sm sm:text-base xl:text-lg capitalize hover:bg-[#f9f8f8]">
                contact sales
              </button>
            </a>
          </div>
        </div>
        <div className="flex-[1] py-7 flex justify-center">
          <div>
            {Faq.map((faqs) => {
              return (
                <AccordionItem
                  {...faqs}
                  key={faqs.id}
                  bgcolor={bgcolor}
                  border={border}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
