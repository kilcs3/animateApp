
const state = {
    exercises: [
        { id: 1, title: "Laufen", duration:50, image: "walk.jpg", video:"walk.mp4", imageMI: "walkMI.jpg", imageFinished: "walkFinished.jpg", audio:""},
        { id: 2, title: "Treppensteigen", duration:79, image: "stairs.jpg", video:"stairs.mp4", imageMI: "stairsMI.jpg", imageFinished: "stairsFinished.jpg", audio:""},
        { id: 3, title: "Aufstehen", duration:103, image: "standup.jpg", video:"standup.mp4", imageMI: "standupMI.jpg", imageFinished: "standupFinished.jpg", audio:""},
        { id: 4, title: "Trinken", duration:72, image: "drink.jpg", video:"drink.mp4", imageMI: "drinkMI.jpg", imageFinished: "drinkFinished.jpg", audio:""},
        { id: 5, title: "Händewaschen", duration:72, image: "washhands.jpg", video:"washhands.mp4", imageMI: "washhandsMI.jpg", imageFinished: "washhandsFinished.jpg", audio:""},
        { id: 6, title: "Linie Zeichnen", duration:59, image: "drawline.jpg", video:"drawline.mp4", imageMI: "drawlineMI.jpg", imageFinished: "drawlineFinished.jpg", audio:""}
    ],
    title: "Übung auswählen"
};
const state2 = {
    kExercises: [
        { id: "K1", title: "K1: Hals beugen/strecken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Neigen Sie den Kopf so weit wie möglich nach vorne und danach nach hinten.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K2", title: "K2: Achselzucken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Heben Sie beide Schultern so weit wie möglich hoch, ohne den Kopf zu bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K3", title: "K3: Arm nach vorn hochheben", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren nicht-dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K4", title: "K4: Beugung des Ellbogens", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\n\n2. Beugen Sie den Ellbogen auf der dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K5", title: "K5: Daumen zu den Fingerspitzen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben\n\n2. Berühren Sie mit dem Daumen Ihrer dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K6", title: "K6: Rumpfbeugung nach vorn", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Beugen Sie den Rumpf von der Hüfte aus soweit als möglich nach vorne und richten sich wieder auf.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K7", title: "K7: Knie strecken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der nicht-dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K8", title: "K8: Bein abspreizen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K9", title: "K9: Fuss auftippen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Klopfen Sie mit dem Fuss der nicht-dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Lassen Sie dabei die Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "K10", title: "K10: Fuss nach aussen drehen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Drehen Sie mit den Fuss der dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}
    ],
    title: "Übung auswählen"
};
const state3 = {
    vExercises: [
        { id: "V1", title: "V1: Hals beugen/strecken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Neigen Sie den Kopf so weit wie möglich nach vorne und danach nach hinten.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V2", title: "V2: Achselzucken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Heben Sie beide Schultern so weit wie möglich hoch, ohne den Kopf zu bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V3", title: "V3: Arm nach vorn hochheben", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren nicht-dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V4", title: "V4: Beugung des Ellbogens", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\r\n\n2. Beugen Sie den Ellbogen auf der dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V5", title: "V5: Daumen zu den Fingerspitzen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben.\r\n\n2. Berühren Sie mit dem Daumen Ihrer dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\n\n4. Zeigen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V6", title: "V6: Rumpfbeugung nach vorn", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Beugen Sie den Oberkörper soweit wie möglich nach vorn und richten sich wieder auf.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V7", title: "V7: Knie strecken", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der nicht dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V8", title: "V8: Bein abspreizen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V9", title: "V9: Fuss auftippen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Tippen Sie mit dem Fuss der nicht-dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Bleiben Sie dabei mit der Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V10", title: "V10: Fuss nach aussen drehen", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Drehen Sie die Fussspitze der dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}
    ],
    title: "Übung auswählen"
};


function getExercise(id) {
    return state.exercises.find(exercise => exercise.id === Number(id));
}
function getExerciseK(id) {
    return state2.kExercises.find(kExercise => kExercise.id === String(id));
}
function getExerciseV(id) {
    return state3.vExercises.find(vExercise => vExercise.id === String(id));
}

export default {
    state: state,
    state2: state2,
    state3: state3,
    getters: {
        exercise: getExercise,
        kExercise: getExerciseK,
        vExercise: getExerciseV,
    }
}
