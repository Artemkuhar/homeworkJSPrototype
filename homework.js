//ЭО = экземпляр объекта

//Опишите функцию конструктор для создания товаров(GOOD) - свойства - (icon,name, price, quantity)
function GOOD (icon, name, price, quantity){
	this.icon = icon;
	this.name = name;
	this.price = price;
	this.quantity = quantity;
}
var a = 0;
GOOD.prototype.buy = function(){
	this.quantity = this.quantity + 1;
	return; 
	};
GOOD.prototype.sell = function(){
	this.quantity = this.quantity - 1;
	return; 
	};
GOOD.prototype.toString = function(product){
	document.write('<table align="center" width="600px" height="100px" border="1" cellspacing="0"><tbody><tr>');
			for(var key in product){
				if(key == 'buy'||key == 'sell'|| key == 'toString'|| key == 'valueOf'|| key == 'valueOf'|| key == 'getSum'){
					continue;
				}else if(key == 'icon'){

					document.write('<td width="50px">' + product[key] + "  :"  + key+ '</td>');
				}else{
					document.write('<td width="100px">' + product[key] + "  :" + key+   '</td>');
				}
			}


	document.write('</tr></tbody></table>');
	};
GOOD.prototype.valueOf = function(product){
	return 'Price ' +  ' ' + this.price;
	};
GOOD.prototype.getSum = function(obj){
		for(var key in obj){
			if(key == 'price'){
				return +this.price + +obj[key];
			}
		}
	};
var Comp1 = new GOOD('<img src="img/comp.jpg" alt="img" />','Comp','123','4');
var Comp2 = new GOOD('<img src="img/comp.jpg" alt="img" />','Comp','324','2');
var Comp3 = new GOOD('<img src="img/comp.jpg" alt="img" />','Comp','324','2');
var Comp4 = new GOOD('<img src="img/comp.jpg" alt="img" />','Comp','324','1');
// console.log(Comp1.toString(Comp1));
// console.log(Comp1.valueOf(Comp1));
// document.write(Comp1.getSum(Comp2) + ' sum price');


function getSumIllus (obj1, obj2){
	var Cart = {};
	Cart.product1 = obj1.price;
	Cart.product2 = obj2.price;
	Cart.sum = +Cart.product1 + +Cart.product2
	document.write('<div style="  text-align: center;font-size: 50px;color:#fff; width: 300px;height: 200px; background-color: green; " >'+ Cart.sum +'<br>'+ ' sum purchase' +'</div>');

}
function renderShop (obj){
	document.write('<div class="item" style= "text-align: center;">');
	for(var key in obj){
		if(key == 'icon'){
			document.write('<div class="itemIcon">' + obj[key] + '</div>');
		}else if(key == 'name'){
			document.write('<h3 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h3>');
		}else if(key == 'price'){
			document.write('<h4 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h4>');
		}else if(key == 'quantity'){
			document.write('<h4 style="text-align: center;">' +key+ '  :'+ obj[key] + '</h4>');
		}
	}
}	document.write('</div>');

renderShop(Comp1);
renderShop(Comp2);
renderShop(Comp3);
renderShop(Comp4);
getSumIllus(Comp1, Comp2);





//Опишите методы на прототипе buy, sell, toString, valueOf, getSum
//1. Buy - увеличивает quantity на 1
//2. Sell - уменьшает quantity на 1
//3.toString - выводит контретный товар в таблицу в одной строке, в разных ячейках - имя свойства + значение
//4. valueOf - возвращает цену товара.
//5. getSum - вызывается на одном ЭО, как параметр получает другой. Возвращает сумму этих ЭО.
//Создайте 4-5 ЭО.
//Создайте функцию которая будет иллюстрировать действие getSum. (Проявите фантазию, вывод может происходить через другой объект, например Cart(Корзина))
//Создайте ф-цию renderShop - которая выводит все товары, каждый товар в див
/*<div class='item'>
	<div class='itemIcon'>icon</div>
	<h3>name</h3>
	<h4>price</h4>
</div>*/
//




