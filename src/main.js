window.onload = () => fetchNews()

function handleNavSectionsClick () {
    const mobileNavIsVisible = getComputedStyle(document.querySelector('nav .mobile')).display === 'none' ? false : true
    const sectionsDropdown = mobileNavIsVisible ? document.querySelector('nav .mobile .sections-dropdown') : document.querySelector('nav .desktop .sections-dropdown')
    if (getComputedStyle(sectionsDropdown).display === 'none') {
        sectionsDropdown.style = ('display: block')
    } else {
        sectionsDropdown.style = ('display: none')
    }
}

function handleNavTogglerClick () {
    const options = document.querySelector('.options')
    if (getComputedStyle(options).display === 'none') {
        options.style = ('display: block')
    } else {
        options.style = ('display: none')
    }
}

function closeAlert () {
    const alert = document.querySelector('.alert')
    alert.style.display = 'none'
}

const limit = 4
let page = 0

async function fetchNews() {
    try {
        const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        const data = await response.json()
        const newArticles = data.articles.slice(page*limit, page*limit+limit)
        const newsContainer = document.querySelector('.news .container')
        newArticles.forEach(article => {
            const newsContent = document.createElement('article')
            const newsPreview = document.createElement('img')
            const newsTitle = document.createElement('a')
            const newsDescription = document.createElement('p')
            newsContent.classList.add('content')
            newsPreview.classList.add('preview')
            newsPreview.src = article.urlToImage
            newsTitle.classList.add('title')
            newsTitle.textContent = article.title
            newsTitle.href = article.url
            newsTitle.target = '_blank'
            newsTitle.rel = 'noopener noreferrer'
            newsDescription.textContent = article.description
            newsDescription.classList.add('description')
            newsContent.appendChild(newsPreview)
            newsContent.appendChild(newsTitle)
            newsContent.appendChild(newsDescription)
            newsContainer.appendChild(newsContent)
        })
        page++
        if (data.articles.slice(page*limit, page*limit+limit).length < 1) {
            const viewMoreButton = document.querySelector('.view-more-button')
            viewMoreButton.style.display = 'none'
        }
    } catch (error) {
        console.log(error)
    }
}

function submitContactForm(event) {
    event.preventDefault()
    const body = document.querySelector('body')
    body.style = ('overflow: hidden')
    const formData = new FormData(document.querySelector('form'))
    const contactFormModalData = document.querySelector('.contact-form-modal .container .data')
    const contactInfo = {
        'First name': formData.get('first-name').trim(),
        'Last name': formData.get('last-name').trim(),
        'Email': formData.get('email').trim(),
        'Phone number': formData.get('phone-number').trim(),
        'Message': formData.get('message').trim(),
        'Send me emails about breaking news and promotions': formData.get('emails-check') === 'on' ? 'Yes' : 'No'
    }
    for (data in contactInfo) {
        const dataTitle = document.createElement('span')
        dataTitle.textContent = data
        const dataContent = document.createElement('section')
        dataContent.textContent = contactInfo[data]
        contactFormModalData.appendChild(dataTitle)
        contactFormModalData.appendChild(dataContent)
    }
    const contactFormModal = document.querySelector('.contact-form-modal')
    contactFormModal.style.display = 'flex'    
    contactFormModal.addEventListener('click', event => {
        if (!event.target.closest('.contact-form-modal .container')) closeModal()
    })
}

function closeModal () {
    document.querySelector('.contact .contact-form-modal .container').scrollTo(0, 0)
    document.querySelector('form').reset()
    const contactFormModal = document.querySelector('.contact-form-modal')
    contactFormModal.style.display = 'none'
    const contactFormModalData = document.querySelector('.contact-form-modal .container .data')
    contactFormModalData.textContent = ''
    const body = document.querySelector('body')
    body.style = ('overflow: auto')
}