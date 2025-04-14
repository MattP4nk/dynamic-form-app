// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";


export const useFormStore = defineStore("app", () => {
  let formBlueprint = ref();
  let formId = ref(1);
  let forms = ref([]);
  const addForm = (form) => { forms.value.push(form); formId.value++;};
  const updateBlueprint = (blueprint) => { formBlueprint.value = blueprint;};

  if(localStorage.getItem("blueprint")) {
    formBlueprint.value = JSON.parse(localStorage.getItem("blueprint")!)
  }
  if(localStorage.getItem("forms")) {
    forms.value = JSON.parse(localStorage.getItem("forms")!)
  }
  if(localStorage.getItem("id")) {
    formId.value = Number(localStorage.getItem("id"))
  }

  watch(
    formBlueprint,
    (blueprint) => {
      localStorage.setItem("blueprint", JSON.stringify(blueprint));
    },
    {deep: true}
    );
  watch(
    forms,
    (forms) => {
      localStorage.setItem("forms", JSON.stringify(forms));
    },
    {deep: true}
    );
  watch(
    formId,
    (id) => {
      localStorage.setItem("id", id.toString());
    },
    {deep: true}
    );

  return {
    formBlueprint,
    updateBlueprint,
    forms,
    formId,
    addForm
  };
/*
  Pinia realmente hizo casi todo el trabajo aca, lo unico que hice fue agregar los watch
  para verificar cambios en las variables y chequear el local store para ver si la data estaba 
  cargada para asi traerla a "pinia" otra vez.
*/
});
