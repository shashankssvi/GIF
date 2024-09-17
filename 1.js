var sino = sessionStorage.getItem('Sl.No');
            console.log(sino)
function createProductDiv(product) {
            
            return `
                <div class="product">
                    <h2>Name: ${product["Name"]}</h2>
                    <h3 class="application-number">Application Number: ${product["Application No."]}</h3>
                    <h3 class="goods-type">Goods Type: ${product["Goods(As per Sec 2 (f) of GI Act 1999 )"]}</h3>
                    <h3 class="state">State: ${product["STATE"]}</h3>
                    <h3 class="production-origin">Production Origin: ${product["PLACE"]}</h3>
                    <button id="btn1" type="button" onclick='${product["Exp Link"]}'>Location</button>
                    <button type="button" onclick="window.location.href='${product["IMAGE LINK"]}'">Image</button>
                    <button type="button" onclick="window.location.href='${product["ABOUT GI"]}'">Description</button>
                </div>
            `;
        }

        // Fetch product data and display the filtered product
        const container1 = document.getElementById('divv1');

        fetch('4.json')
            .then(response => response.json())
            .then(data => {
                // Filter products based on the stored Sl.No
                const filteredProducts = data.filter(element => element["Sl.No"] === sino);

                console.log(filteredProducts[0])
                // Append each filtered product to the container
                filteredProducts.forEach(product => {
                    container1.innerHTML += createProductDiv(product);
                    myfun1(product["Exp Link"])
                });

            })
            .catch(error => console.error('Error fetching JSON:', error));

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
    alert("Geolocation is not supported by this browser.")
    console.log("Geolocation is not supported by this browser.");
}

}

latlog();
let sc;
async function myfun() {
    let sce = document.getElementById("search").value.toLowerCase();
    let dev1 = document.getElementById("div");
    let arr1 = searchby.filter(function(element) {
        return element.toLowerCase().includes(sce);
    });
    dev1.innerHTML = "";
    console.log(all1.filter(function(element){
        return element;
    }));
    
    arr1.forEach(function(element) {
        var p = document.createElement("p");
        var button = document.createElement("button");
        button.textContent=element;
    button.style.backgroundColor="#FF7722";
    button.style.color="blue";
    button.style.fontWeight="bold";
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
    

function myfun1(explink){
    dev = document.getElementById("page1");
    btn1 = document.getElementById("btn1")
    a=explink.split("@")
    console.log(a);
    list2=a[0].replace("https://www.google.com/maps/place/","")
    list1=a[1].split(",")
    a=(parseFloat(list1[0])+latitude)/2;
    b=(parseFloat(list1[1])+longitude)/2;
    lis1="https://www.google.com/maps/dir/"+latitude+","+longitude+"/"+list1[0]+","+list1[1]+"/@"+list1[0]+","+list1[1]+",7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x0:0xd8ef8500652e24c0!2m2!1d74.7849003!2d13.2547441!1m5!1m1!1s0x0:0x226c2048cd0eb4a8!2m2!1d76.6883061!2d9.3285168!3e0?hl=en&entry=ttu";
    let link2="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d996492.2751816645!2d47.0793674428846!3d12.677617788649373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m4!1s0x0%3A0xd8ef8500652e24c0!3m2!1d"+latitude+"!2d"+longitude+"!4m4!1s0x0%3A0x226c2048cd0eb4a8!3m2!1d"+list1[0]+"!2d"+list1[1]+"!5e0!3m2!1sen!2sin!4v1715644823340!5m2!1sen!2sin";
    let link1="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.109170187392!2d"+list1[1]+"!3d"+list1[0]+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063cfc4923b5a7%3A0x720304f454797c45!2sTarikere%2C%20Tarikere!5e0!3m2!1sen!2sin!4v1715650086735!5m2!1sen!2sin";
    let any=sessionStorage.getItem("lnk");
    btn1.onclick = function() {
        window.location.href = lis1;
      };
    a=document.getElementById('ifr1');
    a.id = "ifr1";
    a.allowFullscreen = true;
    a.loading = "lazy";
    a.referrerPolicy = "no-referrer-when-downgrade";
    a.src=link2;
    console.log(calc(latitude,list1[0],longitude,list1[1]));
}

