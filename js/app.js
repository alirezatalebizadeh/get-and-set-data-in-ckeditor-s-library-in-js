let setDataBtn = document.querySelector('.btn-set')
let getDataBtn = document.querySelector('.btn-get')
let myEditor = null


ClassicEditor.create(document.querySelector('#editor'), {
    language: 'fa',
})
    .then(editor => {
        console.log('Resolve:', editor)
        myEditor = editor
    })
    .catch(err => console.log('Error:', err))


getDataBtn.addEventListener('click', () => {
    console.log(myEditor.getData());
})


setDataBtn.addEventListener('click', () => {
    myEditor.setData(`<h2>عنوان : راه های مقابله با ترک خودارضایی</h2>
    <p>را های مختلفی وجود داره.</p><ul><li>خود را درگیر کار کردن</li>
    <li>استفاده کمتر از فضای مجازی</li></ul>
    <figure class="table"><table><tbody><tr><td>نام خانوادگی</td>
    <td>نام</td><td>عنوان</td></tr><tr><td>طالبی زاده</td><td>علیرضا</td>
    <td>1</td></tr><tr><td>زارع</td><td>علی</td><td>2</td></tr></tbody></table>
    </figure>`)
})

