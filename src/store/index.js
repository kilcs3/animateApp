const state = {
    exercises: [
        { id: 1, title: "Laufen", image: "@/assets/images/walk.jpg", video:"@/assets/videos/walk.mp4", imageMI: "@/assets/images/walkMI.jpg"},
        { id: 2, title: "Treppen steigen", image: "@/assets/images/stairs.jpg", video:"@/assets/videos/stairs.mp4", imageMI: "@/assets/images/stairsMI.jpg" },
        { id: 3, title: "Aufstehen", image: "@/assets/images/standup.jpg", video:"@/assets/videos/standup.mp4", imageMI: "@/assets/images/standupMI.jpg" },
        { id: 4, title: "Trinken", image: "@/assets/images/drink.jpg", video:"@/assets/videos/drink.mp4", imageMI: "@/assets/images/drinkMI.jpg" },
        { id: 5, title: "Händewaschen", image: "@/assets/images/washhands.jpg", video:"@/assets/videos/washhands.mp4", imageMI: "@/assets/images/washhandsMI.jpg" },
        { id: 6, title: "Linie zeichnen", image: "@/assets/images/drawline.jpg", video:"@/assets/videos/drawline.mp4", imageMI: "@/assets/images/drawlineMI.jpg" }
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
