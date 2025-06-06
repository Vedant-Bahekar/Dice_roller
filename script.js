function roll_dice() {
    let dice_result = document.getElementById("Dice_Result");
    let dice_images = document.getElementById("Dice_Images");
    let no = document.getElementById("number").value;

    let ans = [];
    let images = [];
    dice_result.textContent = "";
    dice_images.innerHTML = "";

    for (let i = 0; i < no; i++) {
        let temp = Math.floor((Math.random() * 6) + 1);

        ans.push(temp);
        let img = document.createElement("img");
        img.src = `images/${temp}.png`;
        img.alt = `Dice ${temp}`;

        images.push(img);
    }

    dice_result.textContent = `result: ${ans.join(', ')}`;
    images.forEach(img => dice_images.appendChild(img));
}