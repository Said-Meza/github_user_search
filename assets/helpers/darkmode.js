const d=document;

export const light=()=>{
    d.documentElement.style.setProperty('--bg_main','#f5e9e9');
    d.documentElement.style.setProperty('--bg_second','#ffffff');
    d.documentElement.style.setProperty('--txt_main','#292929');
    d.documentElement.style.setProperty('--bg__btn','#bdbdbd');
    d.documentElement.style.setProperty('--bg_main__300','#525252');
}

export const dark=()=>{
    d.documentElement.style.setProperty('--bg_main','#141c2f');
    d.documentElement.style.setProperty('--bg_second','#33529a59');
    d.documentElement.style.setProperty('--txt_main','#f1f7fd');
    d.documentElement.style.setProperty('--bg__btn','#3864bd');
    d.documentElement.style.setProperty('--bg_main__300','#a3cbed');
}


