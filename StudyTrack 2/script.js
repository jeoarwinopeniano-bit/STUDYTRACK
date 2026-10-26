document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("#registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const passwordField = document.querySelector("#password");
            const confirmField = document.querySelector("#confirm_password");
            if (!passwordField || !confirmField) return;
            const password = passwordField.value;
            const confirmPassword = confirmField.value;
            if (password !== confirmPassword) {
                event.preventDefault();
                alert("Passwords do not match.");
            }
        });
    }

    document.querySelectorAll("[data-logout-confirm]").forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (!window.confirm("Do you want to log out?")) event.preventDefault();
        });
    });

    document.querySelectorAll(".transient-message").forEach(function (message) {
        window.setTimeout(function () {
            message.classList.add("message-hide");
            window.setTimeout(function () { message.remove(); }, 350);
        }, 1650);
    });

    const deadline = document.querySelector("#deadline");
    if (deadline) {
        const now = new Date();
        deadline.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
            .toISOString().slice(0, 10);
    }

    // Show a clear progress state while forms are being submitted.
    document.querySelectorAll("form[data-loading]").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (event.defaultPrevented) return;
            if (form.hasAttribute("data-confirm") && form.dataset.confirmed !== "true") return;
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
                button.textContent = form.dataset.loading;
                button.setAttribute("aria-busy", "true");
            }
        });
    });

    // A reusable confirmation dialog protects task and note deletions.
    const dialog = document.createElement("dialog");
    dialog.className = "confirm-dialog";
    dialog.innerHTML = '<div class="confirm-content"><h2>Confirm deletion</h2><p class="confirm-message"></p><div class="confirm-actions"><button type="button" class="cancel-delete">Cancel</button><button type="button" class="confirm-delete">Delete</button></div></div>';
    document.body.appendChild(dialog);
    let formToDelete = null;

    document.addEventListener("submit", function (event) {
        const form = event.target.closest("form[data-confirm]");
        if (!form || form.dataset.confirmed === "true") return;
        event.preventDefault();
        formToDelete = form;
        dialog.querySelector(".confirm-message").textContent = form.dataset.confirm;
        if (typeof dialog.showModal === "function") dialog.showModal();
        else if (window.confirm(form.dataset.confirm)) form.requestSubmit();
    });

    dialog.querySelector(".cancel-delete").addEventListener("click", function () {
        dialog.close();
        formToDelete = null;
    });
    dialog.querySelector(".confirm-delete").addEventListener("click", function () {
        if (!formToDelete) return;
        formToDelete.dataset.confirmed = "true";
        formToDelete.requestSubmit();
    });
});
