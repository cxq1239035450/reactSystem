import './index.scss'

const message = (color = 'skyblue',content='内容')=>{
        let messageList = document.getElementsByClassName('message')
        let notifyHeight = messageList.length * 100 + 80
        let page = document.createElement('div')
        page.className = 'messageBox'
        let contentDiv = document.createElement('div')
        contentDiv.innerText = content
        contentDiv.className = 'contentBox'
        let closeDiv = document.createElement('div')
        closeDiv.innerText = 'x'
        closeDiv.className = 'closeBox'
        page.appendChild(contentDiv)
        page.appendChild(closeDiv)
        setTimeout(()=>{
            page.style.cssText = `transform: translateY(200px);top:${notifyHeight}px`
        },100)
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
            }, 300);
        })
}
export default message