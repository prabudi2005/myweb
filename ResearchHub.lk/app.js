// INITIAL RESEARCH DATASET
let researchData = [
    {
        id: 1,
        title: "AI-Powered Early Blight Disease Detection in Tea Plantations using Drone Imagery",
        author: "Devinda Silva, T. Rathnayake",
        university: "University of Moratuwa",
        category: "AI & Computing",
        status: "Open for Commercialization",
        abstract: "This thesis presents a real-time computer vision framework using convolutional neural networks (CNN) deployed on edge-computing devices mounted on industrial drones. Designed specifically for Sri Lankan high-country tea estates, the system detects early-stage pest attacks and fungal blights with 96.4% accuracy, reducing pesticide usage by up to 35%. Tested across 120 hectares in Nuwara Eliya.",
        tags: ["Artificial Intelligence", "Agritech", "Computer Vision", "Drones"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Low-Cost Solar Thermal Desalination Unit for Coastal Communities in Jaffna",
        author: "A. Kanthasamy, S. Perera",
        university: "University of Peradeniya",
        category: "Engineering",
        status: "Prototype Ready",
        abstract: "Addressing ground-water salinity in northern Sri Lanka, this engineering project details a modular multi-stage solar thermal distiller utilizing locally available coconut shell biochar for secondary purification. Produces 25 liters of WHO-standard potable water daily per square meter collector area at 40% lower cost than existing osmosis filters.",
        tags: ["Clean Water", "Solar Energy", "Thermal Engineering", "Sustainability"],
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Blockchain-Based Traceability Framework for Sri Lankan Ethical Cinnamon Exports",
        author: "Nethmi Jayawardena",
        university: "University of Colombo",
        category: "Business",
        status: "Seeking Funding / Investor",
        abstract: "This business research proposes a decentralized supply chain ledger tailored for Ceylon Cinnamon smallholders. By digitizing origin certification and quality grade metrics on an immutable chain, local exporters can command premium pricing in EU and US markets while ensuring direct payments to rural farmers.",
        tags: ["Blockchain", "FinTech", "Supply Chain", "Export Economy"],
        image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Biodegradable Food Packaging Derived from Waste Coconut Husk Cellulose",
        author: "M. F. Mohamed, K. Wickramasinghe",
        university: "University of Sri Jayewardenepura",
        category: "Agriculture",
        status: "Open for Commercialization",
        abstract: "A sustainable polymer material synthesized from discarded coir fibers. Demonstrates tensile strength comparable to medium-density polyethylene while fully decomposing in soil within 45 days. The manufacturing process utilizes zero toxic solvents, making it ideal for single-use takeaway food containers.",
        tags: ["Biopolymers", "Circular Economy", "Green Packaging", "Agritech"],
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Portable Electrocardiogram (ECG) Monitor with Real-time Cardiac Arrhythmia Alert",
        author: "Chathura Bandara & Research Team",
        university: "SLIIT",
        category: "Biomedical",
        status: "Prototype Ready",
        abstract: "A wearable 3-lead ECG device paired with a ultra-low-power Bluetooth micro-controller. Integrated signal processing algorithms analyze real-time heart rhythm disturbances and dispatch instant GPS-located emergency SMS alerts to caregivers and regional hospital triage desks.",
        tags: ["Biomedical Devices", "Healthcare", "IoT", "Embedded Systems"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Optimized Dynamic Frequency Scaling in Microgrids with High Penetration Solar",
        author: "Dinuka Fernando",
        university: "IIT Sri Lanka",
        category: "Engineering",
        status: "Academic Collaboration",
        abstract: "Mathematical modeling and simulation of grid frequency stabilization techniques for local industrial estates suffering from solar photovoltaic intermittency. Proposes a rapid battery-buffered inverter feedback loop to prevent localized blackout events during cloud cover transitions.",
        tags: ["Electrical Grid", "Renewable Energy", "Smart Grid", "Power Electronics"],
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
    }
];

let activeCategory = 'ALL';

// NAVIGATION SWITCHING LOGIC
function switchTab(tabId) {
    document.getElementById('section-directory').classList.add('hidden');
    document.getElementById('section-submit').classList.add('hidden');
    document.getElementById('section-industry').classList.add('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-cyan-400', 'bg-navy-800', 'border', 'border-slate-700/50');
        btn.classList.add('text-slate-300');
    });

    document.getElementById(`section-${tabId}`).classList.remove('hidden');

    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('text-cyan-400', 'bg-navy-800', 'border', 'border-slate-700/50');
        activeNav.classList.remove('text-slate-300');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// CATEGORY FILTER SELECTION
function setCategory(category) {
    activeCategory = category;
    
    const buttons = document.querySelectorAll('#category-buttons button');
    buttons.forEach(btn => {
        btn.classList.remove('bg-cyan-500', 'text-navy-950', 'font-bold');
        btn.classList.add('bg-navy-800', 'text-slate-300', 'border', 'border-slate-700');
    });

    event.target.classList.remove('bg-navy-800', 'text-slate-300', 'border', 'border-slate-700');
    event.target.classList.add('bg-cyan-500', 'text-navy-950', 'font-bold');

    filterResearch();
}

// FILTER & RENDER FUNCTION
function filterResearch() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const universityFilter = document.getElementById('university-filter').value;

    const filtered = researchData.filter(item => {
        const matchesCategory = (activeCategory === 'ALL' || item.category === activeCategory);
        const matchesUniversity = (universityFilter === 'ALL' || item.university === universityFilter);
        
        const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                             item.author.toLowerCase().includes(searchQuery) ||
                             item.abstract.toLowerCase().includes(searchQuery) ||
                             item.tags.some(tag => tag.toLowerCase().includes(searchQuery));

        return matchesCategory && matchesUniversity && matchesSearch;
    });

    renderGrid(filtered);
}

// RENDER RESEARCH CARDS GRID
function renderGrid(items) {
    const grid = document.getElementById('thesis-grid');
    const noResults = document.getElementById('no-results');
    const displayedCount = document.getElementById('displayed-count');

    grid.innerHTML = '';
    displayedCount.textContent = items.length;

    if (items.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-navy-800 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 glow-effect";

        card.innerHTML = `
            <div>
                <div class="h-44 bg-cover bg-center relative" style="background-image: url('${item.image}')">
                    <div class="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/40 to-transparent"></div>
                    <div class="absolute top-3 left-3">
                        <span class="bg-navy-950/80 backdrop-blur-md text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-700">
                            ${item.category}
                        </span>
                    </div>
                </div>
                <div class="p-5 space-y-3">
                    <span class="text-xs text-slate-400 font-medium inline-block">
                        <i class="fa-solid fa-building-columns text-cyan-400 mr-1"></i>${item.university}
                    </span>
                    <h3 class="text-base font-bold text-white leading-snug line-clamp-2 hover:text-cyan-400 transition-colors">
                        ${item.title}
                    </h3>
                    <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        ${item.abstract}
                    </p>
                </div>
            </div>
            <div class="p-5 pt-0 space-y-4">
                <div class="flex flex-wrap gap-1.5">
                    ${item.tags.slice(0, 3).map(tag => `<span class="bg-navy-900 text-slate-400 text-[10px] px-2 py-0.5 rounded-md border border-slate-800">#${tag}</span>`).join('')}
                </div>
                <div class="border-t border-slate-700/60 pt-3 flex items-center justify-between">
                    <span class="text-xs text-slate-400 truncate max-w-[150px]">
                        <i class="fa-solid fa-user-pen text-slate-500 mr-1"></i>${item.author}
                    </span>
                    <button onclick="openModal(${item.id})" class="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-navy-950 font-bold text-xs px-3 py-1.5 rounded-lg border border-cyan-500/30 transition-all">
                        Preview Paper
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// MODAL HANDLERS
function openModal(id) {
    const item = researchData.find(r => r.id === id);
    if (!item) return;

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-author').textContent = item.author;
    document.getElementById('modal-university').textContent = item.university;
    document.getElementById('modal-category').textContent = item.category;
    document.getElementById('modal-status').textContent = item.status;
    document.getElementById('modal-abstract').textContent = item.abstract;
    document.getElementById('modal-img-container').style.backgroundImage = `url('${item.image}')`;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = item.tags.map(t => `<span class="bg-navy-900 text-cyan-400 text-xs px-2.5 py-1 rounded-lg border border-slate-700">#${t}</span>`).join('');

    document.getElementById('research-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('research-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// FORM SUBMISSION HANDLER
function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('form-title').value;
    const author = document.getElementById('form-author').value;
    const university = document.getElementById('form-university').value;
    const category = document.getElementById('form-category').value;
    const status = document.getElementById('form-status').value;
    const abstract = document.getElementById('form-abstract').value;
    const tagsInput = document.getElementById('form-tags').value;
    const imageInput = document.getElementById('form-image').value;

    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()) : ["Research", "Academic"];
    const defaultImages = [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    ];
    const image = imageInput.trim() !== "" ? imageInput : defaultImages[Math.floor(Math.random() * defaultImages.length)];

    const newResearch = {
        id: researchData.length + 1,
        title,
        author,
        university,
        category,
        status,
        abstract,
        tags,
        image
    };

    researchData.unshift(newResearch);

    document.getElementById('research-form').reset();
    alert('Congratulations! Your research has been published successfully to ResearchHub LK.');
    
    switchTab('directory');
    setCategory('ALL');
}

// CORPORATE MODAL LOGIC
function openCorporateContactModal(type) {
    document.getElementById('corp-modal-subtitle').textContent = `Inquiry Type: ${type}. Complete the form below to connect with university facilitators.`;
    document.getElementById('corporate-modal').classList.remove('hidden');
}

function closeCorporateModal() {
    document.getElementById('corporate-modal').classList.add('hidden');
}

function handleCorporateSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Our Research Commercialization Officer will contact your enterprise within 24 hours.');
    closeCorporateModal();
}

// INITIALIZE ON LOAD
window.onload = function() {
    renderGrid(researchData);
}