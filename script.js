const rawData = {
  tech: {
    CIVIL: [
      {
        event: "Paper Presentation",
        dept: "CIVIL",
        faculty: "Dr Ch Tirupathi",
        faculty_mobile: "8330967182",
        student: "M Yaswanth",
        student_mobile: "9959189669",
        venue: "22310",
        Block: "103",
      },
      {
        event: "Technical Quiz",
        dept: "CIVIL",
        faculty: "T Sai Kumar",
        faculty_mobile: "9553887116",
        student: "P Karthik",
        student_mobile: "7396183887",
        venue: "22307",
        Block: "103",
      },
      {
        event: "Project Expo",
        dept: "CIVIL",
        faculty: "Dr K N Murali Krishna",
        faculty_mobile: "9398575959",
        student: "K V S S Swarupini",
        student_mobile: "9573234978",
        venue: null,
        Block: "103",
      },
      {
        event: "Poster Presentation",
        dept: "CIVIL",
        faculty: "M Rama Krishna",
        faculty_mobile: "6281768987",
        student: "G Vijay Sai Durga",
        student_mobile: "8897931209",
        venue: null,
        Block: "103",
      },
      {
        event: "Model Making",
        dept: "CIVIL",
        faculty: "M Venu",
        faculty_mobile: "8500714776",
        student: "B Surya Manikinata",
        student_mobile: "8978142472",
        venue: "22004",
        Block: "103",
      },
      {
        event: "Cadathon",
        dept: "CIVIL",
        faculty: "D Ajay Kumar",
        faculty_mobile: "8367296289",
        student: "B Prabhu Suresh",
        student_mobile: "8790056695",
        venue: "22312",
        Block: "103",
      },
    ],

    EEE: [
      {
        event: "Paper Presentation",
        dept: "EEE",
        faculty: "Dr. G. Radika",
        faculty_mobile: "9182455341",
        student: "P. Pravallika",
        student_mobile: "6309190446",
        venue: "11101",
        Block: "104",
      },
      {
        event: "Technical Quiz",
        dept: "EEE",
        faculty: "Mrs. Ch. Jayasri",
        faculty_mobile: "9866965184",
        student: "A L S Jyotirmayi",
        student_mobile: "9640057696",
        venue: "11002",
        Block: "104",
      },
      {
        event: "Project Expo",
        dept: "EEE",
        faculty: "Dr P Hemachandu",
        faculty_mobile: "8184969699",
        student: "B. Shanmukha Sridhar",
        student_mobile: "9381681096",
        venue: null,
        Block: "104",
      },
      {
        event: "Poster Presentation",
        dept: "EEE",
        faculty: "Dr. K. Ananda Babu",
        faculty_mobile: "9849528862",
        student: "N. Kavyasri Satya Geetha",
        student_mobile: "8919386883",
        venue: null,
        Block: "104",
      },
      {
        event: "Electrochase",
        dept: "EEE",
        faculty: "Mr.G V Apparao",
        faculty_mobile: "9652929762",
        student: "P. Abhinayasri",
        student_mobile: "7036985897",
        venue: "11007",
        Block: "104",
      },
      {
        event: "Power Play",
        dept: "EEE",
        faculty: "Mr. M K Chaitanya",
        faculty_mobile: "9848022536",
        student: "Ch. Eswar Kumar",
        student_mobile: "6302426855",
        venue: "11009",
        Block: "104",
      },
    ],

    MECH: [
      {
        event: "Paper Presentation",
        dept: "MECH",
        faculty: "Dr. A. Ramaswamy",
        faculty_mobile: "8248175481",
        student: "Manideep",
        student_mobile: "9502815282",
        venue: "14002",
        Block: "105",
      },
      {
        event: "Technical Quiz",
        dept: "MECH",
        faculty: "M. Vinod Kumar",
        faculty_mobile: "998983114",
        student: null,
        student_mobile: null,
        venue: null,
        Block: "105",
      },
      {
        event: "Project Expo",
        dept: "MECH",
        faculty: "Ch. Syam Kumar",
        faculty_mobile: "8985691598",
        student: "U. Akhil",
        student_mobile: "9014941059",
        venue: null,
        Block: "105",
      },
      {
        event: "Poster Presentation",
        dept: "MECH",
        faculty: "Y. Raghuram",
        faculty_mobile: "8074442190",
        student: null,
        student_mobile: null,
        venue: null,
        Block: "105",
      },
      {
        event: "Cadveshana",
        dept: "MECH",
        faculty: "Ch. Venkateswara Rao",
        faculty_mobile: "7981717782",
        student: null,
        student_mobile: null,
        venue: null,
        Block: "105",
      },
    ],

    "ECE & ECT": [
      {
        event: "Paper Presentation",
        dept: "ECE & ECT",
        faculty: "Dr. U. Uma Maheswara Rao",
        faculty_mobile: "9550528538",
        student: "N. Pavandurga Kumar",
        student_mobile: "6303778545",
        venue: "22304",
        Block: "103",
      },
      {
        event: "Technical Quiz",
        dept: "ECE & ECT",
        faculty: "Dr. Winny Elizabeth Philip",
        faculty_mobile: "8891464136",
        student: "K. Nikhil",
        student_mobile: "6304489622",
        venue: "22208",
        Block: "103",
      },
      {
        event: "Project Expo",
        dept: "ECE & ECT",
        faculty: "Dr.S.Sri Ramya",
        faculty_mobile: "9133951289",
        student: "A.Eswari Mounika",
        student_mobile: "9030193242",
        venue: null,
        Block: "103",
      },
      {
        event: "Poster Presentation",
        dept: "ECE & ECT",
        faculty: "Dr.T.V.Krishnamoorthy",
        faculty_mobile: "8309974219",
        student: "K.Dhana srivalli",
        student_mobile: "9398361405",
        venue: "22115",
        Block: "103",
      },
      {
        event: "Silicon-TeKLogic Conclave",
        dept: "ECE & ECT",
        faculty: "Mrs.N.Kusuma",
        faculty_mobile: "8096587487",
        student: "G.Uma Maheswari",
        student_mobile: "9912792455",
        venue: "22301",
        Block: "103",
      },
      {
        event: "Circuit Race",
        dept: "ECE & ECT",
        faculty: "Mr.S.N.V.P.Raviteja",
        faculty_mobile: "7661040007",
        student: "K.Venkata Lalithya",
        student_mobile: "7981232429",
        venue: "22101",
        Block: "103",
      },
    ],

    "CSE & CST": [
      {
        event: "Paper Presentation",
        dept: "CSE,CST",
        faculty: "T.Uday",
        faculty_mobile: "8331001738",
        student: "B Bhargav",
        student_mobile: null,
        venue: null,
        Block: "102",
      },
      {
        event: "Technical Quiz",
        dept: "CSE,CST",
        faculty: "P C S Nagendra Setty",
        faculty_mobile: "9490046470",
        student: "V Dhatri",
        student_mobile: "8712219580",
        venue: null,
        Block: "102",
      },
      {
        event: "Project Expo",
        dept: "CSE,CST",
        faculty: null,
        faculty_mobile: null,
        student: null,
        student_mobile: null,
        venue: null,
        Block: "102",
      },
      {
        event: "Poster Presentation",
        dept: "CSE,CST",
        faculty: null,
        faculty_mobile: null,
        student: null,
        student_mobile: null,
        venue: null,
        Block: "102",
      },

      {
        event: "Capture the Flag",
        dept: "CSE & CST",
        faculty: "G Vijaya Lakshmi",
        faculty_mobile: "8919903629",
        student: "K D S Lavanya",
        student_mobile: "9390174748",
        venue: null,
        Block: "106",
      },
      {
        event: "Blind Code",
        dept: "CSE & CST",
        faculty: "P Saravan Kumar",
        faculty_mobile: "7904257958",
        student: "K Eakshita Vandana",
        student_mobile: "9390817281",
        venue: null,
        Block: "102",
      },
      {
        event: "Online Gaming",
        dept: "CSE & CST",
        faculty: "P Krishnamoorthy",
        faculty_mobile: "9942776343",
        student: "K D S Charan",
        student_mobile: "9573669044",
        venue: null,
        Block: "102",
      },
      {
        event: "Code Relay",
        dept: "CSE & CST",
        faculty: "G.Prasanth Kumar",
        faculty_mobile: "8897199935",
        student: "P Ishwarya",
        student_mobile: "9661074173",
        venue: null,
        Block: "102",
      },
    ],

    "CSM/CSD/CIC": [
      {
        event: "Paper Presentation",
        dept: "CSM,CSD,CIC",
        faculty: "Dr. AVS Siva Rama Rao",
        faculty_mobile: "8247625329",
        student: null,
        student_mobile: null,
        venue: null,
        Block: "102",
      },
      {
        event: "Technical Quiz",
        dept: "CSM,CSD,CIC",
        faculty: "P Srinivasa Reddi",
        faculty_mobile: "8328506990",
        student: " K. Srilakshmi",
        student_mobile: " 7207638040",
        venue: "23210",
        Block: "102",
      },
      {
        event: "Project Expo",
        dept: "CSM,CSD,CIC",
        faculty: "Mr. K Naresh",
        faculty_mobile: null,
        student: null,
        student_mobile: null,
        venue: null,
        Block: "102",
      },
      {
        event: "Poster Presentation",
        dept: "CSM,CSD,CIC",
        faculty: "Mrs. M Pavani",
        faculty_mobile: "9059067516",
        student: "B. Joy",
        student_mobile: "6301966534",
        venue: "23210",
        Block: "102",
      },
      {
        event: "Puzzle of 3",
        dept: "CSM,CSD,CIC",
        faculty: "Mr. K Viswa Prasad",
        faculty_mobile: "9618554007",
        student: "K. Sushma",
        student_mobile: "9505959199",
        venue: "23214",
        Block: "102",
      },
      {
        event: "Mindora Arena",
        dept: "CSM,CSD,CIC",
        faculty: "Mr. K Suresh",
        faculty_mobile: "9182577021",
        student: "K Hari",
        student_mobile: "9959233942",
        venue: "23213",
        Block: "102",
      },
    ],

    "IT & AIML": [
      {
        event: "Paper Presentation",
        dept: "IT & AIML",
        faculty: "Mr. S Vignesh",
        faculty_mobile: "9003618222",
        student: "M Lakshmi Surya",
        student_mobile: "8247302225",
        venue: "16106",
        Block: "101",
      },
      {
        event: "Technical Quiz",
        dept: "IT & AIML",
        faculty: "Mrs. S Sajitha Bhanu",
        faculty_mobile: "9790450398",
        student: "B Sai Karthik Reddy",
        student_mobile: "8520960804",
        venue: "16205",
        Block: "101",
      },
      {
        event: "Project Expo",
        dept: "IT & AIML",
        faculty: "Dr A V N Chandra Sekhar",
        faculty_mobile: "9346417876",
        student: "Md Rafiunnisa",
        student_mobile: "9391989805",
        venue: "16105",
        Block: "101",
      },
      {
        event: "Poster Presentation",
        dept: "IT & AIML",
        faculty: "Mrs. G Nagavallika",
        faculty_mobile: "9705518545",
        student: "P Harini",
        student_mobile: "9030181619",
        venue: "16210",
        Block: "101",
      },
      {
        event: "Movie Mania",
        dept: "IT & AIML",
        faculty: "G V N Kishore",
        faculty_mobile: "9493958915",
        student: "D Bhavya",
        student_mobile: "9908147333",
        venue: "16207",
        Block: "101",
      },
      {
        event: "Free Fire",
        dept: "IT & AIML",
        faculty: "Mr. G Nageswara Rao",
        faculty_mobile: "7013658295",
        student: "V Vijay Sai Dattu",
        student_mobile: "7981180300",
        venue: "16102",
        Block: "101",
      },
    ],

    MBA: [
      {
        event: "Young Manager",
        dept: "MBA",
        faculty: "Mr.M.Sameer Kumar",
        faculty_mobile: "8074444840",
        student: "S.Krishna Kumari",
        student_mobile: "6304799221",
        venue: "11202",
        Block: "104",
      },
      {
        event: "Stock Game",
        dept: "MBA",
        faculty: "Mr.N.Krishna",
        faculty_mobile: "9963748509",
        student: "M.Sureka",
        student_mobile: "9542189119",
        venue: "11204",
        Block: "104",
      },
      {
        event: "Business Quiz",
        dept: "MBA",
        faculty: "Mr.S.Venkata Ramana",
        faculty_mobile: "9505503555",
        student: "S.Srinivas",
        student_mobile: "9346446707",
        venue: "11205",
        Block: "104",
      },
    ],

    Diploma: [
      {
        event: "Paper Presentation",
        dept: "Diploma",
        faculty: "CH Devaraj",
        faculty_mobile: "9391694306",
        student: "D Sai Tanuja",
        student_mobile: "7981023135",
        venue: "22008",
        Block: "103",
      },
      {
        event: "Technical Quiz",
        dept: "Diploma",
        faculty: "CH Devaraj",
        faculty_mobile: "9391694306",
        student: "Y Karthik",
        student_mobile: "9676477300",
        venue: "22007",
        Block: "103",
      },
      {
        event: "Project Expo",
        dept: "Diploma",
        faculty: "CH Devaraj",
        faculty_mobile: "9391694306",
        student: "R Lakshmi Narasimha",
        student_mobile: "9491927115",
        venue: "22009",
        Block: "103",
      },
      {
        event: "Poster Presentation",
        dept: "Diploma",
        faculty: "CH Devaraj",
        faculty_mobile: "9391694306",
        student: "N Rama Durga",
        student_mobile: "9494344491",
        venue: "22006",
        Block: "103",
      },
      {
        event: "ERROR HUNTERS",
        dept: "DCME",
        faculty: "CH Devaraj",
        faculty_mobile: "9391694306",
        student: "K Dharahas",
        student_mobile: "6304166013",
        venue: "22008",
        Block: "103",
      },
      {
        event: "CIRCUIT SPRINT",
        dept: "DECE",
        faculty: "R Sushma",
        faculty_mobile: "8897298489",
        student: "K Jaswitha",
        student_mobile: "9959969968",
        venue: "22009",
        Block: "103",
      },
    ],
  },

  cultural_and_fun: [
    {
      event: "Dance Solo",
      category: "Cultural",
      faculty: "Dr.D.Anjani Suputri Devi",
      faculty_mobile: "8897392492",
      student: "E.Likitha",
      student_mobile: "7569744529",
      venue: null,
      Block: "106",
    },
    {
      event: "Dance Duet",
      category: "Cultural",
      faculty: null,
      faculty_mobile: null,
      student: null,
      student_mobile: null,
      venue: null,
      Block: "106",
    },
    {
      event: "Dance Group",
      category: "Cultural",
      faculty: "Mrs.N.Sannajaji",
      faculty_mobile: "9494599822",
      student: "CH.Navya",
      student_mobile: "7995274327",
      venue: null,
      Block: "106",
    },
    {
      event: "Singing",
      category: "Cultural",
      faculty: "Mrs.Bharathi",
      faculty_mobile: "7893552837",
      student: "P.Keerthi",
      student_mobile: "7981631166",
      venue: null,
      Block: "106",
    },
    {
      event: "Ramp Walk",
      category: "Cultural",
      faculty: "Pujitha",
      faculty_mobile: "6281331143",
      student: "Keethana",
      student_mobile: null,
      venue: null,
      Block: "106",
    },
    {
      event: "Photography",
      category: "Cultural",
      faculty: "Mr.Venu",
      faculty_mobile: "8500714776",
      student: "P.Sai kiran",
      student_mobile: "8977487337",
      venue: null,
      Block: "106",
    },
    {
      event: "Mime",
      category: "Cultural",
      faculty: "Mrs.B.Anusha",
      faculty_mobile: "9959059680",
      student: "V.Mounika",
      student_mobile: "9032017749",
      venue: null,
      Block: "106",
    },
    {
      event: "Video Song Dedication",
      category: "Cultural",
      faculty: "Durga Bhavani",
      faculty_mobile: "9705857643",
      student: "G.Navyasri",
      student_mobile: "8019347858",
      venue: null,
      Block: "106",
    },
    {
      event: "I Got Talent",
      category: "Cultural",
      faculty: "Mr.Ravi",
      faculty_mobile: "9652731209",
      student: "K.Krishna Teja",
      student_mobile: "9963614237",
      venue: null,
      Block: "106",
    },
    {
      event: "Short Film",
      category: "Cultural",
      faculty: "Mr.T.Gopu",
      faculty_mobile: "9487059842",
      student: "D.Dhanush Kumar",
      student_mobile: "8247275809",
      venue: null,
      Block: "106",
    },
    {
      event: "Hackathon",
      category: "Fun",
      faculty: null,
      faculty_mobile: null,
      student: null,
      student_mobile: null,
      venue: null,
      Block: "106",
    },
    {
      event: "Treasure Hunt",
      category: "Fun",
      faculty: null,
      faculty_mobile: null,
      student: null,
      student_mobile: null,
      venue: null,
      Block: "106",
    },
    {
      event: "Tambola",
      category: "Fun",
      faculty: null,
      faculty_mobile: null,
      student: null,
      student_mobile: null,
      venue: null,
      Block: "106",
    },
    {
      event: "Lottery",
      category: "Fun",
      faculty: "Mr. G. Rama Krishna",
      faculty_mobile: "8985986910",
      student: "S. Tanish Kumar",
      student_mobile: "7989878233",
      venue: null,
      Block: "106",
    },
    {
      event: "DJ Night",
      category: "Fun",
      faculty: null,
      faculty_mobile: null,
      student: null,
      student_mobile: null,
      venue: null,
      Block: "106",
    },
  ],
};

// --- 2. CONFIG & HELPERS ---
const blockNames = {
  101: "Pascal",
  102: "Alan Turing",
  103: "Nikola Tesla",
  104: "Einstein",
  105: "C V Raman",
  106: "Main Auditorium",
};

const getCoords = (venue) => {
  if (!venue || venue.toLowerCase() === "null") return null;
  const fixedVenueCoords = {
    101: [967, 70],
    102: [986, 364],
    103: [1198, 358],
    104: [1386, 209],
    105: [1171, 137],
    106: [1407, 349],
  };
  return fixedVenueCoords[venue] || [500, 500];
};

const getIcon = (title) => {
  const t = (title || "").toLowerCase();
  if (t.includes("dance")) return "fa-music";
  if (t.includes("sing")) return "fa-microphone";
  if (t.includes("code") || t.includes("hack") || t.includes("bug"))
    return "fa-laptop-code";
  if (t.includes("paper")) return "fa-file-alt";
  if (t.includes("quiz")) return "fa-question-circle";
  if (t.includes("project") || t.includes("expo")) return "fa-project-diagram";
  if (t.includes("game") || t.includes("play")) return "fa-gamepad";
  if (t.includes("photo")) return "fa-camera";
  if (t.includes("poster")) return "fa-image";
  if (t.includes("circuit") || t.includes("power")) return "fa-bolt";
  if (t.includes("cad")) return "fa-drafting-compass";
  if (t.includes("hunt")) return "fa-map-marked-alt";
  if (t.includes("manager")) return "fa-briefcase";
  if (t.includes("stock")) return "fa-chart-line";
  if (t.includes("movie")) return "fa-film";
  if (t.includes("fire")) return "fa-fire";
  return "fa-calendar-day";
};

// Flatten data for search/map/details usage
let allEventsFlat = [];

function flattenEvents() {
  allEventsFlat = [];
  let idCounter = 1;

  // Helper to add
  const addE = (item, dept, category) => {
    const blockRef = item.block || item.Block;
    allEventsFlat.push({
      id: `ev_${idCounter++}`,
      title: item.event,
      dept: dept, // e.g., "CSE" or "Cultural"
      faculty: item.faculty,
      faculty_mobile: item.faculty_mobile, // Include mobile
      student: item.student,
      student_mobile: item.student_mobile, // Include mobile
      venue: item.venue,
      block: blockRef,
      coords: getCoords(blockRef),
      category: category, // "Technical" or "Cultural"
      icon: getIcon(item.event),
    });
  };

  // Process Tech
  Object.keys(rawData.tech).forEach((dept) => {
    rawData.tech[dept].forEach((evt) => addE(evt, dept, "Technical"));
  });

  // Process Cultural
  rawData.cultural_and_fun.forEach((evt) => addE(evt, "Cultural", "Cultural"));
}

flattenEvents();

// --- 3. UI LOGIC (Events Page) ---

function initEventsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section") || "tech";
  switchSection(section);

  // If Tech, load tabs
  renderTechTabs();

  // Load stored tab or default to first (CIVIL)
  const storedDept = sessionStorage.getItem("currentDept");
  const defaultDept = Object.keys(rawData.tech)[0];
  const activeDept =
    storedDept && rawData.tech[storedDept] ? storedDept : defaultDept;

  renderTechEvents(activeDept);

  // Highlight active tab
  setTimeout(() => {
    const list = document.getElementById("dept-tabs-list");
    if (list) {
      const btns = list.querySelectorAll(".dept-tab-btn");
      btns.forEach((btn) => {
        if (btn.innerText === activeDept) {
          btn.classList.add("active");
          btn.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        } else {
          btn.classList.remove("active");
        }
      });
    }
  }, 100);

  // Load Cultural
  renderCulturalEvents();
}

function switchSection(section) {
  const techBtn = document.getElementById("btn-tech");
  const cultBtn = document.getElementById("btn-cultural");
  const techSec = document.getElementById("tech-section");
  const cultSec = document.getElementById("cultural-section");

  if (!techBtn || !cultBtn) return;

  if (section === "tech") {
    techBtn.classList.add("active");
    cultBtn.classList.remove("active");
    techSec.style.display = "block";
    cultSec.style.display = "none";

    // Refresh tabs if needed (e.g. scroll position)
  } else {
    cultBtn.classList.add("active");
    techBtn.classList.remove("active");
    cultSec.style.display = "block";
    techSec.style.display = "none";
  }
}

// Global scope for onclick
window.switchSection = switchSection;

// Render Tech Tabs
function renderTechTabs() {
  const wrapper = document.querySelector(".dept-tabs-wrapper");
  const container = document.getElementById("dept-tabs-container");

  if (!container) return;

  // 1. Reset structure
  const parent = container.parentElement;
  if (parent) {
    // Allow us to take full control of styling by replacing the parent's content
    // changing parent class to our sticky wrapper
    parent.className = "dept-tabs-sticky";
    parent.removeAttribute("style"); // Remove old inline styles

    parent.innerHTML = `
        <div class="dept-tabs-scroll-container">
            <div class="dept-tabs-list" id="dept-tabs-list">
                <!-- Buttons go here -->
            </div>
        </div>
      `;
  }

  const list = document.getElementById("dept-tabs-list");
  if (!list) return;

  const depts = Object.keys(rawData.tech);

  depts.forEach((dept, index) => {
    const btn = document.createElement("button");
    // Active class handled by init logic or verify below
    btn.className = `dept-tab-btn`;
    btn.innerText = dept;

    btn.onclick = (e) => {
      // Save selection
      sessionStorage.setItem("currentDept", dept);

      // Switch Active
      const current = list.querySelector(".dept-tab-btn.active");
      if (current) current.classList.remove("active");
      btn.classList.add("active");

      // Scroll to view (stick to start)
      btn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      // Render Events
      renderTechEvents(dept);
    };

    list.appendChild(btn);
  });
}

function renderTechEvents(dept) {
  const container = document.getElementById("tech-events-grid");
  if (!container) return;
  container.innerHTML = "";

  const events = rawData.tech[dept];
  if (!events) return;

  events.forEach((evt) => {
    // Pass dept key explicitly to match flattened data
    const card = createEventCard(evt, dept);
    container.appendChild(card);
  });
}

function renderCulturalEvents() {
  const container = document.getElementById("cultural-events-grid");
  if (!container) return;
  container.innerHTML = "";

  const events = rawData.cultural_and_fun;
  events.forEach((evt) => {
    // Pass "Cultural" as dept key to match flattened data
    const card = createEventCard(evt, "Cultural");
    container.appendChild(card);
  });
}

function createEventCard(evt, deptKey) {
  const card = document.createElement("div");
  card.className = "dept-card"; // Reuse style

  // Find flattened ID matching by name AND department key
  // Use passed deptKey because raw evt.dept might differ (e.g. "CSE,CST" vs "CSE & CST")
  const flatEvt = allEventsFlat.find(
    (e) => e.title === evt.event && e.dept === (deptKey || evt.dept),
  );

  // Build Content (Hide nulls)
  let html = `<div class="dept-name" style="font-size: 1.1rem; margin-bottom: 8px;">
        <i class="fas ${getIcon(evt.event)}"></i> ${evt.event}
    </div>`;

  if (evt.faculty) {
    html += `<div class="dept-info"><i class="fas fa-user-tie"></i> ${evt.faculty}</div>`;
  }
  if (evt.student) {
    html += `<div class="dept-info"><i class="fas fa-user-graduate"></i> ${evt.student}</div>`;
  }
  if (evt.venue) {
    html += `<div class="dept-info"><i class="fas fa-map-marker-alt"></i> ${evt.venue}</div>`;
  }

  card.innerHTML = html;

  // Click to open details in same tab (Mobile Friendly)
  if (flatEvt && flatEvt.id) {
    card.onclick = () => {
      window.location.href = `event-details.html?id=${flatEvt.id}`;
    };
    // Add visual cue
    card.style.cursor = "pointer";
    card.title = "Click for event details";
  } else {
    // Debugging hint if match failed
    console.warn("Event ID not found for:", evt.event, deptKey || evt.dept);
  }

  return card;
}

// --- 4. MAP & SHARED LOGIC ---

// Leaflet Map Logic (Kept mostly same, adjusted for flat data)
function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Handle Back Button Logic
  const urlParams = new URLSearchParams(window.location.search);
  const backParam = urlParams.get("back");

  if (backParam === "events.html") {
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
      backBtn.href = "events.html";
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Events';
    }
  } else if (backParam === "details") {
    const id = urlParams.get("id");
    const backBtn = document.querySelector(".back-btn");
    if (backBtn && id) {
      backBtn.href = `event-details.html?id=${id}`;
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Details';
    }
  }

  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -1.6,
    maxZoom: 2,
    zoomControl: false,
    attributionControl: false,
  });
  window.mapInstance = map;

  const bounds = [
    [0, 0],
    [1542, 866],
  ];
  L.imageOverlay("assets/campus_view.png", bounds).addTo(map);
  map.fitBounds(bounds);

  // Add marker if params exist
  // Reuse existing urlParams
  // Add marker if params exist
  const block = urlParams.get("block");
  const eventId = urlParams.get("id");

  if (block) {
    const coords = getCoords(block);
    if (coords) {
      const bName = blockNames[block] || `Block ${block}`;
      let popupContent = `<b>${bName}</b>`;

      if (eventId) {
        const evt = allEventsFlat.find((e) => e.id === eventId);
        if (evt) {
          popupContent = `
            <b>${evt.dept}</b><br>
            Event: <b>${evt.title}</b><br>
            Room No: <b>${evt.venue || "TBD"}</b><br>
            Block: <b>${bName}</b>
          `;
        }
      }

      L.marker(coords).addTo(map).bindPopup(popupContent).openPopup();
    }
  }
}

// --- 5. DETAILS PAGE LOGIC ---
function initDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  // Find event
  const evt = allEventsFlat.find((e) => e.id === id);
  if (!evt) return;

  // Populate Fields
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val || "N/A";
  };

  setText("detail-title", evt.title);
  setText("detail-dept", evt.dept);
  setText("detail-faculty", evt.faculty || "N/A");

  // Faculty Phone
  const fPhone = document.getElementById("detail-fphone");
  if (fPhone) {
    if (evt.faculty_mobile) {
      fPhone.style.display = "block";
      fPhone.innerHTML = `<i class="fas fa-phone" style="margin-right: 8px;"></i> <a href="tel:${evt.faculty_mobile}" style="color:var(--accent-secondary);text-decoration:none;">${evt.faculty_mobile}</a>`;
    } else {
      fPhone.style.display = "none";
    }
  }

  setText("detail-student", evt.student || "N/A");

  // Student Phone
  const sPhone = document.getElementById("detail-sphone");
  if (sPhone) {
    if (evt.student_mobile) {
      sPhone.style.display = "block";
      sPhone.innerHTML = `<i class="fas fa-phone" style="margin-right: 8px;"></i> <a href="tel:${evt.student_mobile}" style="color:var(--accent-secondary);text-decoration:none;">${evt.student_mobile}</a>`;
    } else {
      sPhone.style.display = "none";
    }
  }

  setText("detail-venue", evt.venue || "TBD");
  setText("detail-block", blockNames[evt.block] || evt.block);

  // Dynamic Back Button
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    if (evt.category === "Cultural") {
      backBtn.href = "events.html?section=cultural";
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Cultural Events';
    } else {
      backBtn.href = "events.html?section=tech";
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Technical Events';
    }
  }

  // Map Button Logic
  const mapBtn = document.getElementById("view-map-btn");
  if (mapBtn) {
    if (evt.block) {
      mapBtn.onclick = () => {
        // Pass back=details and id so map knows where to return
        window.location.href = `map2.html?block=${evt.block}&back=details&id=${evt.id}`;
      };
    } else {
      mapBtn.style.display = "none";
    }
  }
}

// Initialize based on page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("tech-events-grid")) {
    initEventsPage();
  }
  if (document.getElementById("map")) {
    initMap();
  }
  if (document.getElementById("event-details-content")) {
    initDetailsPage();
  }
});
