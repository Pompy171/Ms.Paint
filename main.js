var menu_list = ["Chicken Tandoori Pizza",
    "Veg Duelex Pizza",
    "Paneer Tikka Pizza",
    "Chicken Tikka Pizza"];

function getmenu() {
    var data = "<ol>";
    menu_list.sort();

    for (var i = 0; i < menu_list.length ;
         i++) {
        data = data + "<li>" + menu_list[i] + "</li>";
        console.log(data);
    }
    data = data + "</ol>";
    document.getElementById("display_menue").innerHTML = data;

}

function add_item() {
    var data = "<section class='cards'>";
    var items = document.getElementById("add_item").value;
    menu_list.push(items);

    for (var i = 0; i < menu_list.length ; i++) {
        data = data + "<div class='card'><img src='images/pizzaIMG.png'>" + menu_list[i] + "</div>";
        console.log(data);

    }
    data = data + "</section>";
    document.getElementById("display_addedmenu").innerHTML = data;
}