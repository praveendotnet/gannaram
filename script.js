// 1. Check if Admin is logged in
window.onload = function() {
    const isAdmin = localStorage.getItem("isAdmin");
    
    // Load saved text from local storage (Simulation of database)
    loadSavedContent();

    if(isAdmin === "true") {
        document.body.classList.add("admin-mode");
        document.getElementById("admin-bar").classList.remove("hidden");
        enableEditing();
    }
};

// 2. Enable Editing for Admin
function enableEditing() {
    const editables = document.querySelectorAll(".editable");
    editables.forEach(el => {
        el.contentEditable = "true";
        el.classList.add("editing");
    });
}

// 3. Save Changes (Simulation)
function saveChanges() {
    const editables = document.querySelectorAll(".editable");
    editables.forEach(el => {
        // Save text to browser storage using the element's ID
        if(el.id) {
            localStorage.setItem(el.id, el.innerText);
        }
    });
    alert("Changes saved locally! (To save permanently on GitHub, you must edit the code)");
}

// 4. Load Content on Page Load
function loadSavedContent() {
    const editables = document.querySelectorAll(".editable");
    editables.forEach(el => {
        if(el.id) {
            const saved = localStorage.getItem(el.id);
            if(saved) el.innerText = saved;
        }
    });
}

// 5. Logout
function logout() {
    localStorage.removeItem("isAdmin");
    window.location.reload();
}

// 6. Language Toggle (Simple)
function toggleLanguage() {
    alert("For full Hindi translation, we would duplicate the HTML page to 'index-hi.html' and translate the text there.");
}
