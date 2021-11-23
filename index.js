/* notes for future: no need for semicolons and can use single quotes (' ')*/

const p = document.getElementById("paragraph");
p.style.fontSize = "32px";
p.innerHTML = "JavaScript changed me!";

function changeBg() {
    const input = document.getElementById('bgColor');
    document.body.style.backgroundColor = input.value;
}

function createElements() {
    const parent = document.getElementById("elements");
    parent.innerHTML = '';
    const numElements = Math.ceil(Math.random() * 10);

    for (let i = 0; i < numElements; i++) {
        const newEle = document.createElement("p");
        newEle.style.margin = "10px";
        newEle.innerHTML = i;
        parent.appendChild(newEle);
    }
}