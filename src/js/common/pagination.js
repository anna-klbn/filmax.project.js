// import Pagination from 'tui-pagination';

const pagination = document.querySelector(".pagination-list");
let totalPages = 20;
  
function element(totalPages, page) {
    let paginationItem = "";
    let activeItem;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1) {
        paginationItem += ` <li class="btn-prev" onclick="element(totalPages, ${page - 1})">
      <span><i class="fas fa-angle-left"></i>Prev</span>
    </li>`; 
    }
    if (page > 2) {
        paginationItem += ` <li class="numb"><span>1</span></li>`;
    }
    if (page > 3) {
        paginationItem += ` <li class="dots"><span>...</span></li>`;
    }
    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if (page === pageLength) {
            activeItem = "active";
        } else {
            activeItem = "";
        }
        paginationItem += `<li class="numb ${activeItem} onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    if (page < totalPages - 1) {
    
        if (page < totalPages - 2) {
            paginationItem += ` <li class="dots"><span>...</span></li>`;
        }
        paginationItem += ` <li class="numb"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) {
        paginationItem += `  <li class="btn-next" onclick="element(totalPages, ${page + 1})">
      <span><i class="fas fa-angle-rigth"></i>Next</span>
    </li>`;
    }
    pagination.innerHTML = paginationItem;
}

element(totalPages, 5);