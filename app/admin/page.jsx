"use client";

import CountMeter from './components/CountMeter';
import RevenueChart from './components/RevenueChart';
import OrdersChart from './components/OrdersChart';
import { useOrdersCountsByTotalDays } from '@/lib/firestore/orders/read_count';
import { useEffect, useState } from 'react';
import RecentOrder from './components/RecentOrder';
import { AuthContextProvider } from '@/context/AuthContext';

const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$235', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', amount: '$150', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$399', status: 'Shipped' },
    { id: '#1237', customer: 'Mike Johnson', amount: '$399', status: 'Cancelled' },
];


export default function Dashboard() {
    const [dates, setDates] = useState([]);
    useEffect(() => {
        let list = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            list.push(date);
        }
        setDates(list);
    }, []);

    const { data } = useOrdersCountsByTotalDays({ dates: dates });

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <div>
                <div className="px-4 py-6 sm:px-6 lg:px-8">

                    <CountMeter />
                    <div className=' flex gap-5 flex-col md:flex-row mb-6'>
                        <RevenueChart items={data} />
                        <OrdersChart items={data} />
                    </div>

                    <RecentOrder />

                </div >
            </div >
        </div >
    );
}