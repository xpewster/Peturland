import React from "react";
import { EMOJI_SRC, EMOJI_CODES } from "./utils/emoji";
import { getPlayerIcon } from "./utils";
import { ChatEntry } from "./client/player-client";
import { ChatScope } from "./client/protocol";

type ChatPanelProps = {
  log: ChatEntry[];
  onSend: (text: string, scope: ChatScope) => void;
  myId?: string | null;
  /** Team names this viewer may post to: all teams for the host, the own team
   *  for a player. */
  teamChannels?: string[];
};

export const ChatPanel = ({ log, onSend, teamChannels }: ChatPanelProps): React.ReactElement => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [channelIdx, setChannelIdx] = React.useState(0);
  const [draft, setDraft] = React.useState("");

  const channels: ChatScope[] = React.useMemo(
    () => [{ type: "all" }, ...(teamChannels ?? []).map((id) => ({ type: "team", id } as ChatScope))],
    [teamChannels],
  );

  React.useEffect(() => { if (channelIdx >= channels.length) setChannelIdx(0); }, [channels.length, channelIdx]);
  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log.length]);

  const channel = channels[Math.min(channelIdx, channels.length - 1)] ?? { type: "all" };
  const cycle = () => setChannelIdx((i) => (i + 1) % channels.length);

  const sendOn = (text: string) => onSend(text, channel);
  const sendText = (): void => {
    const t = draft.trim();
    if (!t) return;
    sendOn(t);
    setDraft("");
  };

  const getTeamName = (id: string): string => {
    return (teamChannels?.length ?? 0) > 1 ? id : "Team";
  };

  const channelLabel = channel.type === "all" ? "All" : getTeamName(channel.id);

  const prefixMsg = (m: ChatEntry): { label: string; color: string } | null => {
    if (m.system) return { label: "System", color: "#c0392b" };
    if (m.scope.type === "team") return { label: getTeamName(m.scope.id), color: "#2c6fbf" };
    if (m.scope.type === "player") return { label: "You", color: "#ff8800" };
    return null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", backgroundColor: "white", color: "black" }}>
      <p style={{ margin: 0, padding: "8px 10px", textDecoration: "underline" }}>Chat</p>
      <hr style={{ width: "100%", margin: 0 }} />

      <div ref={scrollRef} className="scrollable-content"
           style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 10px", width: "calc(100% - 10px)" }}>
        {log.map((m) => {
          const src = EMOJI_SRC[m.text];
          const prefix = prefixMsg(m);
          return (
            <div key={m.id} title={new Date(m.timestamp).toLocaleTimeString()}
                style={{ display: "flex", gap: 6, marginBottom: 4, alignItems: "flex-start" }}>
              {m.senderId && getPlayerIcon(m.senderId)}
              <span style={{ minWidth: 0, overflowWrap: "anywhere", paddingLeft: "1.25em", textIndent: "-1.25em" }}>
                <span style={{ whiteSpace: "nowrap" }}>{m.senderName}:&nbsp;</span>
                {prefix && <span style={{ color: prefix.color }}>[{prefix.label}]&nbsp;</span>}
                {src
                  ? <img src={src} alt={m.text} style={{ imageRendering: "pixelated", verticalAlign: "middle" }} />
                  : <span>{m.text}</span>}
              </span>
            </div>
          );
        })}
      </div>

      <hr style={{ width: "100%", margin: 0 }} />

      <div style={{ display: "flex", gap: 4, padding: "8px 10px", alignItems: "center" }}>
        <button type="button" onClick={cycle} disabled={channels.length <= 1} title="Cycle channel"
                style={{ flexShrink: 0, minWidth: 48, cursor: channels.length > 1 ? "pointer" : "not-allowed" }}>
          {channelLabel}
        </button>
        <input type="text" value={draft}
               onChange={(e) => setDraft(e.target.value)}
               onKeyDown={(e) => { if (e.key === "Enter") sendText(); }}
               placeholder="Message" style={{ flex: 1, minWidth: 0 }} />
        <button type="button" onClick={sendText} style={{ flexShrink: 0 }}>Send</button>
      </div>

      <hr style={{ width: "100%", margin: 0, marginBottom: '2px' }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, padding: "8px 10px", backgroundColor: "white", justifyContent: "flex-end" }}>
        {EMOJI_CODES.map((code: string) => (
          <button key={code} onClick={() => sendOn(code)} title={code}
                  style={{ background: "transparent", border: "1px solid rgba(0, 0, 0, 1)", cursor: "pointer", padding: 2, lineHeight: 0 }}>
            <img src={EMOJI_SRC[code]} alt={code} style={{ imageRendering: "pixelated" }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatPanel;