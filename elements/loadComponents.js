async function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) return; // avoid errors if element not found

    try {
        const response = await fetch(file);
        const content = await response.text();
        container.innerHTML = content;
    } 
    catch (error) {
        console.error("Component failed to load:", file, error);
    }
}