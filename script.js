const container = document.querySelector('.container');
for (let j = 0; j < 16; j++) {
    const boxes = document.createElement('div');
    boxes.style.display = 'flex';
    boxes.style.justifyContent = 'center';
    boxes.style.alignContent = 'center';
    boxes.style.flex = '1';
    for (let i = 0; i < 16; i ++) {
        const box = document.createElement('div');
        box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor = 'blue';
        })
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.borderStyle= 'solid';
        box.style.borderWidth = '1px';
        boxes.append(box);
        
    }
    container.append(boxes);
}
const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
    let num = prompt('How many squares on each side?')
})
