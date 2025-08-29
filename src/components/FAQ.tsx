import { useState } from "react";

const faq = [
    {
        question: "What is an ISP?",
        answer: "An ISP is an Internet Service Provider, a company that provides access to the internet."
    },
    {
        question: "How do I choose the best ISP?",
        answer: "Consider speed, reliability, customer service, and price when choosing an ISP."
    },
    {
        question: "What is broadband internet?",
        answer: "Broadband is high-speed internet access that is always on and faster than traditional dial-up."
    },
    {
        question: "Can I change my ISP anytime?",
        answer: "Yes, but check your current contract for any early termination fees."
    },
    {
        question: "What equipment do I need for my ISP?",
        answer: "Typically, you need a modem and a router to connect to your ISP."
    },
    {
        question: "What is a data cap?",
        answer: "A data cap is a limit on the amount of data you can use each month with your ISP."
    },
    {
        question: "How do I troubleshoot slow internet?",
        answer: "Restart your modem/router, check for outages, and contact your ISP if the issue persists."
    },
    {
        question: "What is fiber internet?",
        answer: "Fiber internet uses fiber-optic cables to deliver faster speeds and more reliable connections."
    },
    {
        question: "How do I secure my home Wi-Fi?",
        answer: "Use a strong password, enable WPA3 encryption, and keep your router firmware updated."
    },
    {
        question: "What is an ISP?",
        answer: "An ISP is an Internet Service Provider, a company that provides access to the internet."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-2">FAQ</h1>
            <p className="text-center text-gray-500 mb-8">Everything you need to know</p>
            <div>
                {faq.map((item, idx) => (
                    <div key={idx} className="mb-4 border-b border-gray-200">
                        <button
                            onClick={() => handleToggle(idx)}
                            className="w-full text-left text-lg font-semibold py-4 cursor-pointer focus:outline-none"
                        >
                            {item.question}
                        </button>
                        {openIndex === idx && (
                            <div className="pb-4 text-gray-700">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
