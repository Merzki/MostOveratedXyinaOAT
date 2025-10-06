export type FAQItemData = {
  id: string;
  q: string;
  a: string;
};

export const faqItems: FAQItemData[] = [
  {
    id: "size",
    q: "Why is everything so huge?",
    a: "Because you’re reading on a screen that asks for 16px font and gets 64px instead.",
  },
  {
    id: "top",
    q: "Where’s the ‘Back to Top’ button?",
    a: "You’re already at the top of your feelings. Scroll down for even more emotions.",
  },
  {
    id: "purpose",
    q: "What’s the point of this page?",
    a: "To guide you through 7 screens just to say: ‘scrolling is a choice too’.",
  },
  {
    id: "toast",
    q: "How do I silence that annoying toast?",
    a: "You must absolutely not press the big ‘DO NOT CLICK’ in the header. That would be a violation.",
  },
];
