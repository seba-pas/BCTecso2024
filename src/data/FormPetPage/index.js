export const inputs = [{ type: "text", name: "nombre", placeholder: "Nombre del animal*" }];
export const selects = [
  /*     {name:"tipoAnimal",type:"text",placeholder="Tipo de animal*"}, */
  { name: "raza", type: "text", placeholder: "Raza *", noOption: "Seleccione una raza" },
  { name: "tamano", type: "text", placeholder: "Tamaño*", noOption: "Seleccione un tamaño" },
  { name: "temperamentoConAnimales", type: "text", placeholder: "Caracter con animales*", noOption: "Seleccione un caracter con animales" },
  { name: "temperamentoConPersonas", type: "text", placeholder: "Caracter con personas*", noOption: "Seleccione un caracter con personas" },
];
export const inputs2 = [
  { type: "text", placeholder: "Ubicación", name: "ciudad" },
  { type: "date", placeholder: "DD/MM/AAAA", name: "mesAnioNacimiento" },
  { type: "textarea", placeholder: "Descripción", name: "descripcion" },
];
export const checks = [
  { id: "check-macho", label: "Macho", type: "radio", value: "macho", name: "sexo" },
  { id: "check-hembra", label: "Hembra", type: "radio", value: "hembra", name: "sexo" },
];
