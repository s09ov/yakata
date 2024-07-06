function updateRemainingTime() {
    // Dateオブジェクトの生成
    var now = new Date();
    var target = new Date();

    // 目標時間の設定
    target.setHours(19);
    target.setMinutes(30);
    target.setSeconds(0);

    // 目標時間から現在時刻を減算
    var remainingTime = target - now;

    // 曜日計算
    day = now.getDay();
    if (day != 0) {
        remainingTime = remainingTime + (6 - now.getDay()) * 24 * 60 * 60 * 1000;
    }

    // 残り時間の表示
    if (remainingTime < 0) {
        document.getElementById("rest").textContent = "開館中";
    }
    else {
        var remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
        var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("rest").textContent = remainingHours + "時間 " + remainingMinutes + "分 " + remainingSeconds + "秒";
    }

    document.getElementById("rest").textContent = "未定"; // 仮
}

setInterval(updateRemainingTime, 1000);