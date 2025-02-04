// Example: Alert when clicking a staff member (Replace with real interactions)
document.addEventListener("DOMContentLoaded", () => {
    let staffMembers = document.querySelectorAll(".staff-member");
    
    staffMembers.forEach(member => {
        member.addEventListener("click", () => {
            alert("You clicked on " + member.querySelector("h3").innerText);
        });
    });
});

