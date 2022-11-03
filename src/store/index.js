
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
        { id: "K1", title: "1K: Hals beugen/strecken", image: "kopfneigen.png", audio:"1K_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Neigen Sie den Kopf so weit wie möglich nach vorne und danach nach hinten.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 3s
        { id: "K2", title: "2K: Achselzucken", image: "achselzucken.png", audio:"2K_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Heben Sie beide Schultern so weit wie möglich hoch, ohne den Kopf zu bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //4s & 7s
        { id: "K3", title: "3Knd: Arm nach vorn hochheben", image: "arm_hochheben.png", audio:"3Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren nicht-dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 7s
        { id: "K4", title: "4Kd: Beugung des Ellbogens", image: "ellbogen_beugen.png", audio:"4Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\n\n2. Beugen Sie den Ellbogen auf der dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K5", title: "5Kd: Daumen zu den Fingerspitzen", image: "fingerspitzen.png", audio:"5Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben.\n\n2. Berühren Sie mit dem Daumen Ihrer dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 8s
        { id: "K6", title: "6K: Rumpfbeugung nach vorn", image: "rumpfbeugen.png", audio:"6K_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Beugen Sie den Rumpf von der Hüfte aus soweit als möglich nach vorne und richten sich wieder auf.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //4s & 6s
        { id: "K7", title: "7Knd: Knie strecken", image: "bein_strecken.png", audio:"7Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der nicht-dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 7s
        { id: "K8", title: "8Kd: Bein abspreizen", image: "bein_abspreizen.png", audio:"8Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K9", title: "9Knd: Fuss auftippen", image: "fuss_auftippen.png", audio:"9Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Klopfen Sie mit dem Fuss der nicht-dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Lassen Sie dabei die Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K10", title: "10Kd: Fuss nach aussen drehen", image: "fuss_drehen.png", audio:"10Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Drehen Sie mit den Fuss der dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 7s
        { id: "K11", title: "11Kd: Arm nach vorn hochheben", image: "arm_hochheben.png", audio:"11Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},  //5s & 7s
        { id: "K12", title: "12Knd: Beugung des Ellbogens", image: "ellbogen_beugen.png", audio:"12Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem nicht-dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\n\n2. Beugen Sie den Ellbogen auf der nicht-dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K13", title: "13Knd: Daumen zu den Fingerspitzen", image: "fingerspitzen.png", audio:"13Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben.\n\n2. Berühren Sie mit dem Daumen Ihrer nicht-dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 8s
        { id: "K14", title: "14Kd: Knie strecken", image: "bein_strecken.png", audio:"14Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 7s
        { id: "K15", title: "15Knd: Bein abspreizen", image: "bein_abspreizen.png", audio:"15Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer nicht-dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K16", title: "16Kd: Fuss auftippen", image: "fuss_auftippen.png", audio:"16Kd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Klopfen Sie mit dem Fuss der dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Lassen Sie dabei die Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "K17", title: "17Knd: Fuss nach aussen drehen", image: "fuss_drehen.png", audio:"17Knd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Drehen Sie mit den Fuss der nicht-dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Intensität der Empfindungen.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."} //5s & 7s
        
    ],
    title: "Übung auswählen"
};
const state3 = {
    vExercises: [
        { id: "V1", title: "1V: Hals beugen/strecken", image: "kopfneigen.png", audio:"1V_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Neigen Sie den Kopf so weit wie möglich nach vorne und danach nach hinten.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V2", title: "2V: Achselzucken", image: "achselzucken.png", audio:"2V_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Heben Sie beide Schultern so weit wie möglich hoch, ohne den Kopf zu bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V3", title: "3Vnd: Arm nach vorn hochheben", image: "arm_hochheben.png", audio:"3Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren nicht-dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V4", title: "4Vd: Beugung des Ellbogens", image: "ellbogen_beugen.png", audio:"4Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\r\n\n2. Beugen Sie den Ellbogen auf der dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V5", title: "5Vd: Daumen zu den Fingerspitzen", image: "fingerspitzen.png", audio:"5Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben.\r\n\n2. Berühren Sie mit dem Daumen Ihrer dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\n\n4. Zeigen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V6", title: "6V: Rumpfbeugung nach vorn", image: "rumpfbeugen.png", audio:"6V_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Beugen Sie den Oberkörper soweit wie möglich nach vorn und richten sich wieder auf.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V7", title: "7Vnd: Knie strecken", image: "bein_strecken.png", audio:"7Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der nicht dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V8", title: "8Vd: Bein abspreizen", image: "bein_abspreizen.png", audio:"8Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V9", title: "9Vnd: Fuss auftippen", image: "fuss_auftippen.png", audio:"9Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Tippen Sie mit dem Fuss der nicht-dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Bleiben Sie dabei mit der Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V10", title: "10Vd: Fuss nach aussen drehen", image: "fuss_drehen.png", audio:"10Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Drehen Sie die Fussspitze der dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V11", title: "11Vd: Arm nach vorn hochheben", image: "arm_hochheben.png", audio:"11Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln.\r\n\n2. Heben Sie Ihren dominanten Arm gerade nach vorne hoch. Heben Sie den Arm weiter bis dieser gerade nach oben gestreckt ist.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."},
        { id: "V12", title: "12Vnd: Beugung des Ellbogens", image: "ellbogen_beugen.png", audio:"12Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade und mit dem nicht-dominanten Arm ausgestreckt vor Ihnen mit der Handfläche nach oben.\r\n\n2. Beugen Sie den Ellbogen auf der nicht-dominanten Seite an, wie wenn Sie mit der Hand die Schulter auf dieser Seite Berühren würden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s Intervall
        { id: "V13", title: "13Vnd: Daumen zu den Fingerspitzen", image: "fingerspitzen.png", audio:"13Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände auf den Oberschenkeln mit den Handinnenflächen nach oben.\r\n\n2. Berühren Sie mit dem Daumen Ihrer nicht-dominanten Hand eine Fingerspitze nach der andern derselben Hand. Beginnen Sie mit dem Zeigefinger und rücken Sie pro Sekunde einen Finger vor.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\n\n4. Zeigen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 8s Intervalle
        { id: "V14", title: "14Vd: Knie strecken", image: "bein_strecken.png", audio:"14Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Strecken Sie das Knie auf der dominanten Seite, indem Sie den Unterschenkel soweit wie möglich bis zur Horizontalen anheben und dann wieder sinken lassen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //5s & 7s
        { id: "V15", title: "15Vnd: Bein abspreizen", image: "bein_abspreizen.png", audio:"15Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Spreizen Sie das Bein Ihrer nicht-dominanten Seite etwa 30 cm zur Seite ab und stellen es anschliessend wieder zurück.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "V16", title: "16Vd: Fuss auftippen", image: "fuss_auftippen.png", audio:"16Vd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Tippen Sie mit dem Fuss der dominanten Seite dreimal auf den Boden; ungefähr einmal pro Sekunde. Bleiben Sie dabei mit der Ferse auf dem Boden.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."}, //3s & 6s
        { id: "V17", title: "17Vnd: Fuss nach aussen drehen", image: "fuss_drehen.png", audio:"17Vnd_Audio.mp3", description:"1. Sitzen Sie aufrecht, Kopf gerade, beide Hände ruhen auf den Oberschenkeln.\r\n\n2. Drehen Sie die Fussspitze der nicht-dominanten Seite soweit wie möglich nach aussen, ohne dass Sie die Ferse bewegen.\r\n\n3. Nehmen Sie wieder die Anfangsposition ein. Stellen Sie sich jetzt die Bewegung vor. Konzentrieren Sie sich auf die Klarheit des Bildes.\r\n\n4. Bestimmen Sie auf der Beurteilungsskala die Qualität der vorgestellten Bewegung."} //5s & 7s
        
    ],
    title: "Übung auswählen"
};
const state4 = {
    gziele: [
        {id:"Hauptziel", message: " " },
        {id:"Zwischenziel1", message: " "},
        {id:"Zwischenziel2", message: " "},
        {id:"Zwischenziel3", message: " "}
    ]
}

function getExercise(id) {
    return state.exercises.find(exercise => exercise.id === Number(id));
}
function getExerciseK(id) {
    return state2.kExercises.find(kExercise => kExercise.id === String(id));
}
function getExerciseV(id) {
    return state3.vExercises.find(vExercise => vExercise.id === String(id));
}
function getZiele(id) {
    return state4.gziele.find(gziele => gziele.id === String(id), gziele=> gziele.name === String(name));
}

export default {
    state: state,
    state2: state2,
    state3: state3,
    state4: state4,
    getters: {
        exercise: getExercise,
        kExercise: getExerciseK,
        vExercise: getExerciseV,
        gziele: getZiele
    } };

