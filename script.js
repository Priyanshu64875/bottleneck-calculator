// CPU and GPU data - In a real application, you would load this from external JSON files
let cpuModels = [];
let gpuModels = [];

// Load data from external JSON files
async function loadData() {
    try {
        // Try to load from external files
        const cpuResponse = await fetch('cpu-models.json');
        const gpuResponse = await fetch('gpu-models.json');

        if (cpuResponse.ok && gpuResponse.ok) {
            cpuModels = await cpuResponse.json();
            gpuModels = await gpuResponse.json();
        } else {
            throw new Error('External files not found');
        }
    } catch (error) {
        // Fallback to embedded data
        console.log('Using embedded CPU/GPU data');
        cpuModels = [
            // Intel CPUs (1st to 14th Gen)
            "Intel Core i3-530", "Intel Core i5-650", "Intel Core i5-750", "Intel Core i7-860", "Intel Core i7-920", "Intel Core i7-980X",
            "Intel Core i3-2100", "Intel Core i5-2400", "Intel Core i5-2500K", "Intel Core i7-2600", "Intel Core i7-2700K",
            "Intel Core i3-3220", "Intel Core i5-3450", "Intel Core i5-3570K", "Intel Core i7-3770", "Intel Core i7-3770K",
            "Intel Core i3-4130", "Intel Core i5-4460", "Intel Core i5-4670K", "Intel Core i7-4770", "Intel Core i7-4790K",
            "Intel Core i3-5005U", "Intel Core i5-5250U", "Intel Core i5-5675C", "Intel Core i7-5550U", "Intel Core i7-5775C",
            "Intel Core i3-6100", "Intel Core i5-6400", "Intel Core i5-6600K", "Intel Core i7-6700", "Intel Core i7-6700K",
            "Intel Core i3-7100", "Intel Core i5-7400", "Intel Core i5-7600K", "Intel Core i7-7700", "Intel Core i7-7700K",
            "Intel Core i3-8100", "Intel Core i5-8400", "Intel Core i5-8600K", "Intel Core i7-8700", "Intel Core i7-8700K",
            "Intel Core i3-9100", "Intel Core i5-9400F", "Intel Core i5-9600K", "Intel Core i7-9700", "Intel Core i7-9700K", "Intel Core i9-9900K",
            "Intel Core i3-10100", "Intel Core i5-10400", "Intel Core i5-10600K", "Intel Core i7-10700", "Intel Core i7-10700K", "Intel Core i9-10900K",
            "Intel Core i3-11100", "Intel Core i5-11400", "Intel Core i5-11600K", "Intel Core i7-11700", "Intel Core i7-11700K", "Intel Core i9-11900K",
            "Intel Core i3-12100", "Intel Core i5-12400", "Intel Core i5-12600K", "Intel Core i7-12700", "Intel Core i7-12700K", "Intel Core i9-12900K",
            "Intel Core i3-13100", "Intel Core i5-13400", "Intel Core i5-13600K", "Intel Core i7-13700", "Intel Core i7-13700K", "Intel Core i9-13900K",
            "Intel Core i3-14100", "Intel Core i5-14400", "Intel Core i5-14600K", "Intel Core i7-14700", "Intel Core i7-14700K", "Intel Core i9-14900K",
            "Intel Core Ultra 5 125H", "Intel Core Ultra 7 155H", "Intel Core Ultra 9 185H",
            "Intel Pentium G4560", "Intel Pentium G5400", "Intel Celeron G4900", "Intel Celeron G5900",

            // AMD CPUs
            "AMD Phenom II X6 1100T", "AMD FX-8350", "AMD FX-9590", "AMD A10-7850K",
            "AMD Ryzen 3 1200", "AMD Ryzen 3 1300X", "AMD Ryzen 3 2200G", "AMD Ryzen 3 3100", "AMD Ryzen 3 3200G", "AMD Ryzen 3 3300X",
            "AMD Ryzen 5 1400", "AMD Ryzen 5 1500X", "AMD Ryzen 5 1600", "AMD Ryzen 5 2600", "AMD Ryzen 5 3600", "AMD Ryzen 5 5600X", "AMD Ryzen 5 7600X",
            "AMD Ryzen 7 1700", "AMD Ryzen 7 1700X", "AMD Ryzen 7 1800X", "AMD Ryzen 7 2700", "AMD Ryzen 7 2700X", "AMD Ryzen 7 3700X", "AMD Ryzen 7 5800X", "AMD Ryzen 7 7800X3D",
            "AMD Ryzen 9 3900X", "AMD Ryzen 9 5900X", "AMD Ryzen 9 7900X", "AMD Ryzen 9 7950X", "AMD Ryzen 9 7950X3D",
            "AMD Ryzen Threadripper 1950X", "AMD Ryzen Threadripper 3990X", "AMD Ryzen Threadripper PRO 5995WX", "AMD Ryzen Threadripper PRO 7995WX",
            "AMD EPYC 7742", "AMD EPYC 7763", "AMD Athlon 3000G", "AMD Athlon 5000G"
        ];

        gpuModels = [
            // NVIDIA GPUs
            "NVIDIA GeForce GTX 1050", "NVIDIA GeForce GTX 1050 Ti", "NVIDIA GeForce GTX 1060", "NVIDIA GeForce GTX 1070", "NVIDIA GeForce GTX 1080", "NVIDIA GeForce GTX 1080 Ti",
            "NVIDIA GeForce GTX 1650", "NVIDIA GeForce GTX 1650 Super", "NVIDIA GeForce GTX 1660", "NVIDIA GeForce GTX 1660 Super", "NVIDIA GeForce GTX 1660 Ti",
            "NVIDIA GeForce RTX 2060", "NVIDIA GeForce RTX 2060 Super", "NVIDIA GeForce RTX 2070", "NVIDIA GeForce RTX 2070 Super", "NVIDIA GeForce RTX 2080", "NVIDIA GeForce RTX 2080 Super", "NVIDIA GeForce RTX 2080 Ti",
            "NVIDIA GeForce RTX 3050", "NVIDIA GeForce RTX 3060", "NVIDIA GeForce RTX 3060 Ti", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3070 Ti", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3080 Ti", "NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3090 Ti",
            "NVIDIA GeForce RTX 4050", "NVIDIA GeForce RTX 4060", "NVIDIA GeForce RTX 4060 Ti", "NVIDIA GeForce RTX 4070", "NVIDIA GeForce RTX 4070 Super", "NVIDIA GeForce RTX 4070 Ti", "NVIDIA GeForce RTX 4080", "NVIDIA GeForce RTX 4080 Super", "NVIDIA GeForce RTX 4090",
            "NVIDIA GeForce RTX 5060", "NVIDIA GeForce RTX 5070", "NVIDIA GeForce RTX 5080", "NVIDIA GeForce RTX 5090",
            "NVIDIA Quadro RTX 4000", "NVIDIA Quadro RTX 5000", "NVIDIA Quadro RTX 6000", "NVIDIA Quadro RTX 8000", "NVIDIA RTX A6000",
            "NVIDIA TITAN X", "NVIDIA TITAN RTX",

            // AMD GPUs  
            "AMD Radeon HD 7970", "AMD Radeon R9 290X", "AMD Radeon R9 390X", "AMD Radeon RX Vega 56", "AMD Radeon RX Vega 64",
            "AMD Radeon RX 480", "AMD Radeon RX 580", "AMD Radeon RX 590",
            "AMD Radeon RX 5500 XT", "AMD Radeon RX 5600 XT", "AMD Radeon RX 5700", "AMD Radeon RX 5700 XT",
            "AMD Radeon RX 6400", "AMD Radeon RX 6500 XT", "AMD Radeon RX 6600", "AMD Radeon RX 6600 XT", "AMD Radeon RX 6650 XT", "AMD Radeon RX 6700 XT", "AMD Radeon RX 6750 XT", "AMD Radeon RX 6800", "AMD Radeon RX 6800 XT", "AMD Radeon RX 6900 XT", "AMD Radeon RX 6950 XT",
            "AMD Radeon RX 7600", "AMD Radeon RX 7700 XT", "AMD Radeon RX 7800 XT", "AMD Radeon RX 7900 GRE", "AMD Radeon RX 7900 XT", "AMD Radeon RX 7900 XTX",
            "AMD Radeon Pro W6800", "AMD Radeon Pro W7900", "AMD Radeon Instinct MI250X",

            // Intel GPUs
            "Intel Arc A380", "Intel Arc A580", "Intel Arc A750", "Intel Arc A770", "Intel Arc B580", "Intel Arc B770",
            "Intel UHD Graphics 620", "Intel UHD Graphics 630", "Intel Iris Xe Graphics", "Intel Iris Plus Graphics 640"
        ];
    }
}

// Initialize autocomplete functionality
function setupAutocomplete(inputId, suggestionId, modelList) {
    const input = document.getElementById(inputId);
    const suggestions = document.getElementById(suggestionId);

    input.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        suggestions.innerHTML = '';

        if (!value) {
            suggestions.style.display = 'none';
            return;
        }

        const matches = modelList.filter(model =>
            model.toLowerCase().includes(value)
        ).slice(0, 8); // Show top 8 matches

        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.textContent = match;
                li.onclick = () => {
                    input.value = match;
                    suggestions.style.display = 'none';
                };
                suggestions.appendChild(li);
            });
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.style.display = 'none';
        }
    });

    // Handle keyboard navigation
    input.addEventListener('keydown', function(e) {
        const items = suggestions.querySelectorAll('li');
        let selected = suggestions.querySelector('li.selected');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const next = selected.nextElementSibling || items[0];
                next.classList.add('selected');
            } else if (items.length > 0) {
                items[0].classList.add('selected');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selected) {
                selected.classList.remove('selected');
                const prev = selected.previousElementSibling || items[items.length - 1];
                prev.classList.add('selected');
            } else if (items.length > 0) {
                items[items.length - 1].classList.add('selected');
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selected) {
                input.value = selected.textContent;
                suggestions.style.display = 'none';
            }
        } else if (e.key === 'Escape') {
            suggestions.style.display = 'none';
        }
    });
}

// Bottleneck calculation logic
function calculateBottleneck(cpu, gpu, ram, resolution) {
    let bottleneckPercentage = 0;
    let bottleneckType = 'none';
    let message = '';
    let resultClass = 'success';

    // Simple bottleneck detection logic (this would be more complex in reality)
    const cpuTier = getCPUTier(cpu);
    const gpuTier = getGPUTier(gpu);
    const resolutionMultiplier = getResolutionMultiplier(resolution);

    // Calculate bottleneck based on component tiers and resolution
    const cpuScore = cpuTier;
    const gpuScore = gpuTier * resolutionMultiplier;

    const difference = Math.abs(cpuScore - gpuScore);
    const average = (cpuScore + gpuScore) / 2;
    bottleneckPercentage = Math.round((difference / average) * 100);

    // Determine bottleneck type and message
    if (bottleneckPercentage <= 10) {
        message = `✅ Excellent balance! Your CPU and GPU are well-matched with minimal bottleneck (${bottleneckPercentage}%).`;
        resultClass = 'success';
    } else if (bottleneckPercentage <= 20) {
        if (cpuScore < gpuScore) {
            message = `⚠️ Minor CPU bottleneck detected (${bottleneckPercentage}%). Your CPU may limit GPU performance in CPU-intensive games.`;
            bottleneckType = 'cpu';
        } else {
            message = `⚠️ Minor GPU bottleneck detected (${bottleneckPercentage}%). Your GPU may limit performance at higher settings.`;
            bottleneckType = 'gpu';
        }
        resultClass = 'warning';
    } else {
        if (cpuScore < gpuScore) {
            message = `❌ Significant CPU bottleneck detected (${bottleneckPercentage}%). Consider upgrading your CPU for better performance.`;
            bottleneckType = 'cpu';
        } else {
            message = `❌ Significant GPU bottleneck detected (${bottleneckPercentage}%). Consider upgrading your GPU for better performance.`;
            bottleneckType = 'gpu';
        }
        resultClass = 'error';
    }

    // RAM check
    if (ram < 8) {
        message += ` Additionally, ${ram}GB RAM may be insufficient for modern games. Consider upgrading to 16GB or more.`;
        resultClass = 'error';
    } else if (ram < 16) {
        message += ` Your ${ram}GB RAM is adequate but 16GB would provide better performance.`;
    }

    return { bottleneckPercentage, bottleneckType, message, resultClass };
}

// Helper functions for component tier classification
function getCPUTier(cpu) {
    const cpuLower = cpu.toLowerCase();

    // High-end CPUs
    if (cpuLower.includes('i9') || cpuLower.includes('ryzen 9') || cpuLower.includes('threadripper') || cpuLower.includes('ultra 9')) {
        return 100;
    }
    // Upper mid-range CPUs
    if (cpuLower.includes('i7') || cpuLower.includes('ryzen 7') || cpuLower.includes('ultra 7')) {
        return 85;
    }
    // Mid-range CPUs
    if (cpuLower.includes('i5') || cpuLower.includes('ryzen 5') || cpuLower.includes('ultra 5')) {
        return 70;
    }
    // Entry-level CPUs
    if (cpuLower.includes('i3') || cpuLower.includes('ryzen 3')) {
        return 50;
    }
    // Budget CPUs
    if (cpuLower.includes('pentium') || cpuLower.includes('celeron') || cpuLower.includes('athlon')) {
        return 30;
    }

    return 60; // Default for unknown CPUs
}

function getGPUTier(gpu) {
    const gpuLower = gpu.toLowerCase();

    // Flagship GPUs
    if (gpuLower.includes('4090') || gpuLower.includes('5090') || gpuLower.includes('7900 xtx') || gpuLower.includes('3090')) {
        return 100;
    }
    // High-end GPUs
    if (gpuLower.includes('4080') || gpuLower.includes('5080') || gpuLower.includes('7900 xt') || gpuLower.includes('3080') || gpuLower.includes('6900 xt')) {
        return 90;
    }
    // Upper mid-range GPUs
    if (gpuLower.includes('4070') || gpuLower.includes('5070') || gpuLower.includes('7800 xt') || gpuLower.includes('3070') || gpuLower.includes('6800 xt')) {
        return 80;
    }
    // Mid-range GPUs
    if (gpuLower.includes('4060') || gpuLower.includes('5060') || gpuLower.includes('7700 xt') || gpuLower.includes('3060') || gpuLower.includes('6700 xt')) {
        return 65;
    }
    // Entry-level GPUs
    if (gpuLower.includes('4050') || gpuLower.includes('1660') || gpuLower.includes('6600') || gpuLower.includes('arc a')) {
        return 45;
    }
    // Budget GPUs
    if (gpuLower.includes('1650') || gpuLower.includes('6500') || gpuLower.includes('6400')) {
        return 30;
    }

    return 55; // Default for unknown GPUs
}

function getResolutionMultiplier(resolution) {
    switch (resolution) {
        case '1080p': return 1.0;
        case '1440p': return 1.3;
        case '4k': return 1.8;
        default: return 1.0;
    }
}

// Form submission handler
document.addEventListener('DOMContentLoaded', async function() {
    // Load CPU and GPU data
    await loadData();

    // Setup autocomplete for both inputs
    setupAutocomplete('cpu', 'cpuSuggestions', cpuModels);
    setupAutocomplete('gpu', 'gpuSuggestions', gpuModels);

    // Form submission
    document.getElementById('bottleneckForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const cpu = document.getElementById('cpu').value.trim();
        const gpu = document.getElementById('gpu').value.trim();
        const ram = parseInt(document.getElementById('ram').value);
        const resolution = document.getElementById('resolution').value;
        const resultDiv = document.getElementById('result');

        // Validation
        if (!cpu || !gpu || !ram) {
            resultDiv.innerHTML = '❌ Please fill in all fields.';
            resultDiv.className = 'error';
            resultDiv.style.display = 'block';
            return;
        }

        // Calculate bottleneck
        const result = calculateBottleneck(cpu, gpu, ram, resolution);

        // Display result
        resultDiv.innerHTML = result.message;
        resultDiv.className = result.resultClass;
        resultDiv.style.display = 'block';

        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    console.log('Bottleneck Calculator initialized with', cpuModels.length, 'CPU models and', gpuModels.length, 'GPU models');
});