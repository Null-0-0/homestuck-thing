var animOver = false;
var isWalking = false;

class TalkSprite {

    constructor(name, src) {

        //create the variables
        this.src = src;
        this.name = name;

        const img = document.createElement("img");
        img.src = this.src;
        img.id = this.name;
        img.style = "position: absolute; height: 500px; bottom: 0; display: none;";
        document.getElementById("game_container").appendChild(img);
        
    }

    drawSprite(animated=true) {

        document.getElementById(this.name).style.display = "inline";

        if (animated == true) {

            if (this.src.includes("right") == true) {      
                img.style.animation = '"sprite-animate-right" 0.2s ease-out forwards';
            }
    
            else {                                                             

                img.style.right = "600px";
                img.style.animation = '"sprite-animate-left" 0.2s ease-out forwards';

            }

        }

        else {

            if (this.src.includes("right") == true) {
                img.style.left = "400px";
            }

            else {
                img.style.right = "400px";
            }

        }

    }

    hideSprite() {
        document.getElementById(this.name).style.display = "none";
    }

}

class WalkSprite {

    constructor(leftSrc, leftWalkSrc, rightSrc, rightWalkSrc, upSrc, upWalkSrc, downSrc, downWalkSrc, name, defaultDirection="down", x="0px", y="0px") {
        
        this.leftSrc = leftSrc;
        this.leftWalkSrc = leftWalkSrc;
        this.rightSrc = rightSrc;
        this.rightWalkSrc = rightWalkSrc;
        this.upSrc = upSrc;
        this.upWalkSrc = upWalkSrc;
        this.downSrc = downSrc;
        this.downWalkSrc = downWalkSrc;
        this.defaultDirection = defaultDirection;
        this.name = name;
        this.coordinates = [x, y];
        this.x = x;
        this.y = y;

        const img = document.createElement("img");
        img.style.height = "50px";                              
        img.class = "walkSprite";
        img.style.left = this.x;
        img.style.bottom = this.y;
        img.id = this.name;

        if (defaultDirection == "down") {
            img.src = downSrc;
        }

        else if (defaultDirection == "up") {
            img.src = upSrc;
        }

        else if (defaultDirection == "left") {
            img.src = leftSrc;
        }

        else if (defaultDirection == "right") {
            img.src = rightSrc;
        }

        document.getElementById("game_container").appendChild(img);
        this.image = img;

    }

    showLeft() {
        sprite_of_vriska_img.src = walksprite.leftSrc;
    }

    showRight() {
        sprite_of_vriska_img.src = walksprite.rightSrc;
    }

    showUp() {
        sprite_of_vriska_img.src = walksprite.upSrc;
    }

    showDown() {
        sprite_of_vriska_img.src = walksprite.downSrc;
    }

    walkLeft(x) {
        
        this.image.src = this.leftWalkSrc;
        let id = null;
        let initialPos = parseInt(x.split("p")[0], 10);
        let pos = initialPos;

        let sprite = document.getElementById(this.name);

        id = setInterval(frame, 1);

        function frame() {

            if (pos == initialPos - 50) {

                isWalking = false;
                walksprite_x = pos + "px";
                walksprite.showLeft();
                clearInterval(id);

            } 
            
            else {

                pos -= 2;
                sprite.style.left = pos + "px";

            }
        }

    }

    walkRight(x) {

        this.image.src = this.rightWalkSrc;
        let id = null;
        let initialPos = parseInt(x.split("p")[0], 10);
        let pos = initialPos;

        let sprite = document.getElementById(this.name);

        id = setInterval(frame, 1);

        function frame() {

            if (pos == initialPos + 50) {

                isWalking = false;
                walksprite_x = pos + "px";
                walksprite.showRight();
                clearInterval(id);

            } 
            
            else {

                pos += 2;
                sprite.style.left = pos + "px";

            }
        }

    }

    walkUp(y) {

        this.image.src = this.upWalkSrc;
        let id = null;
        let initialPos = parseInt(y.split("p")[0], 10);
        let pos = initialPos;

        let sprite = document.getElementById(this.name);

        id = setInterval(frame, 1);

        function frame() {

            if (pos == initialPos + 50) {

                isWalking = false;
                walksprite_y = pos + "px";
                walksprite.showUp();
                clearInterval(id);

            } 
            
            else {

                pos += 2;
                sprite.style.bottom = pos + "px";

            }
        }

    }

    walkDown(y) {

        this.image.src = this.downWalkSrc; 
        let id = null;
        let initialPos = parseInt(y.split("p")[0], 10);
        let pos = initialPos;

        let sprite = document.getElementById(this.name);

        id = setInterval(frame, 1);

        function frame() {

            if (pos == initialPos - 50) {

                isWalking = false;
                walksprite.showDown();
                walksprite_y = pos + "px";
                clearInterval(id);

            } 
            
            else {

                pos -= 2;
                sprite.style.bottom = pos + "px";

            }
        }

    }

}

class Text {

    constructor(character, content, direction="left") {

        this.character = character;
        this.content = content;
        this.direction = direction;

    }

    createText() {

        const div = document.getElementById(this.direction + "_text");
        div.innerHTML = this.character.toUpperCase() + ": " + this.content;

        switch (this.character) {                                               //determines colour from character name

            case "vriska":  
            case "aranea":
                var colour = "#005682";
                break;
            
            case "kanaya":
            case "porrim": 
                var colour = "#008141";
                break;                                                          

            case "karkat":
                var colour = "#626262";
                break;

            case "kankri":
                var colour = "#ff0000";
                break;

        }

        div.style.color = colour;
        div.style.display = "inline";                                           //make text box appear
    
    }

    hide() {
        const div = document.getElementById(this.direction + "_text");
        div.style.display = "none";
    }

}

var walksprite = new WalkSprite("assets/walkSprites/vriska/left_stand.gif", "assets/walkSprites/vriska/walk_left.gif", "assets/walkSprites/vriska/right_stand.gif", "assets/walkSprites/vriska/walk_right.gif", "assets/walkSprites/vriska/up_stand.gif", "assets/walkSprites/vriska/walk_up.gif", "assets/walkSprites/vriska/down_stand.gif", "assets/walkSprites/vriska/walk_down.gif", "vriska", defaultDirection="down", x="400px", y="300px"); //name would've been "definitely vriska trust :)" but that would've led to some complications.
var walksprite_x = "400px";
var walksprite_y = "300px";
var sprite_of_vriska_img = walksprite.image;

let v_stand = new TalkSprite("doing something sillay =3/assets/poses/vriska_poses/left/stand.gif");

document.addEventListener("keypress", function onEvent(event) {

    animOver = false;

    if (event.key === "a" && isWalking == false && walksprite_x != "0px") {
        isWalking = true;
        walksprite.walkLeft(walksprite_x);
    }

    else if (event.key === "d" && isWalking == false && walksprite_x != "750px") {
        isWalking = true;
        walksprite.walkRight(walksprite_x);
    }

    else if (event.key === "w" && isWalking == false && walksprite_y != "550px") {
        isWalking = true;
        walksprite.walkUp(walksprite_y);
        console.log(walksprite_y)
    }

    else if (event.key === "s" && isWalking == false && walksprite_y != "0px") {
        isWalking = true;
        walksprite.walkDown(walksprite_y);
    }

    else if (event.key === "Space") {
        console.log("wowza you hit space");
    }

    else if (event.key === "i") {
        walksprite.image.src = "C:/Users/whent/Desktop/homestuck html bullshit/doing something sillay =3/assets/saphiregaze-sapphire-gaze.gif";
        console.log("i");
    }

});