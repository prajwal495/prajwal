import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Terminal } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I am Prajwal's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Gemini Chat
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are an AI assistant for Prajwal Chaple's portfolio website. Prajwal is a B.Tech IT student and Full-Stack Web Developer skilled in React, TypeScript, Node.js, and Firebase. Be helpful, concise, and tech-savvy. Format your responses in Markdown.",
          tools: [{ googleSearch: {} }],
        }
      });
    } catch (error) {
      console.error("Failed to initialize Gemini:", error);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatRef.current) throw new Error("Chat not initialized");
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error processing your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-cyan-400 text-zinc-950 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-300 transition-all z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Chatbot"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-96 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ maxHeight: 'calc(100vh - 6rem)' }}
      >
        {/* Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-400/10 flex items-center justify-center text-cyan-400">
              <Terminal size={16} />
            </div>
            <div>
              <h3 className="font-mono font-semibold text-zinc-50 text-sm">AI Assistant</h3>
              <p className="text-[10px] text-cyan-400 font-mono">gemini-3-flash-preview</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-50 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-96 space-y-6 bg-zinc-950/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-800 text-zinc-400' : 'bg-cyan-400/10 text-cyan-400'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[75%] rounded-xl p-3 text-sm ${msg.role === 'user' ? 'bg-zinc-800 text-zinc-50 rounded-tr-none' : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-none'}`}>
                {msg.role === 'user' ? (
                  msg.text
                ) : (
                  <div className="markdown-body prose-invert prose-sm max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>pre]:bg-zinc-950 [&>pre]:p-2 [&>pre]:rounded [&>pre]:border [&>pre]:border-zinc-800 [&>pre]:overflow-x-auto [&>code]:bg-zinc-800 [&>code]:px-1 [&>code]:rounded">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center bg-cyan-400/10 text-cyan-400">
                <Bot size={16} />
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl rounded-tl-none p-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-900 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-50 focus:outline-none focus:border-cyan-400/50 font-mono"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-lg bg-cyan-400 text-zinc-950 flex items-center justify-center hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
