"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
const emojis = {
    info: "📘",
    success: "✅",
    warning: "⚠️",
    error: "❌"
};
function log(message, level = "info") {
    const emoji = emojis[level] || emojis["info"];
    console.log(`${emoji} ${message}`);
}
