/**
 * モーダルの開閉を制御する
 */
document.querySelectorAll('[data-modal-open]').forEach(elem => {
    // 開閉する対象の要素を取得する
    const targetModalId = elem.getAttribute("data-modal-open");
    const modal = document.getElementById(targetModalId);
    // elem.getAttribute("data-modal-open")で"modal"を取得。(HTML13行目)
    // 17行目のdiv要素を取得。
  
  
    // 閉じる
    modal.querySelectorAll('[data-modal-close]').forEach(closeElem => {
        closeElem.addEventListener('click', function() {
            modal.classList.remove('is-open');
        });
    });
    // HTML22行目のボタンがクリックされた時、17行目のclassを'is-open'を削除。
  
  
    // 開く
    elem.addEventListener('click', function () {
        modal.classList.add('is-open');
    });
    // HTML13行目のボタンがクリックされた時、17行目のclassを'is-open'に書き換え。
  });