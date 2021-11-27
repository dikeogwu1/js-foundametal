const items = [
  {
    id: 1,
    img: `https://images.unsplash.com/photo-1569183091671-696402586b9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60`,
    title: `leatest iphone`,
    amout: `$100`,
    category: `phone`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 2,
    img: `https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    title: `beautifull clothing`,
    amout: `$20`,
    category: `fashions`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 3,
    img: `https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    title: `awesome cat`,
    amout: `$200`,
    category: `animals`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 4,
    img: `https://images.unsplash.com/photo-1571951103752-53c15cad28e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    title: `elehandro city`,
    amout: `$300`,
    category: `cities`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 5,
    img: `https://media.istockphoto.com/photos/self-management-is-a-freelancers-greatest-tool-picture-id1294442411?b=1&k=20&m=1294442411&s=170667a&w=0&h=DzebibUiw8fb056LdMdG5oKURp9LJHfohv_nSG1d764=`,
    title: `hollyhood actor`,
    amout: `$500`,
    category: `people`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 6,
    img: `https://images.unsplash.com/photo-1615917124838-1af8a2aaae09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVhbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    title: `delicious lunch`,
    amout: `$11.70`,
    category: `meals`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },

  {
    id: 7,
    img: `https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdGllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    title: `tom podmore city`,
    amout: `$500`,
    category: `cities`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad!`,
  },
]

// selecting the dom element
const btnContainer = document.querySelector('.btn-container')
const wrapper = document.querySelector('.wrapper')

// ALL FUNCTIONS ARE HERE

window.addEventListener('DOMContentLoaded', () => {
  display(items)
  const getButton = items.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category)
      }
      return acc
    },
    ['all']
  )

  const setButton = getButton
    .map((button) => {
      return `<button class="phone" data-id=${button}>${button}</button>`
    })
    .join('')
  btnContainer.innerHTML = setButton
  const myBtn = document.querySelectorAll('.phone')
  myBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const categories = e.currentTarget.dataset.id

      const fill = items.filter((item) => {
        return item.category == categories
      })
      if (categories === 'all') {
        return display(items)
      }
      return display(fill)
    })
  })
})

// display function
const display = (show) => {
  const person = show.map((item) => {
    const { id, img, title, amout, category, desc } = item
    return `<div class="item-box">
        <div class="image">
          <img
            src=${img}
            alt="photo"
          />
        </div>
        <div class="desc-box">
          <h3>${title} <span id="amout">${amout}</span></h3>
          <p>
            ${desc}
          </p>
        </div>
      </div>`
  })
  const fullPerson = person.join('')
  wrapper.innerHTML = fullPerson
}
