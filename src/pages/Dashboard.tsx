import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSackDollar, faStar} from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {UserContext} from '../components/UserContext'
import UserListings from '../components/UserListings'
import Orders from '../components/Orders'
import {Select, Option, Tab, TabPanel, Tabs, TabsBody, TabsHeader} from '@material-tailwind/react'
import {OrderPov, OrderStatusEnum} from '../gql/graphql'

function Dashboard() {
    const {user} = useContext(UserContext)

    // 50 is the default max page size on backend
    const pageSizeOptions = [5, 10, 25, 50]
    const [pageSize, setPageSize] = useState(pageSizeOptions[0])

    const sortOptions = ['Date: Oldest to Newest', 'Date: Newest to Oldest']
    const [sort, setSort] = useState(sortOptions[0])

    const tabs = [
        {value: OrderPov.Seller, label: 'Requests'},
        {value: OrderPov.Buyer, label: 'Orders'},
    ]
    const orderStatuses = [
        {value: OrderStatusEnum.Pending, label: 'Pending'},
        {value: OrderStatusEnum.Accepted, label: 'Accepted'},
        {value: OrderStatusEnum.Completed, label: 'Completed'},
        {value: OrderStatusEnum.Rejected, label: 'Rejected'},
    ]

    const [tabCounts, setTabCounts] = useState({
        [OrderPov.Buyer]: {
            [OrderStatusEnum.Pending]: null,
            [OrderStatusEnum.Accepted]: null,
            [OrderStatusEnum.Completed]: null,
            [OrderStatusEnum.Rejected]: null,
        },
        [OrderPov.Seller]: {
            [OrderStatusEnum.Pending]: null,
            [OrderStatusEnum.Accepted]: null,
            [OrderStatusEnum.Completed]: null,
            [OrderStatusEnum.Rejected]: null,
        },
    })

    function setTabCount(pov: OrderPov, status: OrderStatusEnum, count: number) {
        setTabCounts((prevTabCounts) => ({
            ...prevTabCounts,
            [pov]: {
                ...prevTabCounts[pov],
                [status]: count,
            },
        }))
    }

    return (
        <div>
            <Navbar />
            <div className="flex gap-16 items-center my-16">
                <img
                    src={Profile}
                    className="h-30 w-30"
                />
                <div>
                    <h2>Hello {user?.firstName},</h2>
                    <h4>Welcome back to AdSpot!</h4>
                    <div className="flex gap-16 text-purple text-[25px]">
                        <div className="flex gap-2">
                            <FontAwesomeIcon
                                icon={faStar}
                                size="lg"
                            />
                            <p>You've sold 1 promo</p>
                        </div>
                        <div className="flex gap-2">
                            <FontAwesomeIcon
                                icon={faSackDollar}
                                size="lg"
                            />
                            <p>You've made $10</p>
                        </div>
                    </div>
                </div>
            </div>

            <UserListings />

            <Tabs value={tabs[0].value}>
                <div className="flex mt-4 gap-4">
                    <div className="grow">
                        <TabsHeader placeholder="">
                            {tabs.map(({label, value}) => (
                                <Tab
                                    placeholder=""
                                    key={value}
                                    value={value}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <div className="flex gap-2">
                        <Select
                            placeholder=""
                            label="Select page size"
                            value={pageSize.toString()}
                            onChange={(e) => {
                                if (e) {
                                    setPageSize(parseInt(e))
                                }
                            }}
                        >
                            {pageSizeOptions.map((size) => (
                                <Option
                                    key={size.toString()}
                                    value={size.toString()}
                                >
                                    {size}
                                </Option>
                            ))}
                        </Select>
                        <Select
                            placeholder=""
                            label="Order By"
                            value={sort}
                            onChange={(e) => {
                                if (e) {
                                    setSort(e)
                                }
                            }}
                        >
                            {sortOptions.map((option) => (
                                <Option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <TabsBody placeholder="">
                    {tabs.map(({value: pov}) => (
                        <TabPanel
                            key={pov}
                            value={pov}
                        >
                            <Tabs value={orderStatuses[0].value}>
                                <TabsHeader placeholder="">
                                    {orderStatuses.map(({value: status}) => (
                                        <Tab
                                            placeholder=""
                                            key={status}
                                            value={status}
                                        >
                                            {status}
                                            {tabCounts[pov][status] !== null
                                                ? ` (${tabCounts[pov][status]})`
                                                : ''}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody placeholder="">
                                    {orderStatuses.map(({value: status}) => (
                                        <TabPanel
                                            key={status}
                                            value={status}
                                        >
                                            <Orders
                                                pov={pov}
                                                status={status}
                                                pageSize={pageSize}
                                                sort={sort}
                                                onCountChange={setTabCount}
                                            ></Orders>
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

            <Footer />
        </div>
    )
}

export default Dashboard
