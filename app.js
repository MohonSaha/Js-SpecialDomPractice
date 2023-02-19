// আমরা যেভাবে সি এস এস এর মধ্যে নেস্টেড ক্লাস এবং ট্যাগ নেম দিয়ে সিলেক্ট করতে পারি ঠিক একই ভাবে querySelectorAll ব্যবহার করে আমরা তা করতে পারি। 

/* const classArray = document.querySelectorAll('.my-class h3');
for(const singleClass of classArray){
   singleClass.addEventListener('click', function(){
       console.log('clicked');

   })
}
*/


// এখানে দেখানো হয়েছে যে কিভাবে কোন Existing element এর মাঝে নতুন js দিয়ে  class এড করা যাই। এছাড়া নতুন এড করা কোন element এ কিভাবে নতুন করে class এড করা যাই সেটাও দেখানো হয়েছে। 

/*
let counter = 0;
document.getElementById('flex-me').addEventListener('click', function (e) {
    counter = counter + 1;
    const grandParent = document.getElementById('grand-parent');
    grandParent.classList.add('flex-parent');
    const buttonContainer = document.getElementById('button-vaiya');

    if (counter === 1) {
        const button = document.createElement('button');
        button.classList.add('flex-column-btn');
        button.innerText = "Flex-Column";
        buttonContainer.appendChild(button);
    }
    flexColumn(e);

})

function flexColumn(e) {
    const flexColumnBtn = e.target.parentNode.children[1];
    flexColumnBtn.addEventListener('click', function () {
        const grandParent = document.getElementById('grand-parent');
        grandParent.classList.remove('flex-parent');
    })
}

*/



let counter = 0;
document.getElementById('flex-me').addEventListener('click', function (e) {
    counter = counter + 1;
    const grandParent = document.getElementById('grand-parent');
    grandParent.classList.add('flex-parent');
    const buttonContainer = document.getElementById('button-vaiya');

    if (counter === 1) {
        const button = document.createElement('button');
        button.classList.add('flex-column-btn');
        button.innerText = "Flex-Column";
        buttonContainer.appendChild(button);
    }

    flexColumn(e);

    //এখানে নোড এর concept use করে ঐ click কৃত নোড এ class এড করা হয়েছে।
    const classArray = document.querySelectorAll('.my-class h3');
    for (const singleClass of classArray) {
        singleClass.addEventListener('click', function (e) {
            const userName = e.target;
            userName.classList.add('clicked-color');
            const firstValue = e.target.innerText;
            const secondValue = e.target.parentNode.children[1].innerText;
            const thirdValue = e.target.parentNode.children[2].innerText;

            
    const tableParent = document.getElementById('tabel-container');
    tableParent.innerHTML = `
                    <tr>
                        <td>${firstValue}</td>
                        <td>${secondValue}</td>
                        <td>${thirdValue}</td>
                    </tr>
    `
        })
    }

})

function flexColumn(e) {
    const flexColumnBtn = e.target.parentNode.children[1];
    flexColumnBtn.addEventListener('click', function () {
        const grandParent = document.getElementById('grand-parent');
        grandParent.classList.remove('flex-parent');
    })
}




