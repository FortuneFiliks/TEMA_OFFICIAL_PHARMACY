$(".menu").toggle(view_Menu, close_Menu);

function view_Menu(){
	$(".mobile_menu_section").css({"display":"block"});
	$(":root").css({"overflow-y":"hidden"});
}

function close_Menu(){
	
	$(".mobile_menu_section").css({"display":"none"});
	$(":root").css({"overflow-y":"visible"});
}


//TEXT ANIMATION


const ecotourism_Text = document.querySelectorAll(".first_section_heading, .phase_section");



function animate_Ecotourism_Text(entries){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
			}else{
				
			    entry.target.classList.remove("char_animated");
			}

		});
}


const observe_Ecotourism_Text = new IntersectionObserver(animate_Ecotourism_Text);
ecotourism_Text.forEach((target) => observe_Ecotourism_Text.observe(target));


//SECOND SECTION IMAGE ANIMATION
let get_Second_Section_Img = document.querySelector(".second_section_img");


function second_Section_Img_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("second_section_img_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let second_Section_Img_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.5,
}

let second_Section_Img_Animation_API = new IntersectionObserver(second_Section_Img_Animation, second_Section_Img_Animation_Root);

second_Section_Img_Animation_API.observe(get_Second_Section_Img);



//SECOND SECTION TEXT ANIMATION
let get_Second_Section_Text = document.querySelector(".second_section_flex_right_item");


function second_Section_Text_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("second_section_text_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let second_Section_Text_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.3,
}

let second_Section_Text_Animation_API = new IntersectionObserver(second_Section_Text_Animation, second_Section_Text_Animation_Root);

second_Section_Text_Animation_API.observe(get_Second_Section_Text);





//PERCENTAGE_IMAGE ANIMATION
let get_Percentage_Img = document.querySelector(".percentage_img");


function percentage_Img_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("percentage_img_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let percentage_Img_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.3,
}

let percentage_Img_Animation_API = new IntersectionObserver(percentage_Img_Animation, percentage_Img_Animation_Root);

percentage_Img_Animation_API.observe(get_Percentage_Img);



//COUNTER ANIMATION
function animateCounter(element, target, duration) {
  let start = 0;
  let startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (target - start) + start);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Stats section is in view — starting counters...");
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          animateCounter(counter, target, 2000);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById("stats"));
});


//BAR CHART ANIMATION

let get_Instagram_Bar = document.querySelector(".instagram_bar");


function instagram_Bar_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("instagram_bar_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let instagram_Bar_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.5,
}

let instagram_Bar_Animation_API = new IntersectionObserver(instagram_Bar_Animation, instagram_Bar_Animation_Root);

instagram_Bar_Animation_API.observe(get_Instagram_Bar);





let get_Facebook_Bar = document.querySelector(".facebook_bar");


function facebook_Bar_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("facebook_bar_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let facebook_Bar_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.5,
}

let facebook_Bar_Animation_API = new IntersectionObserver(facebook_Bar_Animation, facebook_Bar_Animation_Root);

facebook_Bar_Animation_API.observe(get_Facebook_Bar);




let get_Tiktok_Bar = document.querySelector(".tiktok_bar");


function tiktok_Bar_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("tiktok_bar_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let tiktok_Bar_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.5,
}

let tiktok_Bar_Animation_API = new IntersectionObserver(tiktok_Bar_Animation, tiktok_Bar_Animation_Root);

tiktok_Bar_Animation_API.observe(get_Tiktok_Bar);




let get_Twitter_Bar = document.querySelector(".twitter_bar");


function twitter_Bar_Animation(entries){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("twitter_bar_animation_class");
            observer.unobserve(entry.target);
		}			
	});		
	
}


let twitter_Bar_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.5,
}

let twitter_Bar_Animation_API = new IntersectionObserver(twitter_Bar_Animation, twitter_Bar_Animation_Root);

twitter_Bar_Animation_API.observe(get_Twitter_Bar);





