const leafinput = document.getElementById('leaf');
const triangleinput = document.getElementById('triangle');
const eyeinput = document.getElementById('eye');
const button = document.querySelector('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {

    event.preventDefault();
    const leaf = leafinput.value;
    const triangle = triangleinput.value;
    const eye = eyeinput.value;
    if (leaf == caesarShift(codes[0], 3) && triangle == caesarShift(codes[1], 3) && eye == caesarShift(codes[2], 3)) {
        alert('DBIXQFK')
    } else if (leaf == codes[0] && triangle == codes[1] && eye == codes[2]) {
        alert("Access denied. You weren't supposed to know that.")
    } else if (leaf == '' || triangle == '' || eye == '') {
        alert('You got nothing?')
    } else if (leaf == 'gravity' && triangle == 'island' && eye == 'mystery') {
        alert('Error: 1OesxKIipLMd8ic9IHMZISPOMmw-mABGd')
        revealCode()
    } else {
        alert('Access denied.')
    }
})

function caesarShift(text, shift) {
    return text.replace(/[A-Za-z]/g, function(char) {
        const base = char >= 'a' ? 97 : 65;
        return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base
        );
    });
}

function revealCode() {

    // Hide the puzzle
    container.style.display = 'none';

    // Turn the entire screen black
    document.body.style.backgroundColor = 'black';

    // Wait 2 seconds before revealing the poem
    setTimeout(() => {

        poem.style.display = 'block';

        // Start the poem animation
        poem.classList.add('show');

    }, 2000);

}
