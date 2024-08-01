function searchDream() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  const dreams = [
 
    {
      name: "agua",
      description:
        "Soñar con agua puede reflejar el estado emocional actual del soñador, desde la tranquilidad hasta la turbulencia.",
    },
    {
      name: "caer",
      description:
        "Soñar con caer puede simbolizar una pérdida de control o miedo a fallar en alguna área de la vida.",
    },
    {
      name: "ser perseguido",
      description:
        "Soñar con ser perseguido puede indicar ansiedad o evitar enfrentar algún problema.",
    },
    {
      name: "dientes",
      description:
        "Soñar con dientes puede reflejar preocupaciones sobre la apariencia o la comunicación.",
    },
    {
      name: "desnudez",
      description:
        "Soñar con estar desnudo en público puede simbolizar vulnerabilidad o vergüenza.",
    },
    {
      name: "muerte",
      description:
        "Soñar con la muerte puede representar el fin de algo y el inicio de una nueva etapa.",
    },
    {
      name: "examen",
      description:
        "Soñar con exámenes puede reflejar autoevaluación o miedo al fracaso.",
    },
    {
      name: "fuego",
      description:
        "Soñar con fuego puede simbolizar pasión, destrucción o transformación.",
    },
  
    {
      name: "animales",
      description:
        "Soñar con animales puede reflejar instintos y aspectos de la personalidad.",
    },
    {
      name: "dinero",
      description:
        "Soñar con dinero puede simbolizar autoestima, valor personal o deseos de prosperidad.",
    },
    {
      name: "nadar",
      description:
        "Soñar con nadar puede representar el manejo de las emociones y la superación de obstáculos.",
    },
    {
      name: "perderse",
      description:
        "Soñar con perderse puede indicar confusión o falta de dirección en la vida.",
    },
    {
      name: "enfermedad",
      description:
        "Soñar con enfermedad puede reflejar preocupaciones sobre la salud o el bienestar.",
    },
    {
      name: "volar",
      description:
        "Soñar con volar puede representar una sensación de libertad y éxito.",
    },
    
    {
          "name": "volar",
          "description": "Soñar con volar puede representar una sensación de libertad y éxito."
        },
        {
          "name": "caer",
          "description": "Soñar con caer puede indicar inseguridad o miedo al fracaso."
        },
        {
          "name": "dientes que se caen",
          "description": "Soñar con dientes que se caen puede reflejar preocupaciones sobre la apariencia o la pérdida."
        },
        {
          "name": "estar desnudo en público",
          "description": "Soñar con estar desnudo en público puede representar vulnerabilidad o vergüenza."
        },
        {
          "name": "ser perseguido",
          "description": "Soñar con ser perseguido puede indicar que estás evitando problemas o conflictos."
        },
        {
          "name": "agua",
          "description": "Soñar con agua puede reflejar tus emociones y tu estado subconsciente."
        },
        {
          "name": "muerte",
          "description": "Soñar con muerte puede simbolizar cambios y transformaciones en tu vida."
        },
        {
          "name": "casa",
          "description": "Soñar con una casa puede representar diferentes aspectos de tu personalidad."
        },
        {
          "name": "estar atrapado",
          "description": "Soñar con estar atrapado puede indicar sentimientos de restricción o necesidad de liberación."
        },
        {
          "name": "animales",
          "description": "Soñar con animales puede reflejar tus instintos y emociones básicas."
        },
        {
          "name": "perderse",
          "description": "Soñar con perderse puede indicar falta de dirección o propósito en la vida."
        },
        {
          "name": "boda",
          "description": "Soñar con una boda puede simbolizar compromiso y unión de diferentes aspectos de tu vida."
        },
        {
          "name": "examen",
          "description": "Soñar con un examen puede reflejar ansiedad y presión sobre tus habilidades."
        },
        {
          "name": "dinero",
          "description": "Soñar con dinero puede representar deseos de éxito y seguridad financiera."
        },
        {
          "name": "viajar",
          "description": "Soñar con viajar puede indicar un deseo de exploración y aventura."
        },
        {
          "name": "enfermedad",
          "description": "Soñar con enfermedad puede reflejar preocupaciones sobre la salud o el bienestar."
        },
        {
          "name": "fuego",
          "description": "Soñar con fuego puede simbolizar pasión, destrucción o renovación."
        },
        {
          "name": "volcán",
          "description": "Soñar con un volcán puede indicar emociones reprimidas o situaciones explosivas."
        },
        {
          "name": "caminar descalzo",
          "description": "Soñar con caminar descalzo puede representar vulnerabilidad o una conexión con la naturaleza."
        },
        {
          "name": "pájaro",
          "description": "Soñar con pájaros puede simbolizar libertad, aspiraciones y deseos."
        },
        {
          "name": "puente",
          "description": "Soñar con un puente puede indicar una transición o la superación de obstáculos."
        },
        {
          "name": "nieve",
          "description": "Soñar con nieve puede representar pureza, tranquilidad o frialdad emocional."
        },
        {
          "name": "mar",
          "description": "Soñar con el mar puede reflejar tus emociones profundas y tu estado subconsciente."
        },
        {
          "name": "montaña",
          "description": "Soñar con una montaña puede simbolizar desafíos y obstáculos a superar."
        },
        {
          "name": "bosque",
          "description": "Soñar con un bosque puede representar lo desconocido y el inconsciente."
        },
        {
          "name": "llorar",
          "description": "Soñar con llorar puede indicar una liberación de emociones reprimidas."
        },
        {
          "name": "nacer",
          "description": "Soñar con nacer puede simbolizar nuevos comienzos y oportunidades."
        },
        {
          "name": "morir",
          "description": "Soñar con morir puede representar el fin de una etapa y el comienzo de otra."
        },
        {
          "name": "lluvia",
          "description": "Soñar con lluvia puede simbolizar limpieza, renovación y liberación emocional."
        },
        {
          "name": "volar en avión",
          "description": "Soñar con volar en avión puede representar ambiciones y metas elevadas."
        },
        {
          "name": "atrapar un tren",
          "description": "Soñar con atrapar un tren puede indicar la necesidad de seguir el ritmo de la vida o no perder oportunidades."
        },
        {
          "name": "llegar tarde",
          "description": "Soñar con llegar tarde puede reflejar ansiedad sobre perder oportunidades o no cumplir con expectativas."
        },
        {
          "name": "comida",
          "description": "Soñar con comida puede representar tus deseos y necesidades básicas."
        },
        {
          "name": "volar en globo",
          "description": "Soñar con volar en globo puede simbolizar la elevación por encima de problemas y una perspectiva más amplia."
        },
        {
          "name": "inundación",
          "description": "Soñar con una inundación puede representar emociones abrumadoras o situaciones fuera de control."
        },
        {
          "name": "bosque oscuro",
          "description": "Soñar con un bosque oscuro puede indicar miedo a lo desconocido o situaciones confusas."
        },
        {
          "name": "espejo",
          "description": "Soñar con un espejo puede simbolizar autoevaluación y reflexión sobre tu identidad."
        },
        {
          "name": "subir escaleras",
          "description": "Soñar con subir escaleras puede representar progreso y superación de obstáculos."
        },
        {
          "name": "perder un objeto",
          "description": "Soñar con perder un objeto puede indicar miedo a la pérdida o falta de control."
        },
        {
          "name": "abrazar a alguien",
          "description": "Soñar con abrazar a alguien puede reflejar necesidades emocionales y deseos de conexión."
        },
        {
          "name": "laberinto",
          "description": "Soñar con un laberinto puede representar confusión y búsqueda de dirección en la vida."
        },
        {
          "name": "flor",
          "description": "Soñar con flores puede simbolizar belleza, crecimiento y nuevas oportunidades."
        },
        {
          "name": "lluvia de estrellas",
          "description": "Soñar con una lluvia de estrellas puede representar deseos, esperanzas y sueños."
        },
        {
          "name": "montaña rusa",
          "description": "Soñar con una montaña rusa puede simbolizar emociones intensas y altibajos en la vida."
        },
        {
          "name": "caer en un pozo",
          "description": "Soñar con caer en un pozo puede reflejar miedo a lo desconocido y sentimientos de desesperación."
        },
        {
          "name": "perder el control de un coche",
          "description": "Soñar con perder el control de un coche puede indicar falta de control en la vida o miedo al fracaso."
        },
        {
          "name": "escapar de una prisión",
          "description": "Soñar con escapar de una prisión puede simbolizar el deseo de liberarse de limitaciones o restricciones."
        },
        {
          "name": "subir una montaña",
          "description": "Soñar con subir una montaña puede representar desafíos a superar y la búsqueda de metas elevadas."
        },
        {
          "name": "salvar a alguien",
          "description": "Soñar con salvar a alguien puede reflejar tu deseo de ayudar y proteger a los demás."
        },
        {
          "name": "encontrar dinero",
          "description": "Soñar con encontrar dinero puede simbolizar nuevas oportunidades y éxito inesperado."
        }
      
      


















  ];

  const results = dreams.filter((dream) => dream.name.includes(searchInput));

  if (results.length > 0) {
    results.forEach((dream) => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result";
      resultItem.innerHTML = `<h3>${
        dream.name.charAt(0).toUpperCase() + dream.name.slice(1)
      }</h3><p>${dream.description}</p>`;
      searchResults.appendChild(resultItem);
    });
  } else {
    searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
  }
}
