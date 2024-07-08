import RequestsByStatus from './RequestsByStatus'
import {OrderStatusEnum} from '../gql/graphql'
import {Tabs, TabsHeader, Tab, TabsBody, TabPanel} from '@material-tailwind/react'
import {useState} from 'react'

function Requests() {
    const statusesToShow = [
        OrderStatusEnum.Pending,
        OrderStatusEnum.Accepted,
        OrderStatusEnum.Completed,
        OrderStatusEnum.Rejected,
    ]

    const sortingStrategies = ['Date: Oldest to Newest', 'Date: Newest to Oldest']

    const [sortingStrategy, setSortingStrategy] = useState(sortingStrategies[0])

    return (
        <>
            <div className="flex items-center justify-between">
                <h3>Requests</h3>
                <div>
                    <label>Sort by: </label>
                    <select
                        value={sortingStrategy}
                        onChange={(e) => setSortingStrategy(e.target.value)}
                    >
                        {sortingStrategies.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Tabs value={OrderStatusEnum.Pending}>
                <TabsHeader placeholder="">
                    {statusesToShow.map((status) => (
                        <Tab
                            placeholder=""
                            key={status}
                            value={status}
                        >
                            {status}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody placeholder="">
                    {statusesToShow.map((status) => (
                        <TabPanel
                            key={status}
                            value={status}
                        >
                            <RequestsByStatus
                                status={status}
                                sortingStrategy={sortingStrategy}
                            />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </>
    )
}

export default Requests
