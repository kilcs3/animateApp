const state = {
    exercises: [
        { id: 1, title: "Laufen", duration:50, image: "walk.jpg", video:"walk.mp4", imageMI: "walkMI.jpg", imageFinished: "walkFinished.jpg"},
        { id: 2, title: "Treppen steigen", duration:79, image: "stairs.jpg", video:"stairs.mp4", imageMI: "stairsMI.jpg", imageFinished: "stairsFinished.jpg"},
        { id: 3, title: "Aufstehen", duration:103, image: "standup.jpg", video:"standup.mp4", imageMI: "standupMI.jpg", imageFinished: "standupFinished.jpg"},
        { id: 4, title: "Trinken", duration:72, image: "drink.jpg", video:"drink.mp4", imageMI: "drinkMI.jpg", imageFinished: "drinkFinished.jpg"},
        { id: 5, title: "Händewaschen", duration:72, image: "washhands.jpg", video:"washhands.mp4", imageMI: "washhandsMI.jpg", imageFinished: "washhandsFinished.jpg"},
        { id: 6, title: "Linie zeichnen", duration:59, image: "drawline.jpg", video:"drawline.mp4", imageMI: "drawlineMI.jpg", imageFinished: "drawFinished.jpg"}
    ],
    title: "Übung auswählen"
};

function getExercise(id) {
    return state.exercises.find(exercise => exercise.id === Number(id));
}

export default {
    state: state,
    getters: {
        exercise: getExercise
    }
}
