function normalizeJobTitles(titles: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const t of titles) {
    const normalized = t.trim().toLowerCase();
    if (!normalized) continue;
    if (!seen.has(normalized)) {
      seen.add(normalized);
      result.push(normalized);
    }
  }
  return result;
}

const input = [
  "Frontend Developer ",
  "backend developer",
  "Frontend developer",
  "  UX Designer",
];
console.log(normalizeJobTitles(input));
module.exports = { normalizeJobTitles };
