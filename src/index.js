window.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('dog-breeds')
    
    function imageRendered(data) {
        const imageList = document.getElementById('dog-image-container')
        for (entry of data['message']){
            let newImg = document.createElement('img')
            newImg.src = entry
            imageList.append(newImg)
        }
    }
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            //imageRendered(data)
        })
    
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            for (breed in data.message){
                indivBreed = document.createElement('li')
                indivBreed.innerText = (breed)
                indivBreed.addEventListener('click', (e) => colorer(e))
                breedList.append(indivBreed)
            }
            //chall3and4()
        })
    
    function colorer(event){
        event.target.style.color = 'blue'
    }
})
