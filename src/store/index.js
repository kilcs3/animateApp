const state = {
    exercises: [
        { id: 1, title: "Laufen", image: "walk.jpg", video:"walk.mp4", imageMI: "walkMI.jpg", imageEnd: "walkEnd.jpg"},
        { id: 2, title: "Treppen steigen", image: "stairs.jpg", video:"stairs.mp4", imageMI: "stairsMI.jpg", imageEnd: "stairsEnd.jpg"},
        { id: 3, title: "Aufstehen", image: "standup.jpg", video:"standup.mp4", imageMI: "standupMI.jpg", imageEnd: "standupEnd.jpg"},
        { id: 4, title: "Trinken", image: "drink.jpg", video:"drink.mp4", imageMI: "drinkMI.jpg", imageEnd: "drinkEnd.jpg"},
        { id: 5, title: "Händewaschen", image: "washhands.jpg", video:"washhands.mp4", imageMI: "washhandsMI.jpg", imageEnd: "washhandsEnd.jpg"},
        { id: 6, title: "Linie zeichnen", image: "drawline.jpg", video:"drawline.mp4", imageMI: "drawlineMI.jpg", imageEnd: "drawEnd.jpg"}
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
