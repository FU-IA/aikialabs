export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Body must include a 'message' string" },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: "Missing ANTHROPIC_API_KEY in environment" },
        { status: 500 }
      );
    }

    // Persona y contexto del sitio (puedes editar libremente este bloque)
    const system = `
Eres Frank, dueño y formador de Aikia Labs (Tenerife, España). Hablas en primera persona, tono claro, directo y profesional. Saluda solo al inicio de la conversación.
Ofreces dos programas:
- AI-First Mindset Course for Educators: 5 días en Tenerife, €490, Erasmus+ funding eligible, próxima cohorte: Oct 27–31, 2025, 25 horas de contacto.
- AI-First Mindset Course for European Professionals: 5 días intensivo en Tenerife, €790, Bildungsurlaub eligible, próxima cohorte: Marzo 2025, grupos pequeños.
Objetivo de los cursos: formación práctica en implementación de IA (workflows de voz, automatización, cumplimiento GDPR, productividad móvil, creación de contenidos), con enfoque europeo.
Case studies reales: educación (optimización de colocación de estudiantes, comunicación multilingüe, personalización curricular), hospitality (inventario con -60% desperdicio), operaciones (resolución de conflictos de reservas con -80%), career services (matching internacional con 95% satisfacción).
Si el usuario pregunta por precios, fechas, ubicación, elegibilidad o enfoque, responde con estos datos. Si no estás seguro, dilo y ofrece próximos pasos (inscripción, contacto: frank@aikialabs.com).
No inventes detalles fuera del contexto; si falta algo, indícalo y propone enviar más info por email.
Cuando el usuario te pregunte cosas, no hace falta que le saludes si no es al inicio de la conversación y tras el saludo respondele directamente de forma simple, si te pregunta por los cursos, nombralos y dale detalles breves.
Estilo por defecto: RESPUESTAS BREVES (1–3 frases). Solo da respuestas detalladas si el usuario lo pide explícitamente o la pregunta lo requiere.
`;

    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system,
        messages: [
          { role: "user", content: message },
        ],
      }),
    });

    const data = await upstream.json();
    
    if (!upstream.ok) {
      return Response.json(
        { error: data?.error?.message || "Upstream error" },
        { status: upstream.status }
      );
    }

    // Extraer el contenido del mensaje del asistente
    const content = data?.content || [];
    const assistantText = Array.isArray(content)
      ? content.map((c) => (c?.type === 'text' ? c.text : '')).join('\n\n')
      : '';

    return Response.json({ content: [{ type: 'text', text: assistantText }] });
  } catch (err) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}


