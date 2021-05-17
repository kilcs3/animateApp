const state = {
    exercises: [
        { id: 1, title: "Laufen" },
        { id: 2, title: "Treppen steigen" },
        { id: 3, title: "Aufstehen" },
        { id: 4, title: "Trinken" },
        { id: 5, title: "Händewaschen" },
        { id: 6, title: "Linie zeichnen" }
    ]
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
