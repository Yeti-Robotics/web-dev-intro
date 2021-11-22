const p = document.getElementById('paragraph');
p.style.fontSize = '32px';
p.innerHTML = 'JavaScript changed me!';

const changeBg = () => {
	const input = document.getElementById('bgcolor');
	document.body.style.backgroundColor = input.value;
};
