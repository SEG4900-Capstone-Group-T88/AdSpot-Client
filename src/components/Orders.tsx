import {OrderStatusEnum} from '../gql/graphql'
import {Tabs, TabsHeader, Tab, TabsBody, TabPanel} from '@material-tailwind/react'
import OrdersByStatus from './OrdersByStatus'

function Orders() {
    const statusesToShow = [OrderStatusEnum.Pending, OrderStatusEnum.Accepted]

    return (
        /*
        placeholder fuckery
        https://github.com/creativetimofficial/material-tailwind/issues/528
        */

        // ACTIVE TAB NOT WORKING???
        // https://www.material-tailwind.com/docs/react/tabs
        <Tabs value={OrderStatusEnum.Accepted}>
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
                        <OrdersByStatus status={status} />
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}

export default Orders
