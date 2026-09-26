const textDisplay = document.getElementById('text-display');


document.getElementById('btnBold').onclick = () => {
  textDisplay.style.fontWeight = textDisplay.style.fontWeight === 'bold' ? 'normal' : 'bold';
};

document.getElementById('btnItalic').onclick = () => {
  textDisplay.style.fontStyle = textDisplay.style.fontStyle === 'italic' ? 'normal' : 'italic';
};

document.getElementById('btnLeft').onclick = () => textDisplay.style.justifyContent = 'flex-start';
document.getElementById('btnCenter').onclick = () => textDisplay.style.justifyContent = 'center';
document.getElementById('btnRight').onclick = () => textDisplay.style.justifyContent = 'flex-end';


document.getElementById('btnUpper').onclick = () => {
  textDisplay.innerText = textDisplay.innerText.toUpperCase();
};

document.getElementById('btnLower').onclick = () => {
  textDisplay.innerText = textDisplay.innerText.toLowerCase();
};

document.getElementById('btnCapital').onclick = () => {
  textDisplay.innerText = textDisplay.innerText
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

document.getElementById('btnClear').onclick = () => {
  textDisplay.innerText = '';
};


document.getElementById('textColor').addEventListener('input', (e) => {
  textDisplay.style.color = e.target.value;
});

document.getElementById('bgColor').addEventListener('input', (e) => {
  textDisplay.style.backgroundColor = e.target.value;
});


document.getElementById('fontSize').addEventListener('input', (e) => {
  textDisplay.style.fontSize = e.target.value + 'px';
});

document.getElementById('fontFamily').addEventListener('change', (e) => {
  textDisplay.style.fontFamily = e.target.value;
});