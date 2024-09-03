document.querySelectorAll('[data-category]').forEach(function(element) {
    var category = element.getAttribute('data-category');
    if (category === 'campaign') {
        element.textContent = 'キャンペーン';
    } else if (category === 'info') {
        element.textContent = 'インフォメーション';
    }else if(category=== 'other'){
        element.textContent = 'その他';
    }
});
