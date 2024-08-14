document.querySelector('.filter-btn').addEventListener('click', function () {
    const filtersDropdown = document.getElementById('filtersDropdown');
    if (filtersDropdown.style.display === "none" || filtersDropdown.style.display === "") {
        filtersDropdown.style.display = "block";
    } else {
        filtersDropdown.style.display = "none";
    }
});

document.getElementById('clearFilters').addEventListener('click', function () {
    document.getElementById('batch').selectedIndex = 0;
    document.getElementById('department').selectedIndex = 0;
    document.getElementById('quota').selectedIndex = 0;
    document.getElementById('companies').selectedIndex = 0;
    document.getElementById('marks').selectedIndex = 0;
});
