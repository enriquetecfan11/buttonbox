export async function executeCommand(commandName) {
  switch (commandName) {
    case "Hello World!":
      return "Hello, world!"; // Resultado simulado

    case "Ping Google":
      // Aquí pondrías la lógica real de un comando, pero lo simulo
      return "Pinging google.com [216.58.214.206] with 32 bytes of data...";

    case "Post to Webhook":
      return "Posted to webhook successfully.";
      
    case "GET Webhook":
      return "Received data from webhook.";

    case "Get a Chuck Norris Joke":
      // Simular una broma de Chuck Norris
      return "Chuck Norris can divide by zero.";

    case "System Info":
      return "System Info: Windows 10, RAM: 16GB, CPU: Intel i7.";

    case "List Files":
      return "File1.txt\nFile2.txt\nFile3.txt";

    case "Open Notepad":
      return "Notepad opened.";

    case "IP Configuration":
      return "IP: 192.168.1.1, Subnet: 255.255.255.0, Gateway: 192.168.1.254.";

    case "Clear Screen":
      return "Screen cleared.";

    case "Shutdown Computer":
      return "Computer shutting down...";

    case "Restart Computer":
      return "Computer restarting...";

    default:
      return "Unknown command.";
  }
}
