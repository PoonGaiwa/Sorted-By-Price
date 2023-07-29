/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-28 23:27:33
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-29 17:12:06
 * @FilePath: \html\work\js\day27\Sort_By_Price\js\Sort_By_Price.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let data = [
  {
    desc: '粉色玫瑰浪漫系列',
    price: '16',
    picSrc: './img/1.jpg',
    picWidth: '625',
    picHeight: '500',
  },
  {
    desc: '蓝色玫瑰浪漫系列',
    price: '21',
    picSrc: './img/2.jpg',
    picWidth: '1000',
    picHeight: '800',
  },
  {
    desc: '紫色玫瑰浪漫系列',
    price: '10',
    picSrc: './img/3.jpg',
    picWidth: '1000',
    picHeight: '800',
  },
  {
    desc: '白色玫瑰浪漫系列',
    price: '52',
    picSrc: './img/4.jpg',
    picWidth: '625',
    picHeight: '500',
  },
  {
    desc: '彩白色玫瑰浪漫系列',
    price: '42',
    picSrc: './img/5.jpg',
    picWidth: '1000',
    picHeight: '800',
  },
  {
    desc: '红色玫瑰浪漫系列',
    price: '52',
    picSrc: './img/6.jpg',
    picWidth: '625',
    picHeight: '500',
  },
  {
    desc: '绿白色玫瑰浪漫系列',
    price: '135',
    picSrc: './img/7.jpg',
    picWidth: '391',
    picHeight: '313',
  },
  {
    desc: '黄色玫瑰浪漫系列',
    price: '135',
    picSrc: './img/8.jpg',
    picWidth: '2500',
    picHeight: '2500',
  }
];
let oUl = document.querySelector('.goods');
init(oUl,dataFormatting(data));
let aLi = oUl.children;
let aLiLength = aLi.length;
let oBtn = document.querySelector('.btn-list');
let sortArr = [];

oBtn.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() === 'button'){
    let fragment = document.createDocumentFragment();
    if (e.target.className === 'asce'){
      sortArr = sort(cloneNode(aLi),'asce');
    } else if (e.target.className === 'desc'){
      sortArr = sort(cloneNode(aLi),'asce').reverse();
    } else {
      sortArr = sort(cloneNode(aLi),'random');
    }
    for (let i = 0; i < aLiLength; i++){
      fragment.appendChild(sortArr[i]);
    }
    oUl.appendChild(fragment);
  }
},false);
function init(parent, htmlStr){
  parent.innerHTML += htmlStr;
}
function dataFormatting(data){
  return data.reduce(function(acc,curr){
    acc += `<li>
              <img src="${curr.picSrc}" width="${curr.picWidth}" height="${curr.picHeight}" alt="!">
              <p>${curr.desc}</p>
              <span>${curr.price}$</span>
            </li>`;
    return acc;
  },'');
}
// Bubble sort
function sort(arr, sort_kind){
  let temp, price_prev, price_next;
  for (let i = 0; i < aLiLength; i++){
    for(let j = 0; j < aLiLength-1-i; j++){
      if (sort_kind === 'random'){
        price_prev = parseInt(arr[j].getAttribute('data-index'));
        price_next = parseInt(arr[j+1].getAttribute('data-index'));  
      } else {
        price_prev = parseInt(arr[j].children[2].innerText);
        price_next = parseInt(arr[j+1].children[2].innerText);
      }
      if (price_prev > price_next){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
function cloneNode(nodeList) {
  let newArr = [];
  for (let i = 0; i < aLiLength; i++){
    newArr[i] =  nodeList[i];
    newArr[i].setAttribute('data-index',Math.floor(Math.random(0,aLiLength)*10));
  }
  return newArr;
}
