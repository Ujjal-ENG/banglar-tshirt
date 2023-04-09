export const loadersData = async () => {
  const fetchURL = await fetch("data.json")
  const data = await fetchURL.json()
  const getLocalStorageData = JSON.parse(localStorage.getItem("cart-items"))
  let cartData = []
  for (let i in getLocalStorageData) {
    const findData = data.find((el) =>
      el._id === i)
    cartData.push(findData)
  }
  console.log(cartData)
  return [data, cartData]
}