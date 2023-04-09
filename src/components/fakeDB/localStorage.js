export const addTOLocalStorage = id => {
  let carts = {}
  
  const cartsItemsExists = localStorage.getItem("cart-items")

  if (cartsItemsExists) {
    carts = JSON.parse(cartsItemsExists)
  }

  const quantity = carts[id]

  if (quantity) {
    let newQuantity = quantity + 1;
    carts[id] = newQuantity
  } else {
    carts[id] = 1
  }

  localStorage.setItem("cart-items",JSON.stringify(carts))
  
}

export const removeLocalStorageDataByID = id => {
  
}

export const getLocalStorageData = () => {
  const getData = localStorage.getItem("cart-items" || [])
  return JSON.parse(getData)
}