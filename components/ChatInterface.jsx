'use client';

import { useState } from 'react';
import { useT } from '../contexts/TranslationContext';

export default function ChatInterface() {
  const t = useT();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const message = input.trim();
    if (!message) return;

    setHistory((h) => [...h, { role: 'user', content: message }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Request failed');

      // Anthropic returns an array of content blocks in data.content
      const assistantText = Array.isArray(data?.content)
        ? data.content.map((c) => (typeof c?.text === 'string' ? c.text : '')).join('\n\n')
        : '';

      setHistory((h) => [...h, { role: 'assistant', content: assistantText }]);
    } catch (err) {
      setError(err?.message || t('common.somethingWentWrong'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex-1 space-y-4 rounded-md border border-zinc-200 p-4">
        {history.length === 0 ? (
          <p className="text-zinc-600">
            {t('common.writeMessagePrompt')}
          </p>
        ) : (
          <ul className="space-y-3">
            {history.map((m, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="mr-2 rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                  {m.role === 'user' ? t('common.you') : t('common.frank')}
                </span>
                <span className="whitespace-pre-wrap text-zinc-900">
                  {m.content}
                </span>
              </li>
            ))}
          </ul>
        )}
        {error && (
          <div className="rounded-md bg-red-50 p-2 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('common.writeMessage')}
          className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-[#2563eb] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {loading ? t('common.sending') : t('common.send')}
        </button>
      </form>
    </div>
  );
}


