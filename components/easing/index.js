// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

export default {
    // ease = cubic-bezier(0.25,0.1,0.25,1)
    ease: {
        1: "cubic-bezier(0.25, 0.1, 0.1, 1)",
        2: "cubic-bezier(0.25, 0.1, 0.2, 1)",
        3: "cubic-bezier(0.25, 0.1, 0.3, 1)",
        4: "cubic-bezier(0.25, 0.1, 0.4, 1)",
        5: "cubic-bezier(0.25, 0.1, 0.5, 1)",
    },
    // easeIn = cubic-bezier(0.42,0,1,1)
    easeIn: {
        1: "cubic-bezier(0.3, 0, 1, 1)",
        2: "cubic-bezier(0.5, 0, 1, 1)",
        3: "cubic-bezier(0.7, 0, 1, 1)",
        4: "cubic-bezier(0.9, 0, 1, 1)",
        5: "cubic-bezier(1, 0, 1, 1)",
    },
    // easeOut = cubic-bezier(0,0,0.25,1)
    easeOut: {
        1: "cubic-bezier(0, 0, 0.7, 1)",
        2: "cubic-bezier(0, 0, 0.5, 1)",
        3: "cubic-bezier(0, 0, 0.3, 1)",
        4: "cubic-bezier(0, 0, 0.1, 1)",
        5: "cubic-bezier(0, 0, 0, 1)",
    },
    // easeInOut = cubic-bezier(0.42, 0, 0.58, 1)
    easeInOut: {
        1: "cubic-bezier(0.1, 0, 0.9, 1)",
        2: "cubic-bezier(0.3, 0, 0.7, 1)",
        3: "cubic-bezier(0.5, 0, 0.5, 1)",
        4: "cubic-bezier(0.7, 0, 0.3, 1)",
        5: "cubic-bezier(0.9, 0, 0.1, 1)",
    },
    // Custom eases
    easeElastic: {
        1: "cubic-bezier(0.5, 0.75, 0.75, 1.25)",
        2: "cubic-bezier(0.5, 1, 0.75, 1.25)",
        3: "cubic-bezier(0.5, 1.25, 0.75, 1.25)",
        4: "cubic-bezier(0.5, 1.5, 0.75, 1.25)",
        5: "cubic-bezier(0.5, 1.75, 0.75, 1.25)",
    },
    easeSquish: {
        1: "cubic-bezier(0.5, -0.1, 0.1, 1.5)",
        2: "cubic-bezier(0.5, -0.3, 0.1, 1.5)",
        3: "cubic-bezier(0.5, -0.5, 0.1, 1.5)",
        4: "cubic-bezier(0.5, -0.7, 0.1, 1.5)",
        5: "cubic-bezier(0.5, -0.9, 0.1, 1.5)",
    },
};
