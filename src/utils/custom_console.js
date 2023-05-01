export const logMessage = (type, message) => {
  let icon, color, prefix;
  switch (type) {
    case "success":
      icon = "✔ ";
      prefix = "SUCCESS";
      color = "\x1b[32m%s\x1b[0m";
      break;
    case "warning":
      icon = "⚠️ ";
      prefix = "WARNING";
      color = "\x1b[33m%s\x1b[0m";
      break;
    case "calling":
      icon = "📞 ";
      prefix = "CALLING";
      color = "\x1b[36m%s\x1b[0m";
      break;
    case "error":
      icon = "❌ ";
      prefix = "ERROR";
      color = "\x1b[31m%s\x1b[0m";
      break;
    case "access denied":
      icon = "⛔ ";
      prefix = "ACCESS DENIED";
      color = "\x1b[31m%s\x1b[0m";
      break;
    case "response":
      icon = "📩 ";
      prefix = "RESPONSE";
      color = "\x1b[32m%s\x1b[0m";
      break;
    default:
      icon = "";
      prefix = "";
      color = "";
  }

  console.log(color, `${icon} [${prefix}] ${message}`);
};
