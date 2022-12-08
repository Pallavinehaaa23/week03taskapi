
var btn1=document.getElementById("btn1");
btn1.addEventListener('click',() =>{


// let index;
// function getdata(index){
fetch('https://randomuser.me/api/?results=20').then((apidata)=>{
//    console.log(apidata);
    return apidata.json();

}).then((data) => {
    data.results.sort((a,b)=>{
        const nameA = a.name.first;
        const nameB = b.name.first;
        if(nameA < nameB){return -1;}
        if(nameA > nameB){return 1;}
        return 0;
    });
    console.log(data);
    var p=document.getElementById('result'); 

var template= `
 <h4> Sorted Names</h4>
`

data.results.forEach((element) => {
    template+= `
    
    <ul>
    <li> ${element.name.title} ${element.name.first} ${element.name.last}</li>
    </ul>
    
    `
})

   p.innerHTML=template;
})
})    
