import './index.scss'
// const notification =  ()=>{

//     return (
//         <div className="notificationBox">
//             aa
//         </div>
//     )
// }
const notify = (title = '标题',content='内容')=>{
        let notifyList = document.getElementsByClassName('notificationBox')
        let notifyHeight = notifyList.length*100 + 80
        let page = document.createElement('div')
        page.className = 'notificationBox'
        let titleDiv = document.createElement('h3')
        titleDiv.innerText = title
        let contentDiv = document.createElement('div')
        contentDiv.innerText = content
        contentDiv.className = 'contentBox'
        let closeDiv = document.createElement('div')
        closeDiv.innerText = 'x'
        closeDiv.className = 'closeBox'
        page.appendChild(titleDiv)
        page.appendChild(contentDiv)
        page.appendChild(closeDiv)
        setTimeout(()=>{
            page.style.cssText = `transform: translateX(-360px);top:${notifyHeight}px`
        })
        document.body.appendChild(page)
        closeDiv.addEventListener('click',(e)=>{
            page.style.cssText = `transform: translateX(-360px);top:0px;opacity: 0;`
            setTimeout(() => {
                document.body.removeChild(page)
                let notifyList = document.getElementsByClassName('notificationBox')
                for (let index = 0; index < notifyList.length; index++) {
                    let notifyHeight = index*100 + 80
                    notifyList[index].style.cssText  = `transform: translateX(-360px);top:${notifyHeight}px`
                }
            }, 1000);
        })
}
export default notify