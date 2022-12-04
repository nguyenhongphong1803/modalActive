// const template = `<div class="wrapper">
// <div id="modal" >
//     <i class="ti-close icon" ></i>
//     <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         Eos, non reprehenderit? Delectus eligendi reiciendis id voluptatum laboriosam 
//         autem vero recusandae debitis, labore quam non consequuntur a nisi obcaecati quia 
//         exercitationem?
//     </p>
//     <div class="btnParent">
//         <button class="btn confirm">Confirm</button>
//         <button class="btn">Cancel</button>
//     </div>
    
// </div>

// </div>`

// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin',template)




// const wrapper = document.querySelector(".wrapper")
// function animate() {
//     setTimeout(()=>{
//         wrapper.classList.add('show')
//     },3000)
// }

// animate()

const body = document.querySelector('body');
const wrapper = document.createElement('div')
// wrapper.setAttribute
wrapper.classList.add('wrapper')
body.appendChild(wrapper)
wrapper.appendChild(document.createElement('div'))
wrapper.firstChild.setAttribute('id', 'modal')
const icon = document.createElement('i')
const modal = document.getElementById('modal')
modal.appendChild(icon)
icon.setAttribute('class','ti-close icon')

const para = document.createElement('p')
modal.appendChild(para);
para.setAttribute('class','para')
para.textContent= `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eos, non reprehenderit? Delectus eligendi reiciendis id voluptatum laboriosam 
        autem vero recusandae debitis, labore quam non consequuntur a nisi obcaecati quia 
        exercitationem?`
const btnParent = document.createElement('div')
modal.appendChild(btnParent)
btnParent.setAttribute('class', 'btnParent');
const btnconfirm = document.createElement('button');
btnParent.appendChild(btnconfirm)

btnconfirm.setAttribute('class', 'btn confirm')
btnconfirm.textContent ='Confirm'
const btnCancel =document.createElement('button')
btnParent.appendChild(btnCancel);
btnCancel.classList.add('btn')
btnCancel.textContent= 'Cancel'

function animate() {
    setTimeout(()=>{
        wrapper.classList.add('show')
    },3000)
}

animate()
