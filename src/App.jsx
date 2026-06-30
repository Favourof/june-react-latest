import About from "./About"
import { CustomButton } from "./Components/CustomButton"



function App() {
  // const name = "flutter"


  const product = {
    title: "Book",
    price: 5000,
    currency: "USD",
    description: "This is a book made by flutter"
  }

  const products = [
    {
      title: "Pencil",
      price: 5000,
      currency: "USD",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde quaerat placeat vero corporis culpa ut neque repellendus laborum sunt. Unde reiciendis quo eius impedit dicta culpa accusamus fugit eos!"
    },
    {
      title: "Biro",
      price: 5000,
      currency: "USD",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde quaerat placeat vero corporis culpa ut neque repellendus laborum sunt. Unde reiciendis quo eius impedit dicta culpa accusamus fugit eos!"
    },
    {
      title: "Eraser",
      price: 5000,
      currency: "USD",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde quaerat placeat vero corporis culpa ut neque repellendus laborum sunt. Unde reiciendis quo eius impedit dicta culpa accusamus fugit eos!"
    }

  ]

  return (

    <div>
      <About />
      <CustomButton bg="bg-yellow-400" />
      <p>My name is {name}</p>
      <h1>Product</h1>
      <div>
        <h1>{product.title}</h1>
        <p>{product.currency === "USD" ? "$" : "#"} {product.price}</p>
        <p>{product.description}</p>
      </div><br /><br /><br />

      <h1>All products</h1>
      <div>
        {
          products.map((pro, i) => (
            <ul className="border-2 border-amber-400  mb-2 w-[40%]" key={i}>
              <li >{pro.title}</li>
              <li > {pro.currency} {pro.price}</li>
              <li>{pro.description}</li>
            </ul>
          ))
        }
      </div>
      <CustomButton text="Log Out" color="blue" bg="bg-red-400" customEvents={() => alert("Hello from custom Event")} />
    </div>
  )
}

export default App
