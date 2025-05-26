function addPlusButtons() {
    const songItems = document.querySelectorAll('ytmusic-responsive-list-item-renderer, ytmusic-two-row-item-renderer');

    songItems.forEach(item => {
        if (item.querySelector('.custom-queue-button')) return;

        const button = document.createElement('button');
        button.textContent = '+';
        button.className = 'custom-queue-button';
        button.style.cssText = `
      position: absolute;
      right: 6%;
      top: 30%;
      background-color: #1db954;
      color: white;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-size: 16px;
      cursor: pointer;
      z-index: 0.5;
    `;

        button.onclick = () => {
            // console.log(item)

            // setTimeout(() => {
            //     chrome.runtime.sendMessage({ action: "showNotification" });
            //     console.log("meow");

            // }, 4000);

            const menuButton = item.getElementsByClassName('yt-spec-touch-feedback-shape__fill')[2] ||
                item.getElementsByClassName('yt-spec-touch-feedback-shape__fill')[1] ||
                item.getElementsByClassName('yt-spec-touch-feedback-shape__fill')[0];

            // console.log(menuButton);

            if (menuButton) {
                menuButton.click();

                const n = setInterval(() => {
                    const menuItems = [...document.querySelectorAll('ytmusic-menu-popup-renderer ytmusic-menu-service-item-renderer')];
                    const queueItem = menuItems[1];

                    if (queueItem) {
                        queueItem.click();
                        clearInterval(n);
                    }
                }, 10);
            }
        };

        item.style.position = 'relative';
        item.appendChild(button);
    });
}

const observer = new MutationObserver(() => {
    addPlusButtons();
});

observer.observe(document.body, { childList: true, subtree: true });
addPlusButtons();
