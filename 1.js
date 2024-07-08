let list1=[]
let a=""
let len;
Name1=[]
Application=[]
Goods=[]
State=[]
Production=[]
Location_Link=[]
ExpLink=[]
Image_Link=[]
About=[]
var value1=""
fetch('4.json')
.then(response => response.json())
.then(data1 => {
    len=data1.length;
    for (let i=0;i<len;i++){
        Name1.push(String(data1[i]['Name']));
        Application.push(String(data1[i]["Application Number"]));
        Goods.push(String(data1[i]["Goods (As per Sec 2 (f) of GIAct 1999 )"]));
        State.push(String(data1[i]["State"]));
        Production.push(String(data1[i]["Production Location"]));
        Location_Link.push(String(data1[i]["Location Link"]));
        ExpLink.push(String(data1[i]["Exp Link"]));
        Image_Link.push(String(data1[i]["Image Link"]));
        About.push(String(data1[i]["About Product"]));
    }
})
.then(() => {
    dev=document.getElementById("div");
    Name1.forEach(function(element){
    var p = document.createElement("p");
    var button = document.createElement("button");
    button.textContent=element;
    button.onclick=function(){
        value1=button.innerText;
        myfun1();
    };   
    p.appendChild(button);
    dev.appendChild(p);
    });
})
.catch(error => {
    console.error('Error fetching JSON:', error);
});

// console.log(Name1);
let latitude=sessionStorage.getItem('lat1');
let longitude=sessionStorage.getItem('lon1');
function latlog(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    sessionStorage.setItem('lat1',latitude);
    sessionStorage.setItem('lon1',longitude);
    console.log(sessionStorage.getItem('lon1'));
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});
} else {
    console.log("Geolocation is not supported by this browser.");
}

}

latlog();
let sc;
async function myfun(searchby) {
    sc=searchby;
    let sce = document.getElementById("search").value.toLowerCase();
    let dev1 = document.getElementById("div");
    let arr1 = searchby.filter(function(element) {
        return element.toLowerCase().includes(sce);
    });
    console.log(searchby);
    dev1.innerHTML = "";
    arr1.forEach(function(element) {
        var p = document.createElement("p");
        var button = document.createElement("button");
        button.textContent=element;
        button.onclick=function(){
        value1=button.innerText;
        myfun1();
    };
    p.appendChild(button);
    dev1.appendChild(p);
    });
}

// document.getElementById("search").addEventListener("input", myfun(sc));

// myfun();

function calc(lat1,lat2,log1,log2){
    const R = 6371;
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (log2-log1) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d;
    }
    

function myfun1(){
    dev = document.getElementById('div3');
    ind=Name1.indexOf(value1);
    console.log(ind);
    console.log(ExpLink[ind]);
    a=String(ExpLink[ind]).split("@")
    console.log(a);
    list2=a[0].replace("https://www.google.com/maps/place/","")
    console.log(Name1[ind]);
    list1=a[1].split(",")
    a=(parseFloat(list1[0])+latitude)/2;
    b=(parseFloat(list1[1])+longitude)/2;
    lis1="https://www.google.com/maps/dir/"+latitude+","+longitude+"/"+list1[0]+","+list1[1]+"/@"+list1[0]+","+list1[1]+",7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x0:0xd8ef8500652e24c0!2m2!1d74.7849003!2d13.2547441!1m5!1m1!1s0x0:0x226c2048cd0eb4a8!2m2!1d76.6883061!2d9.3285168!3e0?hl=en&entry=ttu";
    let link2="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d996492.2751816645!2d47.0793674428846!3d12.677617788649373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m4!1s0x0%3A0xd8ef8500652e24c0!3m2!1d"+latitude+"!2d"+longitude+"!4m4!1s0x0%3A0x226c2048cd0eb4a8!3m2!1d"+list1[0]+"!2d"+list1[1]+"!5e0!3m2!1sen!2sin!4v1715644823340!5m2!1sen!2sin";
    let link1="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.109170187392!2d"+list1[1]+"!3d"+list1[0]+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063cfc4923b5a7%3A0x720304f454797c45!2sTarikere%2C%20Tarikere!5e0!3m2!1sen!2sin!4v1715650086735!5m2!1sen!2sin";
    let any=sessionStorage.getItem("lnk");
    a=document.getElementById('ifr1');
    a.id = "ifr1";
    a.allowFullscreen = true;
    a.loading = "lazy";
    a.referrerPolicy = "no-referrer-when-downgrade";
    a.src=link2;
    dev = document.getElementById('tab2');
    document.getElementById('div3').style.display="table";
    dev.querySelector("#a1").innerText=Name1[ind];
    dev.querySelector("#a2").innerText=Application[ind];
    dev.querySelector("#a3").innerText=Goods[ind];
    dev.querySelector("#a4").innerText=State[ind];
    dev.querySelector("#a5").innerText=Production[ind];
    dev.querySelector("#a6").href=lis1;
    dev.querySelector("#a6").innerText="Location";
    dev.querySelector("#a7").href=Image_Link[ind];
    dev.querySelector("#a7").innerText="Images";
    dev.querySelector("#a8").href=About[ind];
    dev.querySelector("#a8").innerText="About";
    
    console.log(calc(latitude,list1[0],longitude,list1[1]));
}
