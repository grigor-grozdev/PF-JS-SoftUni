function bonusScoringSystem(arr) {
    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let bonus = Number(arr.shift());

    let maxBonus = 0;
    let attendances = 0;

    for (let attend of arr) {
        let totalBonus = (attend / lectures * (5 + bonus));
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            attendances = attend;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendances} lectures.`);
}

bonusScoringSystem(['10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5', '18'])