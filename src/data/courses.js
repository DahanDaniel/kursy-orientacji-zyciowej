export const courseCategories = [
  {
    name: "Fundamenty",
    courses: [
      {
        id: "regulacja",
        title: "Regulacja układu nerwowego",
        problem: "Umysł nie przestaje produkować myśli, pojawia się napięcie i zmęczenie",
        model: "DMN vs tryb zadaniowy",
        price: 200,
        type: "standard"
      },
      {
        id: "sen",
        title: "Sen i regeneracja",
        problem: "Trudności z zasypianiem lub niewystarczająca regeneracja",
        model: "Rytmy biologiczne",
        price: 200,
        type: "standard"
      },
      {
        id: "sport",
        title: "Sport jako regulacja",
        problem: "Brak energii, napięcie psychiczne",
        model: "Ruch reguluje układ nerwowy",
        price: 200,
        type: "standard"
      },
      {
        id: "uwaga",
        title: "Zarządzanie uwagą",
        problem: "Trudność w skupieniu",
        model: "Uwaga jako ograniczony zasób",
        price: 350,
        type: "premium"
      }
    ]
  },
  {
    name: "LifeOS – zarządzanie życiem",
    courses: [
      {
        id: "lightweight-lifeos",
        title: "Lightweight LifeOS",
        problem: "Chaos informacyjny",
        model: "External brain",
        price: 200,
        type: "standard"
      },
      {
        id: "projekty",
        title: "Projekty życiowe",
        problem: "Wiele pomysłów bez realizacji",
        model: "Projekty vs zadania",
        price: 200,
        type: "standard"
      },
      {
        id: "decyzje",
        title: "Decyzje życiowe",
        problem: "Trudność w podejmowaniu decyzji",
        model: "Decyzje jako eksperyment",
        price: 200,
        type: "standard"
      },
      {
        id: "planowanie",
        title: "Planowanie realistyczne",
        problem: "Plany się rozpadają",
        model: "Planowanie adaptacyjne",
        price: 400,
        type: "premium"
      }
    ]
  },
  {
    name: "Relacje",
    courses: [
      {
        id: "komunikacja",
        title: "Komunikacja empatyczna",
        problem: "Konflikty w rozmowach",
        model: "Obserwacja vs interpretacja",
        price: 200,
        type: "standard"
      },
      {
        id: "granice",
        title: "Granice psychologiczne",
        problem: "Ludzie przekraczają granice",
        model: "Odpowiedzialność za potrzeby",
        price: 200,
        type: "standard"
      },
      {
        id: "konflikt",
        title: "Konflikt i napięcie",
        problem: "Eskalacja sporów",
        model: "Spirala konfliktu",
        price: 200,
        type: "standard"
      },
      {
        id: "relacje",
        title: "Budowanie relacji",
        problem: "Trudność w utrzymaniu relacji",
        model: "Bezpieczeństwo psychologiczne",
        price: 450,
        type: "premium"
      }
    ]
  },
  {
    name: "Umysł i poznanie",
    courses: [
      {
        id: "abstrakcja",
        title: "Abstrakcja",
        problem: "Trudność w rozumieniu złożonych rzeczy",
        model: "Poziomy abstrakcji",
        price: 200,
        type: "standard"
      },
      {
        id: "kontekst",
        title: "Kontekst",
        problem: "Sprzeczne interpretacje rzeczywistości",
        model: "Znaczenie kontekstu",
        price: 200,
        type: "standard"
      },
      {
        id: "narracja",
        title: "Narracja umysłu",
        problem: "Nadmierne analizowanie",
        model: "Umysł jako generator narracji",
        price: 200,
        type: "standard"
      },
      {
        id: "kreatywnosc",
        title: "Kreatywność",
        problem: "Blokady twórcze",
        model: "Eksploracja vs eksploatacja",
        price: 350,
        type: "premium"
      }
    ]
  },
  {
    name: "Sens i duchowość",
    courses: [
      {
        id: "orientacja",
        title: "Orientacja życiowa",
        problem: "Brak kierunku",
        model: "Wartości i wektor życia",
        price: 200,
        type: "standard"
      },
      {
        id: "ego",
        title: "Ego i tożsamość",
        problem: "Sztywne poczucie ja",
        model: "Tożsamość jako konstrukcja",
        price: 200,
        type: "standard"
      },
      {
        id: "niedualnosc",
        title: "Niedualność",
        problem: "Poczucie oddzielenia",
        model: "Świadomość jako pole doświadczenia",
        price: 500,
        type: "premium"
      },
      {
        id: "sens",
        title: "Sens życia",
        problem: "Pytanie o znaczenie",
        model: "Sens jako konstrukcja relacyjna",
        price: 200,
        type: "standard"
      }
    ]
  },
  {
    name: "Przedsiębiorczość",
    courses: [
      {
        id: "budzetowanie",
        title: "Budżetowanie osobiste",
        problem: "Brak kontroli nad finansami.",
        model: "Przepływy pieniężne (cashflow)",
        price: 200,
        type: "standard"
      },
      {
        id: "zarzadzanie-piedzmi",
        title: "Zarządzanie pieniędzmi",
        problem: "Chaos i niepewność finansowa",
        model: "3 koszyki: wydatki, oszczędności, inwestycje",
        price: 200,
        type: "standard"
      },
      {
        id: "inwestowanie",
        title: "Inwestowanie długoterminowe",
        problem: "Ryzyko timing market i brak dyscypliny",
        model: "Dollar Cost Averaging",
        price: 200,
        type: "standard"
      },
      {
        id: "tasks-zespol",
        title: "Zarządzanie zadaniami w zespole",
        problem: "Rozproszona praca i brak priorytetów",
        model: "Task flow: backlog, w trakcie, zakończone",
        price: 200,
        type: "standard"
      },
      {
        id: "bussines-mapping",
        title: "Mapowanie procesów biznesowych",
        problem: "Wąskie gardła i trudność w skalowaniu",
        model: "Process Mapping (BPMN)",
        price: 450,
        type: "premium"
      }
    ]
  }
];

export const allCoursesFlat = courseCategories.flatMap(category => category.courses);

// Detailed Metamodel for the specific example course
export const specificCourseContent = {
  id: "regulacja",
  title: "Regulacja układu nerwowego",
  price: 200,
  freeSection: {
    problem: {
      title: "Problem doświadczeniowy",
      experiences: [
        "Czasami umysł nie przestaje produkować myśli.",
        "Analizujesz, planujesz, przeżywasz stare sytuacje.",
        "Z czasem pojawia się napięcie, zmęczenie i poczucie braku kontroli."
      ],
      insight: "Cel: czytelnik rozpoznaje siebie"
    },
    modelIntro: {
      title: "Model rzeczywistości (minimalna teoria)",
      description: "DMN vs tryb zadaniowy",
      details: [
        "Default Mode Network → myślenie o sobie, przeszłości, przyszłości",
        "Task Positive Network → działanie, percepcja"
      ],
      assumption: "Nadaktywne DMN = nadmiar narracji = cierpienie psychiczne."
    }
  },
  paidSection: {
    reinterpretation: {
      title: "Reinterpretacja doświadczenia",
      items: [
        { label: "Doświadczenie", text: "pojawia się dużo myśli" },
        { label: "Interpretacja", text: "coś jest ze mną nie tak" },
        { label: "Realny mechanizm", text: "mózg jest w trybie DMN" }
      ],
      conclusion: "To nie problem psychologiczny. To problem regulacji układu nerwowego."
    },
    principle: {
      title: "Zasada działania",
      description: "Regulacja polega na przesuwaniu mózgu z trybu narracji do trybu obecności.",
      mechanisms: ["oddech", "ruch", "uwaga sensoryczna", "rytm"]
    },
    tools: [
      {
        name: "Shambhavi / Sukha Kriya",
        does: "reguluje układ autonomiczny",
        how: "rytmiczny oddech synchronizuje aktywność mózgu",
        practice: "10–20 min dziennie"
      },
      {
        name: "Ruch sensoryczny",
        does: "zmienia wektor uwagi",
        how: "przenosi aktywność z DMN do Task Positive Network",
        practice: "15 min dziennie"
      }
    ],
    protocol: {
      title: "Protokół wdrożenia 14 dni",
      daily: [
        "10 min oddech",
        "20 min spacer",
        "5 min ciszy"
      ],
      afterWeek: "obserwacja zmian"
    },
    integration: {
      title: "Integracja z LifeOS",
      description: "Ten moduł jest częścią systemu LifeOS:",
      relations: [
        "Regulacja → stabilizuje umysł",
        "Orientacja → daje kierunek",
        "Komunikacja → umożliwia relacje",
        "Duchowość → nadaje sens"
      ]
    }
  }
};
