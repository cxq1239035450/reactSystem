export function Drag(dom){
    let dragDom = dom
    let startx,starty
    function moveDiv(e) {
        let x = e.clientX - startx;
        let y = e.clientY - starty;
        dragDom.style.position = 'fixed'
        dragDom.style.left = x + "px";
        dragDom.style.top = y + "px";
    }
    dragDom.addEventListener('mousedown',(e)=>{

         startx = e.offsetX;
         starty = e.offsetY;
         document.addEventListener("mousemove", moveDiv);
    })
    dragDom.addEventListener("mouseup", ()=> {
        document.removeEventListener("mousemove",moveDiv);
    })
}
export function a(){
}