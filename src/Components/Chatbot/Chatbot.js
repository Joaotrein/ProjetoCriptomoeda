
(function (d, m) {
    const kommunicateSettings =
        { "appId": "3b2330dc77e7981763bd94f8f936ef03", "popupWidget": false, "automaticChatOpenOnNavigation": false };
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});


function Chatbot() {

    return (
        <>

        </>
    )
}

export default Chatbot