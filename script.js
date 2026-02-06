        // ===================== TRANSLATIONS =====================
        const translations = {
            en: {
                pageTitle: "Combinatorics Visualization",
                pageSubtitle: "Interactive exploration of combination concepts in probability",
                tabPascal: "🔺 Pascal's Triangle",
                tabLattice: "🔲 Lattice Paths",
                tabHandshake: "🤝 Handshake",
                tabPermutation: "🔤 Permutation",

                // Pascal
                pascalTitle: "Pascal's Triangle",
                pascalDesc: "Each number is the sum of the two numbers above it. Row n and column k represent the binomial coefficient C(n, k). Hover over a number to see the relationship!",
                pascalRowsLabel: "Number of Rows:",

                // Lattice
                latticeTitle: "Lattice Paths",
                latticeDesc: "A particle at (0,0) wants to reach (n, k). It can only move Right (R) or Up (U). How many unique paths are possible?",
                latticeXLabel: "X Coordinate (Right):",
                latticeYLabel: "Y Coordinate (Up):",
                latticeRandomBtn: "🎲 Random Path",
                latticeTotalStepsText: "Total steps =",
                latticeDirectionsText: "(Right + Up)",
                latticeChooseText: "Choose",
                latticeUpText: "'Up' steps from",
                latticeStepsText: "steps",
                latticeResultSuffix: " Paths",
                latticePathExample: "Example of one path:",

                // Handshake
                handshakeTitle: "Handshake Problem",
                handshakeDesc: "If there are n people in a room and everyone shakes hands once with everyone else, how many total handshakes occur?",
                handshakePeopleLabel: "Number of People:",
                handshakeFormulaDesc: "Each handshake is a selection of 2 people from n people.",
                handshakeResultSuffix: " Handshakes",
                handshakeStatsPeople: "People Count",
                handshakeStatsLines: "Total Handshakes",

                // Permutation
                wordInputPlaceholder: "Type a word, e.g., MISSISSIPPI",
                permBtnCalc: "<span>✨</span> Calculate",
                permBtnClear: "<span>✕</span> Clear",
                permEmptyText: "Enter a word to see permutation calculation results",
                permCaseGrouped: "Case: Adjacent Identical Letters",
                permCaseStandard: "Standard Permutation",
                permNoteGrouped: "Identical letters are treated as one package (block).",
                permNoteStandard: "Formula: n! / (k₁! × k₂! × ...)",
                permGiven: "Given",
                permUniqueBlocks: "unique blocks",
                permFormula: "Formula",
                permResult: "Result",
                permTotalLetters: "Total Letters (n)",
                permDuplicates: "Duplicate Elements",
                permNoDuplicates: "No duplicate elements.",

                footerText: "Made with 💜 for math learning"
            },
            id: {
                pageTitle: "Visualisasi Kombinatorik",
                pageSubtitle: "Eksplorasi interaktif konsep kombinasi dalam probabilitas",
                tabPascal: "🔺 Segitiga Pascal",
                tabLattice: "🔲 Lattice Paths",
                tabHandshake: "🤝 Jabat Tangan",
                tabPermutation: "🔤 Permutasi",

                // Pascal
                pascalTitle: "Segitiga Pascal",
                pascalDesc: "Setiap angka adalah jumlah dari dua angka di atasnya. Posisi baris n dan kolom k adalah nilai koefisien binomial C(n, k). Arahkan kursor ke angka untuk melihat hubungannya!",
                pascalRowsLabel: "Jumlah Baris:",

                // Lattice
                latticeTitle: "Lattice Paths (Jalur Kisi)",
                latticeDesc: "Sebuah partikel di titik (0,0) ingin mencapai titik (n, k). Partikel hanya bisa bergerak ke Kanan (R) atau ke Atas (U). Berapa banyak jalur unik yang mungkin?",
                latticeXLabel: "Koordinat X (Kanan):",
                latticeYLabel: "Koordinat Y (Atas):",
                latticeRandomBtn: "🎲 Jalur Acak",
                latticeTotalStepsText: "Total langkah =",
                latticeDirectionsText: "(Kanan + Atas)",
                latticeChooseText: "Pilih",
                latticeUpText: "langkah 'Atas' dari",
                latticeStepsText: "langkah",
                latticeResultSuffix: " Jalur",
                latticePathExample: "Contoh salah satu jalur:",

                // Handshake
                handshakeTitle: "Masalah Jabat Tangan",
                handshakeDesc: "Jika ada n orang dalam sebuah ruangan dan setiap orang berjabat tangan sekali dengan setiap orang lainnya, berapa total jabat tangan yang terjadi?",
                handshakePeopleLabel: "Jumlah Orang:",
                handshakeFormulaDesc: "Setiap jabat tangan adalah pemilihan 2 orang dari n orang.",
                handshakeResultSuffix: " Jabat Tangan",
                handshakeStatsPeople: "Jumlah Orang",
                handshakeStatsLines: "Total Jabat Tangan",

                // Permutation
                wordInputPlaceholder: "Ketik kata, contoh: NUSANTARA",
                permBtnCalc: "<span>✨</span> Hitung",
                permBtnClear: "<span>✕</span> Hapus",
                permEmptyText: "Masukkan kata untuk melihat hasil perhitungan permutasi",
                permCaseGrouped: "Kasus: Huruf Sama Bersebelahan",
                permCaseStandard: "Permutasi Standar",
                permNoteGrouped: "Huruf yang sama dianggap satu paket (blok).",
                permNoteStandard: "Rumus: n! / (k₁! × k₂! × ...)",
                permGiven: "Diketahui",
                permUniqueBlocks: "blok unik",
                permFormula: "Rumus",
                permResult: "Hasil",
                permTotalLetters: "Total Huruf (n)",
                permDuplicates: "Unsur Ganda",
                permNoDuplicates: "Tidak ada unsur ganda.",

                footerText: "Dibuat dengan 💜 untuk pembelajaran matematika"
            }
        };

        let currentLang = 'id'; // Default to Indonesian as per original

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            applyLanguage();
            // Re-render components that might have embedded text
            updateLattice();
            updateHandshake();
            if (document.getElementById('wordInput').value) {
                analyzeAndCalculate();
            }
        }

        function applyLanguage() {
            const t = translations[currentLang];

            // Text Content Updates
            const textIds = [
                'pageTitle', 'pageSubtitle', 'tabPascal', 'tabLattice', 'tabHandshake', 'tabPermutation',
                'pascalTitle', 'pascalDesc', 'pascalRowsLabel',
                'latticeTitle', 'latticeDesc', 'latticeXLabel', 'latticeYLabel', 'latticeTotalStepsText',
                'latticeDirectionsText', 'latticeChooseText', 'latticeUpText', 'latticeStepsText', 'latticePathExample',
                'handshakeTitle', 'handshakeDesc', 'handshakePeopleLabel', 'handshakeFormulaDesc', 'handshakeStatsPeople', 'handshakeStatsLines',
                'permEmptyText', 'permCaseGrouped', 'permCaseStandard', 'permNoteGrouped', 'permNoteStandard',
                'footerText'
            ];

            textIds.forEach(id => {
                const el = document.getElementById(id);
                if (el && t[id]) el.textContent = t[id];
            });

            // HTML Content Updates (for buttons with icons)
            document.getElementById('latticeRandomBtn').innerHTML = t.latticeRandomBtn;
            document.getElementById('permBtnCalc').innerHTML = t.permBtnCalc;
            document.getElementById('permBtnClear').innerHTML = t.permBtnClear;

            // Attributes
            document.getElementById('wordInput').placeholder = t.wordInputPlaceholder;
        }

        // ===================== UTILITY FUNCTIONS =====================
function getCellSize(x, y) {
    const maxDim = Math.max(x, y);
    // Min 15px, Max 40px, fit in ~500px container
    return Math.max(15, Math.min(40, 500 / maxDim));
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

        function factorial(n) {
            if (n <= 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        }

        function factorialBigInt(n) {
            if (n === 0 || n === 1) return 1n;
            let result = 1n;
            for (let i = 2n; i <= BigInt(n); i++) {
                result *= i;
            }
            return result;
        }

        function combination(n, k) {
            if (k < 0 || k > n) return 0;
            if (k === 0 || k === n) return 1;
            if (k > n / 2) k = n - k;
            let res = 1;
            for (let i = 1; i <= k; i++) {
                res = res * (n - i + 1) / i;
            }
            return Math.round(res);
        }

        function formatNumber(num) {
            return new Intl.NumberFormat(currentLang === 'id' ? 'id-ID' : 'en-US').format(num);
        }

        // ===================== TAB NAVIGATION =====================
        function switchTab(tabName) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            const activeBtn = document.getElementById('tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
            activeBtn.classList.add('active');
            activeBtn.setAttribute('aria-selected', 'true');

            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById('tab-' + tabName).classList.add('active');

            if (tabName === 'pascal') updatePascal();
            else if (tabName === 'lattice') updateLattice();
            else if (tabName === 'handshake') updateHandshake();
            // Permutation doesn't need init
        }

        // ===================== PASCAL'S TRIANGLE =====================
        let pascalData = [];
        const tooltip = document.getElementById('pascalTooltip');

        function updatePascal() {
            const rows = parseInt(document.getElementById('pascalRows').value);
            document.getElementById('pascalRowsVal').textContent = rows;

            const container = document.getElementById('pascalTriangle');
            container.innerHTML = '';
            pascalData = [];

            for (let n = 0; n < rows; n++) {
                pascalData[n] = [];
                for (let k = 0; k <= n; k++) {
                    if (k === 0 || k === n) {
                        pascalData[n][k] = 1;
                    } else {
                        // Safe access to previous row
                        const prevRow = pascalData[n-1];
                        pascalData[n][k] = (prevRow ? prevRow[k-1] + prevRow[k] : 1);
                    }
                }
            }

            for (let n = 0; n < rows; n++) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'pascal-row';

                for (let k = 0; k <= n; k++) {
                    const cell = document.createElement('div');
                    cell.className = 'pascal-cell';
                    cell.textContent = pascalData[n][k];
                    cell.dataset.row = n;
                    cell.dataset.col = k;

                    cell.addEventListener('mouseenter', handlePascalHover);
                    cell.addEventListener('mousemove', moveTooltip);
                    cell.addEventListener('mouseleave', handlePascalLeave);

                    rowDiv.appendChild(cell);
                }
                container.appendChild(rowDiv);
            }
        }

        function handlePascalHover(e) {
            const n = parseInt(e.target.dataset.row);
            const k = parseInt(e.target.dataset.col);

            document.querySelectorAll('.pascal-cell').forEach(cell => {
                cell.classList.remove('highlighted', 'parent');
            });

            e.target.classList.add('highlighted');

            if (n > 0) {
                const prevRow = document.querySelectorAll('.pascal-row')[n - 1];
                if (prevRow) {
                    const cells = prevRow.querySelectorAll('.pascal-cell');
                    if (k > 0 && cells[k - 1]) cells[k - 1].classList.add('parent');
                    if (cells[k]) cells[k].classList.add('parent');
                }
            }

            let tooltipText = `C(${n}, ${k}) = ${pascalData[n][k]}`;
            if (n > 0) {
                const leftParent = k > 0 ? pascalData[n - 1][k - 1] : 0;
                const rightParent = k < n ? pascalData[n - 1][k] : 0;
                tooltipText += `\n= C(${n - 1}, ${k - 1}) + C(${n - 1}, ${k})`;
                tooltipText += `\n= ${leftParent} + ${rightParent}`;
            }
            tooltip.textContent = tooltipText;
            tooltip.classList.add('visible');
        }

        function moveTooltip(e) {
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        }

        function handlePascalLeave() {
            document.querySelectorAll('.pascal-cell').forEach(cell => {
                cell.classList.remove('highlighted', 'parent');
            });
            tooltip.classList.remove('visible');
        }

        // ===================== LATTICE PATHS =====================
        let currentPath = [];

        function updateLattice() {
            const x = Math.min(20, Math.max(1, parseInt(document.getElementById('latticeX').value) || 3));
            const y = Math.min(20, Math.max(1, parseInt(document.getElementById('latticeY').value) || 2));

            document.getElementById('latticeX').value = x;
            document.getElementById('latticeY').value = y;

            const total = x + y;
            const paths = combination(total, y);

            const t = translations[currentLang];

            document.getElementById('totalSteps').textContent = total;
            document.getElementById('chooseSteps').textContent = y;
            document.getElementById('fromSteps').textContent = total;
            document.getElementById('formulaN').textContent = total;
            document.getElementById('formulaK').textContent = y;
            document.getElementById('formulaResult').textContent = formatNumber(paths);
            document.getElementById('latticeResult').textContent = formatNumber(paths) + t.latticeResultSuffix;

            const grid = document.getElementById('latticeGrid');
            grid.innerHTML = '';

            // Remove grid layout and switch to absolute
            grid.style.display = 'block';
            grid.style.position = 'relative';

            const cellSize = getCellSize(x, y);
            const width = x * cellSize;
            const height = y * cellSize;

            grid.style.width = (width + 20) + 'px'; // Add padding for points
            grid.style.height = (height + 20) + 'px';
            grid.style.margin = '0 auto';

            // Draw Grid Lines (Horizontal)
            for (let j = 0; j <= y; j++) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.left = '10px';
                line.style.top = (10 + (y - j) * cellSize) + 'px';
                line.style.width = width + 'px';
                line.style.height = '1px';
                line.style.backgroundColor = 'var(--pastel-blue-light)';
                grid.appendChild(line);
            }

            // Draw Grid Lines (Vertical)
            for (let i = 0; i <= x; i++) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.left = (10 + i * cellSize) + 'px';
                line.style.top = '10px';
                line.style.width = '1px';
                line.style.height = height + 'px';
                line.style.backgroundColor = 'var(--pastel-blue-light)';
                grid.appendChild(line);
            }

            // Draw Points
            for (let j = 0; j <= y; j++) {
                for (let i = 0; i <= x; i++) {
                    const point = document.createElement('div');
                    point.className = 'lattice-point';
                    // Point is 12px, so offset by -6px to center
                    // We added 10px padding
                    point.style.left = (10 + i * cellSize - 6) + 'px';
                    point.style.top = (10 + (y - j) * cellSize - 6) + 'px';

                    if (i === 0 && j === 0) {
                         // Origin (0,0) logical is bottom-left
                         // Visual: i=0, j=0 => left=10-6, top=10 + y*cellSize - 6
                         // Wait, loop j is logical Y?
                         // If j=0 is logical Y=0.
                         // My loop: for (let j = 0; j <= y; j++)
                         // Visual Y = (y - j) * cellSize.
                         // So j=0 => Visual Y = y*cellSize (Bottom). Correct.

                         point.style.backgroundColor = '#fff';
                         point.style.border = '2px solid var(--gradient-start)';
                    }
                     if (i === x && j === y) {
                         // Destination (x,y) logical
                         // Visual: i=x, j=y => left=10+x*cellSize-6, top=10 + (y-y)*cellSize - 6 = 10-6. (Top). Correct.
                         point.style.backgroundColor = '#fff';
                         point.style.border = '2px solid var(--pastel-pink-light)';
                    }

                    grid.appendChild(point);
                }
            }

            generateRandomPath(x, y);
        }

        function generateRandomPathPure(x, y) {
            const path = [];
            let currentX = 0, currentY = 0;
            while (currentX < x || currentY < y) {
                if (currentX >= x) { path.push('U'); currentY++; }
                else if (currentY >= y) { path.push('R'); currentX++; }
                else {
                    if (Math.random() < 0.5) { path.push('R'); currentX++; }
                    else { path.push('U'); currentY++; }
                }
            }
            return path;
        }

        function generateRandomPath(x, y) {
            const path = generateRandomPathPure(x, y);
            currentPath = path;
            const seqEl = document.getElementById('pathSequence');
            if (seqEl) seqEl.textContent = path.join(' → ');
        }

        function animateRandomPath() {
            const x = parseInt(document.getElementById('latticeX').value);
            const y = parseInt(document.getElementById('latticeY').value);
            generateRandomPath(x, y);

            document.querySelectorAll('.lattice-path-line').forEach(el => el.remove());

            const grid = document.getElementById('latticeGrid');
            const cellSize = getCellSize(x, y);

            let currentX = 0; // Logical X
            let currentY = 0; // Logical Y

            currentPath.forEach((step, index) => {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.className = 'lattice-path-line';

                    // Start position (visual)
                    // Logical (currentX, currentY) -> Visual Left: 10 + currentX*sz, Visual Top: 10 + (y - currentY)*sz

                    const startLeft = 10 + currentX * cellSize;
                    const startTop = 10 + (y - currentY) * cellSize;

                    if (step === 'R') {
                        // Move Right: to (currentX + 1, currentY)
                        // Line is horizontal. Width cellSize.
                        line.style.width = cellSize + 'px';
                        line.style.height = '4px';
                        // Center vertically on the grid line
                        line.style.left = startLeft + 'px';
                        line.style.top = (startTop - 2) + 'px'; // -2 to center 4px line
                        currentX++;
                    } else {
                        // Move Up: to (currentX, currentY + 1)
                        // Line is vertical. Height cellSize.
                        // Visual: Goes UP from startTop.
                        // End Top is 10 + (y - (currentY + 1)) * sz = startTop - sz

                        line.style.width = '4px';
                        line.style.height = cellSize + 'px';
                        // Center horizontally
                        line.style.left = (startLeft - 2) + 'px';
                        line.style.top = (startTop - cellSize) + 'px';
                        currentY++;
                    }
                    line.style.animationDelay = '0s';
                    grid.appendChild(line);
                }, index * 200);
            });
        }

        // ===================== HANDSHAKE PROBLEM =====================
        function updateHandshake() {
            const n = parseInt(document.getElementById('peopleCount').value);
            document.getElementById('peopleCountVal').textContent = n;

            const handshakes = combination(n, 2);
            const t = translations[currentLang];

            document.getElementById('handshakeFormula').textContent = `${n}×${n - 1}/2`;
            document.getElementById('handshakeTotal').textContent = handshakes;
            document.getElementById('handshakeResult').textContent = formatNumber(handshakes) + t.handshakeResultSuffix;

            document.getElementById('statPeople').textContent = n;
            document.getElementById('statLines').textContent = handshakes;

            drawCompleteGraph(n);
        }

        function drawCompleteGraph(n) {
            const canvas = document.getElementById('handshakeCanvas');
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) / 2 - 40;

            ctx.clearRect(0, 0, width, height);

            const points = [];
            for (let i = 0; i < n; i++) {
                const angle = (i * 2 * Math.PI / n) - Math.PI / 2;
                points.push({
                    x: centerX + radius * Math.cos(angle),
                    y: centerY + radius * Math.sin(angle)
                });
            }

            // Draw Edges - Pastel Gradient
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#8CA9FF');
            gradient.addColorStop(1, '#FFD6BA');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.4;

            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }

            ctx.globalAlpha = 1;

            points.forEach((point, i) => {
                // Outer glow
                const glowGradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 20);
                glowGradient.addColorStop(0, 'rgba(170, 196, 245, 0.5)');
                glowGradient.addColorStop(1, 'rgba(170, 196, 245, 0)');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
                ctx.fill();

                // Main circle
                const nodeGradient = ctx.createRadialGradient(point.x - 3, point.y - 3, 0, point.x, point.y, 12);
                nodeGradient.addColorStop(0, '#AAC4F5');
                nodeGradient.addColorStop(1, '#8CA9FF');
                ctx.fillStyle = nodeGradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 12, 0, Math.PI * 2);
                ctx.fill();

                // Label
                ctx.fillStyle = 'white';
                ctx.font = 'bold 10px Poppins';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText((i + 1).toString(), point.x, point.y);
            });
        }

        // ===================== PERMUTATION =====================
        const wordInput = document.getElementById('wordInput');
        const resultsContainer = document.getElementById('permResults');
        const emptyState = document.getElementById('permEmptyState');
        let debounceTimer;

        wordInput.addEventListener('copy', (e) => { if (wordInput.value === '') e.preventDefault(); });

        wordInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const value = wordInput.value.replace(/[^A-Za-z]/g, '');
                if (value.length > 0) analyzeAndCalculate();
                else hidePermResults();
            }, 150);
        });

        wordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                analyzeAndCalculate();
            }
        });

        function showPermResults() {
            emptyState.style.display = 'none';
            resultsContainer.classList.add('visible');
        }

        function hidePermResults() {
            emptyState.style.display = 'block';
            resultsContainer.classList.remove('visible');
        }

        function clearPermutation() {
            wordInput.value = '';
            hidePermResults();
            wordInput.focus();
        }

        function analyzeAndCalculate() {
            const input = wordInput.value.toUpperCase().replace(/[^A-Z]/g, '');

            if (input.length === 0) {
                hidePermResults();
                return;
            }

            showPermResults();
            const t = translations[currentLang];

            // Frequency analysis
            const frequency = {};
            for (let char of input) {
                frequency[char] = (frequency[char] || 0) + 1;
            }

            // --- CALCULATION 1: ADJACENT SAME LETTERS ---
            const uniqueChars = Object.keys(frequency);
            const groupedCount = uniqueChars.length;
            const groupedResult = factorialBigInt(groupedCount);

            const visualGrouped = document.getElementById('visualGrouped');
            visualGrouped.innerHTML = '';
            uniqueChars.forEach(char => {
                const count = frequency[char];
                const span = document.createElement('span');
                span.className = 'tile grouped';
                span.innerText = `(${char.repeat(count)})`;
                visualGrouped.appendChild(span);
            });

            document.getElementById('resultGrouped').innerText = formatNumber(groupedResult);
            document.getElementById('formulaGrouped').innerText =
                `${t.permGiven} ${groupedCount} ${t.permUniqueBlocks}: { ${uniqueChars.join(', ')} }\n` +
                `${t.permFormula} = ${groupedCount}!\n` +
                `${t.permResult} = ${formatNumber(groupedResult)}`;

            // --- CALCULATION 2: STANDARD PERMUTATION ---
            const n = input.length;
            let denominator = 1n;
            let denominatorStringParts = [];

            for (let char in frequency) {
                if (frequency[char] > 1) {
                    denominator *= factorialBigInt(frequency[char]);
                    denominatorStringParts.push(`${frequency[char]}! (${char})`);
                }
            }

            const standardResult = factorialBigInt(n) / denominator;

            const visualStandard = document.getElementById('visualStandard');
            visualStandard.innerHTML = '';
            input.split('').forEach(char => {
                const span = document.createElement('span');
                span.className = 'tile';
                span.innerText = char;
                visualStandard.appendChild(span);
            });

            document.getElementById('resultStandard').innerText = formatNumber(standardResult);

            let formulaText = `${t.permTotalLetters} = ${n}\n`;
            if (denominatorStringParts.length > 0) {
                formulaText += `${t.permDuplicates} = ${denominatorStringParts.join(', ')}\n`;
                formulaText += `${t.permFormula} = ${n}! / (${denominatorStringParts.map(s => s.split(' ')[0]).join(' × ')})\n`;
            } else {
                formulaText += `${t.permNoDuplicates}\n${t.permFormula} = ${n}!\n`;
            }
            formulaText += `${t.permResult} = ${formatNumber(standardResult)}`;

            document.getElementById('formulaStandard').innerText = formulaText;
        }

        // ===================== INITIALIZATION =====================
        document.addEventListener('DOMContentLoaded', () => {
            applyLanguage(); // Initialize language

            // Attach Listeners
            const pascalRows = document.getElementById('pascalRows');
            if (pascalRows) pascalRows.addEventListener('input', debounce(updatePascal, 50));

            const latticeX = document.getElementById('latticeX');
            const latticeY = document.getElementById('latticeY');
            if (latticeX) latticeX.addEventListener('input', debounce(updateLattice, 50));
            if (latticeY) latticeY.addEventListener('input', debounce(updateLattice, 50));

            const peopleCount = document.getElementById('peopleCount');
            if (peopleCount) peopleCount.addEventListener('input', debounce(updateHandshake, 50));

            updatePascal();
            updateLattice();
            updateHandshake();
        });

// ===================== EXPORTS =====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        factorial,
        factorialBigInt,
        combination,
        generateRandomPathPure
    };
}
