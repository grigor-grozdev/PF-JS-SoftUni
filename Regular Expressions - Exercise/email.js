function email(str) {

    let pattern = / \b[A-Za-z0-9]([A-Za-z0-9\.\-\_])*@([A-Za-z\-]+\.)+[A-Za-z\-]+\b/gm;

    let match = str.match(pattern);
    if (match) {
    console.log(match.join('\n'));
    }
}
email('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')