//Array Principal

const productos = [
	//COMIDAS Y BEBIDAS

	{
		id: "cocina economica las Marias",
		negocio: "Cocina Economica LAS MARIAS",
		horario: "Lun-Vie 9am-5pm",
		titulo: "Cocina económica donde podras encontrar desayunos con huevo al gusto, gorditas, burritos, enchiladas verdes y rojas, caldo de res, albóndigas, chiles rellenos, distintas bebidas y algunos complementos como arroz y spaghetti entre otras cosas mas, visita nuestro sitio oficial y haz tu pedido. Contamos con servicio de entrega a domicilio o para comer en el local.", /*este titulo se va a ver en el dom*/
		link:"https://jfraire23.github.io/cocina-economica-las-marias/",
		imagen: "no-image.jpeg", /*ruta de la imagen*/
		platillo1: "enchiladas poblanas",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "COMIDAS Y BEBIDAS",
			id: "comidas-y-bebidas"	
		},
		precio: 46.00
	},

	{
		id: "MODELORAMA MOLOCH",
		negocio: "Modelorama MOLOCH A.C.",
		horario: "Lun-Sab 11am-10pm, Dom 11am-6pm",
		titulo: "Modelorama Moloch donde podrás encontrar la cerveza más fría de las diferentes marcas de grupo Modelo además contamos con botanas de Sabritas, Barcel, Galletas Gamesa, refrescos de Coca-Cola, también tenemos una gran variedad de sueros Electrolit y Suerox, bebidas energizantes y micheladas, entre muchos productos más, podemos hacer él envió a tu domicilio, recuerda que pagas al recibir.", /*este titulo se va a ver en el dom*/
		link:"",
		imagen: "logo-moloch2.jpg", /*ruta de la imagen*/
		platillo1: "enchiladas poblanas",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "COMIDAS Y BEBIDAS",
			id: "comidas-y-bebidas"	
		},
		precio: 46.00
	},

	{
		id: "Café Bar Cielito Lindo",
		negocio: "Cielito Lindo: Café-Bar",
		horario: "PROXIMAMENTE",
		titulo: "Ven o pide para llevar un buen café con alguno de los distintos postres que tenemos para ti, tambien contamos con desayunos de huevos al gusto acompañados de chilaquiles y frijoles refritos con queso, gran variedad de Waffles con distintos toppings, también podras encontrar variedad de tés, frappes y bebidas frías. Contamos con servicio a domicilio o para comer en el local.", /*este titulo se va a ver en el dom*/
		link:"",
		imagen: "logo-cielito-lindo.jpg", /*ruta de la imagen*/
		platillo1: "enchiladas poblanas",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "COMIDAS Y BEBIDAS",
			id: "comidas-y-bebidas"	
		},
		precio: 46.00
	},
	
	//ENLATADOS
		

	//LACTEOS
	{
		id: "DANNY´S PIZZA",
		negocio: "DANNY´S PIZZA",
		horario: "PROXIMAMENTE",
		titulo: "", /*este titulo se va a ver en el dom*/
		link:"",
		imagen: "LOGO-DANNYS.jpg", /*ruta de la imagen*/
		platillo1: "pizzas",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "COMIDAS Y BEBIDAS",
			id: "comidas-y-bebidas"	
		},
		precio: 46.00
	},

		{
		id: "cafetería EL JEFE",
		negocio: "cafetería EL JEFE",
		horario: "PROXIMAMENTE",
		titulo: "", /*este titulo se va a ver en el dom*/
		link:"",
		imagen: "proximamente.png", /*ruta de la imagen*/
		platillo1: "enchiladas poblanas",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "COMIDAS Y BEBIDAS",
			id: "comidas-y-bebidas"	
		},
		precio: 46.00
	},
	

];

const contenedorImagenes = document.querySelector("#contenedor-imagenes");//imagenes=productos
const botonesCategorias = document.querySelectorAll(".boton-clases");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");
//let barraBusqueda = document.querySelector("#buscador");

function cargarProductos(productosElegidos) {

	contenedorImagenes.innerHTML = "";

	productosElegidos.forEach(producto => {
		const div = document.createElement("div");
		div.classList.add("producto");
		div.innerHTML = `


			<div class="producto">
				<div class="producto-detalles">

					<div class="imagen">

						<img src="${producto.imagen}">
					</div>
					<p class="titulo-negocio">${producto.negocio}</p>
						<p class="horario-negocio">${producto.horario}</p>
					<div class="descripcion">				
						<p>${producto.titulo}</p>
						
						
					</div>
					

					<div class="agregar-carrito">
						<a href="${producto.link}" target="BLANK"
						<button class="boton-agregar">Visitar Negocio</button>
						</a>
					</div>
					
				</div>
				
			</div>
				
		`;
		contenedorImagenes.append(div);



	})

	

} 

/*function buscarArticulos() {
	buscador.addEventListener("input", e => {
		const inputText = e.target.value.toLowerCase().trim();
		console.log(inputText);
		
		const mostrarFiltrado = productos.filter(producto => 
			producto.titulo.toLowerCase().startsWith(inputText)||
			producto.platillo1.toLowerCase().startsWith(inputText)||
			producto.negocio.toLowerCase().startsWith(inputText)||
			producto.marca.toLowerCase().startsWith(inputText)||
			producto.contenido.toLowerCase().startsWith(inputText)||
			producto.precio.toString().startsWith(inputText)
			)
			;

		
		cargarProductos(mostrarFiltrado)
	})

}
*/
cargarProductos(productos);
//buscarArticulos();

botonesCategorias.forEach(boton => {
	boton.addEventListener("click", (e) => {

		botonesCategorias.forEach(boton => {
			boton.classList.remove("active")
		})
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id !=  "todos") {
			const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

			tituloPrincipal.innerText = productoCategoria.categoria.nombre;
			const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);


		cargarProductos(productosBoton);
		} else {
			tituloPrincipal.innerText = "Todos Los Negocios";
			cargarProductos(productos);
		}
	})
});




 






