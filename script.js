var arrow2=document.getElementById('arrow2');
var arrow1=document.getElementById('arrow1');
var head=document.getElementById('head');
var text=document.querySelector('#second p')
var num=0;
var menu=document.getElementById('menu');
var close=document.getElementById('close');
arrow2.onclick=function(e){
    num++;
    if(num==3){num=0}
    if(num==0){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-1.jpg)"
        head.innerHTML="Discover innovative ways to decorate"
        text.innerHTML="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision, to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        
        
    }
    if(num==1){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-2.jpg)"
        head.innerHTML="We are available all across the globe";
        text.innerHTML="  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country, Find the branch negrest you using our store locator. Any questions? Don't hesitate to-contact us today"
      
        
        
    }
    if(num==2){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-3.jpg)"
        head.innerHTML="Manufactured with the best materials"
        text.innerHTML="Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        
    }
   

}
arrow1.onclick=function(e){
    num--;
    if(num==3){num=0}
    if(num==-1){num=2}
   
    if(num==0){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-1.jpg)"
        head.innerHTML="Discover innovative ways to decorate"
        text.innerHTML="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision, to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        
        
    }
    if(num==1){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-2.jpg)"
        head.innerHTML="We are available all across the globe";
        text.innerHTML="  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country, Find the branch negrest you using our store locator. Any questions? Don't hesitate to-contact us today"
      
        
        
    }
    if(num==2){
        document.getElementById('first').style.backgroundImage="url(/images/desktop-image-hero-3.jpg)"
        head.innerHTML="Manufactured with the best materials"
        text.innerHTML="Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        
    }

   

}
menu.onclick=function(){
    document.querySelector('ul').style.display='block';
    document.getElementById('room').style.display='none';
    menu.style.display="none"

}
close.onclick=function(){
    document.querySelector('ul').style.display='none';
    document.getElementById('room').style.display='block';
    menu.style.display="block"

}