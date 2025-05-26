chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "showNotification") {
        console.log("MEOW");

        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Alert!',
            message: 'desc!',
        });
    }
});
