function schoolGrades(arr) {

    let students = {};

    for (let item of arr) {
        let tokens = item.split(' ');
        let name = tokens.shift();
        let grades = tokens.toString();

        if (name in students) {
            oldGrades = students[name];
            newGrades = oldGrades + ',' + grades;
            students[name] = newGrades;
        } else {
            students[name] = grades;
        }
    }

    let arrG = Object.entries(students);

    let arrGrades = arrG.sort((a, b) => a[0].localeCompare(b[0]));

    let objStudents = {};

    for (let item of arrGrades) {

        let name = item.shift();

        let tokens = (item[0]).split(',');

        let sum = 0;
        for (let grade of tokens) {
            sum += Number(grade);
        }

        let avgGrade = (sum / tokens.length).toFixed(2);

        objStudents[name] = avgGrade;

        console.log(`${name}: ${avgGrade}`);

    }

}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])