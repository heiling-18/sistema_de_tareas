const tareas = [
  { descripcion: "enviar reporte semanal", tipo: "simple" },
  { descripcion: "reparar base de datos", tipo: "importante" },
  { descripcion: "reiniciar servidor", tipo: "critica" },
];

function ejecutarTarea(tarea, callback) {
 
  if (!tarea || typeof tarea.descripcion !== "string" || typeof tarea.tipo !== "string") {
    console.error("Tarea mal estructurada:", tarea);
    return;
  }

  let tiempo;

  switch (tarea.tipo) {
    case "simple":
      tiempo = 1000;
      break;
    case "importante":
      tiempo = 2000;
      break;
    case "critica":
      tiempo = 3000;
      break;
    default:
      console.error(`Tipo de tarea no válido: ${tarea.tipo}`);
      return;
  }

  console.log(`Ejecutando tarea: ${tarea.descripcion} (tipo: ${tarea.tipo})`);

  setTimeout(() => {
    console.log(`Tarea completada: ${tarea.descripcion}`);
    callback();
  }, tiempo);
}

function registroFinal() {
  console.log("Todas las tareas han sido registradas exitosamente.");
}

let tareasCompletadas = 0;

tareas.forEach((tarea) => {
  ejecutarTarea(tarea, () => {
    tareasCompletadas++;

    if (tareasCompletadas === tareas.length) {
      registroFinal();
    }
  });
});