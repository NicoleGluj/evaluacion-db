import Table from "cli-table3";
import commands from "./commands";

// CLI-TABLE3 PARA EVITAR QUE SE CORTE EL CONTENIDO DE LA TABLA
export const showCommands = () => {
  const table = new Table({
    head: ["Comando", "Descripción", "Parámetros"],
    colWidths: [20, 60, 40],
    wordWrap: true,
  });

  commands.forEach(cmd => {
    table.push([
      cmd.Comando,
      cmd.Descripcion,
      Array.isArray(cmd.Parametros) ? cmd.Parametros.join(", ") : cmd.Parametros
    ]);
  });

  console.log(table.toString());
};
