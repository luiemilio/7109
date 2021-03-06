//event listeners.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText =
            'OpenFin is not available - you are probably running in a browser.';
    }
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
    //get a reference to the current Application.
    const app = fin.desktop.Application.getCurrent();

    //we will increment on child window creation.
    let winNumber = 0;

    //we get the current OpenFin version
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

    const app2Btn = document.querySelector('#app2');

    app2Btn.addEventListener('click', () => {
        const app2 = fin.desktop.Application.createFromManifest('fin://localhost:5555/app2.json', app => app.run(), console.log);
    });
}
