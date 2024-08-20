import { executeCommand } from "@/app/actions/excute-command"; // Importa la función que ejecuta el comando

export async function runCommandAction(commandName) {
  try {
    const commandResult = await executeCommand(commandName); // Llama a la función que ejecuta el comando
    return {
      success: true,
      message: commandResult, // Devuelve el resultado del comando
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An error occurred",
    };
  }
}
