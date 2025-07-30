 var cartona = document.querySelector('.cartona');
 var extendeddata = []; 
var btn = document.querySelectorAll('.Btn');
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseenter",function(){
        btn[i].style.backgroundColor = "tomato";
    });
    btn[i].addEventListener("mouseout",function(){
        btn[i].style.backgroundColor = "teal";
    });
}
showMeals("pizza");

function filldata(arr) {
   
 var alldata = '';
            for (let i = 0; i < arr.length; i++) {
                var current = `      
                <div class="card">
                  <img  src="${arr[i].image_url}" alt="Food image"> 
                    <h4>${arr[i].publisher}</h4>
                    <p>${arr[i].title || 'No description available'}</p>
                    <button class="Btn" onclick="alert('button${i}clicked')">Add To Cart</button>
                    </div>`;
              alldata += current;

            }
            cartona.innerHTML = alldata;
}

function showMeals(mealsType){
    var request = new XMLHttpRequest();
    request.open('GET', `https://forkify-api.herokuapp.com/api/v2/recipes?search=${mealsType}`, true);
    request.send();
    request.onload = function() {
        if (request.status == 200 && request.readyState == 4) {
            extendeddata = JSON.parse(request.responseText);    
            var arra=extendeddata.data.recipes;
            var loader = document.querySelector('.loader');
            loader.style.display = 'none'; 
            // Hide the loader after data is fetched
           
          filldata(arra);
           
        } else {
            console.error('Error fetching data');
        }
    };
}
console.log(!!"flase");
