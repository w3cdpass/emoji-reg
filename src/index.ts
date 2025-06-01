type LogLevel = "info" | "success" | "warning" | "error";


const emojis: Record<LogLevel, string> = {
    info: "📘",
    success: "✅",
    warning: "⚠️",
    error: "❌"
};

export function log(message: String, level: LogLevel = "info") {
    const emoji = emojis[level] || emojis["info"];
    console.log(`${emoji} ${message}`)
    
}