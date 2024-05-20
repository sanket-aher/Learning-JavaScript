/* Q. List the collges of country */
let url="http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let colArr= await getCollges(country);
    Show(colArr)
});

function Show(colArr){
    let list=document.querySelector('#list');
    list.innerText="";
    for (col of colArr) {
        let li=document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error :",e);
        return [];
    }
}