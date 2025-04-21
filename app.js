// Datos del programa F12
const workoutProgram = {
    phases: [
        {
            name: 'Fase Uno: Resistencia Muscular',
            sets: 3,
            reps: '12-15',
            rest: 45, // segundos
            tempo: 'Lento',
            durationWeeks: 4,
            exercises: [
                'Press de Hombros con Barra',
                'Sentadilla con Barra',
                'Press de Pecho con Mancuernas',
                'Remo Inclinado con Barra',
                'Peso Muerto con Mancuernas',
                'Estocada con Mancuernas',
                'Curl de Bíceps con Barra',
                'Fondos en Banco',
                'Swing con Kettlebell',
                'Crunch con Balón Medicinal'
            ]
        },
        {
            name: 'Fase Dos: Hipertrofia',
            sets: 3,
            reps: '8-12',
            rest: 60, // segundos
            tempo: 'Lento a Rápido',
            durationWeeks: 4,
            exercises: [
                'Clean con Barra',
                'Sentadilla Frontal con Barra',
                'Press de Pecho Inclinado con Mancuernas',
                'Dominadas/Jalón al Pecho',
                'Peso Muerto con Barra',
                'Estocada con Barra',
                'Curl de Bíceps con Mancuernas',
                'Flexiones',
                'Swing con Kettlebell a una mano',
                'Patada con Balón Medicinal'
            ]
        },
        {
            name: 'Fase Tres: Fuerza',
            sets: 3,
            reps: '6-8',
            rest: 90, // segundos
            tempo: 'Rápido',
            durationWeeks: 4,
            exercises: [
                'Clean y Press con Barra',
                'Sentadilla Frontal con Barra',
                'Press de Pecho con Barra',
                'Dominadas/Jalón al Pecho',
                'Peso Muerto Rumano con Barra',
                'Sentadilla Split con Mancuernas',
                'Curl de Bíceps Inverso con Barra',
                'Flexiones de Tríceps',
                'Swing Alternado con Kettlebell',
                'Elevación de piernas doble con Balón Medicinal'
            ]
        }
    ],
    // Días de entrenamiento
    weeklySchedule: [
        { day: 'Lunes', type: 'Resistencia' },
        { day: 'Martes', type: 'Acondicionamiento' },
        { day: 'Miércoles', type: 'Resistencia' },
        { day: 'Jueves', type: 'Descanso' },
        { day: 'Viernes', type: 'Resistencia' },
        { day: 'Sábado', type: 'Acondicionamiento' },
        { day: 'Domingo', type: 'Descanso' }
    ],
    // Alternativas para máquinas ocupadas
    alternatives: {
        'Press de Pecho con Barra': [
            { name: 'Flexiones Estándar', instructions: 'Colócate en posición de plancha con manos a altura de hombros.' },
            { name: 'Fondos entre Bancos', instructions: 'Siéntate entre dos bancos, manos detrás, baja y sube.' }
        ],
        'Dominadas/Jalón al Pecho': [
            { name: 'Remo con Mancuerna', instructions: 'Apoya rodilla y mano en banco, tira de mancuerna hacia arriba.' },
            { name: 'Superman', instructions: 'Tumbado boca abajo, eleva brazos y piernas simultáneamente.' }
        ],
        'Sentadilla con Barra': [
            { name: 'Sentadillas Búlgaras', instructions: 'Un pie elevado atrás, baja hasta que muslo esté paralelo al suelo.' },
            { name: 'Peso Muerto Rumano', instructions: 'Inclina torso adelante con espalda recta, rodillas ligeramente flexionadas.' }
        ],
        'Press de Hombros con Barra': [
            { name: 'Press de Hombros con Mancuernas', instructions: 'De pie con mancuernas a la altura de los hombros, empuja hacia arriba.' },
            { name: 'Elevaciones Laterales', instructions: 'De pie con mancuernas a los lados, eleva brazos hasta altura de hombros.' }
        ],
        'Remo Inclinado con Barra': [
            { name: 'Remo con Banda Elástica', instructions: 'Pisa banda elástica, agarra extremos y tira hacia el abdomen.' },
            { name: 'Remo Invertido con TRX', instructions: 'Sujeta TRX inclinado hacia atrás, tira del cuerpo hacia arriba.' }
        ],
        'Peso Muerto con Mancuernas': [
            { name: 'Peso Muerto con Banda Elástica', instructions: 'Pisa banda elástica, agarra extremos y eleva extendiendo cadera.' },
            { name: 'Puente de Glúteos', instructions: 'Tumbado boca arriba, pies apoyados, eleva cadera y aprieta glúteos.' }
        ]
    }
};

// Estado de la aplicación
let appState = {
    currentPhase: 0,
    currentWeek: 1,
    startDate: null,
    exerciseHistory: {},
    todayExercises: {},
    currentWorkoutDate: new Date().toISOString().split('T')[0],
    completedExercises: [],
    micPermissionGranted: false // Estado del permiso
};

// Elementos DOM frecuentes
const mainContent = document.getElementById('main-content');

// Inicialización - Este es el punto de entrada principal
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar datos guardados primero
    loadAppState();
    
    // Configurar permiso persistente para el dominio
    if (typeof navigator.permissions !== 'undefined' && typeof navigator.permissions.query !== 'undefined') {
        try {
            const result = await navigator.permissions.query({ name: 'microphone' });
            if (result.state === 'granted') {
                appState.micPermissionGranted = true;
                saveAppState();
            } else if (!appState.micPermissionGranted) {
                // Solicitar explícitamente
                await requestMicrophoneAccess();
            }
        } catch (err) {
            console.error("Error checking permission:", err);
            // Intento alternativo si no tenemos permiso
            if (!appState.micPermissionGranted) {
                await requestMicrophoneAccess();
            }
        }
    } else if (!appState.micPermissionGranted) {
        // Si la API de permisos no está disponible, intentar el método alternativo
        await requestMicrophoneAccess();
    }
    
    // Actualizar UI con datos actuales
    updatePhaseInfo();
    
    // Configurar eventos de botones
    document.getElementById('btn-today').addEventListener('click', showTodayWorkout);
    document.getElementById('btn-exercises').addEventListener('click', showExercisesList);
    document.getElementById('btn-progress').addEventListener('click', showProgress);
    
    // Mostrar pantalla inicial
    showTodayWorkout();
});

// Función para solicitar acceso al micrófono de forma persistente
async function requestMicrophoneAccess() {
    try {
        // Mostrar un diálogo de confirmación primero
        const confirmed = await showPermissionDialog();
        
        if (confirmed) {
            // Esto iniciará un stream que debe permitirse de forma persistente
            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: true,
                video: false // Especificar explícitamente
            });
            
            // Detener el stream inmediatamente, solo necesitamos el permiso
            if (stream && stream.getTracks) {
                stream.getTracks().forEach(track => track.stop());
                
                // Marcar como concedido en el estado
                appState.micPermissionGranted = true;
                saveAppState();
                
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error('Error al solicitar permiso de micrófono:', error);
        alert('No se pudo obtener permiso de micrófono. El reconocimiento de voz no estará disponible.');
        return false;
    }
}

// Mostrar diálogo de permiso personalizado
function showPermissionDialog() {
    return new Promise((resolve) => {
        const permissionDialog = document.createElement('div');
        permissionDialog.className = 'permission-dialog';
        permissionDialog.innerHTML = `
            <div class="permission-content">
                <h3>Permiso de micrófono</h3>
                <p>Esta aplicación necesita acceso al micrófono para registrar ejercicios por voz.</p>
                <p>Pulsa "Autorizar" y cuando Chrome te pregunte, selecciona "Permitir" y marca "Recordar esta decisión".</p>
                <button id="grant-permission" class="btn btn-primary">Autorizar</button>
                <button id="deny-permission" class="btn btn-secondary">Cancelar</button>
            </div>
        `;
        document.body.appendChild(permissionDialog);
        
        document.getElementById('grant-permission').addEventListener('click', () => {
            permissionDialog.remove();
            resolve(true);
        });
        
        document.getElementById('deny-permission').addEventListener('click', () => {
            permissionDialog.remove();
            resolve(false);
        });
    });
}

// Cargar estado de la aplicación
function loadAppState() {
    const savedState = localStorage.getItem('f12WorkoutState');
    if (savedState) {
        const loadedState = JSON.parse(savedState);
        // Fusionar con appState para asegurar que tenemos todos los campos necesarios
        appState = { ...appState, ...loadedState };
        
        // Asegurarse de que tenemos la fecha actual
        appState.currentWorkoutDate = new Date().toISOString().split('T')[0];
    } else {
        // Si no hay estado guardado, inicializar con valores por defecto
        appState.startDate = new Date().toISOString();
        appState.currentWorkoutDate = new Date().toISOString().split('T')[0];
        saveAppState();
    }
}

// Guardar estado de la aplicación
function saveAppState() {
    localStorage.setItem('f12WorkoutState', JSON.stringify(appState));
}

// Actualizar info de fase en la UI
function updatePhaseInfo() {
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    
    document.getElementById('current-phase').textContent = currentPhase.name;
    document.getElementById('current-week').textContent = appState.currentWeek;
    document.getElementById('total-weeks').textContent = currentPhase.durationWeeks;
    document.getElementById('phase-sets').textContent = currentPhase.sets;
    document.getElementById('phase-reps').textContent = currentPhase.reps;
    document.getElementById('phase-rest').textContent = `${currentPhase.rest}s`;
    document.getElementById('phase-tempo').textContent = currentPhase.tempo;
}

// Mostrar entrenamiento de hoy
function showTodayWorkout() {
    // Determinar qué día de la semana es hoy
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = domingo, 1 = lunes, ...
    const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Ajustar para que 0 = lunes
    
    const todaySchedule = workoutProgram.weeklySchedule[adjustedDay];
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    
    // Si es día de descanso
    if (todaySchedule.type === 'Descanso') {
        mainContent.innerHTML = `
            <div class="card">
                <h2>Hoy es día de descanso</h2>
                <p>Aprovecha para recuperarte y descansar. La recuperación es fundamental para el progreso.</p>
                <p>Próximo entrenamiento: ${getNextTrainingDay()}</p>
            </div>
        `;
        return;
    }
    
    // Si es día de entrenamiento de resistencia
    if (todaySchedule.type === 'Resistencia') {
        let exercisesHTML = '';
        
        currentPhase.exercises.forEach((exercise, index) => {
            // Buscar el último registro de este ejercicio
            const lastRecord = appState.exerciseHistory[exercise] || null;
            
            // Comprobar si el ejercicio ya está completado hoy
            const isCompleted = appState.completedExercises.includes(exercise);
            
            exercisesHTML += `
                <div class="exercise-item ${isCompleted ? 'completed-exercise' : ''}" data-exercise="${exercise}">
                    <div class="exercise-title">${index + 1}. ${exercise}</div>
                    
                    <div class="exercise-details">
                        <div class="exercise-column">
                            <div class="column-title">Recomendado</div>
                            <div>${currentPhase.sets} series</div>
                            <div>${currentPhase.reps} reps</div>
                        </div>
                        
                        <div class="exercise-column">
                            <div class="column-title">Último</div>
                            <div>${lastRecord ? formatSets(lastRecord.sets) : 'N/A'}</div>
                            <div>${lastRecord ? formatDate(lastRecord.date) : ''}</div>
                        </div>
                        
                        <div class="exercise-column">
                            <div class="column-title">Hoy</div>
                            <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'} btn-track" onclick="trackExercise('${exercise}')">
                                ${isCompleted ? '✓ Completado' : 'Registrar'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        mainContent.innerHTML = `
            <div class="workout-header">
                <h2>Entrenamiento de ${todaySchedule.day}</h2>
                <p>${todaySchedule.type}</p>
                <p class="date-info">Fecha: ${formatDateFull(new Date())}</p>
            </div>
            
            <div class="exercises-container">
                ${exercisesHTML}
            </div>
        `;
    } 
    // Si es día de acondicionamiento
    else if (todaySchedule.type === 'Acondicionamiento') {
        mainContent.innerHTML = `
            <div class="card">
                <h2>Entrenamiento de ${todaySchedule.day}</h2>
                <p>Hoy toca entrenamiento de acondicionamiento.</p>
                <p>Completa el circuito HIIT según las indicaciones del programa F12.</p>
                <button class="btn btn-primary" onclick="showHIITWorkout()">Ver entrenamiento HIIT</button>
            </div>
        `;
    }
}

// Función para dar formato a las series
function formatSets(sets) {
    if (!sets || sets.length === 0) return 'N/A';
    
    return sets.map(set => `${set.reps}×${set.weight}kg`).join(' | ');
}

// Función para dar formato a la fecha (corta)
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

// Función para dar formato a la fecha (completa)
function formatDateFull(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

// Obtener próximo día de entrenamiento
function getNextTrainingDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = domingo, 1 = lunes, ...
    
    // Buscar el próximo día de entrenamiento
    for (let i = 1; i <= 7; i++) {
        const nextDay = (dayOfWeek + i) % 7;
        const adjustedDay = nextDay === 0 ? 6 : nextDay - 1; // Ajustar para que 0 = lunes
        
        if (workoutProgram.weeklySchedule[adjustedDay].type !== 'Descanso') {
            return workoutProgram.weeklySchedule[adjustedDay].day;
        }
    }
    
    return 'Lunes'; // Por defecto
}

// Mostrar lista de ejercicios
function showExercisesList() {
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    
    let exercisesHTML = '';
    currentPhase.exercises.forEach((exercise, index) => {
        exercisesHTML += `
            <div class="exercise-item">
                <div class="exercise-title">${index + 1}. ${exercise}</div>
                <button class="btn btn-secondary btn-sm" onclick="showAlternatives('${exercise}')">Ver alternativas</button>
            </div>
        `;
    });
    
    mainContent.innerHTML = `
        <div class="card">
            <h2>Ejercicios de la fase actual</h2>
            <div class="exercises-list">
                ${exercisesHTML}
            </div>
            
            <button class="btn btn-primary" onclick="showTodayWorkout()">Volver al entrenamiento</button>
        </div>
    `;
}

// Mostrar alternativas para una máquina ocupada
function showAlternatives(exercise) {
    const alternatives = workoutProgram.alternatives[exercise] || [];
    
    if (alternatives.length === 0) {
        alert('No hay alternativas disponibles para este ejercicio');
        return;
    }
    
    let alternativesHTML = '';
    alternatives.forEach(alt => {
        alternativesHTML += `
            <div class="exercise-item">
                <div class="exercise-title">${alt.name}</div>
                <p>${alt.instructions}</p>
            </div>
        `;
    });
    
    mainContent.innerHTML = `
        <div class="card">
            <h2>Alternativas para: ${exercise}</h2>
            <p>Si la máquina está ocupada, prueba estos ejercicios:</p>
            <div class="alternatives-list">
                ${alternativesHTML}
            </div>
            <button class="btn btn-secondary" onclick="showExercisesList()">Volver a ejercicios</button>
        </div>
    `;
}

// Mostrar entrenamiento HIIT
function showHIITWorkout() {
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    
    mainContent.innerHTML = `
        <div class="card">
            <h2>Entrenamiento HIIT</h2>
            <p>Fase: ${currentPhase.name}</p>
            <p>Completa los siguientes ejercicios:</p>
            <ul class="hiit-exercises">
                <li>Sprints en cinta (20s trabajo, 10s descanso) x 8</li>
                <li>Swing con Kettlebell (20s trabajo, 10s descanso) x 8</li>
                <li>Mountain Climbers (20s trabajo, 10s descanso) x 8</li>
                <li>Saltos de Sentadilla (20s trabajo, 10s descanso) x 8</li>
                <li>Flexiones (20s trabajo, 10s descanso) x 8</li>
            </ul>
            <p>Descansa 2 minutos entre rondas</p>
            <p>Completa 2-3 rondas</p>
            <button class="btn btn-primary" onclick="startHIITTimer()">Iniciar Temporizador</button>
            <button class="btn btn-secondary" onclick="showTodayWorkout()">Volver al entrenamiento</button>
        </div>
    `;
}

// Mostrar progreso
function showProgress() {
    // Calcular semanas desde el inicio
    const startDate = new Date(appState.startDate);
    const today = new Date();
    const weeksPassed = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
    
    // Calcular progreso total del programa
    const totalWeeks = workoutProgram.phases.reduce((total, phase) => total + phase.durationWeeks, 0);
    const progressPercent = Math.min(100, Math.round((weeksPassed / totalWeeks) * 100));
    
    // Preparar historial de entrenamientos
    let historyHTML = '<h3>Últimos entrenamientos</h3>';
    
    // Crear un mapa de ejercicios y sus fechas más recientes
    const exerciseDates = {};
    
    for (const exercise in appState.exerciseHistory) {
        const record = appState.exerciseHistory[exercise];
        const date = new Date(record.date);
        
        // Agrupar por fecha
        const dateKey = date.toISOString().split('T')[0];
        if (!exerciseDates[dateKey]) {
            exerciseDates[dateKey] = [];
        }
        
        exerciseDates[dateKey].push({
            name: exercise,
            sets: record.sets
        });
    }
    
    // Ordenar fechas de más reciente a más antigua
    const sortedDates = Object.keys(exerciseDates).sort((a, b) => new Date(b) - new Date(a));
    
    // Mostrar las últimas 5 fechas
    const lastDates = sortedDates.slice(0, 5);
    
    if (lastDates.length > 0) {
        lastDates.forEach(dateKey => {
            const date = new Date(dateKey);
            historyHTML += `
                <div class="history-entry">
                    <div class="history-date">${formatDateFull(date)}</div>
                    <div class="history-exercises">
                        <ul>
                            ${exerciseDates[dateKey].map(ex => `
                                <li>
                                    <span class="history-exercise-name">${ex.name}</span>: 
                                    <span class="history-sets">${formatSets(ex.sets)}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
    } else {
        historyHTML += '<p>No hay entrenamientos registrados aún.</p>';
    }
    
    mainContent.innerHTML = `
        <div class="card">
            <h2>Mi Progreso</h2>
            <p>Inicio del programa: ${formatDate(appState.startDate)}</p>
            <p>Semanas completadas: ${weeksPassed}</p>
            <p>Fase actual: ${workoutProgram.phases[appState.currentPhase].name}</p>
            <p>Semana actual: ${appState.currentWeek} de ${workoutProgram.phases[appState.currentPhase].durationWeeks}</p>
            
            <div class="progress-bar-container">
                <div class="progress-label">Progreso total: ${progressPercent}%</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            
            <div class="history-container">
                ${historyHTML}
            </div>
            
            <button class="btn btn-danger" onclick="confirmReset()">Reiniciar Programa</button>
            <button class="btn btn-primary" onclick="showTodayWorkout()">Volver al entrenamiento</button>
        </div>
    `;
}

// Función para registrar un ejercicio - SOLO VOZ
function trackExercise(exercise) {
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    
    // Obtener datos anteriores si existen
    const previousData = appState.exerciseHistory[exercise] || null;
    
    // Si el ejercicio ya está completado, mostrar un mensaje
    if (appState.completedExercises.includes(exercise)) {
        const confirmReopen = confirm('Este ejercicio ya está completado hoy. ¿Quieres editarlo de nuevo?');
        if (!confirmReopen) {
            return;
        }
    }
    
    mainContent.innerHTML = `
        <div class="card">
            <h2>Registrar: ${exercise}</h2>
            
            <div class="exercise-info">
                <p><strong>Series recomendadas:</strong> ${currentPhase.sets}</p>
                <p><strong>Repeticiones:</strong> ${currentPhase.reps}</p>
                <p><strong>Descanso:</strong> ${currentPhase.rest}s</p>
            </div>
            
            ${previousData ? `
                <div class="previous-data">
                    <h3>Último registro (${formatDate(previousData.date)})</h3>
                    <p><strong>Series:</strong> ${formatSets(previousData.sets)}</p>
                </div>
            ` : ''}
            
            <div id="sets-container">
                <!-- Aquí se agregarán los sets dinámicamente -->
            </div>
            
            <div class="voice-instructions">
                <p>Di en voz alta las repeticiones y el peso. Por ejemplo:</p>
                <ul>
                    <li>"12 repeticiones con 20 kilos"</li>
                    <li>"8 reps 15 kg"</li>
                    <li>"10 repeticiones" (para ejercicios sin peso)</li>
                </ul>
            </div>
            
            <button id="voice-button" class="btn btn-voice" onclick="toggleVoiceRecognition()">
                🎤 Iniciar reconocimiento de voz
            </button>
            
            <div class="actions">
                <button class="btn btn-primary" onclick="saveExercise('${exercise}')">Guardar y Continuar</button>
                <button class="btn btn-secondary" onclick="showTodayWorkout()">Cancelar</button>
                <button class="machine-busy-button" onclick="showAlternatives('${exercise}')">
                    ⚠️ Máquina Ocupada
                </button>
            </div>
        </div>
        
        <div id="rest-timer" class="rest-timer hidden">
            <h3>Tiempo de Descanso</h3>
            <div class="timer-display">00:${currentPhase.rest}</div>
            <div class="timer-controls">
                <button id="btn-start-timer" class="btn btn-primary" onclick="startTimer(${currentPhase.rest})">Iniciar</button>
                <button id="btn-stop-timer" class="btn btn-danger" onclick="stopTimer()">Detener</button>
            </div>
        </div>
    `;
    
    // Comprobar si hay sets guardados para este ejercicio en la sesión actual
    if (appState.todayExercises[exercise] && appState.todayExercises[exercise].length > 0) {
        appState.todayExercises[exercise].forEach(set => {
            addSetToUI(set.reps, set.weight);
        });
    } else {
        // Inicializar array vacío para este ejercicio si no existe
        appState.todayExercises[exercise] = [];
    }
}

// Variables para el temporizador
let timerInterval = null;
let remainingTime = 0;

// Iniciar temporizador
function startTimer(duration) {
    stopTimer(); // Detener temporizador anterior si existe
    
    // Mostrar el temporizador
    const timerElement = document.getElementById('rest-timer');
    if (timerElement) {
        timerElement.classList.remove('hidden');
    }
    
    remainingTime = duration;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        remainingTime--;
        
        if (remainingTime <= 0) {
            stopTimer();
            // Reproducir sonido o vibración
            if ('vibrate' in navigator) {
                navigator.vibrate([200, 100, 200]);
            }
            alert('¡Tiempo de descanso finalizado!');
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}

// Detener temporizador
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Actualizar display del temporizador
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const timerDisplay = document.querySelector('.timer-display');
    
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Añadir un set al ejercicio actual
function addSet(exercise, reps, weight) {
    // Añadir a la UI
    addSetToUI(reps, weight);
    
    // Guardar en el estado temporal
    appState.todayExercises[exercise].push({
        reps,
        weight,
        timestamp: new Date().toISOString()
    });
    
    // Iniciar temporizador de descanso
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    startTimer(currentPhase.rest);
}

// Añadir un set a la UI
function addSetToUI(reps, weight) {
    const setsContainer = document.getElementById('sets-container');
    if (!setsContainer) return;
    
    const setCount = setsContainer.children.length + 1;
    
    const setElement = document.createElement('div');
    setElement.className = 'set-item';
    setElement.innerHTML = `
        <div class="set-info">
            <span class="set-number">Set ${setCount}:</span>
            <span class="set-data">${reps} reps × ${weight} kg</span>
        </div>
        <button class="btn-remove" onclick="removeSet(this, '${exercise}', ${setCount-1})">✕</button>
    `;
    
    setsContainer.appendChild(setElement);
}

// Eliminar un set
function removeSet(element, exercise, index) {
    // Eliminar de la UI
    element.parentElement.remove();
    
    // Eliminar del estado
    if (appState.todayExercises[exercise] && appState.todayExercises[exercise].length > index) {
        appState.todayExercises[exercise].splice(index, 1);
    }
    
    // Renumerar los sets restantes en la UI
    const setsContainer = document.getElementById('sets-container');
    if (setsContainer) {
        const sets = setsContainer.querySelectorAll('.set-item');
        sets.forEach((set, i) => {
            const setNumber = set.querySelector('.set-number');
            if (setNumber) {
                setNumber.textContent = `Set ${i+1}:`;
            }
        });
    }
}

// Guardar ejercicio y pasar al siguiente
function saveExercise(exercise) {
    const setsContainer = document.getElementById('sets-container');
    
    if (!setsContainer || setsContainer.children.length === 0) {
        alert('Debes añadir al menos un set');
        return;
    }
    
    // Guardar en el historial
    appState.exerciseHistory[exercise] = {
        sets: appState.todayExercises[exercise],
        date: new Date().toISOString()
    };
    
    // Marcar como completado
    if (!appState.completedExercises.includes(exercise)) {
        appState.completedExercises.push(exercise);
    }
    
    // Guardar estado
    saveAppState();
    
    // Volver a la pantalla de entrenamiento
    showTodayWorkout();
    
    // Mostrar mensaje de éxito
    alert('Ejercicio guardado correctamente. ¡Buen trabajo!');
}

// Confirmar reinicio del programa
function confirmReset() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el programa? Se perderán todos tus datos de progreso.')) {
        // Mantener el permiso de micrófono
        const micPermission = appState.micPermissionGranted;
        
        // Reiniciar el estado de la aplicación
        appState = {
            currentPhase: 0,
            currentWeek: 1,
            startDate: new Date().toISOString(),
            exerciseHistory: {},
            todayExercises: {},
            currentWorkoutDate: new Date().toISOString().split('T')[0],
            completedExercises: [],
            micPermissionGranted: micPermission // Conservar el estado del permiso
        };
        
        // Guardar el nuevo estado
        saveAppState();
        
        // Actualizar la UI
        updatePhaseInfo();
        showTodayWorkout();
        
        alert('Programa reiniciado correctamente');
    }
}

// Iniciar temporizador HIIT
function startHIITTimer() {
    const workTime = 20; // segundos
    const restTime = 10; // segundos
    let currentRound = 1;
    const totalRounds = 8;
    let isWorkPeriod = true;
    
    mainContent.innerHTML = `
        <div class="card hiit-timer">
            <h2>Temporizador HIIT</h2>
            <div id="hiit-status">Preparados...</div>
            <div id="hiit-timer" class="timer-display">00:${workTime}</div>
            <div id="hiit-round">Ronda: 1 / ${totalRounds}</div>
            <div id="hiit-phase">Trabajo</div>
            <button id="btn-stop-hiit" class="btn btn-danger" onclick="showHIITWorkout()">Detener</button>
        </div>
    `;
    
    // Cuenta regresiva inicial de 3 segundos
    let countdown = 3;
    const statusElement = document.getElementById('hiit-status');
    const timerElement = document.getElementById('hiit-timer');
    const roundElement = document.getElementById('hiit-round');
    const phaseElement = document.getElementById('hiit-phase');
    
    statusElement.textContent = `Comenzando en: ${countdown}`;
    
    const countdownInterval = setInterval(() => {
        countdown--;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            statusElement.textContent = '¡Comienza!';
            startHIITRounds();
        } else {
            statusElement.textContent = `Comenzando en: ${countdown}`;
        }
    }, 1000);
    
    function startHIITRounds() {
        let timeLeft = workTime;
        updateTimerUI();
        
        timerInterval = setInterval(() => {
            timeLeft--;
            
            if (timeLeft <= 0) {
                // Cambiar entre trabajo y descanso
                isWorkPeriod = !isWorkPeriod;
                
                // Si termina un período de descanso, avanzar a la siguiente ronda
                if (isWorkPeriod) {
                    currentRound++;
                    roundElement.textContent = `Ronda: ${currentRound} / ${totalRounds}`;
                }
                
                // Si completamos todas las rondas, terminar
                if (currentRound > totalRounds) {
                    clearInterval(timerInterval);
                    statusElement.textContent = '¡Completado!';
                    timerElement.textContent = '00:00';
                    phaseElement.textContent = 'Descanso';
                    
                    setTimeout(() => {
                        alert('¡Has completado tu entrenamiento HIIT!');
                        showHIITWorkout();
                    }, 1000);
                    
                    return;
                }
                
                // Configurar tiempo para el siguiente período
                timeLeft = isWorkPeriod ? workTime : restTime;
                phaseElement.textContent = isWorkPeriod ? 'Trabajo' : 'Descanso';
                
                // Sonido o vibración aquí
                if ('vibrate' in navigator) {
                    navigator.vibrate([200, 100, 200]);
                }
                
                if (isWorkPeriod) {
                    statusElement.textContent = '¡Trabaja!';
                } else {
                    statusElement.textContent = '¡Descansa!';
                }
            }
            
            updateTimerUI();
            
        }, 1000);
        
        function updateTimerUI() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
}

// Variables para reconocimiento de voz
let recognition = null;
let isListening = false;

// Inicializar reconocimiento de voz
function initSpeechRecognition() {
    // Verificar si ya existe una instancia
    if (recognition) return true;
    
    // Comprobar si el navegador soporta reconocimiento de voz
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Tu navegador no soporta reconocimiento de voz. Intenta con Chrome o Edge.');
        return false;
    }
    
    // Crear objeto de reconocimiento
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    // Configurar para español y resultados continuos
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Evento al detectar resultados
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Reconocido:', transcript);
        
        // Mostrar feedback visual
        showVoiceFeedback(transcript);
        
        // Procesar el texto reconocido
        processVoiceCommand(transcript);
    };
    
    // Manejo de errores
    recognition.onerror = function(event) {
        console.error('Error de reconocimiento:', event.error);
        stopListening();
    };
    
    // Evento al finalizar
    recognition.onend = function() {
        stopListening();
    };
    
    return true;
}

// Iniciar escucha
function startListening() {
    // No inicializar nuevamente si ya tenemos permiso y está configurado
    if (!recognition && !initSpeechRecognition()) {
        return;
    }
    
    try {
        // Si no tenemos permiso guardado, solicitarlo primero
        if (!appState.micPermissionGranted) {
            requestMicrophoneAccess().then(granted => {
                if (granted) {
                    startListening(); // Intentar nuevamente después del permiso
                }
            });
            return;
        }
        
        recognition.start();
        isListening = true;
        
        // Actualizar UI para mostrar que está escuchando
        const voiceButton = document.getElementById('voice-button');
        if (voiceButton) {
            voiceButton.textContent = '🎤 Escuchando...';
            voiceButton.classList.add('listening');
        }
    } catch (error) {
        console.error('Error al iniciar reconocimiento:', error);
    }
}

// Detener escucha
function stopListening() {
    if (!recognition) return;
    
    try {
        recognition.stop();
    } catch (error) {
        console.error('Error al detener reconocimiento:', error);
    }
    
    isListening = false;
    
    // Actualizar UI
    const voiceButton = document.getElementById('voice-button');
    if (voiceButton) {
        voiceButton.textContent = '🎤 Iniciar reconocimiento de voz';
        voiceButton.classList.remove('listening');
    }
}

// Alternar escucha
function toggleVoiceRecognition() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

// Mostrar feedback visual de reconocimiento
function showVoiceFeedback(text) {
    // Crear elemento de feedback
    const feedback = document.createElement('div');
    feedback.className = 'voice-feedback';
    feedback.textContent = text;
    
    // Añadir a la página
    document.body.appendChild(feedback);
    
    // Eliminar después de la animación
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// Procesar comando de voz
function processVoiceCommand(transcript) {
    // Buscar números en el texto
    const numbers = transcript.match(/\d+/g);
    
    if (!numbers || numbers.length === 0) {
        alert('No se detectaron números. Intenta de nuevo.');
        return;
    }
    
    let reps = null;
    let weight = null;
    
    // Primera estrategia: buscar patrones específicos
    if (transcript.includes('repeticiones') || transcript.includes('reps')) {
        // Buscar número antes de "repeticiones" o "reps"
        const repsMatch = transcript.match(/(\d+)(?:\s+)(?:repeticiones|repetición|reps|rep)/);
        if (repsMatch) reps = repsMatch[1];
        
        // Buscar número antes de "kilos" o "kg"
        const weightMatch = transcript.match(/(\d+)(?:\s+)(?:kilos|kilo|kg)/);
        if (weightMatch) weight = weightMatch[1];
    } 
    
    // Segunda estrategia: asumir primer número es repeticiones, segundo es peso
    if (!reps && numbers.length >= 1) {
        reps = numbers[0];
    }
    
    if (!weight && numbers.length >= 2) {
        weight = numbers[1];
    }
    
    // Si no se especificó un peso, usar 0
    if (!weight) {
        weight = '0';
    }
    
    // Si tenemos al menos repeticiones, añadir el set
    if (reps) {
        // Recuperar el ejercicio actual de algún atributo data en la UI
        const exerciseElement = document.querySelector('.card h2');
        if (exerciseElement) {
            const exerciseName = exerciseElement.textContent.replace('Registrar: ', '');
            addSet(exerciseName, reps, weight);
        }
    }
}

// Añadir estilos para el diálogo de permiso
document.head.insertAdjacentHTML('beforeend', `
<style>
.permission-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.permission-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    text-align: center;
}

.completed-exercise {
    background-color: #e8f5e9 !important;
    border-left: 4px solid #4CAF50;
}

.history-container {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}

.history-entry {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.history-date {
    font-weight: bold;
    margin-bottom: 5px;
}

.history-exercise-name {
    font-weight: bold;
}

.date-info {
    font-style: italic;
    color: #666;
    margin-top: 5px;
}

.voice-instructions {
    background-color: #e8f5e9;
    border-radius: 8px;
    padding: 12px;
    margin: 15px 0;
    border-left: 4px solid #4CAF50;
}

.voice-instructions ul {
    margin-top: 8px;
    padding-left: 20px;
}

.voice-instructions li {
    margin-bottom: 5px;
}
</style>
`);

// Configuración PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registrado exitosamente:', registration.scope);
            })
            .catch(error => {
                console.log('Error al registrar ServiceWorker:', error);
            });
    });
}