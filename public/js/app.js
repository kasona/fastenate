var boxes = document.getElementById('boxes');

window.onload = function() {
  loadBoard('my_boards');
};

function loadBoard(boardName) {
  clearboxes();
  $.getJSON(
    '/api/' + boardName + '.json',
    function makeTheRowsForButt(data) {
      var post = data.data.children;
      makeAllRows(post)
    }
  )
}

function clearboxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function makeAllRows(post) {
  for (var i = 0; i <= post.length; i++) {
    if (i % 2 === 0) {
      makeRow(post, i)
    }
  }
}

function makeRow(post, i) {
  var row = document.createElement('div');
  row.className = 'row data-equalizer';
  row.id = 'row' + i;

  //row = "data-equalizer";
  boxes.appendChild(row);
  var post1 = makePost(post[i], i);
  row.appendChild(post1);
  var post2 = makePost(post[i + 1], i);
  row.appendChild(post2);
}

function makePost(post, i) {
  var post1 = document.createElement('div');
  post1.className = 'post small-12 small-centered medium-6 medium-uncentered large-6 columns';
  post1.id = 'post' + i;

  var panel = document.createElement('div');
  panel.className = 'panel';
  post1.appendChild(panel);

  var title = document.createElement('h2');
  title.id = 'title';
  title.innerHTML = post.data.title;
  panel.appendChild(title);

  var image = document.createElement('img');
  console.log(image);
  image.id = 'pic';
  image.src = post.data.url;
  image.alt = ' ';
  console.log(image.src)
  panel.appendChild(image);


  return post1;
}