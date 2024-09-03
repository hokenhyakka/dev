document.addEventListener("DOMContentLoaded", function() {
    var connections = {
        "aear": "アイアル少額短期保険",
        "aflac": "アフラック",
        "aeon-allianz": "イオン・アリアンツ生命",
        "aig": "AIG損保",
        "aiaru" : "アイアル少額短期保険",
        "anicom": "アニコム損保",
        "asahi": "朝日生命",
        "au-damage": "au損保",
        "axa": "アクサ生命",
        "daiichi-frontier": "第一フロンティア生命",
        "fwd": "FWD生命",
        "gibraltar": "ジブラルタ生命",
        "hanasaku": "はなさく生命",
        "ipet": "アイペット損保",
        "manulife": "マニュライフ生命",
        "medicare": "メディケア生命",
        "met-life": "メットライフ生命",
        "mitsui-direct": "三井ダイレクト損保",
        "mitsui-sumitomo-kaijo": "三井住友海上",
        "mitsui-sumitomo-kaijo-aioi": "三井住友海上あいおい生命",
        "nanairo": "なないろ生命",
        "neo-first": "ネオファースト生命",
        "nissei": "日本生命",
        "orix": "オリックス生命",
        "secom": "セコム損保",
        "sompo-himawari": "SOMPOひまわり生命",
        "sony-damage": "ソニー損保",
        "sony-life": "ソニー生命",
        "sumitomo": "住友生命",
        "t-n-d-financial": "T&Dフィナンシャル生命",
        "tokyo-kaijo-fire": "東京海上日動火災保険",
        "tokyo-kaijo-nichido": "東京海上日動",
        "tokyo-kaijo-nichido-anshin": "東京海上日動あんしん生命",
        "zurich": "チューリッヒ生命"
    };

    for (var key in connections) {
        var targetElements = document.querySelectorAll("[data-connection='" + key + "']");
        targetElements.forEach(function(targetElement) {
            var pElement = targetElement.querySelector("p");
            if (pElement) {
                pElement.textContent = connections[key] + " " + pElement.textContent;
            }
        });
    }
});
