export const DIF = {
    LOW: {
        text: 'Low (5x2)',
        number: 5 * 2,
    },
    MEDIUM: {
        text: 'Medium (6x3)',
        number: 6 * 3,
    },
    HIGH: {
        text: 'Hight (8x3)',
        number: 8 * 3,
    },
};

export const PATH = {
    ASSETS: {
        toString() {
            return './src/imgs';
        },
        valueOf() {
            return './src/imgs';
        }
    },
};

PATH.ASSETS.CARDS = `${PATH.ASSETS}/cards`;

export const CARDS_TOP = [
    `${PATH.ASSETS.CARDS}/back1.jpg`,
    `${PATH.ASSETS.CARDS}/back2.jpg`,
    `${PATH.ASSETS.CARDS}/back3.jpg`,
];

export const CARDS_BOTTOM = [
    `${PATH.ASSETS.CARDS}/2d.jpg`,
    `${PATH.ASSETS.CARDS}/2h.jpg`,
    `${PATH.ASSETS.CARDS}/2s.jpg`,
    `${PATH.ASSETS.CARDS}/3c.jpg`,
    `${PATH.ASSETS.CARDS}/4c.jpg`,
    `${PATH.ASSETS.CARDS}/4s.jpg`,
    `${PATH.ASSETS.CARDS}/6c.jpg`,
    `${PATH.ASSETS.CARDS}/6d.jpg`,
    `${PATH.ASSETS.CARDS}/6s.jpg`,
    `${PATH.ASSETS.CARDS}/7d.jpg`,
    `${PATH.ASSETS.CARDS}/7h.jpg`,
    `${PATH.ASSETS.CARDS}/8c.jpg`,
    `${PATH.ASSETS.CARDS}/8s.jpg`,
    `${PATH.ASSETS.CARDS}/9d.jpg`,
    `${PATH.ASSETS.CARDS}/9h.jpg`,
    `${PATH.ASSETS.CARDS}/10c.jpg`,
    `${PATH.ASSETS.CARDS}/10d.jpg`,
    `${PATH.ASSETS.CARDS}/10h.jpg`,
    `${PATH.ASSETS.CARDS}/10s.jpg`,
    `${PATH.ASSETS.CARDS}/ac.jpg`,
    `${PATH.ASSETS.CARDS}/as.jpg`,
    `${PATH.ASSETS.CARDS}/jc.jpg`,
    `${PATH.ASSETS.CARDS}/jd.jpg`,
    `${PATH.ASSETS.CARDS}/jh.jpg`,
    `${PATH.ASSETS.CARDS}/js.jpg`,
    `${PATH.ASSETS.CARDS}/kd.jpg`,
    `${PATH.ASSETS.CARDS}/qh.jpg`,
];

export const RULES = [
    'Select two cards to try to match the pictures.',
    'If you match the pictures you can go again.',
    'If they don\'t match it is the computer turn them.',
    'The player that finds all pairs wins!',
    'Have Fun!',
];
