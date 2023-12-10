const FilterSearchbarInit = () => {

    const searchInput = document.getElementById("journal_search");
    const errorDiv = document.getElementById("error_message");
    errorDiv.classList.add("hidden");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        const publications = document.querySelectorAll("#publication_container li");
        let hasMatches = false;

        publications.forEach((publication) => {
            const journal = publication.textContent.toLowerCase();

            if (journal.includes(searchTerm)) {
                publication.classList.remove("hidden");
                hasMatches = true;
            } else {
                publication.classList.add("hidden");
            }
        });

        if (!hasMatches) {
            errorDiv.classList.remove("hidden");
        } else {
            errorDiv.classList.add("hidden");
        }
    });
};

const FilterYearInit = (year) => {
    const publications = document.querySelectorAll("#publication_container li");
    const errorDiv = document.getElementById("error_message");

    errorDiv.classList.add("hidden");
    if (year == 0) {
        publications.forEach((publication) => {
            publication.classList.remove("hidden");
        });
    } else {
        let hasMatches = false;

        publications.forEach((publication) => {
            const year_i = publication.querySelector(".date").textContent.split(" ").pop().replace(",", "");

            if (year_i == year) {
                publication.classList.remove("hidden");
                hasMatches = true;
            } else {
                publication.classList.add("hidden");
            }
        });

        if (!hasMatches) {
            errorDiv.classList.remove("hidden");
        } else {
            errorDiv.classList.add("hidden");
        }
    }
}

const FilterFacultyInit = (faculty) => {
    const publications = document.querySelectorAll("#publication_container li");
    const errorDiv = document.getElementById("error_message");
    errorDiv.classList.add("hidden");
    if (faculty === '0') {
        publications.forEach((publication) => {
            publication.classList.remove("hidden");
        });
    } else {
        let hasMatches = false;

        publications.forEach((publication) => {
            const facultyNames = publication.querySelector(".author").textContent.toLowerCase();

            if (facultyNames.includes(faculty.toLowerCase())) {
                publication.classList.remove("hidden");
                hasMatches = true;
            } else {
                publication.classList.add("hidden");
            }
        });

        if (!hasMatches) {
            errorDiv.classList.remove("hidden");
        } else {
            errorDiv.classList.add("hidden");
        }
    }
}


const FilterPublicationTypeInit = (type) => {
    const publications = document.querySelectorAll("#publication_container li");
    const errorDiv = document.getElementById("error_message");
    errorDiv.classList.add("hidden");
    if (type === '0') {
        publications.forEach((publication) => {
            publication.classList.remove("hidden");
        });
    } else {
        let hasMatches = false;

        publications.forEach((publication) => {
            const publicationType = publication.querySelector(".journal").textContent.toLowerCase();

            if (publicationType.includes(type.toLowerCase())) {
                publication.classList.remove("hidden");
                hasMatches = true;
            } else {
                publication.classList.add("hidden");
            }
        });

        if (!hasMatches) {
            errorDiv.classList.remove("hidden");
        } else {
            errorDiv.classList.add("hidden");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    FilterSearchbarInit();
    FilterYearInit(0);
    FilterFacultyInit(0);
    FilterPublicationTypeInit(0);
});