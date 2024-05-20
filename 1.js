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
.then(data1 => {
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
    return latitude,longitude;
});
} else {
    console.log("Geolocation is not supported by this browser.");
}

}

latlog();

async function myfun() {
    let sce = document.getElementById("search").value.toLowerCase();
    let dev1 = document.getElementById("div4");
    let arr1 = Name1.filter(function(element) {
        return element.toLowerCase().includes(sce);
    });
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

document.getElementById("search").addEventListener("input", myfun);

// myfun();

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

    if (any=="link1"){
    a.src=link2;
    }
    if (any=="link2"){
    a.src=link1
    }
    
    dev = document.getElementById('tab2');
    document.getElementById('div3').style.display="table";
    dev.querySelector("#a1").innerText=Name1[ind];
    dev.querySelector("#a2").innerText=Application[ind];
    dev.querySelector("#a3").innerText=Goods[ind];
    dev.querySelector("#a4").innerText=State[ind];
    dev.querySelector("#a5").innerText=Production[ind];
    dev.querySelector("#a6").href=Location_Link[ind];
    dev.querySelector("#a6").innerText="Location";
    dev.querySelector("#a7").href=Image_Link[ind];
    dev.querySelector("#a7").innerText="Images";
    dev.querySelector("#a8").href=About[ind];
    dev.querySelector("#a8").innerText="About";
    dev.querySelector("#a9").href=lis1;
    dev.querySelector("#a9").innerText="live location";
}
/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d996492.2751816645!2d47.0793674428846!3d12.677617788649373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m4!1s0x0%3A0xd8ef8500652e24c0!3m2!1d"+latitude+"!2d"+longitude+"!4m4!1s0x0%3A0x226c2048cd0eb4a8!3m2!1d"+list2[1]+"!2d"+list2[1]+"!5e0!3m2!1sen!2sin!4v1715644823340!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14497.763612920437!2d78.13807015!3d24.711739199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3979918b9ac9c1c1%3A0x6ad66abbe3ddb9fb!2sChanderi%2C%20Madhya%20Pradesh%20473446!5e0!3m2!1sen!2sin!4v1715649789400!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.109170187392!2d76.6879227!3d9.328431250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063cfc4923b5a7%3A0x720304f454797c45!5e0!3m2!1sen!2sin!4v1715650086735!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
9.3284313,76.6879227
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.0545248837475!2d76.68534777314791!3d9.328436584233803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTknNDIuNCJOIDc2wrA0MScxNi41IkU!5e0!3m2!1sen!2sin!4v1715650641441!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.109170187392!2d76.6879227!3d9.328431250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063cfc4923b5a7%3A0x720304f454797c45!2sAranmula%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715650851284!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
function myfun2(){
    sessionStorage.setItem("lnk", "link1");
}
function myfun3(){
    sessionStorage.setItem("lnk", "link2");
}

{/* <tr><th>+'NAME:'+</th><td id="a1"></td></tr><tr><th>+'Application Number:'+</th><td id="a2"></td></tr><tr><th>+'Goods (As per Sec 2 (f) of GIAct 1999 ):'+</th><td id="a3"></td></tr><tr><th>State:</th><td id="a4"></td></tr><tr><th>Production Location:</th><td id="a5">-----------------------</td></tr><tr><th>Location Link:</th><td><a href="" id="a6">-----------------------</a><button onclick="myfun2()"></button></td></tr><tr><th>Image Link:</th><td><a href="" id="a7">-----------------------</a></td></tr><tr><th>About Product:</th><td><a href="" id="a8">-----------------------</a></td></tr><tr><th>Exp Link:</th><td><a href=""id="a9"></a></td></tr>; */}

