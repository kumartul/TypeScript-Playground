export var STATES;
(function (STATES) {
    STATES["WIN"] = "win";
    STATES["HIGH"] = "high";
    STATES["LOW"] = "low";
    STATES["OUT_OF_MOVES"] = "out_of_moves";
})(STATES || (STATES = {}));
export const generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 98) + 1;
    return randomNum;
};
