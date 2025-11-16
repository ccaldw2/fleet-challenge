import { useState, useEffect, useRef } from "react";
import type { Question } from "./questions";
import { useAppDispatch } from '../hooks';
import { addSubmission } from '../reducers/submissionReducer';

export const useConversation = (questions: Question[]) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [conversation, setConversation] = useState<{ Q: string; A: string }[]>([]);
  const [input, setInput] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);


  
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const messages = [...conversation];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentQuestionIndex]);

  const handleNext = () => {
    const q = questions[currentQuestionIndex];

    setFormData(prev => ({ ...prev, [q.name]: input }));
    setConversation(prev => [...prev, { Q: q.label, A: input }]);
    setInput("");

    console.log("Form Data:", { ...formData, [q.name]: input });

    setCurrentQuestionIndex(i => i + 1);

  };

  const handleUndo = (index: number) => {
    setCurrentQuestionIndex(index);
    setConversation(conversation.slice(0, index));
    setInput("");
  };

  const handleReset = () => {
    setFormData({});
    setConversation([]);
    setInput("");
    setCurrentQuestionIndex(0);
    setFile(null);
    setSubmitted(false);
  }

  const handleSubmit = () => {
    dispatch(addSubmission(formData));
    setSubmitted(true);
  };

  return {
    input,
    setInput,
    formData,
    conversation,
    currentQuestionIndex,
    handleNext,
    handleUndo,
    bottomRef,
    file,
    setFile,
    handleSubmit,
    submitted,
    handleReset
  };
};
