// Function to handle pagination
let currentPage = 1;
const totalPages = 10;

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
});

document.getElementById('previous-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

function updatePage() {
    document.getElementById('current-page').textContent = currentPage;
}

// Function to handle status
document.querySelectorAll('.status').forEach(status => {
    const statusText = status.textContent.trim();
    switch (statusText) {
        case 'Graduate':
            status.classList.add('bg-danger');
            break;
        case 'Admitted':
            status.classList.add('bg-success');
            break;
        case 'In Process':
            status.classList.add('bg-warning');
            break;
        default:
            break;
    }
});
