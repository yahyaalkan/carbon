
  window.addEventListener('DOMContentLoaded', _ => {

    async function localization(Language) {
        const response = await fetch('/languages/${language}.json')
        const data = await response.json()
        console.log(data);
        Object.keys(data).forEach(key => {
            if(document.querySelector(`[data-language="${key}"]`)){
            document.querySelector(`[data-language="${key}"]`).innerHTML = data[key]
            }
        })
    }

    document.querySelector('.languages').addEventListener('click',e =>{
        const language= e.target.dataset.use
        localization(language)
    })
    localization('tr')
})

// $(".hover").mouseleave(
//   function () {
//     $(this).removeClass("hover");
//   }
// )