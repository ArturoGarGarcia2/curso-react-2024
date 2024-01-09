// ----- IMPORTS -----
import './App.css';
import Contador from './components/useState/Contador';
import ContadorDoble from './components/useState/ContadorDoble';
import ContadorDobleBest from './components/useState/ContadorDobleBest';
import DarkLightMode from './components/useState/DarkLightMode';

// ----- DECLARACIÓN DE VARIABLES GLOBALES -----


const App = () => {
	// HOOKS

	// DECLARACIÓN DE VARIABLES LOCALES
	// const texto = "ASD";
	// const numero = 5;
	// const array = ['Manzana','Plátano','Pera','Uva','Fresa'];
	// const objeto = {
	// 	nombre: "Arturo",
	// 	edad: 22,
	// }

	// FUNCIONES DE MI COMPONENTE
	// return (
	// 	<>
	// 		<h1>Ejemplo básico JSX</h1>
	// 		<h2>Variables en JSX y objetos</h2>
	// 		<div>
	// 			<h4>La variable texto vale: {texto}</h4>
	// 			<h4>La variable numero vale: {numero}</h4>
	// 			<h4>La variable array vale:</h4>
	// 			<ul>
	// 				{array.map((fruta,index)=>
	// 					<li key={index}>{fruta}</li>
	// 				)}
	// 			</ul>
	// 			<h4>La variable objeto vale:</h4>
	// 				{objeto.nombre} - {objeto.edad}
	// 		</div>
	// 	</>
	// )
	return (
		<DarkLightMode />
	);
}

export default App