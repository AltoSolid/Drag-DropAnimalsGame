const draggableElements = document.querySelectorAll('.draggable');
const droppablElements = document.querySelectorAll('.droppable');


draggableElements.forEach(element => {
    element.addEventListener('dragstart', dragstartHandler);
});

droppablElements.forEach(element => {
    element.addEventListener('dragenter', dragEnterHandler);
    element.addEventListener('dragleave', dragLeaveHandler);
    element.addEventListener('dragover', dragoverHandler);
    element.addEventListener('drop', dropHandler);
});

function dragstartHandler(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragoverHandler(event) {
    if (!event.target.classList.contains('dropped')) {
        event.preventDefault();
    }
}

function dragEnterHandler(event) {
    if (!event.target.classList.contains('dropped')) {
        event.target.classList.add('droppable-hover');
    }
}

function dragLeaveHandler(event) {
    event.target.classList.remove('droppable-hover');
}

function dropHandler(event) {
    event.preventDefault();
    event.target.classList.remove('droppable-hover');
    const draggableElementData = event.dataTransfer.getData('text');
    const droppableElementData = event.target.getAttribute('data-draggable-id');
    if (draggableElementData === droppableElementData) {
        event.target.classList.add('dropped');
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');
        event.target.insertAdjacentHTML('afterbegin', `<i class="fas fa-${draggableElementData}"></i>`)
    }
}