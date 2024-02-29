import useFetch from "../../firebase/useFetch"

const ShopSection = () => {

    const { data, error, loading } = useFetch()

  return (

    <section className="h-screen pt-[100px]">

        {error && <p>Something went wrong! {error.message}</p>}

        {loading && <p>Loading...</p>}

        {data && data.map( (x) => {

            return (
                // return ShoppingItem/
                <div key={x.id}>
                    <p>{x.brand}</p>
                </div>
            )
        })}

    </section>
  )
}

export default ShopSection