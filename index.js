const p = document.getElementById('paragraph');
p.style.fontSize = '32px';
p.innerHTML = 'JavaScript changed me!';

const changeBg = () => {
	const input = document.getElementById('bgcolor');
	document.body.style.backgroundColor = input.value;
};

const createElements = () => {
    const parent = document.getElementById('elements');
    parent.innerHTML = '';
    const numElements = Math.ceil(Math.random() * 10);

    for (let i = 0; i < numElements; i++) {
        const newEl = document.createElement('p');
        newEl.style.margin = '10px';
        newEl.innerHTML = i;
        parent.appendChild(newEl);
    }
}