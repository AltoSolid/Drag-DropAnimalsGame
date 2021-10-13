# Drag & Drop Animals
This little game was develop to practice Drag and drop events with JavaScript.

All this is based on this [video](https://www.youtube.com/watch?v=7HUCAYMylCQ)

## Readme Languages version
[Versión en español](https://github.com/AltoSolid/Drag-DropAnimalsGame/blob/main/readme-es.md)

[한국어 버전](https://github.com/AltoSolid/Drag-DropAnimalsGame/blob/main/readme-ko.md)


## Result
![gif](https://github.com/AltoSolid/Drag-DropAnimalsGame/blob/main/Images/gif.gif)

Notice that the gif doesn't show the transparent copy of the image that is dragged. But it does: 

![image-dragged](https://github.com/AltoSolid/Drag-DropAnimalsGame/blob/main/Images/image-1.png)

## Useful information
In order to accomplish the above code, you must need to understand: 

### HTML
- [Data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

- [Draggable attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)

- [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

### CSS properties
I'll consider these properties to be the key properties do make this game:
- [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) 
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
- [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)

### JavaScript Interfaces
- [DataTransfer Interface](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
- [DragEvent Interface](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent) with some of the **Event types**

### Methods: 
- [dataTransfer.getData](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData)
- [dataTransfer.setData](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)