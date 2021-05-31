function isMouseInsideText(message, messageX, messageY) {
  
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();

    return mouseX > messageX && mouseX < messageX + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;
}
  
function mouseClicked() {
clouds.push(new Cloud());
}
  
function keyPressed(){
clouds.splice(clouds.length-1,1);
}