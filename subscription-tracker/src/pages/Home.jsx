import Header from "../components/Header"
import TotalCost from "../components/totalCost"
import SubscriptionList from "../components/SubscriptionList"
import AddSubscription from "../components/AddSubscription"


const Home = () => {

  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto px-8 py-8">
        <TotalCost />
        <SubscriptionList  />
        <AddSubscription/>
      </div>
    </>
  )
}
export default Home