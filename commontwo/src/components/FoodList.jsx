import React,{useState, useEffect, lazy, Suspense} from 'react' 
const CardDetails = lazy(()=> import("DetailCardHost/CardDetails"))
const CardShortItem = lazy(()=>import("CardShortHost/CardShort"))

const FoodList = () =>{  
    const [deatilsItem, setDetailsItems] = useState([]) 
    const [shortItems, setShortItems] = useState([]) 
    const [error, setError] = useState(null)

    useEffect(()=>{
     const foodData = async() =>{
        try{
            const response = await fetch("https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating"); 
            const responseData = await response.json()  
            setDetailsItems(responseData.recipes)
            console.log(responseData)
            
        }catch(e){
            setError(e.message)
            console.log(e)
        }
     }
     foodData();
    }, [])

    useEffect(()=>{
        const shortItems = async()=>{
            try{
                const itemFetch = await fetch('https://dummyjson.com/recipes?limit=5&skip=10&select=id,name,image')
                const itemData = await itemFetch.json() 
                setShortItems(itemData.recipes)

            }catch(e){
                setError(error.message)
            }
        }
        shortItems()
    }, [])


    return(
        <div>
          {error && <p>Error:{error}</p>} 

          <div className="detail-list-container">
            <Suspense fallback={<p>Loading...!</p>}>
            {deatilsItem.length && deatilsItem.map((item)=>{
                return <CardDetails key={item.id} data={item}/>
            })}
            </Suspense>
          </div>
          <div className='short-list-container'>
            <Suspense fallback={<p>Loading..!</p>}>
            {shortItems.length && shortItems.map((item)=>{
                return <CardShortItem key={item.id} data={item}/>
            })}
            </Suspense>
          </div>

        </div>
    )
}
export default FoodList; 