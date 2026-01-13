document.addEventListener('keydown', logKey);

function get_page_number() {

    url = window.location.href;                             //get the last bit of the url
    final_slash = url.lastIndexOf("/");                     //
    page_number_url = url.slice(final_slash);               //

    final_dot = page_number_url.lastIndexOf(".");           //isolate the number part of the url
    page_number = page_number_url.slice(1, final_dot);      //

    int_page_number = parseInt(page_number, 10);            //turn it into an int and add 1 to it and then return it
    return int_page_number;                                 //

}

function logKey(e) {

    if (`${e.code}` == "ArrowRight") {

        page_number = get_page_number() + 1;                //increment page number and turn it into a string
        next_page_number = '' + page_number;                //

        url -= page_number_url;                             //replace previous page number with new page number
        url += next_page_number + ".html";                  //
        url = url.replace("NaN", "");                       //note: a random NaN appeared but i could not find why it appeared so i just did this :3
        window.location = url;                              //

    }

    if (`${e.code}` == "ArrowLeft") {

        page_number = get_page_number() - 1;                //decrememnt page number and turn it into a string           
        next_page_number = '' + page_number;                //

        if (next_page_number != "0") {                      //makes sure you can't go to page 0 (doesn't exist)

            url -= page_number_url;                         //replace previous page number with new page number
            url += next_page_number + ".html";              //
            url = url.replace("NaN", "");                   //note: a random NaN appeared but i could not find why it appeared so i just did this :3
            window.location = url;                          //
        
        }

    }
    
}

function get_height(id) {

    divElement = document.getElementById(id);
    elemHeight = divElement.offsetHeight;
    
    return elemHeight;

}

document.getElementById("container").style.height = (get_height("wrapper") + 60) + "px"; //make the container div enclose the wrapper div