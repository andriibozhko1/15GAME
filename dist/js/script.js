(function() {
  const container = document.querySelector(".container");
  const blocks = [];
  const cellQuantity = 16;
  const shuffleBtn = document.querySelector(".btn");

  const innitTable = function() {
    for (let i = 0; i < cellQuantity; i++) {
      const table = {};
      table.id = i + 1;
      table.isEmpty = false;
      if (i == cellQuantity - 1) {
        table.isEmpty = true;
      }
      blocks.push(table);
    }
  };
  const renderBlocks = function() {
    container.innerHTML = "";
    for (let i = 0; i < blocks.length; i++) {
      const createBlock = document.createElement("div");
      createBlock.classList.add("block");
      createBlock.innerHTML = blocks[i].id;
      if (blocks[i].isEmpty == true) {
        createBlock.classList.add("move");
        createBlock.innerHTML = "";
      }
      container.appendChild(createBlock);
    }
  };
  const moveBlock = function(item1, item2) {
    const temp = blocks[item1];
    if (temp == undefined || temp > 4) {
      return;
    }
    blocks[item1] = blocks[item2];
    blocks[item2] = temp;
  };

  const findEmptyBlock = function() {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].isEmpty == true) {
        return i;
      }
    }
  };

  const randomSort = function() {
    return Math.random() - 0.5;
  };
  const winCombination = function() {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].id !== i + 1) {
        return;
      }
    }
    alert("WIN!!!");
  };
  shuffleBtn.addEventListener("click", function() {
    blocks.sort(randomSort);
    renderBlocks();
  });
  document.addEventListener("keydown", function(event) {
    let x = findEmptyBlock();
    switch (event.keyCode) {
      case 39:
        if (x == 12 || x == 8 || x == 4) {
          return;
        }
        moveBlock(findEmptyBlock() - 1, findEmptyBlock());
        renderBlocks();
        setTimeout(winCombination, 0);
        break;
      case 37:
        if (x == 11 || x == 7 || x == 3) {
          return;
        }
        moveBlock(findEmptyBlock() + 1, findEmptyBlock());
        renderBlocks();
        setTimeout(winCombination, 0);
        break;
      case 40:
        moveBlock(findEmptyBlock() - 4, findEmptyBlock());
        renderBlocks();
        setTimeout(winCombination, 0);
        break;
      case 38:
        moveBlock(findEmptyBlock() + 4, findEmptyBlock());
        renderBlocks();
        setTimeout(winCombination, 0);
        break;
    }
  });
  innitTable();
  renderBlocks();
})();
