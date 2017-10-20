function enterProjectX(projectName) {
    // Grab Clicked Project
    var currentProject = document.getElementById(projectName);
    // Add Animation CSS Class
    currentProject.classList.add('btnPrototypeAnim');
    currentProject.innerHTML = "";

    var remainingProjects = ["poly-btn", "adam-btn", "drone-btn", "shark-btn", "infinitum-btn", "fresh-btn", "gdg-btn", "moby-btn", "prev-btn", "fx-btn", "appazores-btn", "contact-btn"];

    var directoryProjects = ["project-polylingual", "project-adam", "project-drone", "project-shark", "project-infinitum", "project-fresh", "project-gdg", "project-moby", "project-prev", "project-fx", "project-appazores", "contact-me"];
    // Variable to Store the page we need to be redirected to
    var redirectTo = "";

    // Go Trough Remaining Projects - Check Project different from Current - Add Fade Out Animation - Delete Them
    for (var i = 0; i < remainingProjects.length; i++) {
        if (remainingProjects[i] != projectName) {
            var project = document.getElementById(remainingProjects[i]);
            project.classList.add('btnDissapearAnim');
            project.parentNode.removeChild(project);
        } else {
            redirectTo = directoryProjects[i];
        }
    }
    setTimeout(function () {
        window.location.href = "./" + redirectTo + ".html";
    }, 500);
}
