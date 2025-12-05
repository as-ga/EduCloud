"use client";

import { useState, useEffect } from "react";
import { QUIZ_DATA } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizForm() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUIZ_DATA.questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleNext = () => {
    if (currentQ < QUIZ_DATA.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelected(answers[currentQ + 1]);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
      setSelected(answers[currentQ - 1]);
    }
  };

  const handleSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelected(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (isSubmitted) {
    const score = answers.reduce((acc: number, answer, index) => {
      return answer === QUIZ_DATA.questions[index].correct ? acc + 1 : acc;
    }, 0);
    const percentage = (score / QUIZ_DATA.questions.length) * 100;

    return (
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold font-headline mb-2">
          Assessment Submitted!
        </h2>
        <p className="text-muted-foreground mb-6">Your results are in.</p>
        <div className="text-6xl font-bold text-primary mb-2">
          {percentage.toFixed(0)}%
        </div>
        <p className="text-lg font-medium mb-8">
          You answered {score} out of {QUIZ_DATA.questions.length} questions
          correctly.
        </p>
        <Button onClick={() => window.location.reload()}>Take Again</Button>
      </Card>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold font-headline text-foreground">
            {QUIZ_DATA.title}
          </h1>
          <p className="text-muted-foreground text-sm">
            Question {currentQ + 1} of {QUIZ_DATA.questions.length}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200">
          <Clock className="w-4 h-4" /> {minutes}:
          {seconds < 10 ? `0${seconds}` : seconds} remaining
        </div>
      </div>

      <Card className="p-8 mb-6">
        <h3 className="text-lg font-medium text-foreground mb-6">
          {QUIZ_DATA.questions[currentQ].text}
        </h3>
        <RadioGroup
          value={selected?.toString()}
          onValueChange={(val) => handleSelect(parseInt(val))}
          className="space-y-3"
        >
          {QUIZ_DATA.questions[currentQ].options.map((opt, idx) => (
            <Label
              key={idx}
              htmlFor={`option-${idx}`}
              className={cn(
                "p-4 rounded-lg border flex items-center gap-4 cursor-pointer transition-all",
                selected === idx
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              )}
            >
              <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
              {opt}
            </Label>
          ))}
        </RadioGroup>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="secondary"
          disabled={currentQ === 0}
          onClick={handlePrev}
        >
          Previous
        </Button>
        {currentQ < QUIZ_DATA.questions.length - 1 ? (
          <Button onClick={handleNext} disabled={selected === null}>
            Next Question <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={() => setIsSubmitted(true)}
            disabled={answers.includes(null)}
          >
            Submit Assessment
          </Button>
        )}
      </div>
    </>
  );
}
