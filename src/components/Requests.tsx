import RequestsByStatus from '../components/RequestsByStatus'
import {OrderStatusEnum} from '../gql/graphql'
import {Tabs, TabsHeader, Tab, TabsBody, TabPanel} from '@material-tailwind/react'

function Requests() {
    const statusesToShow = [OrderStatusEnum.Pending, OrderStatusEnum.Accepted]

    return (
        /*
        placeholder fuckery
        https://github.com/creativetimofficial/material-tailwind/issues/528
        */

        // ACTIVE TAB NOT WORKING???
        // https://www.material-tailwind.com/docs/react/tabs
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
                        <RequestsByStatus status={status} />
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}

export default Requests
