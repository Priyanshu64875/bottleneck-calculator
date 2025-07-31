// Bottleneck Calculator JavaScript

// Data from the application
const appData = {
  "cpuDatabase": [
    {"name": "Intel Core i9-14900K", "tier": "S", "score": 94, "brand": "Intel", "cores": 24, "threads": 32},
    {"name": "Intel Core i9-14900KF", "tier": "S", "score": 93, "brand": "Intel", "cores": 24, "threads": 32},
    {"name": "Intel Core i9-13900K", "tier": "S", "score": 92, "brand": "Intel", "cores": 24, "threads": 32},
    {"name": "Intel Core i9-13900KF", "tier": "S", "score": 91, "brand": "Intel", "cores": 24, "threads": 32},
    {"name": "Intel Core i7-14700K", "tier": "A", "score": 85, "brand": "Intel", "cores": 20, "threads": 28},
    {"name": "Intel Core i7-14700KF", "tier": "A", "score": 84, "brand": "Intel", "cores": 20, "threads": 28},
    {"name": "Intel Core i7-13700K", "tier": "A", "score": 83, "brand": "Intel", "cores": 16, "threads": 24},
    {"name": "Intel Core i7-13700KF", "tier": "A", "score": 82, "brand": "Intel", "cores": 16, "threads": 24},
    {"name": "Intel Core i5-14600K", "tier": "A", "score": 78, "brand": "Intel", "cores": 14, "threads": 20},
    {"name": "Intel Core i5-14600KF", "tier": "A", "score": 77, "brand": "Intel", "cores": 14, "threads": 20},
    {"name": "Intel Core i5-13600K", "tier": "A", "score": 76, "brand": "Intel", "cores": 14, "threads": 20},
    {"name": "Intel Core i5-13600KF", "tier": "A", "score": 75, "brand": "Intel", "cores": 14, "threads": 20},
    {"name": "Intel Core i5-12600K", "tier": "B", "score": 70, "brand": "Intel", "cores": 10, "threads": 16},
    {"name": "Intel Core i5-12400", "tier": "B", "score": 68, "brand": "Intel", "cores": 6, "threads": 12},
    {"name": "Intel Core i3-13100", "tier": "C", "score": 55, "brand": "Intel", "cores": 4, "threads": 8},
    {"name": "Intel Core i3-12100", "tier": "C", "score": 52, "brand": "Intel", "cores": 4, "threads": 8},
    {"name": "Intel Core Ultra 9 285K", "tier": "S", "score": 89, "brand": "Intel", "cores": 24, "threads": 24},
    {"name": "Intel Core Ultra 7 265K", "tier": "A", "score": 81, "brand": "Intel", "cores": 20, "threads": 20},
    {"name": "Intel Core Ultra 5 245K", "tier": "B", "score": 72, "brand": "Intel", "cores": 14, "threads": 14},
    {"name": "AMD Ryzen 9 9950X3D", "tier": "S", "score": 96, "brand": "AMD", "cores": 16, "threads": 32},
    {"name": "AMD Ryzen 9 9950X", "tier": "S", "score": 95, "brand": "AMD", "cores": 16, "threads": 32},
    {"name": "AMD Ryzen 9 9900X3D", "tier": "S", "score": 93, "brand": "AMD", "cores": 12, "threads": 24},
    {"name": "AMD Ryzen 9 9900X", "tier": "S", "score": 90, "brand": "AMD", "cores": 12, "threads": 24},
    {"name": "AMD Ryzen 9 7950X3D", "tier": "S", "score": 94, "brand": "AMD", "cores": 16, "threads": 32},
    {"name": "AMD Ryzen 9 7950X", "tier": "S", "score": 91, "brand": "AMD", "cores": 16, "threads": 32},
    {"name": "AMD Ryzen 9 7900X3D", "tier": "A", "score": 88, "brand": "AMD", "cores": 12, "threads": 24},
    {"name": "AMD Ryzen 9 7900X", "tier": "A", "score": 85, "brand": "AMD", "cores": 12, "threads": 24},
    {"name": "AMD Ryzen 7 9800X3D", "tier": "S", "score": 92, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 7 9700X", "tier": "A", "score": 82, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 7 7800X3D", "tier": "S", "score": 90, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 7 7700X", "tier": "A", "score": 80, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 7 5800X3D", "tier": "A", "score": 75, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 7 5700X", "tier": "B", "score": 68, "brand": "AMD", "cores": 8, "threads": 16},
    {"name": "AMD Ryzen 5 9600X", "tier": "B", "score": 75, "brand": "AMD", "cores": 6, "threads": 12},
    {"name": "AMD Ryzen 5 7600X", "tier": "B", "score": 72, "brand": "AMD", "cores": 6, "threads": 12},
    {"name": "AMD Ryzen 5 5600X", "tier": "C", "score": 62, "brand": "AMD", "cores": 6, "threads": 12},
    {"name": "AMD Ryzen 5 5600", "tier": "C", "score": 60, "brand": "AMD", "cores": 6, "threads": 12},
    {"name": "AMD Ryzen 3 3300X", "tier": "D", "score": 45, "brand": "AMD", "cores": 4, "threads": 8},
    {"name": "AMD Ryzen 3 3200G", "tier": "D", "score": 42, "brand": "AMD", "cores": 4, "threads": 8}
  ],
  "gpuDatabase": [
    {"name": "NVIDIA GeForce RTX 5090", "tier": "S", "score": 100, "brand": "NVIDIA", "vram": 32, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 5080", "tier": "S", "score": 87, "brand": "NVIDIA", "vram": 16, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 5070 Ti", "tier": "A", "score": 76, "brand": "NVIDIA", "vram": 12, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 5070", "tier": "A", "score": 70, "brand": "NVIDIA", "vram": 12, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 5060 Ti", "tier": "B", "score": 58, "brand": "NVIDIA", "vram": 8, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 5060", "tier": "B", "score": 52, "brand": "NVIDIA", "vram": 8, "launch": 2025},
    {"name": "NVIDIA GeForce RTX 4090", "tier": "S", "score": 92, "brand": "NVIDIA", "vram": 24, "launch": 2022},
    {"name": "NVIDIA GeForce RTX 4080 SUPER", "tier": "S", "score": 78, "brand": "NVIDIA", "vram": 16, "launch": 2024},
    {"name": "NVIDIA GeForce RTX 4080", "tier": "A", "score": 75, "brand": "NVIDIA", "vram": 16, "launch": 2022},
    {"name": "NVIDIA GeForce RTX 4070 Ti SUPER", "tier": "A", "score": 72, "brand": "NVIDIA", "vram": 16, "launch": 2024},
    {"name": "NVIDIA GeForce RTX 4070 Ti", "tier": "A", "score": 68, "brand": "NVIDIA", "vram": 12, "launch": 2023},
    {"name": "NVIDIA GeForce RTX 4070 SUPER", "tier": "A", "score": 65, "brand": "NVIDIA", "vram": 12, "launch": 2024},
    {"name": "NVIDIA GeForce RTX 4070", "tier": "B", "score": 62, "brand": "NVIDIA", "vram": 12, "launch": 2023},
    {"name": "NVIDIA GeForce RTX 4060 Ti", "tier": "B", "score": 55, "brand": "NVIDIA", "vram": 8, "launch": 2023},
    {"name": "NVIDIA GeForce RTX 4060", "tier": "B", "score": 50, "brand": "NVIDIA", "vram": 8, "launch": 2023},
    {"name": "NVIDIA GeForce RTX 3090", "tier": "A", "score": 70, "brand": "NVIDIA", "vram": 24, "launch": 2020},
    {"name": "NVIDIA GeForce RTX 3080", "tier": "A", "score": 65, "brand": "NVIDIA", "vram": 10, "launch": 2020},
    {"name": "NVIDIA GeForce RTX 3070", "tier": "B", "score": 58, "brand": "NVIDIA", "vram": 8, "launch": 2020},
    {"name": "NVIDIA GeForce RTX 3060 Ti", "tier": "B", "score": 52, "brand": "NVIDIA", "vram": 8, "launch": 2020},
    {"name": "NVIDIA GeForce RTX 3060", "tier": "C", "score": 45, "brand": "NVIDIA", "vram": 8, "launch": 2021},
    {"name": "NVIDIA GeForce GTX 1660 Ti", "tier": "D", "score": 35, "brand": "NVIDIA", "vram": 6, "launch": 2019},
    {"name": "NVIDIA GeForce GTX 1060", "tier": "D", "score": 28, "brand": "NVIDIA", "vram": 6, "launch": 2016},
    {"name": "AMD Radeon RX 9070 XT", "tier": "A", "score": 72, "brand": "AMD", "vram": 16, "launch": 2025},
    {"name": "AMD Radeon RX 9070", "tier": "A", "score": 68, "brand": "AMD", "vram": 16, "launch": 2025},
    {"name": "AMD Radeon RX 9060 XT", "tier": "B", "score": 58, "brand": "AMD", "vram": 16, "launch": 2025},
    {"name": "AMD Radeon RX 7900 XTX", "tier": "S", "score": 80, "brand": "AMD", "vram": 24, "launch": 2022},
    {"name": "AMD Radeon RX 7900 XT", "tier": "A", "score": 75, "brand": "AMD", "vram": 20, "launch": 2022},
    {"name": "AMD Radeon RX 7800 XT", "tier": "A", "score": 65, "brand": "AMD", "vram": 16, "launch": 2023},
    {"name": "AMD Radeon RX 7700 XT", "tier": "B", "score": 58, "brand": "AMD", "vram": 12, "launch": 2023},
    {"name": "AMD Radeon RX 7600 XT", "tier": "B", "score": 52, "brand": "AMD", "vram": 16, "launch": 2024},
    {"name": "AMD Radeon RX 7600", "tier": "C", "score": 48, "brand": "AMD", "vram": 8, "launch": 2023},
    {"name": "AMD Radeon RX 6950 XT", "tier": "A", "score": 68, "brand": "AMD", "vram": 16, "launch": 2022},
    {"name": "AMD Radeon RX 6900 XT", "tier": "A", "score": 65, "brand": "AMD", "vram": 16, "launch": 2020},
    {"name": "AMD Radeon RX 6800 XT", "tier": "A", "score": 62, "brand": "AMD", "vram": 16, "launch": 2020},
    {"name": "AMD Radeon RX 6700 XT", "tier": "B", "score": 55, "brand": "AMD", "vram": 12, "launch": 2021},
    {"name": "AMD Radeon RX 6600 XT", "tier": "B", "score": 48, "brand": "AMD", "vram": 8, "launch": 2021},
    {"name": "AMD Radeon RX 6600", "tier": "C", "score": 42, "brand": "AMD", "vram": 8, "launch": 2021},
    {"name": "Intel Arc A770", "tier": "B", "score": 50, "brand": "Intel", "vram": 16, "launch": 2022},
    {"name": "Intel Arc A750", "tier": "C", "score": 45, "brand": "Intel", "vram": 8, "launch": 2022},
    {"name": "Intel Arc A580", "tier": "C", "score": 40, "brand": "Intel", "vram": 8, "launch": 2023},
    {"name": "Intel Arc B770", "tier": "B", "score": 55, "brand": "Intel", "vram": 12, "launch": 2024},
    {"name": "Intel Arc B570", "tier": "C", "score": 48, "brand": "Intel", "vram": 10, "launch": 2024}
  ],
  "resolutions": [
    {"name": "1080p", "multiplier": 1.0, "description": "Full HD - 1920x1080"},
    {"name": "1440p", "multiplier": 1.6, "description": "2K - 2560x1440"},
    {"name": "4K", "multiplier": 2.8, "description": "Ultra HD - 3840x2160"},
    {"name": "Ultrawide 1440p", "multiplier": 1.8, "description": "3440x1440"}
  ],
  "ramOptions": [4, 8, 16, 32, 64, 128],
  "tierColors": {
    "S": "#ff6b6b",
    "A": "#4ecdc4", 
    "B": "#45b7d1",
    "C": "#96ceb4",
    "D": "#feca57"
  }
};

// Global state
let selectedCPU = null;
let selectedGPU = null;
let currentSearchType = null;

// DOM Elements
let cpuSearch, gpuSearch, cpuDropdown, gpuDropdown, cpuSelected, gpuSelected;
let ramSelect, resolutionSelect, calculateBtn, resultsSection, cursorGlow;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeElements();
    initializeEventListeners();
    initializeCursorGlow();
    checkCalculateButton();
});

// Initialize DOM elements
function initializeElements() {
    cpuSearch = document.getElementById('cpu-search');
    gpuSearch = document.getElementById('gpu-search');
    cpuDropdown = document.getElementById('cpu-dropdown');
    gpuDropdown = document.getElementById('gpu-dropdown');
    cpuSelected = document.getElementById('cpu-selected');
    gpuSelected = document.getElementById('gpu-selected');
    ramSelect = document.getElementById('ram-select');
    resolutionSelect = document.getElementById('resolution-select');
    calculateBtn = document.getElementById('calculate-btn');
    resultsSection = document.getElementById('results-section');
    cursorGlow = document.querySelector('.cursor-glow');
    
    console.log('Elements initialized:', {
        cpuSearch: !!cpuSearch,
        gpuSearch: !!gpuSearch,
        ramSelect: !!ramSelect,
        resolutionSelect: !!resolutionSelect,
        calculateBtn: !!calculateBtn
    });
}

// Event Listeners
function initializeEventListeners() {
    if (cpuSearch && gpuSearch) {
        // Search inputs with debounce
        cpuSearch.addEventListener('input', debounce((e) => {
            console.log('CPU search input:', e.target.value);
            handleSearch(e, 'cpu');
        }, 300));
        
        gpuSearch.addEventListener('input', debounce((e) => {
            console.log('GPU search input:', e.target.value);
            handleSearch(e, 'gpu');
        }, 300));
        
        // Focus and blur events for search inputs
        cpuSearch.addEventListener('focus', () => {
            console.log('CPU search focused');
            currentSearchType = 'cpu';
        });
        
        gpuSearch.addEventListener('focus', () => {
            console.log('GPU search focused');
            currentSearchType = 'gpu';
        });
        
        cpuSearch.addEventListener('blur', () => setTimeout(() => hideDropdown('cpu'), 200));
        gpuSearch.addEventListener('blur', () => setTimeout(() => hideDropdown('gpu'), 200));
    }
    
    // Form controls
    if (ramSelect) {
        ramSelect.addEventListener('change', () => {
            console.log('RAM selected:', ramSelect.value);
            checkCalculateButton();
        });
    }
    
    if (resolutionSelect) {
        resolutionSelect.addEventListener('change', () => {
            console.log('Resolution selected:', resolutionSelect.value);
            checkCalculateButton();
        });
    }
    
    // Calculate button
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            console.log('Calculate button clicked');
            calculateBottleneck();
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideDropdown('cpu');
            hideDropdown('gpu');
        }
    });
}

// Cursor glow effect
function initializeCursorGlow() {
    if (!cursorGlow) return;
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle search input
function handleSearch(event, type) {
    const query = event.target.value.trim().toLowerCase();
    const database = type === 'cpu' ? appData.cpuDatabase : appData.gpuDatabase;
    const dropdown = type === 'cpu' ? cpuDropdown : gpuDropdown;
    
    console.log(`Searching ${type} for: "${query}"`);
    
    if (query.length < 1) {
        hideDropdown(type);
        return;
    }
    
    const filteredItems = database.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query)
    ).slice(0, 8); // Limit results
    
    console.log(`Found ${filteredItems.length} results for ${type}`);
    displaySearchResults(filteredItems, type, dropdown);
}

// Display search results
function displaySearchResults(items, type, dropdown) {
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    
    if (items.length === 0) {
        dropdown.innerHTML = '<div class="search-option">No results found</div>';
        showDropdown(type);
        return;
    }
    
    items.forEach(item => {
        const option = document.createElement('div');
        option.className = 'search-option';
        option.innerHTML = `
            <span>${item.name}</span>
            <span class="component-tier tier-${item.tier}">${item.tier}</span>
        `;
        
        option.addEventListener('click', () => {
            console.log(`Selected ${type}:`, item.name);
            selectComponent(item, type);
        });
        dropdown.appendChild(option);
    });
    
    showDropdown(type);
}

// Show dropdown
function showDropdown(type) {
    const dropdown = type === 'cpu' ? cpuDropdown : gpuDropdown;
    if (dropdown) {
        dropdown.classList.remove('hidden');
    }
}

// Hide dropdown
function hideDropdown(type) {
    const dropdown = type === 'cpu' ? cpuDropdown : gpuDropdown;
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
}

// Select component
function selectComponent(component, type) {
    if (type === 'cpu') {
        selectedCPU = component;
        showSelectedComponent(component, 'cpu');
        if (cpuSearch) cpuSearch.value = '';
    } else {
        selectedGPU = component;
        showSelectedComponent(component, 'gpu');
        if (gpuSearch) gpuSearch.value = '';
    }
    
    hideDropdown(type);
    checkCalculateButton();
}

// Show selected component
function showSelectedComponent(component, type) {
    const container = type === 'cpu' ? cpuSelected : gpuSelected;
    const searchContainer = type === 'cpu' ? cpuSearch?.parentElement : gpuSearch?.parentElement;
    
    if (!container) return;
    
    const nameElement = container.querySelector('.component-name');
    const tierElement = container.querySelector('.component-tier');
    
    if (nameElement) nameElement.textContent = component.name;
    if (tierElement) {
        tierElement.textContent = component.tier;
        tierElement.className = `component-tier tier-${component.tier}`;
    }
    
    if (searchContainer) searchContainer.classList.add('hidden');
    container.classList.remove('hidden');
}

// Clear selection
function clearSelection(type) {
    console.log(`Clearing ${type} selection`);
    
    if (type === 'cpu') {
        selectedCPU = null;
        if (cpuSelected) cpuSelected.classList.add('hidden');
        if (cpuSearch?.parentElement) {
            cpuSearch.parentElement.classList.remove('hidden');
            cpuSearch.focus();
        }
    } else {
        selectedGPU = null;
        if (gpuSelected) gpuSelected.classList.add('hidden');
        if (gpuSearch?.parentElement) {
            gpuSearch.parentElement.classList.remove('hidden');
            gpuSearch.focus();
        }
    }
    
    checkCalculateButton();
    hideResults();
}

// Check if calculate button should be enabled
function checkCalculateButton() {
    if (!calculateBtn || !ramSelect || !resolutionSelect) return;
    
    const isComplete = selectedCPU && selectedGPU && 
                      ramSelect.value && resolutionSelect.value;
    
    console.log('Calculate button check:', {
        selectedCPU: !!selectedCPU,
        selectedGPU: !!selectedGPU,
        ram: ramSelect.value,
        resolution: resolutionSelect.value,
        isComplete
    });
    
    calculateBtn.disabled = !isComplete;
}

// Calculate bottleneck
async function calculateBottleneck() {
    if (!selectedCPU || !selectedGPU || !ramSelect?.value || !resolutionSelect?.value) {
        console.log('Missing required selections');
        return;
    }
    
    console.log('Starting bottleneck calculation...');
    
    // Show loading state
    showLoadingState();
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Perform calculations
    const results = performBottleneckCalculation();
    console.log('Calculation results:', results);
    
    // Hide loading state
    hideLoadingState();
    
    // Display results
    displayResults(results);
}

// Show loading state
function showLoadingState() {
    if (!calculateBtn) return;
    
    const btnText = calculateBtn.querySelector('.btn-text');
    const btnLoading = calculateBtn.querySelector('.btn-loading');
    
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
    calculateBtn.disabled = true;
}

// Hide loading state
function hideLoadingState() {
    if (!calculateBtn) return;
    
    const btnText = calculateBtn.querySelector('.btn-text');
    const btnLoading = calculateBtn.querySelector('.btn-loading');
    
    if (btnText) btnText.classList.remove('hidden');
    if (btnLoading) btnLoading.classList.add('hidden');
    checkCalculateButton();
}

// Perform bottleneck calculation
function performBottleneckCalculation() {
    const resolution = appData.resolutions.find(r => r.name === resolutionSelect.value);
    const ram = parseInt(ramSelect.value);
    
    // Adjust GPU score based on resolution
    const adjustedGPUScore = selectedGPU.score / resolution.multiplier;
    
    // RAM penalty calculation
    let ramPenalty = 0;
    if (ram < 16) ramPenalty = 10;
    else if (ram < 32) ramPenalty = 5;
    
    const adjustedCPUScore = Math.max(0, selectedCPU.score - ramPenalty);
    
    // Calculate bottleneck percentage
    const scoreDifference = Math.abs(adjustedCPUScore - adjustedGPUScore);
    const averageScore = (adjustedCPUScore + adjustedGPUScore) / 2;
    const bottleneckPercentage = Math.min(100, (scoreDifference / averageScore) * 100);
    
    // Determine bottleneck component
    let bottleneckComponent = 'balanced';
    if (adjustedCPUScore < adjustedGPUScore - 10) {
        bottleneckComponent = 'cpu';
    } else if (adjustedGPUScore < adjustedCPUScore - 10) {
        bottleneckComponent = 'gpu';
    }
    
    // System balance score
    const balanceScore = Math.max(0, 100 - bottleneckPercentage);
    
    return {
        cpuScore: adjustedCPUScore,
        gpuScore: adjustedGPUScore,
        balanceScore: balanceScore,
        bottleneckPercentage: bottleneckPercentage,
        bottleneckComponent: bottleneckComponent,
        ramPenalty: ramPenalty,
        resolution: resolution
    };
}

// Display results
function displayResults(results) {
    console.log('Displaying results...');
    
    // Update progress bars with animation
    updateProgressBar('cpu-progress', 'cpu-score', results.cpuScore);
    updateProgressBar('gpu-progress', 'gpu-score', results.gpuScore);
    updateProgressBar('balance-progress', 'balance-score', results.balanceScore);
    
    // Update bottleneck analysis
    updateBottleneckAnalysis(results);
    
    // Update recommendations
    updateRecommendations(results);
    
    // Show results section
    showResults();
}

// Update progress bar with animation
function updateProgressBar(barId, scoreId, score) {
    const progressBarContainer = document.getElementById(barId);
    const scoreText = document.getElementById(scoreId);
    
    if (!progressBarContainer || !scoreText) return;
    
    const progressBar = progressBarContainer.querySelector('.progress-fill');
    if (!progressBar) return;
    
    // Reset animation
    progressBar.style.width = '0%';
    
    // Animate to final value
    setTimeout(() => {
        progressBar.style.width = Math.min(100, score) + '%';
        animateNumber(scoreText, 0, Math.round(score), 1000);
    }, 100);
}

// Animate number counting
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.round(start + (end - start) * progress);
        element.textContent = currentValue + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Update bottleneck analysis
function updateBottleneckAnalysis(results) {
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    const bottleneckDetails = document.getElementById('bottleneck-details');
    
    if (!statusIndicator || !statusText || !bottleneckDetails) return;
    
    let status, statusClass, analysisText;
    
    if (results.bottleneckPercentage < 10) {
        status = 'Excellent Balance';
        statusClass = 'excellent';
        analysisText = 'Your system components are perfectly balanced. You should experience optimal performance across all applications and games.';
    } else if (results.bottleneckPercentage < 20) {
        status = 'Good Balance';
        statusClass = 'good';
        analysisText = 'Your system has a minor imbalance but will perform well in most scenarios. Consider this when planning future upgrades.';
    } else if (results.bottleneckPercentage < 35) {
        status = 'Moderate Bottleneck';
        statusClass = 'moderate';
        if (results.bottleneckComponent === 'cpu') {
            analysisText = `Your CPU (${selectedCPU.name}) is limiting your GPU (${selectedGPU.name}) performance by approximately ${Math.round(results.bottleneckPercentage)}%. You may experience reduced frame rates in CPU-intensive games.`;
        } else if (results.bottleneckComponent === 'gpu') {
            analysisText = `Your GPU (${selectedGPU.name}) is the limiting factor compared to your CPU (${selectedCPU.name}). Graphics settings may need to be lowered for optimal performance.`;
        } else {
            analysisText = 'Your system has a moderate imbalance. Consider upgrading the weaker component for better performance.';
        }
    } else {
        status = 'Significant Bottleneck';
        statusClass = 'poor';
        if (results.bottleneckComponent === 'cpu') {
            analysisText = `Your CPU (${selectedCPU.name}) is severely limiting your GPU (${selectedGPU.name}) performance by ${Math.round(results.bottleneckPercentage)}%. This will significantly impact gaming and productivity performance.`;
        } else if (results.bottleneckComponent === 'gpu') {
            analysisText = `Your GPU (${selectedGPU.name}) is significantly weaker than your CPU (${selectedCPU.name}). Graphics performance will be the primary limitation.`;
        } else {
            analysisText = 'Your system has a significant imbalance that will impact performance. Consider upgrading your components.';
        }
    }
    
    statusIndicator.className = `status-indicator ${statusClass}`;
    statusText.textContent = status;
    bottleneckDetails.textContent = analysisText;
}

// Update recommendations
function updateRecommendations(results) {
    const recommendationsContainer = document.getElementById('recommendations');
    if (!recommendationsContainer) return;
    
    recommendationsContainer.innerHTML = '';
    
    const recommendations = generateRecommendations(results);
    
    recommendations.forEach(rec => {
        const recElement = document.createElement('div');
        recElement.className = 'recommendation-item';
        recElement.innerHTML = `
            <div class="recommendation-title">${rec.title}</div>
            <div class="recommendation-desc">${rec.description}</div>
        `;
        recommendationsContainer.appendChild(recElement);
    });
}

// Generate recommendations
function generateRecommendations(results) {
    const recommendations = [];
    
    // RAM recommendations
    const ram = parseInt(ramSelect.value);
    if (ram < 16) {
        recommendations.push({
            title: 'Upgrade RAM',
            description: `Your current ${ram}GB RAM is limiting performance. Upgrade to at least 16GB for optimal gaming and productivity performance.`
        });
    } else if (ram < 32 && (selectedCPU.tier === 'S' || selectedGPU.tier === 'S')) {
        recommendations.push({
            title: 'Consider More RAM',
            description: 'With high-end components, 32GB RAM would provide better performance for memory-intensive applications and future-proofing.'
        });
    }
    
    // Component upgrade recommendations
    if (results.bottleneckComponent === 'cpu' && results.bottleneckPercentage > 20) {
        const betterCPUs = appData.cpuDatabase
            .filter(cpu => cpu.score > selectedCPU.score)
            .sort((a, b) => a.score - b.score)
            .slice(0, 3);
        
        if (betterCPUs.length > 0) {
            recommendations.push({
                title: 'CPU Upgrade Suggestions',
                description: `Consider upgrading to: ${betterCPUs.map(cpu => cpu.name).join(', ')} for better balance with your GPU.`
            });
        }
    }
    
    if (results.bottleneckComponent === 'gpu' && results.bottleneckPercentage > 20) {
        const betterGPUs = appData.gpuDatabase
            .filter(gpu => gpu.score > selectedGPU.score)
            .sort((a, b) => a.score - b.score)
            .slice(0, 3);
        
        if (betterGPUs.length > 0) {
            recommendations.push({
                title: 'GPU Upgrade Suggestions',
                description: `Consider upgrading to: ${betterGPUs.map(gpu => gpu.name).join(', ')} for better performance at your chosen resolution.`
            });
        }
    }
    
    // Resolution recommendations
    if (results.resolution.name === '4K' && results.gpuScore < 70) {
        recommendations.push({
            title: 'Resolution Optimization',
            description: 'Your GPU may struggle with 4K gaming. Consider 1440p for better frame rates or adjust graphics settings accordingly.'
        });
    }
    
    // Balance recommendations
    if (results.balanceScore > 85) {
        recommendations.push({
            title: 'System Optimization',
            description: 'Your system is well-balanced! Focus on optimizing game settings and ensuring adequate cooling for maximum performance.'
        });
    }
    
    return recommendations;
}

// Show results
function showResults() {
    if (!resultsSection) return;
    
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Hide results
function hideResults() {
    if (!resultsSection) {
        resultsSection.classList.add('hidden');
    }
}

// Make clearSelection function globally available
window.clearSelection = clearSelection;