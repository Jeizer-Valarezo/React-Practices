export const Respuestas = () => {
  return (
    <div>
        <ul>
            <li>Can you use the Hello component more than once in the App component? What happens if you do?</li>
            <p>Se puede reutilizar el componente HelloWorld tantas veces como se quiera, siempre que se renderice dentro de un div</p>
            <li>Can you render the Message component directly within the App component? What happens if you do?</li>
            <p>Es posible renderizar el componente Message directamente en mi app.jsx, pero es recomendable como buena practica solamente renderizar un componente dentro de nuestro root</p>
        </ul>
    </div>
  )
}
