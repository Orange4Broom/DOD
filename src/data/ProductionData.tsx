import { MockDataTypes } from "../typings/Mockdata";
import HOME from "../assets/images/home.png";
import VYT from "../assets/images/VYT.png";
import U206 from "../assets/images/206.png";
import U211 from "../assets/images/211.png";

export const MockUpData: MockDataTypes = [
  {
    id: "1",
    type: "main",
    path: "/home",
    title: "Den otevřených dveří",
    image: `${HOME}`,
    description:
      "Po příchodu si návštěvník může vybrat jeden ze dvou oborů – informační technologie nebo ekonomické lyceum.",
    instructionsForIT:
      "🎉 Skvěle! Začněte v přízemí. Z hlavního vchodu se vydejte rovně chodbou a po levé straně najdete učebnu S109. kde si naskenuješ QR kód pro více informací.",
    instructionsForLice:
      "Vydejte se po schodech nahoru, dejte se na levou stranu a první třída kterou uvidíte tak je učebna S209. u ní si naskenuj QR kód pro více informací.",
  },
  {
    id: "2",
    type: "class",
    path: "/vyt1",
    title: "VYT 1",
    image: `${VYT}`,
    description:
      "VYT 1 je počítačová učebna, která je vybavena pro výuku Javy a síťových technologií. Studenti pracují s moderními počítači a softwary pro programování v Javě a správu sítí.",
    instructions:
      "📊 Výborně! Z této učebny jen projděte zadními dveřmi dozadu. Učebna SVT2 je hned tam.",
    questions: [
      {
        questionText: "Jaké jsou barvy školy?",
        type: "click",
        answers: [
          { id: "16", answer: "oranžová a modrá", correct: true },
          { id: "17", answer: "žlutá a černá", correct: false },
          { id: "18", answer: "zelená a bílá", correct: false },
          { id: "19", answer: "červená a černá", correct: false },
        ],
      },
      {
        questionText:
          "Jaké hlavní programovací jazyky jsou vyučovány na G+SOŠ?",
        type: "click",
        answers: [
          { id: "20", answer: "Python + C#", correct: false },
          { id: "21", answer: "ASP a Java", correct: false },
          { id: "22", answer: "PHP a Java", correct: true },
          { id: "23", answer: "JavaScript a C", correct: false },
        ],
      },
      {
        questionText: "Kolik je na škole tříd? (číslice)",
        type: "write",
        answers: [{ id: "501", answer: "12", correct: true }],
      },
    ],
  },
  {
    id: "3",
    type: "class",
    path: "/vyt2",
    title: "VYT 2",
    image: `${VYT}`,
    description:
      "Učebna VYT2 pro výuku databází je vybavena řadou moderních počítačů, které umožňují práci s databázovými systémy a dalšími specializovanými softwary. Pracovní stoly jsou rozmístěny tak, aby každý student měl dostatek prostoru na práci. Dominantou místnosti je interaktivní tabule, která usnadňuje prezentaci složitějších konceptů a praktických ukázek. Celkový design učebny je funkční a podporuje soustředění na technické detaily výuky.",
    instructions:
      " Super! Z této učebny vyjděte zatočte do leva. Učebnu S309 najdete hned jako první třídu po vaší levé straně.",
    questions: [
      {
        questionText: "V jedné počítačové učebně sedí velký tučňák s motýlkem pod krkem, na kterém je napsán název jedné z největších databází na světě. O jakou databázi se jedná",
        type: "click",
        answers: [
          { id: "24", answer: "MySQL", correct: false },
          { id: "25", answer: "PostgreSQL", correct: false },
          { id: "26", answer: "Oracle", correct: true },
          { id: "27", answer: "Microsoft SQL Server", correct: false },
        ],
      },
      {
        questionText: "Jakou databázi používáme při výuce na naší škole?",
        type: "click",
        answers: [
          { id: "28", answer: "MySQL", correct: true },
          { id: "29", answer: "PostgreSQL", correct: false },
          { id: "30", answer: "Oracle", correct: false },
          { id: "31", answer: "Microsoft SQL Server", correct: false },
        ],
      },
      {
        questionText: "K čemuz slouží databáze?",
        type: "click",
        answers: [
          { id: "32", answer: "K navrhování webových stránek", correct: false },
          { id: "33", answer: "K uchování, vyhledávání a zpracování dat", correct: true },
          { id: "34", answer: "K malování obrázků", correct: false },
          { id: "35", answer: "K psaní dokumentů", correct: false },
        ],
      },
      {
        questionText: "Jaký příkaz byste použili k vyhledání dat v tabulce databáze a zároveň s ním žáci stráví nejvíce času při výuce",
        type: "click",
        answers: [
          { id: "36", answer: "SELECT", correct: true },
          { id: "37", answer: "SHOW", correct: false },
          { id: "38", answer: "PRINT", correct: false },
          { id: "39", answer: "SEARCH", correct: false },
        ],
      },
    ],
  },
  {
    id: "4",
    type: "class",
    path: "/vyt3IT",
    title: "VYT 3",
    image: `${VYT}`,
    description:
      "Učebna VYT3 je moderní prostor vybavený počítači rozmístěnými na praktických stolech. U každého stolu jsou pohodlné židle, které zajišťují komfort při práci. Dominantou místnosti je interaktivní tabule, která umožňuje efektivní výuku a práci s multimediálním obsahem. Jednoduché uspořádání podporuje přehlednost a soustředění studentů",
    instructions:
      "🧮 Skvělá práce! Ze stávající učebny pokračujte rovně a hned u schodiště najdete učebnu S307.",
    questions: [
      {
        questionText: "jaká je požadovaná výstupní úrovceň jazykových dovedností podle CERR?",
        type: "click",
        answers: [
          { id: "40", answer: "B1", correct: true },
          { id: "41", answer: "B2", correct: false },
          { id: "42", answer: "C1", correct: false },
        ],
      },
      {
        questionText: "Školní část maturity lze nahradit mezi národním certifikátem z jakého typu zkoušek",
        type: "click",
        answers: [
          { id: "43", answer: "Harvardské zkoušky", correct: false },
          { id: "44", answer: "Oxfordské zkoušky", correct: false },
          { id: "45", answer: "Cambridgeské zkoušky", correct: true },
        ],
      },
      {
        questionText: "Výuka odborné angličtiny pro obory EL a IT začíná v jakém ročníku studia?",
        type: "click",
        answers: [
          { id: "46", answer: "v prvním", correct: false },
          { id: "47", answer: "v druhém", correct: false },
          { id: "48", answer: "ve třetím", correct: true },
        ],
      },
    ],
  },
  {
    id: "13",
    type: "class",
    path: "/vyt3L",
    title: "VYT 3",
    image: `${VYT}`,
    description:
      "Učebna VYT3 je moderní prostor vybavený počítači rozmístěnými na praktických stolech. U každého stolu jsou pohodlné židle, které zajišťují komfort při práci. Dominantou místnosti je interaktivní tabule, která umožňuje efektivní výuku a práci s multimediálním obsahem. Jednoduché uspořádání podporuje přehlednost a soustředění studentů",
    instructions:
      "Super! Z této učebny jděte na konec chodby. Učebnu S309 najdete jako poslední třídu po Vaší pravé straně.",
    questions: [
      {
        questionText: "jaká je požadovaná výstupní úrovceň jazykových dovedností podle CERR?",
        type: "click",
        answers: [
          { id: "49", answer: "B1", correct: true },
          { id: "50", answer: "B2", correct: false },
          { id: "51", answer: "C1", correct: false },
        ],
      },
      {
        questionText: "Školní část maturity lze nahradit mezi národním certifikátem z jakého typu zkoušek",
        type: "click",
        answers: [
          { id: "52", answer: "Harvardské zkoušky", correct: false },
          { id: "53", answer: "Oxfordské zkoušky", correct: false },
          { id: "54", answer: "Cambridgeské zkoušky", correct: true },
        ],
      },
      {
        questionText: "Výuka odborné angličtiny pro obory EL a IT začíná v jakém ročníku studia?",
        type: "click",
        answers: [
          { id: "55", answer: "v prvním", correct: false },
          { id: "56", answer: "v druhém", correct: false },
          { id: "57", answer: "ve třetím", correct: true },
        ],
      },
    ],
  },
  {
    id: "5",
    type: "class",
    path: "/vyt4",
    title: "VYT 4",
    image: `${VYT}`,
    description:
      "Učebna VYT4 je nejmoderněji vybavená místnost pro studenty oboru informačních technologií, zaměřená na výuku počítačové grafiky. Studenti zde pracují na výkonných počítačích s profesionálním grafickým softwarem, jako je Adobe a mají přístup k 3D tiskárně pro tvorbu fyzických modelů. Tento prostor poskytuje ideální podmínky pro kreativní projekty a praktické učení.",
    instructions:
      "💻 Skvělé! Z této učebny se vydejte do prava a pak rovně na konec chodby. Učebnu SVT1 najdete hned vlevo po zabočení do prava.",
    questions: [
      {
        questionText: "Jaký je hlavní cíl grafického designu?",
        type: "click",
        answers: [
          { id: "58", answer: "Vytvořit esteticky příjemné vizuály, které přitahují pozornost", correct: true },
          { id: "60", answer: "Pouze přispůsobit texty pro tisk", correct: false },
          { id: "61", answer: "Vytvořit reklamu pro sociální média", correct: false },
          { id: "62", answer: "Zajistit technické detaily tiskových materiálů", correct: false },
        ],
      },
      {
        questionText:
          "Co znamená pojem 'typografie' v grafickém designu?",
        type: "click",
        answers: [
          { id: "63", answer: "Kombinace barev pro vytvoření designu", correct: false },
          { id: "64", answer: "Styl grafiky používaný pro logo", correct: false },
          { id: "65", answer: "Použití obrázků a ilustrací ve webovém designu", correct: false },
          { id: "66", answer: "Výběr a uspořádání písma v designu", correct: true },
        ],
      },
      {
        questionText: "Který grafický software je nejčastěji používán pro úpravu rastrových obrázků?",
        type: "click",
        answers: [
          { id: "67", answer: "Adobe Illustrator", correct: false },
          { id: "68", answer: "CorelDRAW", correct: false },
          { id: "69", answer: "Adobe Photoshop", correct: true },
          { id: "70", answer: "Inkscape", correct: false },
        ],
      },
      {
        questionText:
          "Co je to 'branding' v grafickém designu?",
        type: "click",
        answers: [
          { id: "71", answer: "Technika použití grafiky pro tisk", correct: false },
          { id: "72", answer: "Proces vytváření a správy vizuální identity značky", correct: true },
          { id: "73", answer: "Proces úpravy fotografií pro sociální sítě", correct: false },
          { id: "74", answer: "Způsob, jakým se navrhují webové stránky", correct: false },
        ],
      },

      {
        questionText:
          "Co označuje termín 'CMYK' v grafickém designu?",
        type: "click",
        answers: [
          { id: "75", answer: "Kódování pro webové barvy", correct: false },
          { id: "76", answer: "typ fontů používaný v reklamách", correct: false },
          { id: "77", answer: "Barevný model pro tisk, zahrnující azurovou, purpurovou, žlutou a nejčastěji černou", correct: true },
          { id: "78", answer: "Program pro úpravu grafiky", correct: false },
        ],
      },
    ],
  },

  {
    id: "6",
    type: "class",
    path: "/109",
    title: "109",
    image: `${U206}`,
    description:
      "💻 V této učebně se naučíte základy hardwaru, operačních systémů a počítačových sítí. Navíc se zde konají různé školní kroužky, o kterých vám rád více poví pan učitel Burda.",
    instructions:
      "👏 Výborně! Odsud vyjděte po schodech do prvního patra a pokračujte chodbou doleva. Učebnu S206 najdete na konci chodby, hned vedle sborovny.",
    questions: [
      {
        questionText: "Co je hlavní funkce CPU v počítači?",
        type: "click",
        answers: [
          { id: "79", answer: "Ukládá data", correct: false },
          { id: "80", answer: "Zobrazuje obraz na monitoru", correct: false },
          { id: "81", answer: "Připojuje počítač k internetu", correct: false },
          { id: "82", answer: "Řídí výpočty a zpracovává instrukce", correct: true },
        ],
      },
      {
        questionText: "Co z následujících není operační systém?",
        type: "click",
        answers: [
          { id: "83", answer: "Windows", correct: false },
          { id: "84", answer: "Linux", correct: false },
          { id: "85", answer: "MacOS", correct: false },
          { id: "86", answer: "Microsoft word", correct: true },
        ]
      },
      {
        questionText: "K čemu slouží Wi-fi",
        type: "click",
        answers: [
          { id: "87", answer: "Připojení k internetu bez kabelu", correct: true },
          { id: "88", answer: "Zrychlení počítače", correct: false },
          { id: "89", answer: "Ukládání dat", correct: false },
          { id: "90", answer: "Připojení více zařízení do sítě", correct: false },
        ],
      },
      {
        questionText: "K čemu slouží operační systém v počítači?",
        type: "click",
        answers: [
          { id: "91", answer: "Ovládá hardware a spouští programy", correct: true },
          { id: "92", answer: "Chrání počítač před viry", correct: false },
          { id: "93", answer: "Připojuje počítač k internetu", correct: false },
          { id: "94", answer: "Zlepšuje kvalitu obrazu a monitoru", correct: false },
        ]
      }
    ],
  },
  {
    id: "7",
    type: "class",
    path: "/206",
    title: "206",
    image: `${U206}`,
    description:
      "🔗 Tato učebna je zaměřená na řídicí systémy a počítačové sítě. Naučíte se zde, jak propojit technologii s efektivním řízením.",
    instructions:
      "🔍 Skvělé! Z této učebny pokračujte chodbou. Učebna S209 je na pravé straně, hned vedle schodiště.",
    questions: [
      {
        questionText: "Jaká je základní funkce řídících systému?",
        type: "click",
        answers: [
          { id: "95", answer: "Skladovat data", correct: false },
          { id: "96", answer: "Automatizovat a řídit systémy", correct: true },
          { id: "97", answer: "Zobrazovat grafiku", correct: false },
          { id: "98", answer: "Zrychlit připojení k internetu", correct: false },
        ],
      },
      {
        questionText: "Jaké je použití řídících systémů?",
        type: "click",
        answers: [
          { id: "99", answer: "V herních konzolích", correct: false },
          { id: "100", answer: "Při programování webových stránek", correct: false },
          { id: "101", answer: "V průmyslové automatizaci a výrobních linkách", correct: true },
          { id: "102", answer: "Ve správě počítačových sítí", correct: false },
        ],
      },
      {
        questionText: "Jaké jsou příklady řídících systémů?",
        type: "click",
        answers: [
          { id: "103", answer: "Operační systém windows", correct: false },
          { id: "104", answer: "Aplikace na psaní textů", correct: false },
          { id: "105", answer: "Wifi router", correct: false },
          { id: "106", answer: "Regulační systém klimatizace", correct: true },
        ],
      },
    ],
  },
  {
    id: "14",
    type: "class",
    path: "/208L",
    title: "208",
    image: `${U211}`,
    description:
      "🧠 Zde si ověříte své schopnosti v krátkodobé i dlouhodobé paměti, zároveň se také dozvíte něco o německém jazyce, a co se týká češtiny tak se zde dozvíte zajímavosti o české i světové literatuře, zahrajete si stolní hry a zjistíte více o českém jazyce a literatuře na naší škole.",
    instructions:
      "Skvěle! Z této učebny se vydejte po schodech nahoru. Poté zabočte do leva, kde hned jako první třídu na rohu uvidíte učebnu S307.",
    questions: [
      {
        questionText: "Která z těchto emocí je základní a zažíváme jí všichni?",
        type: "click",
        answers: [
          { id: "74", answer: "Radost", correct: true },
          { id: "75", answer: "Nuda", correct: false },
          { id: "76", answer: "Zvědavost", correct: false },
          { id: "77", answer: "Lenost", correct: false },
        ],
      },
      {
        questionText: "Jak se nazývá studie, která studuje lidské chování a myšlení?",
        type: "click",
        answers: [
          { id: "107", answer: "Fyzika", correct: false },
          { id: "108", answer: "Psychologie", correct: true },
          { id: "109", answer: "Biologie", correct: false },
          { id: "110", answer: "Chemie", correct: false },
        ],
      },
      {
        questionText: "Co znamená německé slovo Haus?",
        type: "click",
        answers: [
          { id: "111", answer: "Auto", correct: false },
          { id: "112", answer: "Pes", correct: false },
          { id: "113", answer: "Dům", correct: true },
          { id: "114", answer: "Škola", correct: false },
        ],
      },
      {
        questionText: "Kdo napsal babičku?",
        type: "click",
        answers: [
          { id: "115", answer: "Alois Jirásek", correct: false },
          { id: "116", answer: "Božena Němcová", correct: true },
          { id: "117", answer: "Karel Hynek Mácha", correct: false },
          { id: "118", answer: "Jan Neruda", correct: false },
        ],
      },
      {
        questionText: "Ke kterému literárnímu žánru patří Erbenova Kytice?",
        type: "click",
        answers: [
          { id: "119", answer: "Povídky", correct: false },
          { id: "120", answer: "Romány", correct: false },
          { id: "121", answer: "Balady", correct: true },
          { id: "122", answer: "Eposy", correct: false },
        ],
      },
      {
        questionText: "Jak se jmenovala hlavní postava v Malém princi?",
        type: "click",
        answers: [
          { id: "123", answer: "Liška", correct: false },
          { id: "124", answer: "Pilot", correct: false },
          { id: "125", answer: "Princ", correct: true },
          { id: "126", answer: "Květina", correct: false },
        ],
      },
    ],
  },

  {
    id: "8",
    type: "class",
    path: "/209",
    title: "209",
    image: `${U206}`,
    description:
      "🌱 Vyzkoušejte si poznávání rostlin a částí lidského těla! Navíc získáte informace o tom, co očekávat v biologii a fyzice.",
    instructions:
      "💡 Super! Odsud vyjděte doprava a na druhé straně hned vedle schodiště najdete učebnu S210.",
    questions: [
      {
        questionText: "Jak se nazývají obrazce, které vznikají na vibračních deskách (často tvaru kruhu či čtverce) při určitých frekvencích?",
        type: "click",
        answers: [
          { id: "115", answer: "Chladniho obrazce", correct: true },
          { id: "116", answer: "Fraunhoferovy obrazce", correct: false },
          { id: "117", answer: "Newtonovy obrazce", correct: false },
          { id: "118", answer: "Huygensovy obrazce ", correct: false },
        ],
      },
      {
        questionText: "Jakou zkratku má trojice barev světla, z nichž lze vytvořit vhodnou kombinací dvojic barev o různých intenzitách všechny ostatní barvy? Tato technologie se používá např. i v monitorech či displejích mobilů...",
        type: "click",
        answers: [
          { id: "119", answer: "RGB", correct: true },
          { id: "120", answer: "CMYK", correct: false },
          { id: "121", answer: "GBR", correct: false },
          { id: "122", answer: "MYKC", correct: false },
        ],
      },
      {
        questionText: "Jak se nazývá jev, kdy se světelný paprsek při průchodu různými prostředími vůbec nedostane do druhého prostředí a jen se odrazí zpět do původního prostředí? Toho se využívá např. v odrazkách... ",
        type: "click",
        answers: [
          { id: "123", answer: "Lom světla", correct: false },
          { id: "124", answer: "Rozptyl světla", correct: false },
          { id: "125", answer: "Úplný odraz", correct: true },
          { id: "126", answer: "Difúze světla", correct: false },
        ],
      },
    ],
  },
  {
    id: "16",
    type: "class",
    path: "/210IT",
    title: "210",
    image: `${U211}`,
    description:
      "📘 Na tomto místě získáte veškeré informace o studijním životě, včetně vzdělávací podpory a poradenství. ",
    instructions:
      "📚 Výborně! Odsud se vydejte chodbou doleva až na konec. Učebnu S208 najdete přímo na rohu.",
    questions: [
      {
        questionText: "Máte všechy potřebné informace?",
        type: "click",
        answers: [{ id: "501", answer: "Ano", correct: true }],
      },
    ],
  },
  {
    id: "17",
    type: "class",
    path: "/210L",
    title: "210",
    image: `${U211}`,
    description:
      "📘 Na tomto místě získáte veškeré informace o studijním životě, včetně vzdělávací podpory a poradenství. ",
    instructions:
      "📚 Výborně! Odsud se vydejte chodbou doleva až na konec. Učebnu S208 najdete přímo na rohu.",
    questions: [
      {
        questionText: "Máte všechy potřebné informace?",
        type: "click",
        answers: [{ id: "501", answer: "Ano", correct: true }],
      },
    ],
  },
  {
    id: "11", 
    type: "class",
    path: "/307IT",
    title: "307",
    image: `${U211}`,
    description:
      "➕ V této učebně si procvičíte řešení zajímavých matematických úkolů a zjistíte, jak probíhá výuka matematiky pod vedením paní učitelky Mrvíkové.",
    instructions:
      "🔍Skvěle! Z učebny S307 se vydejte do prava a jakmile projdete okolo schodiště, tak narazíte na učebnu označenou SVT4.",
    questions: [
      {
        questionText: "Spočítejte: 5 × (3² + 4 × 2) ÷ 4 - 7",
        type: "write",
        answers: [{ id: "650", answer: "8", correct: true }],
      },
      {
        questionText: "Ve škole se prodává lístek na koncert za 120 Kč. Pokud jich prodají 50, jaký bude celkový výtěžek? Pokud náklady na organizaci koncertu jsou 3 000 Kč, kolik zůstane po zaplacení nákladů?",
        type: "click",
        answers: [
          { id: "78", answer: "2 500Kč", correct: true },
          { id: "79", answer: "2 200Kč", correct: false },
          { id: "80", answer: "3 000Kč", correct: false },
          { id: "81", answer: "2 800Kč", correct: false },
        ],
      },
      {
        questionText: "V jednom skladu je 300 kg jablek. Každý den se prodá 15 % z celkového množství. Kolik kilogramů jablek zůstane po 5 dnech, pokud se množství jablek každý den snižuje podle této procentuální ztráty?",
        type: "click",
        answers: [
          { id: "82", answer: "150,75Kg", correct: false },
          { id: "83", answer: "175,25Kg", correct: false },
          { id: "84", answer: "133,11Kg", correct: true },
          { id: "85", answer: "112,68Kg", correct: false },
        ],
      },
    ],
  },
  {
    id: "12",
    type: "class",
    path: "/307L",
    title: "307",
    image: `${U206}`,
    description:
      "➕ V této učebně si procvičíte řešení zajímavých matematických úkolů a zjistíte, jak probíhá výuka matematiky pod vedením paní učitelky Mrvíkové. ",
    instructions:
      "💼 Skvěle! Vyjděte z této učebny, vydejte se do leva a na konci chodby najdete učebnu S306. Hned vedle učebny SVT3.",
    questions: [
      {
        questionText: "Spočítejte: 5 × (3² + 4 × 2) ÷ 4 - 7",
        type: "write",
        answers: [{ id: "650", answer: "8", correct: true }],
      },
      {
        questionText: "Ve škole se prodává lístek na koncert za 120 Kč. Pokud jich prodají 50, jaký bude celkový výtěžek? Pokud náklady na organizaci koncertu jsou 3 000 Kč, kolik zůstane po zaplacení nákladů?",
        type: "click",
        answers: [
          { id: "78", answer: "2 500Kč", correct: false },
          { id: "79", answer: "2 200Kč", correct: false },
          { id: "80", answer: "3 000Kč", correct: true },
          { id: "81", answer: "2 800Kč", correct: false },
        ],
      },
      {
        questionText: "V jednom skladu je 300 kg jablek. Každý den se prodá 15 % z celkového množství. Kolik kilogramů jablek zůstane po 5 dnech, pokud se množství jablek každý den snižuje podle této procentuální ztráty?",
        type: "click",
        answers: [
          { id: "82", answer: "150,75Kg", correct: false },
          { id: "83", answer: "175,25Kg", correct: false },
          { id: "84", answer: "133,11Kg", correct: true },
          { id: "85", answer: "112,68Kg", correct: false },
        ],
      },
    ],
  },
  {
    id: "12",
    type: "class",
    path: "/306",
    title: "306",
    image: `${U211}`,
    description:
      "💼 V této učebně se ponoříte do světa ekonomiky a marketingu. Naučíte se základy podnikání, analýzu trhu a strategie, které vám pomohou pochopit fungování ekonomických procesů a marketingových technik.",
    instructions:
      "Skvělá práce! Z této učebny zahněte jen do vedlejší učebny, kde na Vás čeká učebna SVT3.",
    questions: [
      {
        questionText: "Co je to rozpočet? ",
        type: "click",
        answers: [
          { id: "74", answer: "Seznam všech výdajů, které si můžete dovolit", correct: false },
          { id: "75", answer: "Plán, jak řídit příjmy a výdaje", correct: true },
          { id: "76", answer: "Dokument, který uvádí pouze příjmy", correct: false },
          { id: "77", answer: "Tabulka, která ukazuje, jak šetřit peníze", correct: false },
        ],
      },
      {
        questionText: " Jaký je hlavní cíl spoření?",
        type: "click",
        answers: [
          { id: "78", answer: "Utrácet co nejvíce", correct: false },
          { id: "79", answer: "Investovat do rizikových aktiv", correct: false },
          { id: "80", answer: "Udržet peníze pod polštářem", correct: false },
          { id: "81", answer: "Zajistit si finanční rezervu pro budoucnost ", correct: true },
        ],
      },
      {
        questionText: "Co je to spořící úrok?",
        type: "click",
        answers: [
          { id: "82", answer: "Poplatek, který si účtuje banka za otevření účtu", correct: false },
          { id: "83", answer: "Příjem, který získáte za uložení peněz u banky", correct: true },
          { id: "84", answer: "Peníze, které si musíte půjčit od banky", correct: false },
          { id: "85", answer: "Poplatek, který platíte za používání kreditní karty", correct: false },
        ],
      },
      {
        questionText: "Co je to kreditní karta?",
        type: "click",
        answers: [
          { id: "86", answer: "Typ karty, která vám umožňuje nakupovat na dluh a platit později", correct: true },
          { id: "87", answer: "Karta, která vám dává peníze na ruku", correct: false },
          { id: "88", answer: "Karta, která slouží pouze k platbám v zahraničí", correct: false },
          { id: "89", answer: "Karta, která zajišťuje pouze slevy na zboží", correct: false },
        ],
      },
    ],
  },
  {
    id: "15",
    type: "class",
    path: "/309",
    title: "309",
    image: `${U211}`,
    description:
      "Zde získáte kompletní přehled o našich studijních oborech, přijímacích zkouškách, přípravných kurzech a studijních plánech.",
    instructions:
      "Skvělá práce! Dokončil jsi úspěšně celou prohlídku nyní se můžeš kamkoliv vrátit a doptat na vše potřebné",
    questions: [
      {
        questionText: "Máte všechy potřebné informace?",
        type: "click",
        answers: [{ id: "501", answer: "Ano", correct: true }],
      },
    ],
  },
  {
    id: "16",
    type: "class",
    path: "/208IT",
    title: "208",
    image: `${U211}`,
    description:
      "🧠 Zde si ověříte své schopnosti v krátkodobé i dlouhodobé paměti. A co se týká češtiny tak se zde dozvíte zajímavosti o české i světové literatuře, zahrajete si stolní hry a zjistíte více o českém jazyce a literatuře na naší škole.",
    instructions:
      "Skvěle! Z této učebny se vydejte po schodech nahoru. Poté zabočte do leva, jděte na konec chodby a tam najdete učebnu SVT3.",
    questions: [
      {
        questionText: "Která z těchto emocí je základní a zažíváme jí všichni?",
        type: "click",
        answers: [
          { id: "74", answer: "Radost", correct: true },
          { id: "75", answer: "Nuda", correct: false },
          { id: "76", answer: "Zvědavost", correct: false },
          { id: "77", answer: "Lenost", correct: false },
        ],
      },
      {
        questionText: "Jak se nazývá studie, která studuje lidské chování a myšlení?",
        type: "click",
        answers: [
          { id: "107", answer: "Fyzika", correct: false },
          { id: "108", answer: "Psychologie", correct: true },
          { id: "109", answer: "Biologie", correct: false },
          { id: "110", answer: "Chemie", correct: false },
        ],
      },
      {
        questionText: "Kdo napsal babičku?",
        type: "click",
        answers: [
          { id: "111", answer: "Alois Jirásek", correct: false },
          { id: "112", answer: "Božena Němcová", correct: true },
          { id: "113", answer: "Karel Hynek Mácha", correct: false },
          { id: "114", answer: "Jan Neruda", correct: false },
        ],
      },
      {
        questionText: "Ke kterému literárnímu žánru patří Erbenova Kytice?",
        type: "click",
        answers: [
          { id: "78", answer: "Povídky", correct: false },
          { id: "79", answer: "Romány", correct: false },
          { id: "80", answer: "Balady", correct: true },
          { id: "81", answer: "Eposy", correct: false },
        ],
      },
      {
        questionText: "Jak se jmenovala hlavní postava v Malém princi?",
        type: "click",
        answers: [
          { id: "82", answer: "Liška", correct: false },
          { id: "83", answer: "Pilot", correct: false },
          { id: "84", answer: "Princ", correct: true },
          { id: "85", answer: "Květina", correct: false },
        ],
      },
    ],
  },
]