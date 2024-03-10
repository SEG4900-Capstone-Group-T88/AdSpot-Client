import Profile from '../images/profile.png'

function RecentPurchases() {
  return (
    <div>
      <h2>Recent purchases</h2>
      <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
        <h3>
          Retweet on X{' '}
          <span className="text-[#777777] font-medium text-[20px]">
            - January 19th 2024 at 2:30PM
          </span>
        </h3>
        <div className="flex gap-36">
          <div className="flex gap-4 items-center">
            <img
              src={Profile}
              className="h-12 w-12"
            />
            <div>
              <h4>Joe Smith - 1 Retweet for $10</h4>
              <p className="text-purple text-[20px]">@joesmith123</p>
            </div>
          </div>
          <p className="text-[20px]">You left Joe Smith a 5 star review</p>
        </div>
      </div>
      <div className="text-center mt-6 mb-12">
        <a className="text-purple underline text-[20px]">View all</a>
      </div>
    </div>
  )
}

export default RecentPurchases
