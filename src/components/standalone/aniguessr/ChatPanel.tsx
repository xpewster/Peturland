import React from "react";
import type { ChatMessage } from "./client";
import { EMOJI_SRC, EMOJI_CODES } from "./utils/emoji";
import { getPlayerIcon } from "./utils";

type ChatPanelProps = {
  log: ChatMessage[];
  onSend: (text: string) => void;
  myId?: string | null;
};

export const ChatPanel = ({ log, onSend, myId = null }: ChatPanelProps): React.ReactElement => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log.length]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", width: "100%", height: "100%",
      backgroundColor: "white", color: "black",
    }}>
      <p style={{ margin: 0, padding: "8px 10px", textDecoration: "underline" }}>Chat</p>
      <hr style={{ width: "100%", margin: 0 }} />

      <div ref={scrollRef} className='scrollable-content' style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 10px", width: "calc(100% - 10px)" }}>
        {log.length === 0 ? (
          <p></p>
        ) : (
          log.map((m) => {
            const src = EMOJI_SRC[m.text];
            return (
              <div
                key={m.id}
                title={new Date(m.timestamp).toLocaleTimeString()}
                style={{
                  display: "flex", alignItems: "center", gap: 6, marginBottom: 4,
                  justifyContent: "flex-start",
                }}
              >
                {m.senderId && getPlayerIcon(m.senderId)}
                <span>
                {m.senderName}: 
                </span>
                {src
                  ? <img src={src} alt={m.text} style={{ imageRendering: "pixelated" }} />
                  : <span>{m.text}</span>}
              </div>
            );
          })
        )}
      </div>

      <hr style={{ width: "100%", margin: 0, marginBottom: '2px' }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, padding: "8px 10px", backgroundColor: "white", justifyContent: "flex-end" }}>
        {EMOJI_CODES.map((code: string) => (
          <button key={code} onClick={() => onSend(code)} title={code}
                  style={{ background: "transparent", border: "1px solid rgba(0, 0, 0, 1)",
                           cursor: "pointer", padding: 2, lineHeight: 0 }}>
            <img src={EMOJI_SRC[code]} alt={code} style={{ imageRendering: "pixelated" }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatPanel;
