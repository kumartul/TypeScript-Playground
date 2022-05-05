export enum STATES {
    WIN = 'win',
    HIGH = 'high',
    LOW = 'low',
    OUT_OF_MOVES = 'out_of_moves'
}

export const generateRandomNum:() => void = () => {
    const randomNum = Math.floor(Math.random() * 98) + 1;
    return randomNum;
}