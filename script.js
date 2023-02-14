const container = document.querySelector('.container');
container.style.width ='800px';
container.style.height = '800px';
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
        box.style.flex = '1 0 auto';
        box.style.minWidth = '20px';
        box.style.minHeight = '20px';
        box.style.borderStyle= 'solid';
        box.style.borderWidth = '1px';
        boxes.appendChild(box);
        
    }
    container.appendChild(boxes);
}
const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
    let num = prompt('How many squares on each side?');
    var child = container.firstChild;
    while (child) {
        container.removeChild(child);
        child = container.lastChild;
    }
    for (let j = 0; j < num; j++) {
        const boxes = document.createElement('div');
        boxes.style.display = 'flex';
        boxes.style.justifyContent = 'center';
        boxes.style.alignContent = 'center';
        boxes.style.flex = '1';
        for (let i = 0; i < num; i ++) {
            const box = document.createElement('div');
            box.addEventListener('mouseover', ()=> {
                box.style.backgroundColor = 'blue';
            })
            box.style.flex = '1 0 auto';
            box.style.minWidth = '20px';
            box.style.minHeight = '20px';
            box.style.borderStyle= 'solid';
            box.style.borderWidth = '1px';
            boxes.appendChild(box);
            
        }
        container.appendChild(boxes);
    }

    

})
