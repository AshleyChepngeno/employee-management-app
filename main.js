document.addEventListener("DOMContentLoaded", function() {
    const editButtons = document.querySelectorAll(".action-edit");
    editButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Edit Alert");
        });
    });

    const deleteButtons = document.querySelectorAll(".action-delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            confirm("Are you sure you want to delete?");
        });
    });
});