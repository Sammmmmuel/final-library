const {suffix} = require("./index.js")

test("testing suffix", () => {
    expect(suffix(5)).toBe("5")
    expect(suffix(41)).toBe("41st")
})
