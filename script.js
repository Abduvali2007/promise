const user=document.querySelector(".user")  


fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json()).then((s)=>{

    s.map(el=> user.innerHTML +=` <div class="user">
    <div class="user1">
    <img src="./img/user.png" alt="img"
    <h1>${el.name}</h1> 
    <h1>${el.phone}</h1> 
    <h1>${el.email}</h1> 
    <button>follow</button>
    </div>
    </div> `)
})  