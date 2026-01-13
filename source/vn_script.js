var step = 0;
var choice_active = false;
//var anim_cancel = false;

//function sleep(milliseconds) {                                            //once again stolen from the internet. i love the internet <3

//    var start = new Date().getTime();

//    for (var i = 0; i < 1e7; i++) {

//        if ((new Date().getTime() - start) > milliseconds){
//            break;
//        }

//    }

//}                                                                         //ok so i realized that this code sucks

//function anim_right(img) {

//    let id = null;
//    let spr_left = 600;
//    clearInterval(id);
//   id = setInterval(frame, 5);

//    function frame() {

//        if (spr_left == 400) {

//           clearInterval(id);

//        }
        
//        else {

//            spr_left -= 1;
//            img.style.left = spr_left + 'px';

//        }

//    }

//}                                                                         //commented out js animation because javascript was being fucking incorrigible

function draw_sprite(sprite_src, sprite_id, animated=true) {

    const img = document.createElement("img");                              //add the image to the div
    img.src = sprite_src;                                                   //
    img.id = sprite_id;                                                     //add the desired id to the image
    img.style = "position: absolute; height: 500px; bottom: 0px;"           //get desired style
    const src = document.getElementById("game_container");                  //
    src.appendChild(img);                                                   //

    if (animated == true) {

        if (sprite_src.includes("right") == true) {                         //checks if the image is on the right side
                                        
            //sprite_anim_right(img);                                       //see line 41
            img.style.animation = '"sprite-animate-right" 0.2s ease-out forwards';

        }
    
        else {                                                              //image must be on the left side

            img.style.right = "600px";                                      //make image slightly out of bounds for animation
            img.style.animation = '"sprite-animate-left" 0.2s ease-out forwards';

        }

    }

    else {

        if (sprite_src.includes("right") == true) {
            img.style.left = "400px";
        }

        else {
            img.style.right = "400px";
        }

    }

}

function clear_sprite(img) {
    img.remove();
}

function clear_spr(id) {
    document.getElementById(id).remove();
}

function add_text(colour, txt, direction) {

    const div = document.getElementById(direction + "_text");
    div.innerHTML = txt;
    div.style.color = colour;
    div.style.display = "inline";                                           //make text box appear

}

function add_text_mult(txt1, color1, txt2, color2, direction) {

    //hal's dialogue
    hal_span = document.createElement("span");
    hal_span.id = "hal_span";
    hal_span.style.color = "#e00707";
    hal_span.innerHTML = " TT: -are guaranteed to be 91% indistinguishable from DS's native neurological responses-";

    //dirk's dialogue
    dirk_span = document.createElement("span");
    dirk_span.id = "dirk_span";
    dirk_span.style.color = "#f2a400";
    dirk_span.style.display = "block";
    dirk_span.innerHTML = "DIRK: I don't know why the fuck I programmed it to say that, it won't stop.";

    const div = document.getElementById("right_text");
    div.style.height = "300px";
    div.appendChild(hal_span);
    div.appendChild(dirk_span);
    div.style.display = "inline";                                       //make text box appear

}

function end_choice() {

    step++;
    choice_active = false;
    game_step();

}

function create_choice(choice1_txt, choice2_txt, function1="", function2="") {

    const top_choice = document.getElementById("top_choice");               //get the divs
    const bottom_choice = document.getElementById("bottom_choice");         //

    top_choice.innerHTML = choice1_txt;                                     //do the top button
    top_choice.style = "display: inline !important;";                       //
    top_choice.onclick = function1;                                         //

    bottom_choice.innerHTML = choice2_txt;                                  //do the bottom button
    bottom_choice.style = "display: inline !important;";                    //
    bottom_choice.onclick = function2;                                      //

}

function remove_choices() {

    document.getElementById("top_choice").style = "display: none";
    document.getElementById("bottom_choice").style = "display: none";

}

function mute() {

    if (music_playing == true) {
    
        music.pause();
        mute_button.innerHTML = "Play Audio";
        music_playing = false;

    }

    else {

        music.play();
        mute_button.innerHTML = "Pause Audio";
        music_playing = true;

    }

}

function game_step() {
        
    document.getElementById("left_text").style.display = "none";            //clear the text boxes so that they don't remain
    document.getElementById("right_text").style.display = "none";           //

}

var music = document.getElementById("song");                                //handling stuff with the music
music.loop = true;                                                          //
var mute_button = document.getElementById("mute_button");                   //
var music_playing = true;                                                   //