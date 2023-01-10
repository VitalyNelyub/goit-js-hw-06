const totalEl = document.querySelectorAll(".item");

// console.log(totalEl);

console.log(`Number of categories: ${totalEl.length}`); // кількість елементів лі

let categories = "";
let totalCategories = "";

for (const elem of totalEl) {
  categories = elem.children[0].textContent;

  totalCategories = elem.children[1].children.length;

  console.log(`Category: ${categories}`);
  console.log(`Elements: ${totalCategories}`);
}

