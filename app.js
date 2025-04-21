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
        'Press de Hombros con Barra': [
            { name: 'Press de Hombros con Mancuernas', instructions: 'Sentado o de pie, sostén una mancuerna en cada mano a la altura de los hombros y presiona hacia arriba.' },
            { name: 'Flexiones de Pica (Pike Push-ups)', instructions: 'Desde posición de plancha alta, levanta las caderas formando una "V" invertida. Baja la cabeza hacia el suelo doblando los codos y empuja hacia arriba.' }
        ],
        'Sentadilla con Barra': [
            { name: 'Sentadilla con Mancuernas (Goblet Squat)', instructions: 'Sujeta una mancuerna verticalmente contra tu pecho. Baja las caderas hacia el suelo manteniendo la espalda recta.' },
            { name: 'Sentadilla Búlgara con Mancuernas', instructions: 'De pie frente a un banco, coloca el pie trasero sobre él. Sostén una mancuerna en cada mano. Baja la rodilla trasera hacia el suelo, manteniendo el torso recto, y luego sube.' }
        ],
        'Press de Pecho con Mancuernas': [
             { name: 'Flexiones (Push-ups)', instructions: 'Desde posición de plancha, baja el pecho hacia el suelo doblando los codos, manteniendo el cuerpo recto.' },
             { name: 'Aperturas con Mancuernas en el suelo', instructions: 'Acuéstate en el suelo con una mancuerna en cada mano. Abre los brazos hacia los lados con los codos ligeramente doblados y luego ciérralos sobre el pecho.' }
        ],
        'Remo Inclinado con Barra': [
            { name: 'Remo con Mancuerna a una mano', instructions: 'Apoya la rodilla y la mano de un lado en un banco. Tira de una mancuerna hacia arriba con la otra mano, llevando el codo cerca del cuerpo.' },
            { name: 'Remo Invertido (Peso Corporal)', instructions: 'Usa una barra baja o el borde resistente de una mesa. Cuelga debajo y tira del pecho hacia la barra, manteniendo el cuerpo recto.' }
        ],
        'Peso Muerto con Mancuernas': [
            { name: 'Peso Muerto Rumano con Mancuernas', instructions: 'Sostén una mancuerna en cada mano. Inclínate hacia adelante desde las caderas con la espalda recta y las piernas casi extendidas, bajando las mancuernas hacia los pies. Regresa a la posición inicial.' },
            { name: 'Puente de Glúteos (Peso Corporal)', instructions: 'Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo. Levanta las caderas apretando los glúteos.' }
        ],
        'Estocada con Mancuernas': [
            { name: 'Estocada con Peso Propio', instructions: 'Da un paso largo hacia adelante con una pierna y baja las caderas hasta que ambas rodillas estén dobladas a unos 90 grados. Empuja con el pie delantero para volver a la posición inicial.' },
            { name: 'Zancada Caminando con Mancuernas', instructions: 'Sostén una mancuerna en cada mano. Da un paso hacia adelante en una estocada, luego empuja con la pierna trasera para avanzar a la siguiente estocada, caminando hacia adelante.' }
        ],
        'Curl de Bíceps con Barra': [
            { name: 'Curl de Bíceps con Mancuernas (Alterno)', instructions: 'De pie, sostén una mancuerna en cada mano. Alterna el levantamiento de una mancuerna hacia el hombro, girando la palma hacia arriba.' },
            { name: 'Curl de Bíceps Martillo con Mancuernas', instructions: 'De pie, sostén una mancuerna en cada mano con las palmas mirándose entre sí. Levanta las mancuernas hacia los hombros manteniendo las palmas enfrentadas.' }
        ],
        'Fondos en Banco': [
            { name: 'Fondos entre Bancos (Peso Corporal)', instructions: 'Apoya las manos en el borde de un banco detrás de ti, con las piernas extendidas y los talones en el suelo o en otro banco. Baja el cuerpo doblando los codos y luego empuja hacia arriba.' },
            { name: 'Flexiones Cerradas (Close-Grip Push-ups)', instructions: 'Realiza flexiones con las manos más juntas que el ancho de los hombros para enfatizar los tríceps.' }
        ],
        'Swing con Kettlebell': [
            { name: 'Swing con Mancuerna', instructions: 'Sostén una mancuerna por un extremo con ambas manos. Inclínate desde las caderas, balancea la mancuerna entre las piernas y luego impúlsala hacia adelante y arriba con un movimiento explosivo de cadera.' },
            { name: 'Peso Muerto Explosivo con Mancuernas', instructions: 'Realiza un peso muerto con mancuernas, concentrándote en una extensión rápida y potente de las caderas al finalizar el movimiento.'}
        ],
        'Crunch con Balón Medicinal': [
            { name: 'Crunch con Peso (Mancuerna o Disco)', instructions: 'Acuéstate boca arriba con las rodillas dobladas. Sostén una mancuerna o disco contra tu pecho. Contrae los abdominales para levantar los hombros del suelo.' },
            { name: 'Elevación de Piernas (Peso Corporal)', instructions: 'Acuéstate boca arriba y levanta las piernas rectas hacia el techo, manteniendo la zona lumbar pegada al suelo. Bájalas lentamente.' }
        ],
        'Clean con Barra': [
            { name: 'High Pull con Mancuernas', instructions: 'Sostén una mancuerna en cada mano. Inclínate ligeramente desde las caderas y rodillas. Levanta explosivamente las mancuernas hacia arriba, llevando los codos en alto.' },
            { name: 'Sentadilla con Salto (Peso Corporal)', instructions: 'Realiza una sentadilla normal y luego salta explosivamente hacia arriba. Aterriza suavemente de vuelta en una sentadilla.'}
        ],
        'Sentadilla Frontal con Barra': [
            { name: 'Sentadilla con Mancuernas (Goblet Squat)', instructions: 'Sujeta una mancuerna verticalmente contra tu pecho. Realiza una sentadilla bajando las caderas hacia el suelo, manteniendo la espalda recta y el torso erguido.' },
            { name: 'Sentadilla Zercher (Peso Corporal o con Peso Improvado)', instructions: 'Sostén un peso (o tus manos entrelazadas) en la curva de tus codos, cerca del cuerpo. Realiza una sentadilla manteniendo el torso lo más vertical posible.' }
        ],
        'Press de Pecho Inclinado con Mancuernas': [
            { name: 'Flexiones Inclinadas (Manos Elevadas)', instructions: 'Realiza flexiones con las manos apoyadas en una superficie elevada (banco, silla) para enfocar la parte inferior del pecho y hombros.' },
            { name: 'Aperturas Inclinadas con Mancuernas', instructions: 'Acuéstate en un banco inclinado. Sostén una mancuerna en cada mano con los codos ligeramente doblados. Baja las mancuernas hacia los lados en un arco y luego levántalas contrayendo el pecho.' }
        ],
        'Dominadas/Jalón al Pecho': [
            { name: 'Remo con Mancuerna a una mano', instructions: 'Apoya la rodilla y la mano de un lado en un banco. Con la otra mano, tira de una mancuerna hacia arriba, llevando el codo cerca del cuerpo.' },
            { name: 'Remo Invertido (Peso Corporal)', instructions: 'Usa una barra baja o el borde resistente de una mesa. Cuelga debajo y tira del pecho hacia la barra, manteniendo el cuerpo recto.' }
        ],
        'Peso Muerto con Barra': [
            { name: 'Peso Muerto con Mancuernas', instructions: 'Sostén una mancuerna en cada mano. Baja las mancuernas hacia el suelo doblando las rodillas y manteniendo la espalda recta. Levanta el peso extendiendo las caderas y las rodillas.' },
            { name: 'Puente de Glúteos con Peso (Mancuerna)', instructions: 'Acuéstate boca arriba con las rodillas dobladas. Coloca una mancuerna sobre tus caderas. Levanta las caderas del suelo apretando los glúteos.' }
        ],
        'Estocada con Barra': [
            { name: 'Estocada con Mancuernas', instructions: 'Sostén una mancuerna en cada mano. Da un paso largo hacia adelante y baja las caderas hasta que ambas rodillas estén dobladas a 90 grados. Empuja para volver.' },
            { name: 'Sentadilla Dividida (Split Squat) con Peso Propio', instructions: 'Adopta una postura escalonada (un pie adelante, otro atrás). Baja y sube doblando ambas rodillas, sin mover los pies.' }
        ],
        'Curl de Bíceps con Mancuernas': [
            { name: 'Curl de Bíceps Martillo con Mancuernas', instructions: 'Sostén una mancuerna en cada mano con las palmas mirándose. Levanta las mancuernas hacia los hombros.' },
            { name: 'Curl de Bíceps Concentrado con Mancuerna', instructions: 'Sentado, apoya el codo con la mancuerna en la parte interior de tu muslo y realiza el curl.' }
        ],
        'Flexiones': [
            { name: 'Flexiones con Pies Elevados (Declined Push-ups)', instructions: 'Coloca los pies sobre una superficie elevada (banco, silla) y realiza flexiones para aumentar la dificultad.' },
            { name: 'Press de Pecho con Mancuernas en el suelo', instructions: 'Acuéstate en el suelo con una mancuerna en cada mano y realiza el press de pecho.' }
        ],
        'Swing con Kettlebell a una mano': [
            { name: 'Swing con Mancuerna a una mano', instructions: 'Realiza el movimiento del swing con mancuerna utilizando una sola mancuerna en una mano.' },
            { name: 'Arrancada con Mancuerna (Single-arm Dumbbell Snatch)', instructions: 'Levanta una mancuerna del suelo a una posición por encima de la cabeza en un movimiento fluido y explosivo.'}
        ],
        'Patada con Balón Medicinal': [
            { name: 'Patada de Glúteo con Banda Elástica', instructions: 'A cuatro patas, coloca una banda elástica alrededor de un pie y extiende la pierna hacia atrás y arriba.' },
            { name: 'Patada de Glúteo (Peso Corporal)', instructions: 'A cuatro patas, levanta una pierna hacia atrás y arriba contrayendo el glúteo.'}
        ],
        'Clean y Press con Barra': [
            { name: 'Clean y Press con Mancuernas', instructions: 'Lleva las mancuernas del suelo a los hombros (clean) y luego presiónalas por encima de la cabeza (press).' },
            { name: 'Push Press con Mancuernas', instructions: 'Sostén mancuernas a la altura de los hombros. Usa un impulso de piernas para ayudarte a presionarlas por encima de la cabeza.'}
        ],
        'Peso Muerto Rumano con Barra': [
            { name: 'Peso Muerto Rumano con Mancuernas', instructions: 'Inclínate desde las caderas con la espalda recta y mancuernas por delante de las piernas. Sube apretando glúteos.' },
            { name: 'Buenos Días (Good Mornings) con Peso Corporal', instructions: 'De pie, manos detrás de la cabeza o brazos cruzados. Inclínate hacia adelante desde las caderas con la espalda recta y vuelve a subir.'}
        ],
        'Sentadilla Split con Mancuernas': [
            { name: 'Sentadilla Split con Peso Propio', instructions: 'Adopta una postura escalonada (un pie adelante, otro atrás). Baja y sube doblando ambas rodillas.' },
            { name: 'Sentadilla Búlgara con Peso Propio', instructions: 'De pie frente a un banco, coloca el pie trasero sobre él. Baja la rodilla trasera hacia el suelo y sube, usando solo tu peso corporal.'}
        ],
        'Flexiones de Tríceps': [
            { name: 'Extensiones de Tríceps con Mancuerna (Acostado)', instructions: 'Acuéstate y baja una mancuerna con ambas manos por detrás de la cabeza doblando los codos. Extiende los brazos.' },
            { name: 'Patada de Tríceps con Mancuerna', instructions: 'Inclínate, codo pegado al cuerpo. Extiende el antebrazo hacia atrás con una mancuerna.'}
        ],
        'Swing Alternado con Kettlebell': [
            { name: 'Swing Alternado con Mancuernas', instructions: 'Realiza el swing con mancuerna, cambiando de mano en la parte superior del movimiento.' },
            { name: 'Arrancada Alternada con Mancuerna', instructions: 'Realiza la arrancada con mancuerna, alternando el brazo en cada repetición.'}
        ],
        'Elevación de piernas doble con Balón Medicinal': [
            { name: 'Elevación de Piernas Doble (Peso Corporal)', instructions: 'Acuéstate boca arriba y levanta ambas piernas rectas hacia el techo, manteniendo la zona lumbar pegada al suelo.' },
            { name: 'Elevación de Rodillas Colgado', instructions: 'Cuélgate de una barra y lleva las rodillas hacia el pecho contrayendo los abdominales.'}
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
    micPermissionGranted: false, // Estado del permiso
    // New state property to track the original exercise being replaced by an alternative
    trackingAlternativeFor: null,
    // New state property to store the list of exercises for the current day's workout
    currentDayExercises: []
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
    // updatePhaseInfo(); // This function is no longer needed since the phase info is removed from index.html
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
        // Ensure new properties exist even if loading old state
        if (appState.trackingAlternativeFor === undefined) {
            appState.trackingAlternativeFor = null;
        }
         if (appState.currentDayExercises === undefined) {
            appState.currentDayExercises = [];
        }
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

// Actualizar info de fase en la UI - This function is no longer needed
/*
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
*/

// Mostrar entrenamiento de hoy
function showTodayWorkout() {
    // Clear any pending alternative tracking
    appState.trackingAlternativeFor = null;
    // Determine today's exercise list if not already set for the current day
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = domingo, 1 = lunes, ...
    const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for 0 = lunes

    const todaySchedule = workoutProgram.weeklySchedule[adjustedDay];
    const currentPhase = workoutProgram.phases[appState.currentPhase];

    if (todaySchedule.type === 'Resistencia') {
         // Only update currentDayExercises if it's a resistance training day and it's a new day or list is empty
        if (appState.currentDayExercises.length === 0 || appState.currentWorkoutDate !== new Date().toISOString().split('T')[0]) {
             appState.currentDayExercises = [...currentPhase.exercises]; // Copy the exercises for today
             appState.currentWorkoutDate = new Date().toISOString().split('T')[0]; // Update workout date
        }
    } else {
         appState.currentDayExercises = []; // Clear exercise list for non-resistance days
    }


    saveAppState();


    // If it's a rest day
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

    // If it's a training day (Resistance or Acondicionamiento)
    if (todaySchedule.type === 'Resistencia') {
        let exercisesHTML = '';
        appState.currentDayExercises.forEach((exercise, index) => { // Use currentDayExercises
            // Determine the exercise name to display and check history/completion against
            const displayExerciseName = exercise; // Display the exercise name from the list

            // Find the last record for the original exercise or the alternative if it was used
            const lastRecord = appState.exerciseHistory[displayExerciseName] || null;


            // Check if the exercise (or its alternative) is completed today
            // We need a way to map back from an alternative to the original to check completion status for the day
            // For now, we will just check if the exercise name in the list is completed
            const isCompleted = appState.completedExercises.includes(displayExerciseName);


            exercisesHTML += `
                <div class="exercise-item ${isCompleted ? 'completed-exercise' : ''}" data-exercise="${displayExerciseName}">
                    <div class="exercise-title">${index + 1}. ${displayExerciseName}</div>

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
                            <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'} btn-track" onclick="trackExercise('${displayExerciseName}')">
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
    // If it's acondicionamiento
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
     // Clear any pending alternative tracking
    appState.trackingAlternativeFor = null;
    saveAppState();

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
function showAlternatives(originalExercise) {
    const alternatives = workoutProgram.alternatives[originalExercise] || [];
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
                <button class="btn btn-sm btn-primary" onclick="selectAlternative('${originalExercise}', '${alt.name}')">Seleccionar</button>
            </div>
        `;
    });
    mainContent.innerHTML = `
        <div class="card">
            <h2>Alternativas para: ${originalExercise}</h2>
            <p>Selecciona una alternativa:</p>
            <div class="alternatives-list">
                ${alternativesHTML}
            </div>
            <button class="btn btn-secondary" onclick="trackExercise('${originalExercise}')">Volver al ejercicio principal</button>
             <button class="btn btn-secondary" onclick="showTodayWorkout()">Cancelar y Volver al entrenamiento</button>
        </div>
    `;
}

// Function to select an alternative and start tracking it
function selectAlternative(originalExercise, alternativeExercise) {
    console.log(`Selected alternative: ${alternativeExercise} for ${originalExercise}`);
    // Set the state to remember the original exercise being replaced
    appState.trackingAlternativeFor = originalExercise;
    saveAppState(); // Save the state

    // Navigate to the tracking screen for the selected alternative
    trackExercise(alternativeExercise);
}


// Mostrar entrenamiento HIIT
function showHIITWorkout() {
     // Clear any pending alternative tracking
    appState.trackingAlternativeFor = null;
     appState.currentDayExercises = []; // Clear exercise list for non-resistance days
    saveAppState();


    const currentPhase = workoutProgram.phases[appState.currentPhase];
    mainContent.innerHTML = `
        <div class="card">
            <h2>Entrenamiento HIIT</h2>
            <p>Fase: ${currentPhase.name}</p>
            <p>Completa los siguientes ejercicios:</p>
            <ul class="hiit-exercises">
                <li>Sprints en cinta (20s trabajo, 10s descanso) x 8</li>
                <li>Swing con Kettlebell (20s trabajo, 10s descanso) x 8</li>
                <li>Mountain climbers (20s trabajo, 10s descanso) x 8</li>
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
     // Clear any pending alternative tracking
    appState.trackingAlternativeFor = null;
    saveAppState();

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

// Función para registrar un ejercicio
function trackExercise(exercise) {
    const currentPhase = workoutProgram.phases[appState.currentPhase];
    // Get the list of exercises for today's workout
    const exerciseList = appState.currentDayExercises; // Use the stored list
     // Determine the name of the exercise we're tracking to find its index in the daily list
    const exerciseNameToFindIndex = appState.trackingAlternativeFor || exercise; // If tracking alternative, use original name for index


    const currentExerciseIndex = exerciseList.indexOf(exerciseNameToFindIndex); // Find index in today's list


    // If the exercise is an alternative, find the original exercise to get its recommended sets/reps (optional, might just show alternative name)
    // For simplicity, the recommended sets/reps shown will be for the *primary* exercise from the workout program,
    // even if tracking an alternative. The "Último Registro" will show data for the specific exercise name being tracked.
    const originalExerciseName = appState.trackingAlternativeFor || exercise; // If tracking alternative, use original, otherwise use exercise name


    // Get previous data for the specific exercise name being tracked (could be alternative)
    const previousData = appState.exerciseHistory[exercise] || null;


    // Check if the original exercise (or the exercise if not an alternative) is completed today
    const isCompleted = appState.completedExercises.includes(originalExerciseName);


    // Determine if 'Anterior' and 'Siguiente' buttons should be disabled based on position in today's exercise list
    const isFirstExercise = currentExerciseIndex === 0;
    const isLastExercise = currentExerciseIndex === exerciseList.length - 1;


    mainContent.innerHTML = `
        <div class="card">
            <h2>Registrar: ${exercise}</h2>

            <div class="exercise-columns-container">
                <div class="exercise-column">
                    <div class="column-title">Recomendado</div>
                     <div class="exercise-info">
                        <p><strong>Series:</strong> ${currentPhase.sets}</p>
                        <p><strong>Repeticiones:</strong> ${currentPhase.reps}</p>
                        <p><strong>Descanso:</strong> ${currentPhase.rest}s</p>
                    </div>
                </div>

                <div class="exercise-column">
                    <div class="column-title">Último Registro (${exercise})</div>
                    ${previousData ?
            `<div class="previous-data">
                                <p><strong>Series:</strong> ${formatSets(previousData.sets)}</p>
                                <p><strong>Fecha:</strong> ${formatDate(previousData.date)}</p>
                            </div>`
            : '<p>No hay registros anteriores.</p>'}
                </div>

                <div class="exercise-column">
                     <div class="column-title">Hoy (${exercise})</div>
                     <div id="sets-container" class="today-sets-container">
                        </div>
                </div>
            </div>

             <div class="navigation-buttons">
                <button class="btn btn-secondary" onclick="goToPreviousExercise('${exercise}')" ${isFirstExercise ? 'disabled' : ''}>Anterior</button>
                <button class="btn btn-secondary" onclick="goToNextExercise('${exercise}')" ${isLastExercise ? 'disabled' : ''}>Siguiente</button>
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

// Function to navigate to the next exercise in the current day's list
function goToNextExercise(currentExerciseName) {
    const exerciseList = appState.currentDayExercises; // Use the stored list for today
     // Determine the name of the exercise we're tracking to find its index in the daily list
    const exerciseNameToFindIndex = appState.trackingAlternativeFor || currentExerciseName; // If tracking alternative, use original name for index


    const currentIndex = exerciseList.indexOf(exerciseNameToFindIndex); // Find index in today's list


    if (currentIndex !== -1 && currentIndex < exerciseList.length - 1) {
        const nextExercise = exerciseList[currentIndex + 1];
        // When navigating, if we were tracking an alternative, clear that state
        appState.trackingAlternativeFor = null; // Assume navigating away means done with alternative for now
        saveAppState();
        trackExercise(nextExercise); // Navigate to the next exercise's tracking screen
    } else {
        // Optional: alert or indicate that this is the last exercise
         alert("Este es el último ejercicio de la lista de hoy.");
    }
}

// Function to navigate to the previous exercise in the current day's list
function goToPreviousExercise(currentExerciseName) {
    const exerciseList = appState.currentDayExercises; // Use the stored list for today
     // Determine the name of the exercise we're tracking to find its index in the daily list
    const exerciseNameToFindIndex = appState.trackingAlternativeFor || currentExerciseName; // If tracking alternative, use original name for index


    const currentIndex = exerciseList.indexOf(exerciseNameToFindIndex); // Find index in today's list


    if (currentIndex > 0) { // Check if not the first exercise
        const previousExercise = exerciseList[currentIndex - 1];
         // When navigating, if we were tracking an alternative, clear that state
        appState.trackingAlternativeFor = null; // Assume navigating away means done with alternative for now
        saveAppState();
        trackExercise(previousExercise); // Navigate to the previous exercise's tracking screen
    } else {
        // Optional: alert or indicate that this is the first exercise
         alert("Este es el primer ejercicio de la lista de hoy.");
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
     // Ocultar el temporizador cuando se detiene manualmente o tiempo termina
    const timerElement = document.getElementById('rest-timer');
    if (timerElement) {
        timerElement.classList.add('hidden');
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
    // Pass exercise name and set index for removeSet function
    const exerciseElement = document.querySelector('.card h2');
    // Get the exercise name from the H2, which correctly shows the primary or alternative name being tracked
    const exerciseName = exerciseElement ? exerciseElement.textContent.replace('Registrar: ', '') : null;


    if (!exerciseName) {
        console.error("Could not determine exercise name for adding set to UI.");
        return;
    }

    setElement.innerHTML = `
        <div class="set-info">
            <span class="set-number">Set ${setCount}:</span>
            <span class="set-data">${reps} reps × ${weight} kg</span>
        </div>
        <button class="btn-remove" onclick="removeSet(this, '${exerciseName}', ${setCount - 1})">✕</button>
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
function saveExercise(exercise) { // 'exercise' here is the name of the exercise currently being tracked (primary or alternative)
    const setsContainer = document.getElementById('sets-container');
    if (!setsContainer || setsContainer.children.length === 0) {
        alert('Debes añadir al menos un set');
        return;
    }

    // Determine which exercise name to use for saving in history and marking as completed
    // If we were tracking an alternative, save under the alternative's name in history
    // but mark the original exercise in the daily list as completed.
    const exerciseToSaveHistoryUnder = exercise; // Save history under the specific name tracked (alternative or primary)
    const exerciseToMarkCompleted = appState.trackingAlternativeFor || exercise; // Mark the original exercise in the program list as completed


    // Save in history under the name of the exercise being tracked (could be alternative)
    appState.exerciseHistory[exerciseToSaveHistoryUnder] = {
        sets: appState.todayExercises[exercise], // Save the sets recorded for the exercise name currently being tracked
        date: new Date().toISOString()
    };

    // Mark the original exercise (or the tracked one if no alternative) in the daily list as completed
    if (!appState.completedExercises.includes(exerciseToMarkCompleted)) {
        appState.completedExercises.push(exerciseToMarkCompleted);
    }

    // Clear todayExercises for the exercise that was just saved/completed
    delete appState.todayExercises[exercise]; // Clear temporary data for the exercise name that was tracked


    // Clear the alternative tracking state after saving
    appState.trackingAlternativeFor = null;


    // Guardar estado
    saveAppState();
    // Mostrar mensaje de éxito (opcional, podrías quitarlo para una transición más fluida)
    // alert('Ejercicio guardado correctamente.');

    // --- Lógica para pasar al siguiente exercise in the current day's list ---
    const exerciseList = appState.currentDayExercises; // Use the stored list for today
    // Find the index of the *original* exercise that was just completed in the daily list
    const currentExerciseIndex = exerciseList.indexOf(exerciseToMarkCompleted);


    if (currentExerciseIndex !== -1 && currentExerciseIndex < exerciseList.length - 1) {
        // Si hay un siguiente ejercicio en la lista de hoy
        const nextExercise = exerciseList[currentExerciseIndex + 1];
        // No need to clear todayExercises here, as it's cleared above for the saved exercise

        trackExercise(nextExercise); // Show the screen for the next exercise in today's list
    } else {
        // Si no hay más ejercicios en la lista de hoy
        appState.todayExercises = {}; // Clear any remaining temporary data just in case
        saveAppState(); // Save the state
        showTodayWorkout(); // Return to the main daily workout view
        alert('¡Entrenamiento completado!'); // Message for end of workout
    }
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
            micPermissionGranted: micPermission, // Conservar el estado del permiso
            trackingAlternativeFor: null,
            currentDayExercises: []
        };
        // Guardar el nuevo estado
        saveAppState();
        // Actualizar la UI
        // updatePhaseInfo(); // This function is no longer needed
        showTodayWorkout();

        alert('Programa reiniciado correctamente');
    }
}

// Iniciar temporizador HIIT
function startHIITTimer() {
     // Clear any pending alternative tracking
    appState.trackingAlternativeFor = null;
     appState.currentDayExercises = []; // Clear exercise list for non-resistance days
    saveAppState();

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
            <div id="hiit-round">Ronda: ${currentRound} / ${totalRounds}</div>
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

// Procesar comando de voz - IMPROVED NUMBER DETECTION
function processVoiceCommand(transcript) {
    const numbers = transcript.match(/\d+/g); // Attempt to find ALL numbers

    let reps = null;
    let weight = null;

    if (numbers && numbers.length > 0) { // Check IF any numbers were found
        // Now apply the assignment logic based on the found numbers

        // First strategy: look for specific patterns (keep this as it's more precise)
        if (transcript.includes('repeticiones') || transcript.includes('reps')) {
            const repsMatch = transcript.match(/(\d+)(?:\s+)(?:repeticiones|repetición|reps|rep)/);
            if (repsMatch) reps = repsMatch[1]; // Get the number before 'repeticiones'/'reps'

            const weightMatch = transcript.match(/(\d+)(?:\s+)(?:kilos|kilo|kg)/);
             if (weightMatch) weight = weightMatch[1]; // Get the number before 'kilos'/'kg'
        }

        // Second strategy: if reps not found by pattern, assume the first number is reps
        if (!reps && numbers.length >= 1) {
            reps = numbers[0];
        }
        // Third strategy: if weight not found by pattern and there's a second number, assume it's weight
        if (!weight && numbers.length >= 2) {
            weight = numbers[1];
        }

        // If weight is still null (either no second number or not detected by pattern), use 0
        if (!weight) {
            weight = '0';
        }

        // If we successfully determined repetitions (which should happen if numbers were found), add the set
        if (reps) {
            const exerciseElement = document.querySelector('.card h2');
            if (exerciseElement) {
                const exerciseName = exerciseElement.textContent.replace('Registrar: ', '');
                // Ensure reps and weight are treated as numbers for logging, but they come in as strings
                 console.log(`Detected Reps: ${reps}, Detected Weight: ${weight}`);
                addSet(exerciseName, parseInt(reps, 10), parseInt(weight, 10)); // Convert to numbers
            }
        } else {
             // This case should ideally not be hit if numbers were found and assigned to reps,
             // but as a fallback for unexpected transcription patterns
             console.warn("Numbers found but could not determine valid repetitions:", transcript, numbers);
             alert('No se pudo determinar repeticiones válidas a partir de la transcripción. Intenta de nuevo.');
        }

    } else {
        // If no numbers were found at all in the transcript
        alert('No se detectaron números. Intenta de nuevo.');
    }
}

// Add this script to handle CSS styles dynamically if needed, but better to put in styles.css
/*
document.head.insertAdjacentHTML('beforeend', `
<style>
// Your CSS styles here
</style>
`);
*/

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