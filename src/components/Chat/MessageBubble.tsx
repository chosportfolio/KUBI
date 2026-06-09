import kuCharacter from "../../assets/ku_character.png";
import type { Message } from "../../types/Chat";

export default function MessageBubble({
  type,
  text,
  description,
  buttonText,
  url,
  isUser,
  time,
  isLoading,
}: Message) {
  return (
    <div className={isUser ? "message-row user-row" : "message-row bot-row"}>
      {!isUser && (
        <img
          src={kuCharacter}
          alt="쿠비 프로필"
          className="profile"
        />
      )}

      <div className={isUser ? "message-content user-content" : "message-content bot-content"}>
        <div className={isUser ? "message-bubble user-bubble" : "message-bubble bot-bubble"}>
          {isLoading ? (
            <div className="typing-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              <p>{text}</p>

              {description && (
                <p className="message-description">
                  {description}
                </p>
              )}

              {type === "link" && buttonText && url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  {buttonText}
                </a>
              )}
            </>
          )}
        </div>

        {!isLoading && (
          <span className="message-time">
            {time}
          </span>
        )}
      </div>
    </div>
  );
}