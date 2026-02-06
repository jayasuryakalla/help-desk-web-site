// --- 1. OFFICIAL EVENT DATA (From Prompt) ---
// Day 1: Technical | Day 2: Cultural + Fun + Central
// --- 1. OFFICIAL EVENT DATA (New Format) ---
// Key: Category Name -> Array of Objects OR Object of Objects
const rawData = {
    "Paper Presentation": [
        { "dept": "CE", "faculty": "Dr Ch Tirupathi", "faculty_mobile": "8330967182", "student": "M Yaswanth", "student_mobile": "9959189669", "venue": "22310" },
        { "dept": "EEE", "faculty": "Dr. G. Radika", "faculty_mobile": "9182455341", "student": "P. Pravallika", "student_mobile": "6309190446", "venue": "11101" },
        { "dept": "ME", "faculty": "Dr. A. Ramaswamy", "faculty_mobile": "8248175481", "student": null, "student_mobile": null, "venue": null },
        { "dept": "ECE & ECT", "faculty": "Dr. U. Uma Maheswara Rao", "faculty_mobile": "9550528538", "student": "N. Pavandurga Kumar", "student_mobile": "6303778545", "venue": "22304" },
        { "dept": "CSE,CST", "faculty": "T.Uday", "faculty_mobile": "8331001738", "student": "B Bhargav", "student_mobile": null, "venue": null },
        { "dept": "CSM,CSD,CIC", "faculty": "Dr. AVS Siva Rama Rao", "faculty_mobile": "8247625329", "student": null, "student_mobile": null, "venue": null },
        { "dept": "IT & AIML", "faculty": "Mr. S Vignesh", "faculty_mobile": "9003618222", "student": null, "student_mobile": null, "venue": null },
        { "dept": "Diploma", "faculty": "CH Devaraj", "faculty_mobile": "9391694306", "student": "D Sai Tanuja", "student_mobile": "7981023135", "venue": "22008" }
    ],
    "Technical Quiz": [
        { "dept": "CE", "faculty": "T Sai Kumar", "faculty_mobile": "9553887116", "student": "P Karthik", "student_mobile": "7396183887", "venue": "22307" },
        { "dept": "EEE", "faculty": "Mrs. Ch. Jayasri", "faculty_mobile": "9866965184", "student": "A L S Jyotirmayi", "student_mobile": "9640057696", "venue": "11002" },
        { "dept": "ME", "faculty": "M. Vinod Kumar", "faculty_mobile": "998983114", "student": null, "student_mobile": null, "venue": null },
        { "dept": "ECE & ECT", "faculty": "Dr. Winny Elizabeth Philip", "faculty_mobile": "8891464136", "student": "K. Nikhil", "student_mobile": "6304489622", "venue": "22208" },
        { "dept": "CSE,CST", "faculty": "P C S Nagendra Setty", "faculty_mobile": "9490046470", "student": "V Dhatri", "student_mobile": "8712219580", "venue": null },
        { "dept": "CSM,CSD,CIC", "faculty": "P Srinivasa Reddi", "faculty_mobile": "8328506990", "student": null, "student_mobile": null, "venue": null },
        { "dept": "IT & AIML", "faculty": "Mrs. P Sheela", "faculty_mobile": "9493007830", "student": null, "student_mobile": null, "venue": null },
        { "dept": "Diploma", "faculty": "CH Devaraj", "faculty_mobile": "9391694306", "student": "Y Karthik", "student_mobile": "9676477300", "venue": "22007" }
    ],
    "Project Expo": [
        { "dept": "CE", "faculty": "Dr K N Murali Krishna", "faculty_mobile": "9398575959", "student": "K V S S Swarupini", "student_mobile": "9573234978", "venue": null },
        { "dept": "EEE", "faculty": "Dr P Hemachandu", "faculty_mobile": "8184969699", "student": "B. Shanmukha Sridhar", "student_mobile": "9381681096", "venue": null },
        { "dept": "ME", "faculty": "Ch. Syam Kumar", "faculty_mobile": "8985691598", "student": "U. Akhil", "student_mobile": "9014941059", "venue": null },
        { "dept": "ECE & ECT", "faculty": "Dr.S.Sri Ramya", "faculty_mobile": "9133951289", "student": "A.Eswari Mounika", "student_mobile": "9030193242", "venue": null },
        { "dept": "CSE,CST", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null, "venue": null },
        { "dept": "CSM,CSD,CIC", "faculty": "Mr. K Naresh", "faculty_mobile": null, "student": null, "student_mobile": null, "venue": null },
        { "dept": "IT & AIML", "faculty": "Dr A V N Chandra Sekhar", "faculty_mobile": "9346417876", "student": null, "student_mobile": null, "venue": null },
        { "dept": "Diploma", "faculty": "CH Devaraj", "faculty_mobile": "9391694306", "student": "R Lakshmi Narasimha", "student_mobile": "9491927115", "venue": "22009" }
    ],
    "Poster Presentation": [
        { "dept": "CE", "faculty": "M Rama Krishna", "faculty_mobile": "6281768987", "student": "G Vijay Sai Durga", "student_mobile": "8897931209", "venue": null },
        { "dept": "EEE", "faculty": "Dr. K. Ananda Babu", "faculty_mobile": "9849528862", "student": "N. Kavyasri Satya Geetha", "student_mobile": "8919386883", "venue": null },
        { "dept": "ME", "faculty": "Y. Raghuram", "faculty_mobile": "8074442190", "student": null, "student_mobile": null, "venue": null },
        { "dept": "ECE & ECT", "faculty": "Dr.T.V.Krishnamoorthy", "faculty_mobile": "8309974219", "student": "K.Dhana srivalli", "student_mobile": "9398361405", "venue": "22115" },
        { "dept": "CSE,CST", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null, "venue": null },
        { "dept": "CSM,CSD,CIC", "faculty": "Mrs. M Pavani", "faculty_mobile": "9059067516", "student": "B. Joy", "student_mobile": "6301966534", "venue": "23210" },
        { "dept": "IT & AIML", "faculty": "Mrs. K Nagavallika", "faculty_mobile": null, "student": null, "student_mobile": null, "venue": null },
        { "dept": "Diploma", "faculty": "CH Devaraj", "faculty_mobile": "9391694306", "student": "N Rama Durga", "student_mobile": "9494344491", "venue": "22006" }
    ],
    "Cultural Events": {
        "Dance Solo": { "faculty": "Dr.D.Anjani Suputri Devi", "faculty_mobile": "8897392492", "student": "E.Likitha", "student_mobile": "7569744529" },
        "Dance Duet": { "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null },
        "Dance Group": { "faculty": "Mrs.N.Sannajaji", "faculty_mobile": "9494599822", "student": "CH.Navya", "student_mobile": "7995274327" },
        "Singing": { "faculty": "Mrs.Bharathi", "faculty_mobile": "7893552837", "student": "P.Keerthi", "student_mobile": "7981631166" },
        "Ramp Walk": { "faculty": "Pujitha", "faculty_mobile": "6281331143", "student": "Keethana", "student_mobile": null },
        "Photography": { "faculty": "Mr.Venu", "faculty_mobile": "8500714776", "student": "P.Sai kiran", "student_mobile": "8977487337" },
        "Mime": { "faculty": "Mrs.B.Anusha", "faculty_mobile": "9959059680", "student": "V.Mounika", "student_mobile": "9032017749" },
        "Video Song Dedication": { "faculty": "Durga Bhavani", "faculty_mobile": "9705857643", "student": "G.Navyasri", "student_mobile": "8019347858" },
        "I Got Talent": { "faculty": "Mr.Ravi", "faculty_mobile": "9652731209", "student": "K.Krishna Teja", "student_mobile": "9963614237" },
        "Short Film": { "faculty": "Mr.T.Gopu", "faculty_mobile": "9487059842", "student": "D.Dhanush Kumar", "student_mobile": "8247275809" }
    },
    "Central Events": [
        { "event": "Hackathon", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null },
        { "event": "Treasure Hunt", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null },
        { "event": "Tambola", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null },
        { "event": "Lottery", "faculty": "Mr. G. Rama Krishna", "faculty_mobile": "8985986910", "student": "S. Tanish Kumar", "student_mobile": "7989878233" },
        { "event": "DJ Night", "faculty": null, "faculty_mobile": null, "student": null, "student_mobile": null }
    ],
    "Coding & Gaming Events": {
        "Capture the Flag": { "faculty": "G Vijaya Lakshmi", "faculty_mobile": "8919903629", "student": "K D S Lavanya", "student_mobile": "9390174748", "venue": null },
        "Blind Code": { "faculty": "P Saravan Kumar", "faculty_mobile": "7904257958", "student": "K Eakshita Vandana", "student_mobile": "9390817281" },
        "Online Gaming": { "faculty": "P Krishnamoorthy", "faculty_mobile": "9942776343", "student": "K D S Charan", "student_mobile": "9573669044" },
        "Code Relay": { "faculty": "G.Prasanth Kumar", "faculty_mobile": "8897199935", "student": "P Ishwarya", "student_mobile": "9661074173" },
        "AI Prompt Battle": { "faculty": "Mrs. N Mounica", "faculty_mobile": "9063662255", "student": "K Saranya", "student_mobile": "8121156772", "venue": "23203" },
        "Puzzle of 3": { "faculty": "Mr. K Viswa Prasad", "faculty_mobile": "9618554007", "student": "K. Sushma", "student_mobile": "9505959199", "venue": "23214" },
        "Mindora Arena": { "faculty": "Mr. K Suresh", "faculty_mobile": "9182577021", "student": "K Hari", "student_mobile": "9959233942", "venue": "23213" },
        "Silicon-TeKLogic Conclave": { "faculty": "Mrs.N.Kusuma", "faculty_mobile": "8096587487", "student": "G.Uma Maheswari", "student_mobile": "9912792455", "venue": "22301" },
        "Circuit Race": { "faculty": "Mr.S.N.V.P.Raviteja", "faculty_mobile": "7661040007", "student": "K.Venkata Lalithya", "student_mobile": "7981232429", "venue": "22101" },
        "Electrochase": { "faculty": "Mr.G V Apparao", "faculty_mobile": "9652929762", "student": "P. Abhinayasri", "student_mobile": "7036985897", "venue": "11007" },
        "Power Play": { "faculty": "Mr. M K Chaitanya", "faculty_mobile": "9848022536", "student": "Ch. Eswar Kumar", "student_mobile": "6302426855", "venue": "11009" },
        "Model Making": { "faculty": "M Venu", "faculty_mobile": "8500714776", "student": "B Surya Manikinata", "student_mobile": "8978142472", "venue": "32004" },
        "Cadathon": { "faculty": "D Ajay Kumar", "faculty_mobile": "8367296289", "student": "B Prabhu Suresh", "student_mobile": "8790056695", "venue": "22312" },
        "Cadveshana": { "faculty": "Ch. Venkateswara Rao", "faculty_mobile": "7981717782", "student": null, "student_mobile": null }
    },
    "MBA Events": [
        { "event": "Young Manager", "faculty": "Mr.M.Sameer Kumar", "faculty_mobile": "8074444840", "student": "S.Krishna Kumari", "student_mobile": "6304799221", "venue": "11202" },
        { "event": "Stock Game", "faculty": "Mr.N.Krishna", "faculty_mobile": "9963748509", "student": "M.Sureka", "student_mobile": "9542189119", "venue": "11204" },
        { "event": "Business Quiz", "faculty": "Mr.S.Venkata Ramana", "faculty_mobile": "9505503555", "student": "S.Srinivas", "student_mobile": "9346446707", "venue": "11205" }
    ],
    "DCME Events": [
        { "event": "ERROR HUNTERS", "faculty": "CH Devaraj", "faculty_mobile": "9391694306", "student": "K Dharahas", "student_mobile": "6304166013", "venue": "22008" }
    ],
    "DECE Events": [
        { "event": "CIRCUIT SPRINT", "faculty": "R Sushma", "faculty_mobile": "8897298489", "student": "K Jaswitha", "student_mobile": "9959969968", "venue": "22009" }
    ]
};

function processRawData(data) {
    const events = [];
    let idCounter = 1;
    const venueCoords = {};

    const getCoords = (venue) => {
        if (!venue || venue.toLowerCase() === 'null') return null;

        // Fixed coordinates from previous version + new ones assigned
        const fixedVenueCoords = {
            '22310': [315, 249],
            '22311': [315, 249],
            'FM LAB': [160, 360],
            '22302': [315, 249],
            'SOM Lab': [200, 380],
            'CT Lab': [354, 677],
            '11105': [129, 97],
            '11106': [129, 97],
            '11202': [129, 97],
            '11205': [129, 97],
            '11206': [129, 97],
            '11103': [129, 97],
            '12209': [382, 910],
            'CAD LAB': [380, 470],
            'Workshop': [400, 480],
            '12108': [382, 910],
            '13208': [382, 910],
            '13204': [382, 910],
            '13205': [382, 910],
            '13105': [382, 910],
            '13106': [382, 910],
            '13104': [382, 910],
            '13210': [382, 910],
            'CP Lab 1/2': [580, 570],
            'AI Lab': [600, 580],
            'IT WS': [620, 590],
            'ADS Lab': [660, 610],
            '14202': [382, 910],
            '14203': [382, 910],
            '14204': [382, 910],
            '12306': [382, 910],
            '12307': [382, 910],
            '12308': [382, 910],
            'Diploma Block': [800, 680],
            'Open Auditorium': [820, 690],
            'Garden': [840, 700],
            'Library': [318, 70],
            'Main Seminar Hall': [880, 720],
            'Entire Campus': [500, 500],
            'Campus': [510, 510],
            'E-Classroom': [900, 730],
            'Open Ground': [920, 740],
            'C-Block': [640, 600],

            // New Venues from new data
            '11101': [89, 261],
            '22304': [315, 249],
            '22008': [810, 685],
            '11002': [89, 261],
            '22208': [450, 505],
            '22007': [805, 682],
            '22009': [815, 688],
            '22115': [430, 495],
            '23210': [590, 673],
            '22006': [800, 678],
            '23203': [590, 673],
            '23214': [590, 673],
            '23213': [590, 673],
            '22301': [315, 249],
            '22101': [330, 445],
            '11007': [89, 261],
            '11009': [89, 261],
            '32004': [550, 555],
            '22312': [315, 249],
            '11204': [89, 261]
        };

        return fixedVenueCoords[venue] || [500, 500];
    };

    const getIcon = (title) => {
        const t = (title || "").toLowerCase();
        if (t.includes('dance')) return 'fa-music';
        if (t.includes('sing')) return 'fa-microphone';
        if (t.includes('code') || t.includes('hack') || t.includes('bug')) return 'fa-laptop-code';
        if (t.includes('paper')) return 'fa-file-alt';
        if (t.includes('quiz')) return 'fa-question-circle';
        if (t.includes('project') || t.includes('expo')) return 'fa-project-diagram';
        if (t.includes('game') || t.includes('play')) return 'fa-gamepad';
        if (t.includes('photo')) return 'fa-camera';
        if (t.includes('poster')) return 'fa-image';
        if (t.includes('circuit') || t.includes('power')) return 'fa-bolt';
        if (t.includes('cad')) return 'fa-drafting-compass';
        if (t.includes('hunt')) return 'fa-map-marked-alt';
        if (t.includes('manager')) return 'fa-briefcase';
        if (t.includes('stock')) return 'fa-chart-line';
        return 'fa-calendar-day';
    };

    const add = (category, item, isKeyTitle = false) => {
        let title, dept, type, day;

        // Defaults
        type = 'Technical';
        day = 1;

        // Custom Logic based on Category
        if (category === 'Cultural Events') {
            title = isKeyTitle;
            dept = 'Cultural';
            type = 'Cultural';
            day = 2;
        } else if (category === 'Central Events') {
            title = item.event;
            dept = 'Central';
            type = 'Fun';
            day = 2;
            if (title.toLowerCase().includes('hackathon')) { day = 1; type = 'Technical'; }
        } else if (category === 'MBA Events') {
            title = item.event;
            dept = 'MBA';
        } else if (category === 'DCME Events') {
            title = item.event;
            dept = 'Diploma';
        } else if (category === 'DECE Events') {
            title = item.event;
            dept = 'Diploma';
        } else if (category === 'Coding & Gaming Events') {
            title = isKeyTitle;
            dept = 'CSE/IT';
        } else {
            // Arrays like Paper Presentation
            title = category;
            dept = item.dept;
        }

        events.push({
            id: `ev_${idCounter++}`,
            title: title || "Event",
            dept: dept || "General",
            faculty: item.faculty || "TBA",
            f_phone: item.faculty_mobile || "",
            student: item.student || "TBA",
            s_phone: item.student_mobile || "",
            venue: item.venue || "TBA",
            coords: getCoords(item.venue),
            day: day,
            type: type,
            icon: item.icon || getIcon(title)
        });
    };

    // Arrays
    ['Paper Presentation', 'Technical Quiz', 'Project Expo', 'Poster Presentation'].forEach(cat => {
        if (data[cat]) data[cat].forEach(item => add(cat, item));
    });

    // Special Arrays
    ['Central Events', 'MBA Events', 'DCME Events', 'DECE Events'].forEach(cat => {
        if (data[cat]) data[cat].forEach(item => add(cat, item));
    });

    // Objects
    ['Cultural Events', 'Coding & Gaming Events'].forEach(cat => {
        if (data[cat]) {
            Object.keys(data[cat]).forEach(key => {
                add(cat, data[cat][key], key);
            });
        }
    });

    // Random shuffle coords ensures they are generated but consistent for same venue string
    return events;
}

const allEvents = processRawData(rawData);


// --- 2. LOGIC FUNCTIONS ---

// Helper to get query params
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// populateEvents() - Refactored for Accordion Layout
function populateEvents() {
    const dayOneContainer = document.getElementById('day1-grid');
    const dayTwoContainer = document.getElementById('day2-grid');

    if (!dayOneContainer || !dayTwoContainer) return;

    dayOneContainer.innerHTML = '';
    dayTwoContainer.innerHTML = '';

    // Grouping Logic
    const groupEvents = (events) => {
        const groups = {};
        events.forEach(evt => {
            if (!groups[evt.title]) groups[evt.title] = [];
            groups[evt.title].push(evt);
        });
        return groups;
    };

    const day1Groups = groupEvents(allEvents.filter(e => e.day === 1));
    const day2Groups = groupEvents(allEvents.filter(e => e.day === 2));

    // Render Function
    const renderAccordions = (container, groups) => {
        container.className = 'accordion-container'; // Switch to flex layout

        Object.keys(groups).forEach(title => {
            const evts = groups[title];

            // Accordion Item
            const item = document.createElement('div');
            item.className = 'accordion-item glass-panel';

            // Header
            const header = document.createElement('div');
            header.className = 'accordion-header';
            header.onclick = () => toggleAccordion(item);
            header.innerHTML = `
                <div class="accordion-title">
                    <i class="fas ${evts[0].icon}"></i> 
                    ${title}
                    <span style="font-size: 0.8rem; background: var(--secondary-color); padding: 2px 8px; border-radius: 10px; margin-left: 10px; color: #fff;">${evts.length}</span>
                </div>
                <i class="fas fa-chevron-down accordion-arrow"></i>
            `;

            // Content Body
            const content = document.createElement('div');
            content.className = 'accordion-content';

            const cardGrid = document.createElement('div');
            cardGrid.className = 'dept-card-grid';

            // Dept Cards
            evts.forEach(evt => {
                const card = document.createElement('div');
                card.className = 'dept-card';
                card.onclick = (e) => {
                    e.stopPropagation(); // Prevent accordion toggle
                    window.location.href = `event-details.html?id=${evt.id}`;
                };

                card.innerHTML = `
                    <div class="dept-name">${evt.dept}</div>
                    <div class="dept-info"><i class="fas fa-user-tie"></i> ${evt.faculty || 'N/A'}</div>
                    <div class="dept-info"><i class="fas fa-phone"></i> ${evt.f_phone || '--'}</div>
                    <div class="dept-info"><i class="fas fa-user-graduate"></i> ${evt.student || 'N/A'}</div>
                    <div class="dept-info"><i class="fas fa-mobile-alt"></i> ${evt.s_phone || '--'}</div>
                    <div class="dept-info"><i class="fas fa-map-marker-alt"></i> ${evt.venue || 'TBA'}</div>
                `;
                cardGrid.appendChild(card);
            });

            content.appendChild(cardGrid);
            item.appendChild(header);
            item.appendChild(content);
            container.appendChild(item);
        });
    };

    renderAccordions(dayOneContainer, day1Groups);
    renderAccordions(dayTwoContainer, day2Groups);
}

// Toggle Accordion Function
window.toggleAccordion = function (item) {
    const content = item.querySelector('.accordion-content');
    const isOpen = item.classList.contains('open');

    // Close all others (valid option, but maybe user wants multiple open. Let's toggle independent for now or close others?)
    // User requirement: "When a user clicks... it should expand". Usually implies accordion behavior.
    // Let's stick to independent toggle for better UX on mobile, or close siblings. 
    // Let's do independent toggle for simplicity unless requested.

    if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = null;
    } else {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// populateDetails() - For event-details.html
function populateDetails() {
    const eventId = getQueryParam('id');
    const event = allEvents.find(e => e.id === eventId);
    const detailsContainer = document.getElementById('event-details-content');

    if (!detailsContainer) return;

    if (!event) {
        detailsContainer.innerHTML = '<h2>Event Not Found</h2><a href="events.html" class="btn-neon">Back to Events</a>';
        return;
    }

    // Populate Data
    document.getElementById('detail-title').innerText = event.title;
    document.getElementById('detail-dept').innerText = event.dept + " Department";
    document.getElementById('detail-faculty').innerText = event.faculty;
    document.getElementById('detail-fphone').innerText = event.f_phone;
    document.getElementById('detail-student').innerText = event.student;
    document.getElementById('detail-sphone').innerText = event.s_phone;
    document.getElementById('detail-venue').innerText = event.venue;
    document.getElementById('detail-type').innerText = event.type;

    // Set map link
    document.getElementById('view-map-btn').onclick = () => {
        window.location.href = `map2.html?venue=${encodeURIComponent(event.venue)}`;
    };
}

// toggleDay() - For Index or Events page Day Toggle
window.toggleDay = function (day) {
    // Only relevance if we have a unified list or separate sections we want to scroll to
    // For now, let's just scroll to the section
    const section = document.getElementById(day === 1 ? 'day1-section' : 'day2-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Update buttons
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}


// --- 3. MAP LOGIC (Leaflet + Image Overlay) ---
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Dimensions of the image (Need to approximate or use standard ratio if unknown, 
    // but better to use simple CRS.Simple for image overlay)

    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        zoomControl: false,
        attributionControl: false
    });

    const bounds = [[0, 0], [1000, 1000]]; // Coordinate system for the image
    const image = L.imageOverlay('campus_map_v2.jpg', bounds).addTo(map);

    map.fitBounds(bounds);

    // Add custom markers?
    // We would need to know X,Y for each Venue. 
    // Since we don't have real coords on the image, we will place a center marker for now
    // or parse 'venue' param to show a specific "You are going here" message.

    const targetVenue = getQueryParam('venue');
    if (targetVenue) {
        const venueEvent = allEvents.find(e => e.venue === targetVenue);
        if (venueEvent && venueEvent.coords) {
            L.marker(venueEvent.coords).addTo(map)
                .bindPopup(`<b>${targetVenue}</b><br>Location on map`).openPopup();
        }
    }

    // --- Dev Tool: Draggable Pin ---
    // Start at center or somewhere visible
    const draggable = L.marker([500, 500], { draggable: true, title: "Drag me to find coords" }).addTo(map);
    draggable.bindPopup("<b>Finder Pin</b><br>Drag me!").openPopup();

    const updatePopup = (e) => {
        const lat = Math.round(e.latlng.lat);
        const lng = Math.round(e.latlng.lng);
        draggable.setPopupContent(`<b>Coords:</b> [${lat}, ${lng}]`).openPopup();
    };

    draggable.on('drag', updatePopup);
    draggable.on('dragend', updatePopup);
}


// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    populateEvents();
    populateDetails();
    initMap();

    // Mobile Drawer Logic (if used)
    const drawer = document.getElementById('mobile-drawer');
    window.openDrawer = () => drawer?.classList.add('open');
    window.closeDrawer = () => drawer?.classList.remove('open');
});
