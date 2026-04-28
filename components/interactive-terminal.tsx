"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import enMessages from "@/messages/en.json";
import ruMessages from "@/messages/ru.json";

type Language = "en" | "ru";
type GameType = "wordle" | "guess" | "rps";
type GameStatus = "selecting_language" | "playing";

type WordleData = {
  targetWord: string;
};

type GuessData = {
  targetNumber: number;
};

type GameState = {
  active: GameType | null;
  status: GameStatus | null;
  language: Language | null;
  attempts: number;
  maxAttempts: number;
  gameData: WordleData | GuessData | null;
};

const GAME_LANG_STORAGE_KEY = "preferred-game-language";
const MAX_HISTORY_ITEMS = 18;

const WORDLE_WORDS: Record<Language, string[]> = {
  en: ["PROMP", "SKILL", "FRAME", "LOGIC", "DEBUG", "QUERY", "FOCUS", "AGENT", "MODEL", "TRAIN"],
  ru: ["ПРОМТ", "СКИЛЛ", "КОДЕР", "АГЕНТ", "ЛОГИК", "СТЕКИ", "ФРЕЙМ", "МОДЕЛ", "ЧАТЫ", "РОБОТ"],
};

const RPS_CHOICES: Record<Language, string[]> = {
  en: ["rock", "paper", "scissors"],
  ru: ["камень", "бумага", "ножницы"],
};

function randomFrom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function interpolate(template: string, values: Record<string, string | number> = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

function getByPath(source: unknown, path: string) {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (typeof acc === "object" && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

function getWordleFeedback(guess: string, target: string) {
  const feedback: string[] = [];
  const targetLetters = target.split("");
  const taken = new Array(targetLetters.length).fill(false);

  for (let i = 0; i < guess.length; i += 1) {
    if (guess[i] === targetLetters[i]) {
      feedback[i] = "🟩";
      taken[i] = true;
    }
  }

  for (let i = 0; i < guess.length; i += 1) {
    if (feedback[i]) continue;
    const index = targetLetters.findIndex((letter, idx) => letter === guess[i] && !taken[idx]);
    if (index >= 0) {
      feedback[i] = "🟨";
      taken[index] = true;
    } else {
      feedback[i] = "⬜";
    }
  }

  return feedback.join("");
}

export function InteractiveTerminal({
  locale,
  onClose,
  onNavigateProjects,
}: {
  locale: "ru" | "en";
  onClose?: () => void;
  onNavigateProjects?: () => void;
}) {
  const t = useTranslations();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([t("terminalInitial")]);
  const [preferredGameLanguage, setPreferredGameLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "ru";
    }
    const saved = window.localStorage.getItem(GAME_LANG_STORAGE_KEY);
    return saved === "en" || saved === "ru" ? saved : "ru";
  });
  const [rpsScore, setRpsScore] = useState({ player: 0, computer: 0 });
  const [gameState, setGameState] = useState<GameState>({
    active: null,
    status: null,
    language: null,
    attempts: 0,
    maxAttempts: 0,
    gameData: null,
  });

  const defaultGames = useMemo(
    () => (locale === "ru" ? (ruMessages as Record<string, unknown>) : (enMessages as Record<string, unknown>)),
    [locale],
  );

  const appendOutput = (value: string) => {
    setHistory((prev) => [...prev, value].slice(-MAX_HISTORY_ITEMS));
  };

  const gameText = (lang: Language, key: string, values?: Record<string, string | number>) => {
    const source = lang === "ru" ? (ruMessages as Record<string, unknown>) : (enMessages as Record<string, unknown>);
    const template = getByPath(source, `terminal.games.${key}`);
    if (typeof template !== "string") {
      return key;
    }
    return interpolate(template, values);
  };

  const defaultGameText = (key: string, values?: Record<string, string | number>) => {
    const template = getByPath(defaultGames, `terminal.games.${key}`);
    if (typeof template !== "string") {
      return key;
    }
    return interpolate(template, values);
  };

  const resetGame = () => {
    setGameState({
      active: null,
      status: null,
      language: null,
      attempts: 0,
      maxAttempts: 0,
      gameData: null,
    });
  };

  const startLanguageSelection = (game: GameType) => {
    const maxAttempts = game === "wordle" ? 6 : game === "guess" ? 10 : Number.POSITIVE_INFINITY;
    setGameState({
      active: game,
      status: "selecting_language",
      language: null,
      attempts: 0,
      maxAttempts,
      gameData: null,
    });

    appendOutput(
      [
        defaultGameText("common.chooseLanguage"),
        `  ${defaultGameText("common.en")}`,
        `  ${defaultGameText("common.ru")}`,
        `${defaultGameText("common.cancel")} (${preferredGameLanguage.toUpperCase()} by default)`,
      ].join("\n"),
    );
  };

  const startGame = (game: GameType, lang: Language) => {
    window.localStorage.setItem(GAME_LANG_STORAGE_KEY, lang);
    setPreferredGameLanguage(lang);

    if (game === "wordle") {
      const targetWord = randomFrom(WORDLE_WORDS[lang]);
      setGameState({
        active: game,
        status: "playing",
        language: lang,
        attempts: 0,
        maxAttempts: 6,
        gameData: { targetWord },
      });
      appendOutput(
        [
          gameText(lang, "wordle.languageSelected", { lang: lang.toUpperCase() }),
          gameText(lang, "wordle.title"),
          gameText(lang, "wordle.subtitle", { attempts: 6 }),
          gameText(lang, "wordle.guessPrompt", { attempt: 1 }),
        ].join("\n"),
      );
      return;
    }

    if (game === "guess") {
      const targetNumber = Math.floor(Math.random() * 100) + 1;
      setGameState({
        active: game,
        status: "playing",
        language: lang,
        attempts: 0,
        maxAttempts: 10,
        gameData: { targetNumber },
      });
      appendOutput(
        [
          gameText(lang, "guess.title"),
          gameText(lang, "guess.subtitle"),
          gameText(lang, "guess.invalidInput"),
        ].join("\n"),
      );
      return;
    }

    setGameState({
      active: game,
      status: "playing",
      language: lang,
      attempts: 0,
      maxAttempts: Number.POSITIVE_INFINITY,
      gameData: null,
    });
    appendOutput([gameText(lang, "rps.title"), gameText(lang, "rps.prompt")].join("\n"));
  };

  const handleWordleInput = (rawInput: string, lang: Language) => {
    const guess = rawInput.trim().toUpperCase();
    const lettersCount = Array.from(guess).length;
    if (lettersCount !== 5) {
      appendOutput(gameText(lang, "wordle.invalidLength"));
      return;
    }

    if (!WORDLE_WORDS[lang].includes(guess)) {
      appendOutput(gameText(lang, "wordle.notInDictionary"));
      return;
    }

    if (gameState.active !== "wordle" || !gameState.gameData) return;

    const targetWord = (gameState.gameData as WordleData).targetWord;
    const attempt = gameState.attempts + 1;
    const feedback = getWordleFeedback(guess, targetWord);

    if (guess === targetWord) {
      appendOutput(
        [
          `${guess} ${feedback}`,
          gameText(lang, "wordle.win", { word: targetWord, attempts: attempt }),
          gameText(lang, "wordle.playAgain"),
        ].join("\n"),
      );
      resetGame();
      return;
    }

    if (attempt >= gameState.maxAttempts) {
      appendOutput(
        [
          `${guess} ${feedback}`,
          gameText(lang, "wordle.lose", { word: targetWord }),
          gameText(lang, "wordle.playAgain"),
        ].join("\n"),
      );
      resetGame();
      return;
    }

    appendOutput(
      [
        `${guess} ${feedback}`,
        gameText(lang, "wordle.remainingAttempts", { attempts: gameState.maxAttempts - attempt }),
        gameText(lang, "wordle.guessPrompt", { attempt: attempt + 1 }),
      ].join("\n"),
    );
    setGameState((prev) => ({ ...prev, attempts: attempt }));
  };

  const handleGuessInput = (rawInput: string, lang: Language) => {
    const normalized = rawInput.trim();
    if (!/^\d+$/.test(normalized)) {
      appendOutput(gameText(lang, "guess.invalidInput"));
      return;
    }

    const value = Number(normalized);
    if (value < 1 || value > 100) {
      appendOutput(gameText(lang, "guess.invalidInput"));
      return;
    }

    if (gameState.active !== "guess" || !gameState.gameData) return;

    const target = (gameState.gameData as GuessData).targetNumber;
    const attempt = gameState.attempts + 1;

    if (value === target) {
      appendOutput(
        [
          gameText(lang, "guess.win", { attempts: attempt }),
          gameText(lang, "guess.playAgain"),
        ].join("\n"),
      );
      resetGame();
      return;
    }

    const hint = value > target ? gameText(lang, "guess.tooHigh") : gameText(lang, "guess.tooLow");
    if (attempt >= gameState.maxAttempts) {
      appendOutput([hint, gameText(lang, "guess.lose", { number: target }), gameText(lang, "guess.playAgain")].join("\n"));
      resetGame();
      return;
    }

    appendOutput([hint, gameText(lang, "guess.remainingAttempts", { attempts: gameState.maxAttempts - attempt })].join("\n"));
    setGameState((prev) => ({ ...prev, attempts: attempt }));
  };

  const handleRpsInput = (rawInput: string, lang: Language) => {
    const choice = rawInput.trim().toLowerCase();
    const validChoices = RPS_CHOICES[lang];
    if (!validChoices.includes(choice)) {
      appendOutput(gameText(lang, "rps.invalidChoice"));
      return;
    }

    const computerChoice = randomFrom(validChoices);
    const winMap: Record<string, string> =
      lang === "ru"
        ? { камень: "ножницы", ножницы: "бумага", бумага: "камень" }
        : { rock: "scissors", scissors: "paper", paper: "rock" };

    let roundResult = gameText(lang, "rps.tie");
    let nextScore = rpsScore;

    if (choice !== computerChoice) {
      if (winMap[choice] === computerChoice) {
        nextScore = { ...rpsScore, player: rpsScore.player + 1 };
        roundResult = gameText(lang, "rps.win");
      } else {
        nextScore = { ...rpsScore, computer: rpsScore.computer + 1 };
        roundResult = gameText(lang, "rps.lose");
      }
    }

    setRpsScore(nextScore);
    appendOutput(
      [
        gameText(lang, "rps.youChose", { choice }),
        gameText(lang, "rps.computerChose", { choice: computerChoice }),
        roundResult,
        gameText(lang, "rps.score", { player: nextScore.player, computer: nextScore.computer }),
        gameText(lang, "rps.playAgain"),
      ].join("\n"),
    );
    resetGame();
  };

  const handleGameInput = (rawInput: string, normalized: string) => {
    if (!gameState.active || !gameState.status) return false;

    if (normalized === "cancel" || normalized === "exit") {
      appendOutput(
        gameState.language ? gameText(gameState.language, "common.exiting") : defaultGameText("common.exiting"),
      );
      resetGame();
      return true;
    }

    if (gameState.status === "selecting_language") {
      if (normalized === "en" || normalized === "ru") {
        startGame(gameState.active, normalized);
        return true;
      }
      appendOutput(defaultGameText(`${gameState.active}.languagePrompt`));
      return true;
    }

    if (gameState.status === "playing" && gameState.language) {
      if (gameState.active === "wordle") {
        handleWordleInput(rawInput, gameState.language);
      } else if (gameState.active === "guess") {
        handleGuessInput(rawInput, gameState.language);
      } else if (gameState.active === "rps") {
        handleRpsInput(rawInput, gameState.language);
      }
      return true;
    }

    return false;
  };

  const handleCommand = (command: string) => {
    if (command === "exit") {
      onClose?.();
      return;
    }

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "wordle" || command === "guess" || command === "rps") {
      startLanguageSelection(command);
      return;
    }

    if (command === "projects") {
      onNavigateProjects?.();
      appendOutput(locale === "ru" ? "Переход к разделу проектов..." : "Opening projects section...");
      return;
    }

    const commandResults: Record<string, string> = {
      help: t("terminalHelpDetailed"),
      skills: "Next.js, TypeScript, Python, FastAPI, OpenAI API, LangChain, n8n, PostgreSQL",
      contact: "telegram: @your_handle | email: semenoff2007@gmail.com",
      about:
        locale === "ru"
          ? "Prompt Engineer, который внедряет AI-решения в бизнес-процессы."
          : "Prompt Engineer focused on practical AI automation for businesses.",
      experience:
        locale === "ru"
          ? "Опыт: Prompt Engineering, AI-ассистенты, интеграции и автоматизация."
          : "Experience: Prompt engineering, AI assistants, integrations, and automation.",
    };

    appendOutput(commandResults[command] ?? `${t("terminalUnknown")}: ${command}`);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const rawInput = input.trim();
    const normalized = rawInput.toLowerCase();
    if (!rawInput) return;

    appendOutput(`> ${rawInput}`);
    if (!handleGameInput(rawInput, normalized)) {
      handleCommand(normalized);
    }
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--terminal-bg)] p-4 font-mono text-sm text-[var(--card-foreground)] shadow-[var(--card-shadow)] backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="mb-2 h-56 space-y-1 overflow-hidden text-[var(--terminal-output)]">
        {history.map((line, index) => (
          <p key={`${index}-${line.slice(0, 16)}`} className="whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span className="text-[var(--primary)]">{">"}</span>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="help"
          className="w-full bg-transparent text-[var(--terminal-input)] outline-none placeholder:text-slate-500 dark:placeholder:text-zinc-500"
        />
      </form>
    </div>
  );
}
