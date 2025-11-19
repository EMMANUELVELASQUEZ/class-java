const sections = [
    {
        title: "¿Qué es Java?",
        icon: "📖",
        colorStart: "#f97316",
        colorEnd: "#ef4444",
        content: "Java es un lenguaje de programación versátil y poderoso. Es usado en millones de aplicaciones, desde apps móviles hasta sistemas empresariales. Lo especial de Java es que el código que escribes funciona en cualquier dispositivo (Windows, Mac, Linux) sin cambios.",
        code: `public class Hola {
    public static void main(String[] args) {
        System.out.println("¡Hola, mundo!");
    }
}`
    },
    {
        title: "Variables y Tipos de Datos",
        icon: "📦",
        colorStart: "#3b82f6",
        colorEnd: "#06b6d4",
        content: "Las variables son como cajas donde guardas información. Cada variable tiene un tipo que define qué tipo de datos puede contener.",
        code: `int edad = 25;
double precio = 19.99;
String nombre = "Juan";
boolean activo = true;

System.out.println(nombre + " tiene " + edad + " años");`
    },
    {
        title: "Operaciones Matemáticas",
        icon: "⚡",
        colorStart: "#eab308",
        colorEnd: "#f97316",
        content: "Puedes hacer cálculos con números usando operadores como +, -, *, /, %",
        code: `int a = 10;
int b = 3;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
System.out.println(a % b);`
    },
    {
        title: "Condicionales (if/else)",
        icon: "🔀",
        colorStart: "#a855f7",
        colorEnd: "#ec4899",
        content: "Los condicionales te permiten tomar decisiones. El código ejecuta diferentes acciones según si algo es verdadero o falso.",
        code: `int calificacion = 85;

if (calificacion >= 90) {
    System.out.println("¡Excelente!");
} else if (calificacion >= 70) {
    System.out.println("Aprobado");
} else {
    System.out.println("Necesitas mejorar");
}`
    },
    {
        title: "Bucles (for)",
        icon: "🔄",
        colorStart: "#22c55e",
        colorEnd: "#10b981",
        content: "Los bucles repiten código múltiples veces. El bucle 'for' es perfecto cuando sabes cuántas veces quieres repetir algo.",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println("Número: " + i);
}

for (int i = 1; i <= 10; i++) {
    System.out.println("3 × " + i + " = " + (3 * i));
}`
    },
    {
        title: "Arrays (Listas)",
        icon: "🟦",
        colorStart: "#4f46e5",
        colorEnd: "#3b82f6",
        content: "Un array es una colección de datos del mismo tipo. Es como tener múltiples cajas numeradas.",
        code: `int[] numeros = {10, 20, 30, 40, 50};

System.out.println(numeros[0]);
System.out.println(numeros[2]);

for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}`
    },
    {
        title: "Funciones/Métodos",
        icon: "➡️",
        colorStart: "#f43f5e",
        colorEnd: "#ec4899",
        content: "Las funciones son bloques de código reutilizables. Las defines una vez y las puedes usar muchas veces.",
        code: `public static int sumar(int a, int b) {
    return a + b;
}

int resultado = sumar(5, 3);
System.out.println(resultado);

public static void saludar(String nombre) {
    System.out.println("Hola, " + nombre);
}

saludar("María");`
    }
];

const outputs = [
    "¡Hola, mundo!",
    "Juan tiene 25 años",
    "13\n7\n30\n3\n1",
    "Aprobado",
    "Número: 1\nNúmero: 2\nNúmero: 3\nNúmero: 4\nNúmero: 5",
    "10\n30\n10\n20\n30\n40\n50",
    "8\nHola, María"
];

let currentExpanded = 0;

function renderSections() {
    const sectionsContainer = document.getElementById('sections');
    
    sections.forEach((section, index) => {
        const sectionEl = document.createElement('div');
        sectionEl.className = `section ${index === currentExpanded ? 'expanded' : ''}`;
        sectionEl.style.setProperty('--color-start', section.colorStart);
        sectionEl.style.setProperty('--color-end', section.colorEnd);
        
        sectionEl.innerHTML = `
            <div class="section-header" onclick="toggleSection(${index})">
                <div class="section-header-content">
                    <div class="section-header-left">
                        <div class="section-icon">${section.icon}</div>
                        <span class="section-title">${section.title}</span>
                    </div>
                    <span class="section-chevron">▼</span>
                </div>
            </div>
            <div class="section-content">
                <p class="section-description">${section.content}</p>
                <p class="code-label">CODE EXAMPLE</p>
                <div class="code-container">
                    <div class="code-header">
                        <div class="code-dot red"></div>
                        <div class="code-dot yellow"></div>
                        <div class="code-dot green"></div>
                    </div>
                    <div class="code-content">
                        <pre>${section.code}</pre>
                    </div>
                </div>
                <button class="run-button" onclick="runExample(${index})">▶ Run Example</button>
            </div>
        `;
        
        sectionsContainer.appendChild(sectionEl);
    });
}

function toggleSection(index) {
    const sectionElements = document.querySelectorAll('.section');
    
    sectionElements.forEach((el, i) => {
        if (i === index) {
            el.classList.toggle('expanded');
            if (el.classList.contains('expanded')) {
                currentExpanded = index;
            }
        } else {
            el.classList.remove('expanded');
        }
    });
}

function runExample(index) {
    const outputContainer = document.getElementById('outputContainer');
    const outputPre = document.getElementById('output');
    
    outputPre.textContent = outputs[index];
    outputContainer.style.display = 'block';
    
    outputContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

renderSections();