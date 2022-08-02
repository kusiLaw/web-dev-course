let speakers = [
  {
    picture: "./images/speaker_02.png",
    name: "Lila Tretiklov",
    work: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    extra: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo."
  },
  {
    picture: "./images/speaker_04.png",
    name: "Kenneth Nii",
    work: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    extra: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo."
  },
  {
    picture: "./images/speaker_05.png",
    name: "Afua Koobi",
    work: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    extra: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo."
  },
  {
    picture: "./images/speaker_06.png",
    name: "Yaw Appesi",
    work: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    extra: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae hic eos molestias unde! Minus rerum voluptates corporis aut recusandae dolores quo quis, officiis,repellat! Molestias, illo."
  }






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
  let ps = createMyElement("p")
  ps.textContent= obj.extra
  let extra = createMyElement('div', 'extra')
  extra.appendChild(ps)

  let p = createMyElement("p")
  p.textContent= obj.work
  let work = createMyElement('div', 'work')
  work.appendChild(p)

  let h3 = createMyElement("h3")
  h3.textContent = obj.name
  let name = createMyElement('div', 'name')
  name.appendChild(h3)

  let about = createMyElement('div', 'about')
  about.appendChild(name)
  about.appendChild(work)

  let lecturerInfo = createMyElement('div', 'lecturer-info')
  lecturerInfo.appendChild(about)
  lecturerInfo.appendChild(extra)


  let Img = createMyElement('img', 'lect-img')
  Img.setAttribute('src', obj.picture);
  Img.setAttribute("alt", obj.name)
  let lectImgWrap = createMyElement('div', 'lect-img-wrap')
  lectImgWrap.appendChild(Img);

  let lecturer = createMyElement('div', 'lecturer')
  lecturer.appendChild(lectImgWrap)
  lecturer.appendChild(lecturerInfo)
  let lecturers = createMyElement('div', 'lecturers')
  lecturers.appendChild(lecturer)

  return lecturers
}

function insertToPage(obj, parent){
  for(let i =0; i< obj.length; i+= 1){
    parent.appendChild(createPopup(obj[i]))
  }
}

let mainspeakers= document.querySelector(".mainSpeakers")
// mainspeakers.appendChild(createPopup(speakers[1]))

let btn = document.querySelector(".more")
btn.addEventListener("click", (event)=>{
  btn.style.display = 'none'; 
  insertToPage(speakers, mainspeakers)
  // event.stopPropagation();
})
