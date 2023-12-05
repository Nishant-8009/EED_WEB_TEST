// It is loader module: Just Add this script at the end of the page


const loaderInit = () => {
    let loaderContainer = document.createElement('div');
    loaderContainer.className = "bg-white h-100vh d-flex justify-content-center align-items-center w-100 flex-column bg-logo position-fixed top-0 loader_container";
    loaderContainer.id = "main_loader";
    // Create an img element
    let img = document.createElement('img');
    img.src = "./../assets/news/footer_logo.svg";
    img.alt = "Main_logo";
    img.srcset = "./../assets/news/footer_logo.svg";
    img.className = "loader_anm";

    // Create an h1 element
    let h1 = document.createElement('h1');
    h1.className = "fw-bold mt-5 h1 loader_anm anim-typewriter line-1";
    h1.textContent = "Department of Electrical Engineering";

    // Append img and h1 to loaderContainer
    loaderContainer.appendChild(img);
    loaderContainer.appendChild(h1);

    // Append loaderContainer to the body
    document.body.appendChild(loaderContainer);
}
loaderInit();
window.addEventListener('load', () => {
    setTimeout(() => {
        let elem = document.getElementById("main_loader");
        elem.remove();
    }, 1000)
});