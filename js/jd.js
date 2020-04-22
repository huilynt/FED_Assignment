// JavaScript source code
//Jedidiah Wong Sai Hong
function SwapText() {
    document.getElementById("changeable").innerHTML = "The Spirit Cooking Dinner Is Where We Allow Your Offspring To Bond With Our Staff And Feast Upon The Flesh Of Goat.\
    Our Staff Are Very Friendly And Will Treat Your Offspring With Much Care And Passion.The Spirit Cooking Dinner Is Held \
    Every Saturday Within The Confinements Of The Centre Of Community Beneath Our Mother Earth.Allow Your Offspring To\
    Partake In This Activity And You Shall Achieve Prosperity Unlike Those Who Have Not Committed To The Same Action As You.";
    document.getElementById("headchangeable").innerHTML = "Allow Your Offspring To Attend Our Spirit Cooking Dinner Sessions";
    document.getElementById("offspringCollected").innerHTML = "your offspring will be collected on the designated time";
    document.getElementById("hide").style.display = "none";
}

function GoToCookPage() {
    if (document.getElementById("classes").value == "spiritCook") {
        window.open("spiritcooking.html");
    }
    else {
        alert("Thank you for your feedback!");
    }
}