function setCookie(e,t,o){var i=new Date;i.setDate(i.getDate()+o),document.cookie=`${e}=${t};expires=${i}`}function setCookie(e,t,o){let i=new Date;i.setDate(i.getDate()+o),document.cookie=`${e}=${t};expires=${i}`}function getCookie(t){var o=document.cookie.split("; ");for(let e=0;e<o.length;e++){var i=o[e].split("=");if(i[0]===t)return i[1]}}function moveCookie(e){setCookie(e,"",-1)}