
const opn = require('opn');
// var robot = require('robotjs');
const { JSDOM } = require( "jsdom" );
const { log } = require('console');

const { window } = new JSDOM( "" );
// // 引入所需要的第三方包
// const cheerio = require('cheerio');
// // 引入所需要的第三方包
// const superagent= require('superagent');


var url = "https://warh5.rivergame.net/webgame/index.html?t=13824423";

var https = require('https');
 
https.get(url, function(res){
    console.log('status code: ' + res.statusCode);
    console.log('headers: ' + res.headers);
 
    res.on('data', function(data){
        process.stdout.write(data);
    });
}).on('error', function(err){
    console.error(err);
})





   //默认浏览器打开网页

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`选择你所要刷的类型(1锤子,2黑车,3呯呯,4难民,多个用英文,隔开):`, type => {
    const array = {
        1:'锤子',
        2:'黑车',
        3:'呯呯',
        4:'难民'
    }

    const selectMessage = type ? type.split(','):[]

    //存放用户选择的type类型
    let typeList = []
    if(selectMessage.length){
        selectMessage.forEach((ell)=>{
            if(array[ell]){
                typeList.push(array[ell])
            }
        })
    }
    if(!selectMessage.length){
        typeList = Object.values(array)
    }
    readline.question(`每次间隔时间(ms):`, time => {
        //无限循环
        let num= 0
        // opn(url);
        const dom = new JSDOM(``, {
            url: url,
            referrer: url,
            contentType: "text/html",
            // resources:true,
            includeNodeLocations: true,
            storageQuota: 10000000,
            runScripts:'dangerously'
        });
        setInterval(() => {
            num++
            // const document = dom.window.document;
            // let location =  document.querySelectorAll('.clear')
            // let id = dom.nodeLocation(location)
            console.log(typeList);
            typeList.some(e=>{})
            // readline.close()
            console.log(`第${num}次执行脚本`);
        }, time||1000);
    // const closeBtn = new JSDOM(
    //     `<button style="height:40px;width:60px;background:red">关闭脚本</button>` ,
    //     { includeNodeLocations: true }
    //   );
    // const document = dom.window.document;
    // const bodyEl = document.body; // implicitly created
    // const pEl = document.querySelector("p");   // null; it's not in the source
    })
})




// setTimeout(() => {
//     mouseEvent(1361, 395);
    
//     setTimeout(() => {
//         mouseEvent(962, 648);
        
//         setTimeout(() => {
//             mouseEvent(886, 678);
//             closePage();
//         }, 1000)
        
//     }, 1000)
// }, 2000)

// function mouseEvent(x, y) {
//     robot.moveMouseSmooth(x, y);	//移动鼠标
//     robot.setMouseDelay(1000);
//     robot.mouseClick();
// }

// function closePage(){
//     setTimeout(() => {
//         robot.keyToggle('control','down');
//         robot.keyTap ('w');
//         robot.keyToggle('control','up');
//     }, 2000)
// }