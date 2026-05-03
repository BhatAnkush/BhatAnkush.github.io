// lib/tokenizer.ts

type TokenMap = Record<string, string>;

const SENSITIVE_PATTERNS: Record<string, RegExp> = {
  EMAIL:    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  PHONE:    /(\+91[\s-]?)?[6-9]\d{9}/g,
  LINKEDIN: /linkedin\.com\/in\/[a-zA-Z0-9\-_%]+/g,
  GITHUB:   /github\.com\/[a-zA-Z0-9\-_%]+/g,
  URL:      /https?:\/\/[^\s"',]+/g,
};

// Named entities to replace (add yours)
const NAMED_ENTITIES: Record<string, string> = {
  "Ankush Ananth Bhat": "[P1]",
  "Ankush":             "[P1]",
  "Niveus Solutions":   "[C1]",
  "NTT Data":           "[C2]",
  "EvoluteIQ":          "[C3]",
  "Mangaluru":          "[L1]",
  "Karnataka":          "[L2]",
  "Sahyadri":           "[L3]",
  "SOSC":               "[O1]",
  "Newton School":      "[O2]",
};

export function tokenize(text: string): { tokenized: string; map: TokenMap } {
  const map: TokenMap = {};
  let result = text;
  let counter = 100;

  // 1. Replace named entities first (longest match first to avoid partial replacements)
  const sortedEntities = Object.entries(NAMED_ENTITIES).sort(
    ([a], [b]) => b.length - a.length
  );
  for (const [entity, token] of sortedEntities) {
    if (result.includes(entity)) {
      map[token] = entity;
      result = result.replaceAll(entity, token);
    }
  }

  // 2. Replace pattern-based sensitive data (emails, URLs, etc.)
  for (const [type, regex] of Object.entries(SENSITIVE_PATTERNS)) {
    result = result.replace(regex, (match) => {
      const token = `[${type}_${counter++}]`;
      map[token] = match;
      return token;
    });
  }

  return { tokenized: result, map };
}

export function detokenize(text: string, map: TokenMap): string {
  let result = text;
  // Sort by token length descending to avoid partial replacements
  const sorted = Object.entries(map).sort(([a], [b]) => b.length - a.length);
  for (const [token, original] of sorted) {
    result = result.replaceAll(token, original);
  }
  return result;
}