// Nimmt CSP-Verstöße der Browser an und schreibt sie ins Server-Log (Vercel: Logs, Suche nach "csp-violation").
// Zwei Formate: report-to (Chrome, Edge, Safari) schickt ein Array, report-uri (Firefox) ein Objekt mit "csp-report".
export async function POST(req: Request) {
  const text = await req.text();
  // Berichte sind wenige hundert Byte; alles Größere ist kein echter Bericht und wird nicht geloggt
  if (text.length > 0 && text.length <= 16_000) {
    try {
      const data: unknown = JSON.parse(text);
      const reports = Array.isArray(data) ? data.map((r) => r?.body) : [(data as { "csp-report"?: unknown })?.["csp-report"]];
      for (const r of reports) if (r) console.warn("csp-violation", JSON.stringify(r));
    } catch {
      // Kaputtes JSON ignorieren, der Browser wartet nicht auf eine Antwort
    }
  }
  return new Response(null, { status: 204 });
}
