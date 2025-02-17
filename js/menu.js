const URL_API = "http://localhost:3000/";
export const menu = async () => {
    let arr;
    arr = await fetch(URL_API + 'menu')
        .then(response => { return response.json(); })
        .then(data => { return data; });
    let str = `
        <ul class="nav justify-content-center">
    `;
    arr.forEach((a) => {
        if (a.dropdown) {
            str += `
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../html/${a.link}" id="${a.id}">
                        ${a.title}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="${a.id}-dropdown" id="${a.id}-dropdown-menu">
            `;
            a.dropdown.forEach((drop) => {
                str += `
                    <li>
                        <a class="dropdown-item" href="../html/${drop.link}">
                            ${drop.title}
                        </a>
                    </li>
                `;
            });
            str += `
                    </ul>
                </li>
            `;
        }
        else {
            str += `
                <li class="nav-item">
                    <a class="nav-link" href="../html/${a.link}">${a.title}</a>
                </li>
            `;
        }
    });
    str += `
        </ul>
    `;
    return str;
};
export const addDropdownListeners = () => {
    document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
        const anchor = item.querySelector("a");
        if (anchor) {
            const id = anchor.id;
            item.addEventListener("mouseover", () => showDropdown(id));
            item.addEventListener("mouseout", () => hideDropdown(id));
        }
    });
};
function showDropdown(id) {
    const dropdownMenu = document.getElementById(`${id}-dropdown-menu`);
    if (dropdownMenu) {
        dropdownMenu.style.display = "block";
        dropdownMenu.style.opacity = "1";
    }
}
function hideDropdown(id) {
    const dropdownMenu = document.getElementById(`${id}-dropdown-menu`);
    if (dropdownMenu) {
        dropdownMenu.style.display = "none";
        dropdownMenu.style.opacity = "0";
    }
}
function then(arg0) {
    throw new Error("Function not implemented.");
}
