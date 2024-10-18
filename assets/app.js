import {light,dark} from './helpers/darkmode.js'
const d=document,
    $input=d.getElementById("txtsearch"),
    $name=d.getElementById("inf__name"),
    $username=d.getElementById("username"),
    $date=d.getElementById("date_start"),
    $bio=d.getElementById("main__paragraph"),
    $repos=d.getElementById("repos"),
    $followers=d.getElementById("followers"),
    $followings=d.getElementById("followings"),
    $gps=d.getElementById("gps"),
    $github=d.getElementById("github"),
    $x=d.getElementById("x"),
    $home=d.getElementById("home"),
    $avatar=d.getElementById("user_img"),
    $modetxt=d.getElementById("modetxt");
let darkmode=false;
    


d.addEventListener("click",(e)=>{
    if(e.target.matches(".hero__dark__btn") || e.target.matches(".hero__span")||e.target.matches(".hero__img")){
        e.preventDefault();
        // console.log("di click en dark mode")
        darkmode=!darkmode;

        if(darkmode){
            light()
            $modetxt.textContent="DARK";
        }else{
            dark()
            $modetxt.textContent="LIGHT"

        }

    }

   
})

d.addEventListener("submit",(e)=>{
   e.preventDefault()

   if (!e.target.matches(".form__form")) {
        return;
   } 

   if(e.target.matches(".form__form")){
       
        if(e.target.txtsearch.value===null || e.target.txtsearch.value===""){
            return;
        }
        else
        {

            let url=`https://api.github.com/users/${e.target.txtsearch.value}`;

            fetch(url)
                .then(res => (res.ok) ? res.json() : Promise.reject({
                    err: "fallo la api", code: 404
                }))
                .then(data => {

                    let date= new Date(data.created_at)

                    let fecha = date.toLocaleDateString('es-ES',{year: 'numeric', month: 'long'})

                    $avatar.src=`${data.avatar_url?(data.avatar_url):("/assets/img/perfil.svg")} `;
                    $name.textContent=`${data.name}`;
                    $username.textContent=`${data.login}`;
                    $date.textContent=`Joined ${fecha}`;
                    $bio.textContent=`${data.bio?(data.bio):("Not Text")}`;
                    $repos.textContent=`${data.public_repos}`;
                    $followers.textContent=`${data.followers}`;
                    $followings.textContent=`${data.following}`;
                    $gps.textContent=`${data.location?(data.location):("Not Inf")}`;
                    $x.textContent=`${data.twitter_username?(`@${data.twitter_username}`):("Not Account")}`;
                    $github.href=`${data.html_url?(data.html_url):"#"}`;
                    $home.href=`${data.blog?(data.blog):("#")}`;

                })

                .catch(err =>  {alert("no existe tu busqueda" + err.code)})
            $input.value="";    
                
    
        }

        
     }
 
})

// api para consumir
// https://api.github.com/users/midudev
