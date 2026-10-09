// Crea el tablero "Deventure" en Trello con todos los tickets de docs/backlog-deventure.md
// Uso: TRELLO_KEY=xxx TRELLO_TOKEN=yyy node scripts/crear-tablero-trello.mjs
import { readFileSync } from "node:fs";

const { TRELLO_KEY: key, TRELLO_TOKEN: token } = process.env;
if (!key || !token) {
  console.error("Faltan TRELLO_KEY y TRELLO_TOKEN (ver https://trello.com/power-ups/admin)");
  process.exit(1);
}

const md = readFileSync(new URL("../docs/backlog-deventure.md", import.meta.url), "utf8");
const cells = (line) => line.split("|").slice(1, -1).map((c) => c.trim());

const epics = {};
for (const line of md.split("\n")) {
  const c = cells(line);
  if (/^E\d+$/.test(c[0] ?? "")) epics[c[0]] = c[1];
}
const tickets = md
  .split("\n")
  .filter((l) => l.startsWith("| DEV-"))
  .map((l) => {
    const [id, epic, story, criteria, pts, prio] = cells(l);
    return { id, epic, story, criteria, pts, prio };
  });

const api = async (method, path, params = {}) => {
  const qs = new URLSearchParams({ key, token, ...params });
  const res = await fetch(`https://api.trello.com/1${path}?${qs}`, { method });
  if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${await res.text()}`);
  return res.json();
};

const board = await api("POST", "/boards", { name: "Deventure", defaultLists: "false", defaultLabels: "false" });

const listNames = ["Backlog MVP", "Backlog Post-MVP", "Sprint actual", "En progreso", "En revisión", "Hecho"];
const lists = {};
for (const [i, name] of listNames.entries()) {
  lists[name] = await api("POST", "/lists", { name, idBoard: board.id, pos: String((i + 1) * 1000) });
}

const colors = ["blue", "sky", "purple", "pink", "lime", "orange", "yellow", "black", "red", "green_dark", "blue_dark"];
const labels = {};
labels.MVP = await api("POST", "/labels", { name: "MVP", color: "green", idBoard: board.id });
labels["Post-MVP"] = await api("POST", "/labels", { name: "Post-MVP", color: "red_dark", idBoard: board.id });
for (const [i, [code, name]] of Object.entries(epics).entries()) {
  labels[code] = await api("POST", "/labels", { name: `${code} · ${name}`, color: colors[i % colors.length], idBoard: board.id });
}

for (const t of tickets) {
  const list = t.prio === "MVP" ? lists["Backlog MVP"] : lists["Backlog Post-MVP"];
  const card = await api("POST", "/cards", {
    idList: list.id,
    pos: "bottom",
    name: `${t.id} · ${t.story} [${t.pts} pts]`,
    desc: `**Historia:** ${t.story}\n\n**Épica:** ${t.epic} · ${epics[t.epic]}\n**Puntos:** ${t.pts}\n**Prioridad:** ${t.prio}`,
    idLabels: [labels[t.prio].id, labels[t.epic].id].join(","),
  });
  const checklist = await api("POST", "/checklists", { idCard: card.id, name: "Criterios de aceptación" });
  for (const item of t.criteria.split(/[;,]\s*/).filter(Boolean)) {
    await api("POST", `/checklists/${checklist.id}/checkItems`, { name: item });
  }
  console.log(`✔ ${t.id}`);
}

console.log(`\nListo: ${tickets.length} tickets → ${board.url}`);
