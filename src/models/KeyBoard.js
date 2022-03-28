class KeyBoard {
    static keys = [];
    static Control = "Control";
    static Shift = "Shift";
    static Delete = "Delete";
    static ArrowUp = "ArrowUp";
    static ArrowDown = "ArrowDown";
    static Enter = "Enter";
    static Backspace = "Backspace";

    static containsControl() {
        return this.containsKey(KeyBoard.Control);
    }
    static containsShift() {
        return this.containsKey(KeyBoard.Shift);
    }
    static containsAlt() {
        return this.containsKey(KeyBoard.Alt);
    }
    static containsKey(name) {
        return KeyBoard.keys.includes(name);
    }
}

export default KeyBoard;
export {
    KeyBoard
}