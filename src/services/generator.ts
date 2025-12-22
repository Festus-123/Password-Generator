// import { caseType } from './generator';
export type passwordType = "numeric" | "alphabetical" | "mixed";
export type caseType = "lowerCase" | "upperCase" | "mixed";

export interface UserDetails {
  firstname: string;
  lastname: string;
  favPhrase: string;
  remembered: string;
}

export interface passwordConfig {
  lenght: number;
  type: passwordType;
  case: caseType;
  isTrue?: boolean;
}

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLS = ["@", "#", "-", "_", "%", "&", "$", "/"];

// const rules
// rule 1
// if firstname first three character then a symbol

const getRandomFrom = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const generateRandomNumberString = (length: number): string =>
  Array.from({ length }, () => getRandomFrom(NUMBERS)).join("");

// const generateRandomLetters = (length: number): string =>
//   Array.from({ length }, () => getRandomFrom(ALPHABETS.split(""))).join("");

const __FIRST = (userDetails: UserDetails): string[] => {
  const stacks: string[] = [];
  const random: number = Math.floor(Math.random() * stacks.length);

  // first part
  stacks.push(userDetails.firstname.slice(0, 3) + SYMBOLS[random]);

  // next part
  stacks.push(userDetails.lastname.slice(0, 4) + SYMBOLS[2]);

  // next part
  const firstWord = userDetails.favPhrase.split(" ")[0];
  stacks.push(firstWord + generateRandomNumberString(3));

  // next part
  stacks.push(SYMBOLS[3] + userDetails.remembered.slice(0, 4));

  return stacks;
};

const applycase = (str: string, caseType: caseType): string => {
  switch (caseType) {
    case "lowerCase":
      return str.toLowerCase();
    case "upperCase":
      return str.toUpperCase();
    case "mixed":
      return str
        .split("")
        .map((char, i) =>
          i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
    default:
      return str;
  }
};

export const buildPassword = (
  dataParts: string[],
  config: passwordConfig
): string => {
  const { type, lenght, case: caseType } = config;

  let password = "";

  if (type) {
    if (type === "alphabetical") {
      const letters = dataParts.join("").replace(/[0-9]/g, "");
      return (password = letters.slice(0, lenght));
    } else if (type === "mixed") {
      const mixed = dataParts.join("") + generateRandomNumberString(3);
      return (password = mixed.slice(0, lenght));
    } else if (type === "numeric") {
      const numeric = dataParts
        .join("")
        .split("")
        .map((char) => char.charCodeAt(0).toString().slice(-1))
        .join("");
      password = numeric.slice(0, lenght);
    }

    if (password.length < lenght) {
      const chars =
        ALPHABETS + ALPHABETS.toUpperCase + SYMBOLS.join("") + NUMBERS.join("");
      password += getRandomFrom(chars.split(""));
    }
  }

  return applycase(password, caseType);
};

export const generatePassword = (
  userDetails: UserDetails,
  config: passwordConfig,

): string[] => {
  const parts = __FIRST(userDetails);
  const passwords: string[] = [];
  

  passwords.push(buildPassword(parts, config));

  return passwords;
};
