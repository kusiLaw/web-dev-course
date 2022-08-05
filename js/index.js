const speakers = [
  {
    picture: './images/speaker_02.png',
    name: 'Lila Tretiklov',
    work: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    extra: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo.',
  },
  {
    picture: './images/speaker_04.png',
    name: 'Kenneth Nii',
    work: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    extra: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo.',
  },
  {
    picture: './images/speaker_05.png',
    name: 'Lorem Addis',
    work: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    extra: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo.',
  },
  {
    picture: './images/speaker_06.png',
    name: 'Lorem App',
    work: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    extra: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo.',
  },

];

function createMyElement(el, cl = '', ids = '') {
  const doc = document.createElement(el);

  if (ids !== '') {
    doc.id = ids;
  }

  if (cl !== '') {
    doc.className = cl;
  }
  return doc;
}

function createPopup(obj) {
  const ps = createMyElement('p');
  ps.textContent = obj.extra;
  const extra = createMyElement('div', 'extra');
  extra.appendChild(ps);

  const p = createMyElement('p');
  p.textContent = obj.work;
  const work = createMyElement('div', 'work');
  work.appendChild(p);

  const h3 = createMyElement('h3');
  h3.textContent = obj.name;
  const name = createMyElement('div', 'name');
  name.appendChild(h3);

  const about = createMyElement('div', 'about');
  about.appendChild(name);
  about.appendChild(work);

  const lecturerInfo = createMyElement('div', 'lecturer-info');
  lecturerInfo.appendChild(about);
  lecturerInfo.appendChild(extra);

  const Img = createMyElement('img', 'lect-img');
  Img.setAttribute('src', obj.picture);
  Img.setAttribute('alt', obj.name);
  const lectImgWrap = createMyElement('div', 'lect-img-wrap');
  lectImgWrap.appendChild(Img);

  const lecturer = createMyElement('div', 'lecturer');
  lecturer.appendChild(lectImgWrap);
  lecturer.appendChild(lecturerInfo);
  const lecturers = createMyElement('div', 'lecturers');
  lecturers.appendChild(lecturer);

  return lecturers;
}

function insertToPage(obj, parent) {
  for (let i = 0; i < obj.length; i += 1) {
    parent.appendChild(createPopup(obj[i]));
  }
}

let hasPopulate = false;
const mainspeakers = document.querySelector('.lecturers_wrapper');

const btn = document.querySelector('.more');
btn.addEventListener('click', (event) => {
  btn.style.display = 'none';
  insertToPage(speakers, mainspeakers);
  hasPopulate = true;
  event.stopPropagation();
});

window.onload = function name2(event) {
  if (window.innerWidth >= 768) {
    btn.style.display = 'none';
    if (!hasPopulate) {
      insertToPage(speakers, mainspeakers);
      hasPopulate = true;
    }
  }
  event.stopPropagation();
};

window.onresize = function name(event) {
  if (!hasPopulate) {
    btn.style.display = 'none';
    insertToPage(speakers, mainspeakers);
    hasPopulate = true;
  }
  event.stopPropagation();
};